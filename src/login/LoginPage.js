import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class LoginPage extends Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
	}
    login = () => {
    	this.props.navigation.navigate('Dashboard', this.state);
    }
    render() {
        return (
			<ScrollView>
				<FormLabel>User Name</FormLabel>
				<FormInput onChangeText={(email) => this.setState({email})}/>
				<FormValidationMessage>{this.state.email ? '' : 'email is required'}</FormValidationMessage>
				<FormLabel>Password</FormLabel>
				<FormInput onChangeText={(password) => this.setState({password})}/>
				<FormValidationMessage>{this.state.password ? '' : 'password is required'}</FormValidationMessage>
				<Button
					small
					title='Submit'
					onPress={this.login} />
			</ScrollView>
        )
    }
}