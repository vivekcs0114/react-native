import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';


export default class NewUser extends React.Component {
  constructor(props) {
  super();
  this.state = {
      name: '',
      email: '',
      password: '',
      isValid: true
    }
  }

  submit = () => {
    if(this.state.name === '' || 
      this.state.email === '' || 
      this.state.password === '') {
      this.setState({
          isValid: false
      })
    } else {
      this.props.navigation.navigate('LoginPage');
    }
  }

  render() {
    return (
      <ScrollView>
        <Text style = {styles.heading}>create an account</Text>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={(name) => this.setState({name})}/>
        <FormValidationMessage>{(this.state.isValid || this.state.name) ? '' : 'name is required'}</FormValidationMessage>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(email) => this.setState({email})}/>
        <FormValidationMessage>{(this.state.isValid || this.state.email) ? '' : 'email is required'}</FormValidationMessage>
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
        <FormValidationMessage>{(this.state.isValid || this.state.password) ? '' : 'password is required'}</FormValidationMessage>
        <Button
          color="#ffffff"
          backgroundColor="blue"
          small
          title='Submit'
          onPress={this.submit} />
      </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
})