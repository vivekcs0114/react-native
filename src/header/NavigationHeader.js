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
			title: 'login'
		} 
	},
	Dashboard : { 
		screen : Dashboard ,
		navigationOptions : ({ navigation }) => ({
			title: 'Welcome '+navigation.state.params.email,
			fontSize: 40
		})
	},
	NewUser : { 
		screen : NewUser,
		navigationOptions: {
			title: 'signup'
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