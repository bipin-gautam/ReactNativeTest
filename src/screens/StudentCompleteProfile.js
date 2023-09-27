import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
  Button,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
// import {} from 'react-native-paper';
import {screenWidth} from '../utlis/responsive';
import FloatingLabelInput from '../component/FloatingLabel';
import DatePicker from 'react-native-date-picker';

const StudentCompleteProfile = () => {
  const [avatarSource, setAvatarSource] = useState(null);
  const [Focus, setFocus] = useState('0');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [open, setOpen] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // Close the picker on iOS when a date is selected
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };
  const pickerConfig = {
    width: 200,
    height: 200,
    cropping: true,
    useFrontCamera: true,
  };

  const handleChooseImage = type => {
    const Picker = type === 1 ? ImagePicker.openCamera : ImagePicker.openPicker;
    Picker(pickerConfig)
      .then(image => {
        console.log(image);
        setAvatarSource({uri: image.path});
      })
      .catch(error => {
        console.error('ImagePicker error:', error); // Log any errors that occur
        // Handle the error or show a user-friendly message as needed
        // You can use Alert.alert or another method to inform the user
        Alert.alert(
          'ImagePicker Error',
          'An error occurred while selecting an image.',
        );
      });
  };
  const handleFocus = field => {
    switch (field) {
      case 'name':
        setFocus('1');
        break;
      case 'email':
        setFocus('2');
        break;
      case 'dob':
        setFocus('3');
        break;
      default:
        setFocus('0');
    }
  };
  function formatDateToDDMMYYYY(originalDate) {
    // Parse the original date string
    const date = new Date(originalDate);
  
    // Extract day, month, and year components
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getUTCFullYear();
  
    // Format the date as "DD/MM/YYYY"
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
  }
  console.log(formatDateToDDMMYYYY(date),'date');
  return (
    <View style={{backgroundColor: '#F4F4F4', flex: 1, paddingHorizontal: 10}}>
      <SafeAreaView style={{backgroundColor: '#F4F4F4', flex: 1}}>
        <StatusBar backgroundColor="#F4F4F4" barStyle="dark-content" />

        <View style={{margin: 30}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Edit Profile
          </Text>
          <View flexDirection="row">
            <TouchableOpacity
              onPress={() => {
                handleChooseImage(2);
              }}>
              {avatarSource ? (
                <Image
                  source={avatarSource}
                  style={{
                    backgroundColor: 'black',
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    marginTop: 20,
                  }}
                />
              ) : (
                <Image
                  style={{
                    backgroundColor: 'black',
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    marginTop: 20,
                  }}
                />
              )}
            </TouchableOpacity>
            <Image
              source={require('../assets/image/camera.png')}
              style={{marginTop: 90, left: -30}}
            />
          </View>
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
            <View
              flexDirection="row"
              style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <FloatingLabelInput
                label="Date of Birth"
                value={date}
                onChangeText={text => setDob(text)}
                onFocus={() => handleFocus('dob')}
                onBlur={() => handleFocus('')}
                focus={Focus === '3'}
                disabled={true}
              />
              <TouchableOpacity onPress={showDatepicker}>
                <Image
                  source={require('../assets/image/calandar.png')}
                  style={{justifyContent: 'center', right: 40, top: 10}}
                />
              </TouchableOpacity>
              <DatePicker
                modal
                open={showPicker}
                date={date}
                onConfirm={date => {
                  setShowPicker(false);
                  setDate(date);
                }}
                mode="date"
                onCancel={() => {
                  setShowPicker(false);
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default StudentCompleteProfile;

const styles = StyleSheet.create({});
