import {View, FlatList, TouchableOpacity, Text, Button} from 'react-native';
import React from 'react';

const HomeList = ({navigation}) => {
  const renderItemList = ({item}) => {
    console.log(item, 'itemnnn');
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 30,
          marginBottom: 30,
          backgroundColor: '#337283',
          height: 152,
        }}>
        <Button text="abc" />
      </TouchableOpacity>
    );
  };
  const buttonArray = [
    {id: 1, text: 'Login Screen'},
    {id: 1, text: 'First Screen'},
    {id: 1, text: 'Second Screen'},
    {id: 1, text: 'Third Screen'},
    {id: 1, text: 'UserType Screen'},
  ];
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <FlatList
        data={buttonArray}
        renderItem={renderItemList}
        scrollEnabled={true}
      />
    </View>
  );
};
export default HomeList;
