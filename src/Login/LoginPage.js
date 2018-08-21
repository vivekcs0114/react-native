import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class LoginPage extends Component {

    state = {
        username: '',
        password: '',
    }

    userLogin = () => {
      
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
				<Text 
					style={{fontSize: 27}}>
					Login
				</Text>
				<TextInput
					placeholder='Username' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
				/>
				<TextInput 
					placeholder='Password' 
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
				/>
				<View style={{margin:7}} />
				<Button onPress={() => this.userLogin} title="Submit" />
	      </ScrollView>
        )
    }
}