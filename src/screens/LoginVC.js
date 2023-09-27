import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const LoginVC = ({navigation}) => {
  const [Password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const handleSignInPress = () => {
    // Handle the press event here
    console.log('View tapped Artist!');
    if (Password === 'abc') {
      navigation.navigate('UserTypeVC');
    } else {
      console.log('Wrong password');
      Alert.alert(
        'Login Error',
        'Your password is wrong, correct password is abc.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
      );
    }
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/image/bg.png')}>
      <Image
        source={require('../assets/image/cercuslogoDark.png')}
        resizeMode="center"
        style={{alignSelf: 'center', marginTop: 120}}
      />
      <View style={{paddingHorizontal: 40}}>
        <Text style={{marginTop: 70, marginBottom: 6}}>Email Address*</Text>
        <TextInput
          style={{
            backgroundColor: '#EBE6D9',
            height: 70,
            borderRadius: 27,
            paddingHorizontal: 25,
          }}
          placeholder="Enter email"
        />
        <Text
          style={{
            marginTop: 22,
            marginBottom: 6,
          }}>
          Password*
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#EBE6D9',
            borderRadius: 27,
          }}>
          <TextInput
            style={{
              height: 70,
              flex: 1,
              paddingHorizontal: 25,
            }}
            maxLength={30}
            value={Password}
            secureTextEntry={secure}
            placeholder="Password"
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={{justifyContent: 'center', marginRight: 20}}
            onPress={() => setSecure(!secure)}>
            <Text>{secure ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            top: 30,
            backgroundColor: '#FFC83B',
            height: 70,
            borderRadius: 27,
            paddingHorizontal: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleSignInPress}>
          <Text style={{alignSelf: 'center', textAlignVertical: 'center'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{alignSelf: 'center', marginTop: 80}}>Forgot Password?</Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 80,
        }}>
        <Text style={{alignSelf: 'center'}}>New to CerCus?</Text>

        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}> Sign Up</Text>
      </View>
    </ImageBackground>
  );
};

export default LoginVC;

const styles = StyleSheet.create({});
