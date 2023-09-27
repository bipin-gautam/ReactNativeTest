import {
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const UserTypeVC = ({navigation}) => {
  const handleClientPress = () => {
    // Handle the press event here
    console.log('View tapped Client!');
  };
  const handleArtistPress = () => {
    // Handle the press event here
    console.log('View tapped Artist!');
  };
  const handleBack = () => {
    // Handle the press event here
    console.log('Back Pressed!');
    navigation.goBack();
  };

  const DATA = [
    {
      id: 1,
      name: 'Client',
      disc: 'Join as a client to book a tattoo artist and get your tattoo done.',
      image: require('../assets/image/icArtistSelected.png'),
    },
    {
      id: 2,
      name: 'Individual Artist  ',
      disc: 'Join as an artist to create your own slots & get bookings.',
      image: require('../assets/image/combinedShapeCopy.png'),
    },
  ];

  const renderItemList = ({item}) => {
    console.log(item, 'item');
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 30,
          marginBottom: 30,
          backgroundColor: '#337283',
          height: 152,
        }}
        onPress={item.id === 1 ? handleClientPress : handleArtistPress}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 30,
            paddingHorizontal: 30,
          }}>
          <Image source={item.image} />
          <View
            style={{
              marginHorizontal: 30,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#FFFFFF',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#FFFFFF',
                top: 5,
                width: 160,
              }}>
              {item.disc}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#FFC83B',
                }}>
                Select
              </Text>
              <Image
                source={require('../assets/image/path2Copy.png')}
                style={{marginLeft: 5, marginTop: 3}}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/image/bg.png')}>
      <TouchableOpacity onPress={handleBack} style={{ width: 50, padding:30}}>
        <Image
          source={require('../assets/image/path.png')}
          onPress={handleBack}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginHorizontal: 30,
          marginTop: 40,
          marginBottom: 80,
        }}>
        What type of account would you like to create?
      </Text>
      <FlatList data={DATA} renderItem={renderItemList} scrollEnabled={false}/>
    </ImageBackground>
  );
};

export default UserTypeVC;

const styles = StyleSheet.create({});
