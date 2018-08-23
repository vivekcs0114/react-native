import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import LoginPage from '../login/LoginPage';
import NewUser from '../signup/NewUser';
import Dashboard from '../dashboard/Dashboard'

export const Arrow = createStackNavigator({
	LoginPage : { 
		screen : LoginPage,
		navigationOptions: {
			title: 'login',
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#1d7110'
			},
			headerTitleStyle: {
				fontSize: 18,
			}
		} 
	},
	Dashboard : { 
		screen : Dashboard ,
		navigationOptions : ({ navigation }) => ({
			title: 'Welcome '+navigation.state.params.email,
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#1d7110'
			},
			headerTitleStyle: {
				fontSize: 18,
			}
		})
	},
	NewUser : { 
		screen : NewUser,
		navigationOptions: {
			title: 'signup',
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#1d7110'
			},
			headerTitleStyle: {
				fontSize: 18,
			}
		} 
	},
});

export const Tabs = createBottomTabNavigator({
	LoginPage : { 
		screen : Arrow,
		navigationOptions : {
			tabBarLabel: 'Login',
			tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
			tabBarOptions: { activeTintColor:'blue', }
		},
	},
	NewUser : { 
		screen : NewUser,
		navigationOptions : {
			tabBarLabel : 'Signup',
			tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
			tabBarOptions: { activeTintColor:'blue', }
		},
	}
});