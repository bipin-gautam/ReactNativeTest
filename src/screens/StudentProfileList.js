import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  Alert
} from 'react-native';
import {Images} from '../constants/Images';

const StudentProfileList = ({navigation}) => {
  const data = [
    {
      id: 1,
      text: 'My e-Books',
    },
    {
      id: 2,
      text: 'Purchase History',
    },
    {
      id: 3,
      text: 'Saved Cards',
    },
    {
      id: 4,
      text: 'Help & Support',
    },
    {
      id: 5,
      text: 'Terms of Use',
    },
    {
      id: 6,
      text: 'Privacy Policy',
    },
    {
      id: 7,
      text: 'FAQs',
    },
    {
      id: 8,
      text: 'Log Out',
    },
  ];

  // const navigation = useNavigation()
  const handleBack = () => {
    // Handle the press event here
    console.log('Back Pressed!');
    navigation.goBack();
  };

  const handleCellClick = (item) => {
    switch (item.id) {
      case 1:
        navigation.navigate('ScreenForItem1');
        break;
      case 2:
        navigation.navigate('ScreenForItem2');
        break;
      case 3:
        navigation.navigate('ScreenForItem3');
        break;
      case 4:
        navigation.navigate('ScreenForItem4');
        break;
      case 5:
        navigation.navigate('ScreenForItem5');
        break;
      case 6:
        navigation.navigate('PrivacyPolicy');
        break;
      case 7:
        navigation.navigate('ExpandableFaq');
        break;
      case 8:
        handleLogout();
        break;
      default:
        // Handle the default case if needed
    }
  };
  
  const handleLogout = () => {
    // Display the confirmation alert
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Perform the log out action here
            // For example, you can call a logout function or navigate to the logout screen
            console.log('User confirmed log out');
          },
        },
      ],
      { cancelable: false }
    );
  };
  
  

  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity onPress={() => handleCellClick(item)}>
        <View
          flexDirection="row"
          style={{
            paddingVertical: 20,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: item.id === 8 ? 'red' : 'black',
            }}>
            {item.text}
          </Text>

          <Image source={Images.iconArrow} />
        </View>
      </TouchableOpacity>
      <View style={{backgroundColor: '#E1E1E1', height: 1}}></View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
      <SafeAreaView style={{backgroundColor: '#F4F4F4', flex: 1}}>
        <StatusBar backgroundColor="#F4F4F4" barStyle="dark-content" />
        <TouchableOpacity onPress={handleBack} style={{width: 50, padding: 30}}>
          <Image source={require('../assets/image/path.png')} />
        </TouchableOpacity>
        <View flexDirection="row" style={{padding: 30}}>
          <Image source={Images.group3} />

          <View flexDirection="column" style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>
              Gautam Sharma
            </Text>
            <Text style={{fontSize: 15}}>rashidkhan@gmail.com</Text>
            <View flexDirection="row" style={{marginTop: 5}}>
              <Image source={Images.star} style={{height: 20, width: 20}} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                10 View reviews
              </Text>
            </View>
          </View>
        </View>
        <View
          flexDirection="row"
          style={{justifyContent: 'space-between', paddingHorizontal: 30}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}
            style={{
              backgroundColor: 'white',
              borderRadius: 6,
              height: 40,
              width: 180,
              marginTop: 10,
              justifyContent: 'center',
              borderColor: 'black',
              borderWidth: 1, // Add this line to set the border width
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              CHANGE PASSWORD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('StudentCompleteProfile');
            }}
            style={{
              backgroundColor: 'black',
              borderRadius: 6,
              marginTop: 10,
              justifyContent: 'center',
              height: 40,
              width: 180,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              EDIT PROFILE
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList data={data} renderItem={renderItem} style={{padding: 30}} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default StudentProfileList;
