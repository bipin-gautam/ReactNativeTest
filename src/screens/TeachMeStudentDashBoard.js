import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,SafeAreaView,StatusBar,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../constants/Images';
import {useNavigation} from '@react-navigation/native';
// import Pdf from 'react-native-pdf';

const data = [
  {
    id: 1,
    text: 'Humble Pi',
    imageSource: Images.book2,
    byAuther: 'by Carlo Roelli',
    description:
      'The first ever maths book to be a no.1 bestseller ‘wonderful ...', // Replace with your image source
  },
  {
    id: 2,
    text: 'Seven Briefes',
    imageSource: Images.book3,
    byAuther: 'by Asad Ali',
    description:
      'Find & Download Free Graphic Resources for Book Png. 95000+ Vectors, Stock Photos & PSD files.', // Replace with your image source
  },
  {
    id: 3,
    text: 'Physical Law',
    imageSource: Images.book4,
    byAuther: 'by Gautam Sharma',
    description:
      'Hardcover Book cover Paperback, book cover, blue, angle png thumbnail Hardcover Book cover Paperback, book cover, blue, angle png', // Replace with your image source
  },
  {
    id: 4,
    text: 'Computer Graphics',
    imageSource: Images.book1,
    byAuther: 'by Monto Roelli',
    description:
      'Transparent png illustrations and cipart matching "Book Cover".', // Replace with your image source
  },
  {
    id: 5,
    text: 'Data Structure',
    imageSource: Images.book2,
    byAuther: 'by Patric carlo',
    description: 'Cover transparent illustrations, icons and clipart', // Replace with your image source
  },
];

const TeachMeStudentDashBoard = () => {
  const [search, setSearch] = useState('second');
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View
      flexDirection="row"
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 20,
        padding: 20,
      }}>
      <Image
        source={item.imageSource}
        style={{borderRadius: 6, height: 135, width: 97}}
      />
      <View style={{marginLeft: 15}}>
        <Text
          numberOfLines={1}
          style={{fontSize: 30, fontWeight: 'bold', width: 220}}>
          {item.text}
        </Text>
        <Text style={{color: '#A4A4A4', fontSize: 12}}>{item.byAuther}</Text>
        <Text
          numberOfLines={2}
          style={{
            color: '#6B6C77',
            fontSize: 13,
            fontWeight: 'bold',
            width: 200,
            marginTop: 5,
          }}>
          {item.description}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PdfViewer');
          }}
          style={{
            backgroundColor: '#F57A0F',
            borderRadius: 6,
            height: 36,
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            BUY NOW @ 99 USD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{backgroundColor: '#F4F4F4', flex: 1, paddingHorizontal: 30}}>
     <SafeAreaView style={{backgroundColor: '#F4F4F4',flex:1,}}>
        <StatusBar  backgroundColor='#F4F4F4' barStyle="dark-content" />
      <View flexDirection="row" style={{justifyContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          e-Liberary
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StudentProfileList');
          }}
          style={{
            backgroundColor: '#F57A0F',
            borderRadius: 6,
            height: 36,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ExpandableFaq');
          }}
          style={{
            backgroundColor: '#F57A0F',
            borderRadius: 6,
            height: 36,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            SHOW EXP
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          height: 60,
          marginTop: 20,

          borderRadius: 6,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image
            style={{marginLeft: 20, alignSelf: 'center'}}
            source={Images.iconSearch}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#A2A2A7"
            style={{
              padding: 20,
              flex: 1,
              fontSize: 14,
            }}
            value={search}
            onChangeText={v => {
              setSearch(v);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={Images.iconFilter} />
            <Text style={{paddingHorizontal: 10}}>Filter</Text>
          </View>
        </View>
      </View>

      <FlatList data={data} renderItem={renderItem} style={{marginTop: 10}} />
      {/* <Text>CLICK ME</Text> */}
      {/* </View> */}
      </SafeAreaView>
    </View>
  );
};

export default TeachMeStudentDashBoard;
