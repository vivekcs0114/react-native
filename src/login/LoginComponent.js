import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Expo from 'expo';
import MobileVerification from './MobileVerification';
import { G_CLIENT_ID } from '../constants/Constants';

export default class LoginComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
			signedIn: false
        }
	}
	signInWithGoogleAsync = async () => {
		try {
			const result = await Expo.Google.logInAsync({
			androidClientId: G_CLIENT_ID,
			scopes: ['profile', 'email'],
		});
		if (result.type === 'success') {
			this.setState({
				signedIn: true,
				email: result.user.name
			});
			console.log('success');
		} else {
			console.log("cancelled");
		}
		} catch(e) {
			console.log("Error", e);
		}
	}
    render() {
        return (
			<ScrollView>
                { this.state.signedIn ? <MobileVerification user={this.state.email}/> :
                <View style={{ margin:80 }}>
				<Button
                    color="#ffffff"
					backgroundColor="blue"
					small
					title='Signin with Google'
					onPress={this.signInWithGoogleAsync} />
                </View> }
			</ScrollView>
        )
    }
}