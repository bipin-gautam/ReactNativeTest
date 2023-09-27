import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CartBtn = ({
  isItemInCart,
  handleDecreaseQuantity,
  cartItem,
  handleIncreaseQuantity,
  handleRemoveFromCart,
  handleAddToCart,
}) => {
  return (
    <View>
      {isItemInCart ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width: 30,
              height: 30,
              borderRadius: 15,
              marginHorizontal: 5,
            }}
            onPress={handleDecreaseQuantity}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {cartItem.qty}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width: 30,
              height: 30,
              borderRadius: 15,
              marginHorizontal: 5,
            }}
            onPress={handleIncreaseQuantity}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <Button
        title={isItemInCart ? 'Remove from Cart' : 'Add to Cart'}
        onPress={isItemInCart ? handleRemoveFromCart : handleAddToCart}
        color={isItemInCart ? 'red' : 'blue'}
      />
    </View>
  );
};

export default CartBtn;

const styles = StyleSheet.create({});
