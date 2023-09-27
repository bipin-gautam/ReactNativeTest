import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Constants} from '../constants/Constants';
import {useNavigation} from '@react-navigation/native';
const PrivacyPolicy = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#F4F4F4', flex: 1, paddingHorizontal: 30}}>
      <SafeAreaView style={{backgroundColor: '#F4F4F4', flex: 1}}>
        <StatusBar backgroundColor="#F4F4F4" barStyle="dark-content" />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StudentProfileList');
          }}
          style={{width: 50, marginBottom: 50, marginTop: 10}}>
          <Image source={require('../assets/image/path.png')} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          PrivacyPolicy
        </Text>
        <ScrollView>
          <Text style={{marginTop: 10}}>{Constants.privacyPolicy}</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PrivacyPolicy;
const styles = StyleSheet.create({});
