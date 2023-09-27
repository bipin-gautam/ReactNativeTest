import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Colors';
import {Constants} from '../constants/Constants';
import {Images} from '../constants/Images';
import Btn from '../component/Btn';
import {useNavigation} from '@react-navigation/native';

const FirstScreen = () => {
  const navigation = useNavigation();
  const [Name, setName] = useState('');
  const onPressBtn = () => {
    // Alert.alert('HEllo');
    navigation.navigate('SecondScreen', {name: Name});
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1, width: '100%'}}
        source={{
          uri: 'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
        }}>
        <Text style={styles.mainTag}>{Constants.FirstScreen}</Text>
        <TextInput
          style={styles.TextInputView}
          value={Name}
          onChangeText={e => setName(e)}
        />
        <Image source={Images.Demo} style={styles.image} />
        <Button title="press" onPress={onPressBtn} />
        <Btn />
      </ImageBackground>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mainTag: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.Blue,
  },
  TextInputView: {
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 40,
  },
  image: {
    height: 150,
    width: 150,
  },
});
