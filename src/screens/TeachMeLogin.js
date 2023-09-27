import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextField from '../component/TextField';
import {useNavigation} from '@react-navigation/native';

const TeachMeLogin = ({route}) => {
  const navigation = useNavigation();
  const [Loader, setLoader] = useState(false);
  const {userType} = route.params;
  const [IsHide, setIsHide] = useState(true);
  const [email, setEmail] = useState('bipin.gautam@yopmail.com');
  const [password, setPassword] = useState('Kiwi@123');

  const validateEmail = email => {
    // Email validation regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handelForgetPassword = () => {
    console.log('navigate to ForgetPassword');
    navigation.navigate('ForgetPassword');
  };

  const handleBack = () => {
    console.log('Back Pressed!');
    navigation.goBack();
  };

  const showHideText = () => {
    setIsHide(!IsHide);
  };

  const handleValidation = async () => {
    console.log('api called bbb');
    try {
      if (validateEmail(email) && password) {
        setLoader(true);

        const response = await axios.post(
          `https://teachme-backend-dev.kiwi-internal.com/api/v1/auth/signin?role_id=${userType}&email=${email}&password=${password}&timezone=asia/kolkata&device_token=1`,
        );

        console.log(response.data, 'response bbb');

        await AsyncStorage.setItem('userData', JSON.stringify(response.data));
        setLoader(false);
        navigation.navigate('TeachMeStudentDashBoard');
      } else {
        Alert.alert('Enter credentials');
      }
    } catch (error) {
      Alert.alert(error.response.data.message);
      console.log(error.response.data.message, 'errosr');

      if (error instanceof Error && error.name === 'Error') {
        console.log(error);
      }

      setLoader(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Image source={require('../assets/image/path.png')} />
      </TouchableOpacity>
      <Text style={styles.header}>Welcome back!</Text>
      <Text>Log In to the app with your registered email.</Text>
      <TextField
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextField
        placeholder="Enter password"
        placeholderTextColor="gray"
        secureTextEntry={IsHide}
        onChangeText={text => setPassword(text)}
        password={true}
        showHideText={showHideText}
      />

      <TouchableOpacity onPress={handleValidation} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handelForgetPassword}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.loginWithButton}>
          <Text style={styles.loginWithText}>Log In with Apple</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[styles.loginWithButton, {backgroundColor: '#1778F2'}]}>
          <Text style={styles.loginWithText}>Log In with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[styles.loginWithButton, {backgroundColor: 'red'}]}>
          <Text style={styles.loginWithText}>Log In with Google</Text>
        </View>
      </TouchableOpacity>
      {Loader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  backButton: {
    width: 50,
    marginBottom: 50,
    marginTop: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 6,
    paddingLeft: 10,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#F78B01',
    height: 50,
    marginTop: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
  },
  forgotPassword: {
    marginTop: 40,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  loginWithButton: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 6,
  },
  loginWithText: {
    textAlign: 'center',
    color: 'white',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TeachMeLogin;
