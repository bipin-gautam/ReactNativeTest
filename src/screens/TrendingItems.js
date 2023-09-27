import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Images} from '../constants/Images';
import FONTS from '../constants/FONTS';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {toggleFavoriteMerchant} from '../redux/Slice/favoriteMerchants';

const TrendingItem = ({item, onPress}) => {
  // console.log('ITEM: ', item);

  const dispatch = useDispatch();

  const {commission} = item;

  return (
    <View>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onPress(item)}>
        <ImageBackground source={Images.food2} style={styles.image}>
          {/* Favorite Icon */}
          {/* Add your favorite icon component */}
          <View style={{justifyContent: 'space-between', flex: 1}}>
            <View style={styles.favoriteIconContainer}>
              {/* <View /> */}
              <TouchableOpacity
                style={styles.favoriteIcon}
                onPress={() => {
                  // Dispatch the toggleFavoriteMerchant action when the button is pressed
                  dispatch(toggleFavoriteMerchant(item));
                }}>
                <Image
                  style={styles.favoriteIconImage}
                  source={item.bookmarked ? Images.favSelected : Images.fav}
                />
              </TouchableOpacity>
            </View>
            <Image source={Images.group5} style={{bottom: -10}} />
            <View
              style={{flexDirection: 'row', paddingLeft: 10, marginBottom: 10}}>
              <View>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 5,
                    borderRadius: 6,
                    marginRight: 10,
                  }}>
                  <Text>{commission?.value}% Cashback</Text>
                </View>
              </View>
              <View
                style={{backgroundColor: 'white', padding: 5, borderRadius: 6}}>
                <Text>2 more perks</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.allText}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.locationContainer}>
              <Image source={Images.location} />
              <Text style={styles.location}> {item.distance} km</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{item.name}</Text>
            <Image source={Images.group9} />
          </View>
          {/* {categories?.map((field, index) => (
            <View key={index}>
              <Text>{field.category_name}:</Text>
            </View>
          ))} */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  itemContainer: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9ff',
  },
  image: {
    width: 257,
    height: 142,

    borderRadius: 10,
    overflow: 'hidden', // To clip the border-radius
  },
  favoriteIconContainer: {
    alignItems: 'flex-end',
  },
  favoriteIcon: {
    height: 50,
    width: 50,
  },
  favoriteIconImage: {
    height: 50,
    width: 50,
  },
  backgroundOverlay: {
    height: 22,
    width: 97,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
  },
  allText: {
    paddingVertical: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
  },
  location: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  description: {
    color: '#727272',
  },
  subView: {
    backgroundColor: 'white',
    paddingVertical: 4,
    borderRadius: 10,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  innerView: {
    backgroundColor: 'white',
    paddingVertical: 4,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  textCash: {
    fontFamily: FONTS.WorkSans_Regular,
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
  },
};
export default TrendingItem;
