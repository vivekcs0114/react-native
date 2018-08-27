import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, Platform, Alert } from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
import CountryPicker from 'react-native-country-picker-modal';
import ThankYouPage from '../user/ThankYouPage';
import { XAUTHY_API_KEY } from '../constants/Constants';
import { styles } from './VerificationCss';

const MAX_LENGTH_CODE = 6;
const countryPickerCustomStyles = {};
const brandColor = '#744BAC';

export default class MobileVerification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
      spinner: false,
      isVerified: false,
      country: {
        cca2: 'US',
        callingCode: '1'
      }
    };
  }

  _getCode = () => {
    this.setState({ spinner: true });
    setTimeout(async () => {
      try {
        let data = JSON.stringify({
          api_key: XAUTHY_API_KEY,
          via: "sms",
          phone_number:this.refs.form.getValues().phoneNumber,
          country_code:this.state.country.callingCode
        })
        const res = await axios.post('https://api.authy.com/protected/json/phones/verification/start',
          data, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (res.err) throw res.err;
        this.setState({
          spinner: false,
          enterCode: true,
          verification: res.body
        });
        this.refs.form.refs.textInput.setNativeProps({ text: '' });
        setTimeout(() => {
          Alert.alert('Sent!', "We've sent you a verification code", [{
            text: 'OK',
            onPress: () => this.refs.form.refs.textInput.focus()
          }]);
        }, 100);
      } catch (err) {
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }
    }, 100);
  }

  _verifyCode = () => {
    this.setState({ spinner: true });
    setTimeout(async () => {
      try {
        let config = {
          headers: {
            "X-Authy-API-Key": XAUTHY_API_KEY
          },
          params: {
            phone_number: this.refs.form.getValues().phoneNumber,
            country_code: this.state.country.callingCode,
            verification_code: this.refs.form.getValues().code
          }
        }
        const res = await axios.get('https://api.authy.com/protected/json/phones/verification/check',
         config);
        if (res.err) throw res.err;
        this.refs.form.refs.textInput.blur();
        this.setState({ spinner: false , isVerified: true});
        setTimeout(() => {
          Alert.alert('Success!', 'You have successfully verified your phone number');
        }, 100);
      } catch (err) {
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }
    }, 100);
  }

  _onChangeText = (val) => {
    if (!this.state.enterCode) return;
    if (val.length === MAX_LENGTH_CODE)
    this._verifyCode();
  }

  _tryAgain = () => {
    this.refs.form.refs.textInput.setNativeProps({ text: '' })
    this.refs.form.refs.textInput.focus();
    this.setState({ enterCode: false });
  }

  _getSubmitAction = () => {
    this.state.enterCode ? this._verifyCode() : this._getCode();
  }

  _changeCountry = (country) => {
    this.setState({ country });
    this.refs.form.refs.textInput.focus();
  }

  _renderFooter = () => {
    if (this.state.enterCode)
      return (
        <View>
          <Text style={styles.wrongNumberText} onPress={this._tryAgain}>
            Enter the wrong number or need a new code?
          </Text>
        </View>
      );
    return (
      <View>
        <Text style={styles.disclaimerText}>By tapping "Send confirmation code" above, we will send you an SMS to confirm your phone number. Message &amp; data rates may apply.</Text>
      </View>
    );
  }

  _renderCountryPicker = () => {
    if (this.state.enterCode)
      return (
        <View />
      );
    return (
      <CountryPicker
        ref={'countryPicker'}
        closeable
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation='eng'/>
    );
  }

  _renderCallingCode = () => {
    if (this.state.enterCode)
      return (
        <View />
      );
    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );
  }

  render() {
    let headerText = `What's your ${this.state.enterCode ? 'verification code' : 'phone number'}?`
    let buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Send confirmation code';
    let textStyle = this.state.enterCode ? {
      height: 50,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
    } : {};
    return (
      <View style={styles.container}>
      {this.state.isVerified ? <ThankYouPage /> :
      <View>
        <Text style={styles.header}>Welcome, {this.props.user}</Text>
        <Text style={styles.header}>{headerText}</Text>
        <Form ref={'form'} style={styles.form}>
          <View style={{ flexDirection: 'row' }}>
            {this._renderCountryPicker()}
            {this._renderCallingCode()}
            <TextInput
              ref={'textInput'}
              name={this.state.enterCode ? 'code' : 'phoneNumber' }
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this._onChangeText}
              placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Phone Number'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={[ styles.textInput, textStyle ]}
              returnKeyType='go'
              autoFocus
              placeholderTextColor={brandColor}
              selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 20}
              onSubmitEditing={this._getSubmitAction} />
          </View>
          <TouchableOpacity style={styles.button} onPress={this._getSubmitAction}>
            <Text style={styles.buttonText}>{ buttonText }</Text>
          </TouchableOpacity>
          {this._renderFooter()}
        </Form>
        <Spinner
          visible={this.state.spinner}
          textContent={'One moment...'}
          textStyle={{ color: '#fff' }} />
        </View>
      }
      </View>
    );
  }
}