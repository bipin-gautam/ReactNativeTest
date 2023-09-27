import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { Images } from '../constants/Images';

const ModalComponent = props => {
  const {onPress, image, title} = props;
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Image style={styles.img} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.backImg}
        source={Images.arrow}
      />
    </TouchableOpacity>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  main: {
    borderColor: '#CFCFCF.',
    borderRadius: 11,
    paddingTop: 20,
    paddingBottom: 29,
    borderWidth: 1,
    width: 161,
  },
  img: {alignSelf: 'center'},
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 14,
    textAlign: 'center',
  },
  backImg: {alignSelf: 'center', marginTop: 17},
});
