import React, {useRef, useEffect} from 'react';
import {View, Text, TextInput, Animated, Easing} from 'react-native';
import { screenWidth } from '../utlis/responsive';

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  onFocus,
  onBlur,
  focus,
  disabled=false
}) => {
  const topValue = useRef(new Animated.Value(focus ? 20 : 40)).current;

  useEffect(() => {
    Animated.timing(topValue, {
      toValue: focus || value ? 22 : 42,
      duration: 200, // Animation duration in milliseconds
      easing: Easing.linear,
      useNativeDriver: false, // Required for positioning
    }).start();
  }, [focus]);

  return (
    <View style={{marginTop: 5}}>
      <TextInput
        placeholder=" "
        value={value}
        disabled={disabled}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{
          color: 'black',
          fontWeight: 'bold',
          borderRadius: 6,
          marginTop: 20,
          height: 60,
          paddingLeft: 15,
          backgroundColor: 'white',
          width:screenWidth - 80
        }}
      />
      <Animated.Text
        style={{
          position: 'absolute',
          left: 10,
          top: topValue, // Use the animated top value
          paddingHorizontal: 5,
          color: 'black',
        }}>
        {label}
      </Animated.Text>
    </View>
  );
};

export default FloatingLabelInput;
