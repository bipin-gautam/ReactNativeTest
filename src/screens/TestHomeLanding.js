import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import TrendingItem from './TrendingItems';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchMerchants} from '../redux/Slice/getMerchant';
import {fetchFavourites} from '../redux/Slice/getFavourites';

const TestHomeLanding = ({navigation}) => {
  const dispatch = useDispatch();
  const {merchants, loading} = useSelector(state => state.merchants);
  const {favouriteList} = useSelector(state => state.favouriteList);

  const favoritesMerchant = useSelector(state => state.favoriteMerchants);

  //fetching list of merchants
  useEffect(() => {
    dispatch(fetchMerchants());
  }, [dispatch, favoritesMerchant]);

  //fetching list of favourites
  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch, favoritesMerchant]);

  // navigate to detail page
  const goToDetailPage = item => {
    navigation.navigate('TrendingItemDetail', {item});
  };

  const renderItem = ({item}) => {
    return <TrendingItem item={item} onPress={goToDetailPage} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Trending Merchants</Text>
        <FlatList
          horizontal={true}
          data={merchants}
          style={{paddingHorizontal: 10}}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
        <View>
          {loading && (
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'transparent',
                left: 0,
                right: 0,
              }}>
              <ActivityIndicator color="red" size={'large'} />
            </View>
          )}
          <Text style={styles.header}>Your Favourites</Text>
        </View>
        <FlatList
          horizontal={true}
          style={{paddingHorizontal: 10}}
          data={favouriteList}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem} // Width of each item
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    marginVertical: 20,
  },
  header: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Black',
  },
  itemContainer: {
    margin: 10,
    backgroundColor: '#f9f9ff',
    width: 277,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 257,
    height: 142,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  favoriteIconContainer: {
    justifyContent: 'space-between',
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
    margin: 10,
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
};

export default TestHomeLanding;
