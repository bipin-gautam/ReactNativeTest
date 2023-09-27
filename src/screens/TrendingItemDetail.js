import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Images} from '../constants/Images';
import {toggleFavoriteMerchant} from '../redux/Slice/favoriteMerchants';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMerchantDetailAction} from '../redux/Slice/getMerchantDetail';
import {ActivityIndicator} from 'react-native-paper';
const {width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    imageLink: require('../assets/image/food2.jpeg'),
  },
  {
    id: 2,
    imageLink: require('../assets/image/food1.jpeg'),
  },
  {
    id: 3,
    imageLink: require('../assets/image/food2.jpeg'),
  },
  {
    id: 4,
    imageLink: require('../assets/image/food2.jpeg'),
  },
];

const TrendingItemDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const item = route.params?.item;
  const {success} = useSelector(state => state.favoriteMerchants);

  //fetching merchant detail
  useEffect(() => {
    dispatch(fetchMerchantDetailAction(item));
  }, [dispatch, success, item]);

  const {merchantDetail, loading} = useSelector(
    state => state.merchantDetailReducer,
  );
  const {distance} = merchantDetail;
  const Indicator = () => {
    return <View style={styles.indicator} />;
  };

  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, width],
    outputRange: [0, 16],
  });

  const renderImages = () => {
    return data.map(x => (
      <View style={styles.card} key={x.id}>
        <Image source={x.imageLink} style={styles.image} resizeMode="cover" />
      </View>
    ));
  };

  const goBack = () => {
    navigation.goBack();
  };
  const callBtnAction = () => {
    console.log('call button pressed');
  };
  const locationBtnAction = () => {
    console.log('Location button pressed');
  };
  if (loading) {
    return (
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'transparent',
          left: 0,
          right: 0,
        }}>
        <ActivityIndicator color="red" size={'large'} />
      </View>
    );
  } else {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            zIndex: 99999,
            flex: 1,
          }}>
          <TouchableOpacity onPress={goBack} style={{top: 40, left: 20}}>
            <Image source={require('../assets/image/backBtn.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(toggleFavoriteMerchant(merchantDetail));
            }}
            style={{top: 40, right: 20}}>
            <Image
              style={styles.favoriteIconImage}
              source={
                merchantDetail?.bookmarked ? Images.favSelected : Images.fav
              }
            />
          </TouchableOpacity>
        </View>
        <StatusBar backgroundColor="white" barStyle="light-content" />
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{height: 300}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollValue}}}],
            {useNativeDriver: false},
          )}>
          {renderImages()}
        </ScrollView>
        <View style={styles.indicatorConatiner} pointerEvents="none">
          {data.map(x => (
            <Indicator x={x} key={x.id} />
          ))}
          <Animated.View
            style={[
              styles.activeIndicator,
              {position: 'absolute', transform: [{translateX}]},
            ]}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#181818',
            }}>
            {merchantDetail?.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={locationBtnAction}
              style={{right: 20, marginLeft: 110, marginRight: 10}}>
              <Image source={require('../assets/image/loc.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={callBtnAction} style={{right: 20}}>
              <Image source={require('../assets/image/call.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            marginTop: 18,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#727272',
            }}>
            {merchantDetail?.name} - $$ | {distance} km
          </Text>
          <Image style={{height: 20}} source={Images.group9} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: width,
    height: 300,
  },
  image: {
    flex: 1,
    width: width,
  },
  indicatorConatiner: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: -20,
  },
  indicator: {
    height: 6,
    width: 6,
    borderRadius: 5,
    backgroundColor: '#DFDFDF',
    marginHorizontal: 5,
  },
  activeIndicator: {
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  favoriteIconImage: {
    height: 65,
    width: 65,
  },
});

export default TrendingItemDetail;
