import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class LoginPage extends Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
			isValid: true
        }
	}
    login = () => {
		if(this.state.email === '' || 
			this.state.password === '') {
			this.setState({
				isValid: false
			})
		} else if(this.state.email === this.state.password) {
			this.props.navigation.navigate('Dashboard', this.state);
		} else {
			alert('user name and password must be same');
		}
    }
    render() {
        return (
			<ScrollView>
				<FormLabel>User Name</FormLabel>
				<FormInput onChangeText={(email) => this.setState({email})}/>
				<FormValidationMessage>{(this.state.isValid || this.state.email) ? '' : 'email is required'}</FormValidationMessage>
				<FormLabel>Password</FormLabel>
				<FormInput secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
				<FormValidationMessage>{(this.state.isValid || this.state.password) ? '' : 'password is required'}</FormValidationMessage>
				<Button
					color="#ffffff"
					backgroundColor="blue"
					small
					title='Login'
					onPress={this.login} />
			</ScrollView>
        )
    }
}