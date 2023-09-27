import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CartBtn from '../component/CartBtn';
import {
  addToCart,
  removeFromCart,
  removeItemFromCart,
} from '../component/redux/CartAction';
import {useDispatch, useSelector} from 'react-redux';

const CartItem = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartReduce);
  const isItemInCart = cartData.some(cartItem => cartItem.id === item.id);
  const cartItem = cartData.find(x => x.id === item.id);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };
  const handleIncreaseQuantity = () => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = () => {
    dispatch(removeItemFromCart(item.id));
  };

  console.log(item, 'xxxxxxxxxx');

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.color}>{item.color.toUpperCase()}</Text>
        <Text style={styles.price}>₹{item.price}/-</Text>
      </View>
      <View style={styles.cartButtonContainer}>
        <CartBtn
          isItemInCart={isItemInCart}
          handleDecreaseQuantity={handleDecreaseQuantity}
          cartItem={cartItem}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    marginTop: 10,
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 2,
  },
  productName: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  color: {
    marginBottom: 5,
    color: 'black',
    fontSize: 17,
    textTransform: 'uppercase',
  },
  price: {
    marginBottom: 20,
    fontSize: 17,
  },
  cartButtonContainer: {
    marginTop: 25,
    flex: 1,
  },
});

export default CartItem;
