import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  removeItemFromCart,
} from '../component/redux/CartAction';
import CartBtn from '../component/CartBtn';

const Product = props => {
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

  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Text style={{fontSize: 18}}>{item.productName}</Text>
      <Text style={{color: 'black'}}>{item.price}</Text>
      <Text>{item.color}</Text>
      <Image
        style={{height: 100, width: 100, marginBottom: 10}}
        source={item.image}
      />
      <CartBtn
        isItemInCart={isItemInCart}
        handleDecreaseQuantity={handleDecreaseQuantity}
        cartItem={cartItem}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleRemoveFromCart={handleRemoveFromCart}
        handleAddToCart={handleAddToCart}
      />
    </View>
  );
};

export default Product;
