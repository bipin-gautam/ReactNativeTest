import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackBtn = ({title, style = null}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        },
        style,
      ]}>
      <TouchableOpacity onPress={goBack} style={{flex: 1}}>
        <Image
          source={require('../assets/image/path.png')}
          style={{height: 20, width: 20, marginLeft: 10}}></Image>
      </TouchableOpacity>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>
      <View style={{flex: 1}} />
    </View>
  );
};

export default BackBtn;
