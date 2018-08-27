import { StyleSheet } from 'react-native';

const brandColor = '#744BAC';
export const styles = StyleSheet.create({
    countryPicker: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      flex: 1
    },
    header: {
      textAlign: 'center',
      marginTop: 60,
      fontSize: 22,
      margin: 20,
      color: '#4A4A4A',
    },
    form: {
      margin: 20
    },
    textInput: {
      padding: 0,
      margin: 0,
      flex: 1,
      fontSize: 20,
      color: brandColor
    },
    button: {
      marginTop: 20,
      height: 50,
      backgroundColor: brandColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    },
    wrongNumberText: {
      margin: 10,
      fontSize: 14,
      textAlign: 'center'
    },
    disclaimerText: {
      marginTop: 30,
      fontSize: 12,
      color: 'grey'
    },
    callingCodeView: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    callingCodeText: {
      fontSize: 20,
      color: brandColor,
      fontWeight: 'bold',
      paddingRight: 10
    }
});