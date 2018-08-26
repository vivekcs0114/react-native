import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import firebase from 'firebase';

export default class PhoneAuthTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    };
  }

  signIn = () => {
    try {
      firebase.auth().verifyPhoneNumber(this.state.phoneNumber)
        .then(function (result) {
          console.log(result);
      })
    } catch(error) {
          console.log(error);
    }
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 25 }}>
          <Text>Enter phone number:</Text>
          <TextInput
            autoFocus
            style={{ height: 40, marginTop: 15, marginBottom: 15 }}
            onChangeText={value => this.setState({ phoneNumber: value })}
            placeholder={'Phone number ... '}
            value={this.state.phoneNumber}
          />
          <Button title="Sign In" color="green" onPress={this.signIn} />
        </View>
      </View>
    );
  }
}