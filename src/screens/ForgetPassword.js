import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import React, {useState} from 'react';
import TextField from '../component/TextField';
import axios from 'axios';

import {useNavigation} from '@react-navigation/native';

const ForgetPassword = ({navigation}) => {
  const {userType} = {userType: '2'};

  const [email, setEmail] = useState(''); // Initialize email state

  const handleBack = () => {
    // Handle the press event here
    console.log('Back Pressed!');
    navigation.goBack();
  };

  const handleSendCode = async () => {
    // ... your code ...
    console.log('send code pressed.');
    console.log('Email id is: ' + email);
    console.log(`User type: ${userType}`);
    const postData = new FormData();
    postData.append('email', email);
    postData.append('role_id', userType);

    await axios
      .post(
        'https://teachme-backend-dev.kiwi-internal.com/api/v1/auth/forgot-password',
        postData,
      )
      .then(response => {
        console.log('Response:', response.data);
        // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  return (
    <View style={{margin: 30}}>
      <TouchableOpacity
        onPress={handleBack}
        style={{width: 50, marginBottom: 50, marginTop: 10}}>
        <Image source={require('../assets/image/path.png')} />
      </TouchableOpacity>
      <Text style={{fontSize: 40, fontWeight: '700'}}>Forgot Password?</Text>
      <Text>
        Enter your registered email address and we'll send a code to reset your
        password.
      </Text>
      <TextField
        style={{
          backgroundColor: 'white',
          height: 50,
          borderRadius: 6,
          paddingLeft: 10,
        }}
        placeholder="Enter email"
        placeholderTextColor={'gray'}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={handleSendCode}>
        <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            backgroundColor: '#F78B01',
            borderRadius: 6, // To make sure the border radius is applied
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white', // To vertically align text within the height
            }}>
            Send Code
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
