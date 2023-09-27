import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import FloatingLabelInput from '../component/FloatingLabel';
import React, {useState} from 'react';
import {Images} from '../constants/Images';
import {screenWidth} from '../utlis/responsive';
import {myAxiosPostRequest} from '../utlis/myAxiosRequest';

const CreateStudentAccount = ({route}) => {
  const navigation = useNavigation();
  const {userType} = route.params;

  const [Focus, setFocus] = useState('0');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTermSelected, setTermSelected] = useState(false);

  const handleBack = () => {
    // Handle the press event here
    console.log('Back Pressed!');
    navigation.goBack(); // Use navigation.goBack() to navigate back to the previous screen.
  };

  const showAlertForTermsCondition = () => {
    Alert.alert(
      'Alert',
      'Please select terms and conditions',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'), // You can add your custom logic here
        },
      ],
      {cancelable: false},
    );
  };

  const handleCreateAccount = async () => {
    console.log(isTermSelected);
    if (isTermSelected == true) {
      const userCredentials = {
        name: name,
        email: email,
        password: password,
        role_id: userType,
        timezone: 'Asia/Calcutta',
        device_token: 'aaaaa',
        device_type: 1,
      };
      // Make a POST request using myAxiosPostRequest
      myAxiosPostRequest('auth/signup', userCredentials)
        .then(response => {
          // Check the response status
          if (response.status === 200) {
            console.log('API Response:', response.data);
            // Handle successful response data here
          } else {
            console.error('API Error:', response.data.message);
            // Handle the error message here (e.g., display it to the user)
          }
        })
        .catch(error => {
          console.error('API Error:', error);
          // Handle other errors here
        });

      console.log('User Credentials:', userCredentials);
    } else {
      showAlertForTermsCondition();
    }
  };

  const setSelected = () => {
    setTermSelected(!isTermSelected);
  };
  const handleFocus = field => {
    switch (field) {
      case 'name':
        setFocus('1');
        break;
      case 'email':
        setFocus('2');
        break;
      case 'password':
        setFocus('3');
        break;
      default:
        setFocus('0');
    }
  };

  return (
    <View style={{margin: 30}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{width: 50, marginBottom: 50, marginTop: 10}}>
        <Image source={require('../assets/image/path.png')} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Create a student account
      </Text>
      <Text
        style={{
          fontSize: 16,
        }}>
        Register with your email.
      </Text>

      <View style={{marginTop: 30}}>
        <FloatingLabelInput
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
          onFocus={() => handleFocus('name')}
          onBlur={() => handleFocus('')}
          focus={Focus === '1'}
        />
        <FloatingLabelInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          onFocus={() => handleFocus('email')}
          onBlur={() => handleFocus('')}
          focus={Focus === '2'}
        />
        <FloatingLabelInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          onFocus={() => handleFocus('password')}
          onBlur={() => handleFocus('')}
          focus={Focus === '3'}
        />

        <View style={{flexDirection: 'row', marginTop: 40}}>
          <TouchableOpacity
            onPress={setSelected}
            style={{width: 30, marginTop: 0}}>
            <Image
              source={isTermSelected ? Images.iconCheckbox : Images.iconUncheck}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
            }}>
            By continuing you agree to TeachMe Terms of Service and Privacy
            Policy
          </Text>
        </View>

        <TouchableOpacity
          style={{
            top: 50,
            backgroundColor: '#F78B01',
            height: 60,
            borderRadius: 8,
            paddingHorizontal: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleCreateAccount}>
          <Text
            style={{
              alignSelf: 'center',
              textAlignVertical: 'center',
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            CREATE AN ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateStudentAccount;

// const styles = StyleSheet.create({});
