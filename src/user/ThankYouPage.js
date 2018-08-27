import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ThankYouPage extends Component {
    render() {
        return (
            <View style={{ margin:80 }}>
                <Text style={styles.header}>Thank you, you are done!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
      textAlign: 'center',
      marginTop: 60,
      fontSize: 22,
      margin: 20,
      color: '#4A4A4A',
    }
  });