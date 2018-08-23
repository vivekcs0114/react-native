import React from 'react';
import { ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';


export default class NewUser extends React.Component {
  constructor(props) {
  super();
  this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  submit = () => {
    this.props.navigation.navigate('LoginPage');
  }

  render() {
    return (
      <ScrollView>
        <Text h3>create an account</Text>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={(name) => this.setState({name})}/>
        <FormValidationMessage>{this.state.name ? '' : 'name is required'}</FormValidationMessage>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(email) => this.setState({email})}/>
        <FormValidationMessage>{this.state.email ? '' : 'email is required'}</FormValidationMessage>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(password) => this.setState({password})}/>
        <FormValidationMessage>{this.state.password ? '' : 'password is required'}</FormValidationMessage>
        <Button
          small
          title='Submit'
          onPress={this.submit} />
      </ScrollView> 
    );
  }
}