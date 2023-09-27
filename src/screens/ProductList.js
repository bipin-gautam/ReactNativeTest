import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Items} from '../constants/Constants';
import Product from './Product';
import BackBtn from '../component/backBtn';
import store from '../component/redux/CartStore';
import {useSelector} from 'react-redux';

const ProductList = ({navigation}) => {
  const cartData = useSelector(state => state.cartReduce);
  const renderItem = ({item}) => {
    return <Product item={item} />;
  };
  const navigateToCartList = () => {
    navigation.navigate('CartListVC');
  };
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <BackBtn/>
      <View>
        <TouchableOpacity onPress={navigateToCartList}>
          <Text
            style={{
              padding: 20,
              alignItems: 'center',
              fontSize: 25,
              backgroundColor: 'orange',
              marginBottom: 20,
            }}>
            { cartData.reduce((total, item) => total + item.qty, 0) || 0}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList data={Items} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default ProductList;
const styles = StyleSheet.create({});
