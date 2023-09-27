import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { Constants } from '../constants/Constants';

const Btn = () => {
    const onPressBtn = () => {
        Alert.alert('HEllo');
      };
  return (
    <View>
      <TouchableOpacity onPress={onPressBtn} style={styles.touchableStyle}>
        <Text style={styles.btnTouch}>{Constants.PressMe}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({
    touchableStyle: {
        backgroundColor: 'green',
        height: 80,
        width: 240,
        borderRadius: 90,
        justifyContent: 'center',
      },
      btnTouch: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.WHITE,
        textAlign: 'center',
      },
});
