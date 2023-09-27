import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';

import CartItem from './CartItem';
import {useSelector} from 'react-redux';
import BackBtn from '../component/backBtn';

const CartListVC = () => {
  const cartData = useSelector(state => state.cartReduce);
  const totalPrice = cartData.reduce((total, item) => {
    return total + item.qty * item.price;
  }, 0);

  const renderItem = ({item}) => {
    return <CartItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBtn style={styles.backBtn} />
      <Text style={styles.header}>Cart Items</Text>
      <Text style={styles.subtitle}>
        Here are the list of added items in your cart.
      </Text>
      <View style={styles.cartContainer}>
        <FlatList
          data={cartData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>
          TOTAL AMOUNT: ₹{totalPrice.toFixed(2)}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
  },
  backBtn: {
    padding: 0,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  subtitle: {
    marginTop: 20,
  },
  cartContainer: {
    marginTop: 20,
    flex: 1,
  },
  totalAmountContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  totalAmountText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CartListVC;
