import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const SecondScreen = ({route}) => {
  const navigation = useNavigation()
  const [SelectedValue, setSelectedValue] = useState('Flowers');
  console.log(route?.params?.name);
  const data = [
    {
      id: '1',
      title: 'Cars',
      image: {
        uri: 'https://en.wikipedia.org/wiki/URI_Purposely_Built_Vehicles#/media/File:Uri-on-trailer2.jpg',
      },
    },
    {
      id: '2',
      title: 'Flowers',
      image: {
        uri: 'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
      },
    },
    {
      id: '3',
      title: 'Nature',
      image: {
        uri: 'https://www.uri.org/sites/default/files/styles/hero_banner/public/media/images/2021/pexels-simon-berger-1323550.jpg?h=1c869cbb',
      },
    },
    {
      id: '4',
      title: 'Ships',
      image: {
        uri: 'https://en.wikipedia.org/wiki/Ship#/media/File:Container_ship_Reecon_Whale_on_Black_Sea_near_Constan%C8%9Ba_Romania.jpg',
      },
    },
    {
      id: '5',
      title: 'Technology',
      image: {
        uri: 'https://en.wikipedia.org/wiki/Technology#/media/File:Dampfturbine_Montage01.jpg',
      },
    },
    // Add more items as needed
  ];
 
  const onSelect = item => {
    console.log(item);
    setSelectedValue(item.title);
    // SelectedValue = item.title
  };
  console.log(SelectedValue, 'sewlectedvlue');
  const renderItem = ({item}) => {
    console.log(item, 'jkiji');
    return (
      <View style={{marginHorizontal: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: SelectedValue === item.title ? 'red' : 'gray',
            height: 40,
            width: 60,
            borderRadius: 5,
            justifyContent: 'center',
          }}
          onPress={() => onSelect(item)}>
          <Text
            style={{
              color: SelectedValue === item.title ? 'white' : 'red',
              textAlign: 'center',
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
        {/* <Button title={item.title}  onPress={() => onSelect(item)}/> */}
        {/* <Image style={styles.imageStyle} source={item.image} /> */}
      </View>
    );
  };

  const renderImageItem = ({item}) => {
    console.log(item, 'jkiji');
    return (
      <View style={{marginHorizontal: 10}}>
        {/* <Text>{item.id}</Text> */}
        {SelectedValue === item.title && (
          <Image style={styles.imageStyle} source={item.image} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.pinkViewwStyle}>
        <Text style={styles.topHeaderTextColor}>{route?.params?.name}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList
          horizontal
          scrollEnabled={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <FlatList
          scrollEnabled={true}
          data={data}
          renderItem={renderImageItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textColor: {
    color: Colors.Blue,
    fontSize: 40,
    paddingLeft: 40,
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
  textViewStyle: {
    backgroundColor: Colors.Gray,
    width: '90%',
    borderRadius: 20,
    height: 80,
    fontSize: 30,
    paddingHorizontal: 20,
  },
  pinkViewwStyle: {
    backgroundColor: Colors.LightPink,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
  blanckViewwStyle: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    borderRadius: 0,
    height: 30,
    fontSize: 30,
    paddingHorizontal: 20,
  },
  topHeaderTextColor: {
    color: Colors.Blue,
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 10,
  },
});
