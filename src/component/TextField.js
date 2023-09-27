import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const TextField = props => {
  const {
    style,
    placeholder,
    placeholderTextColor,
    keyboardType,
    onChangeText,
    autoCapitalize,
    password,
    showHideText,
    error,
    errorText,
    value,
  } = props;
  return (
    <View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        borderRadius: 6,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
      <TextInput
        style={[style,{flex:1}]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        value={value}
      />
      {password && (
        <TouchableOpacity onPress={showHideText}>
          <Image source={require('../assets/image/iconEye.png')} />
        </TouchableOpacity>
      )}
      
    </View>
    {error && <Text style={{color:'red'}}>{errorText}</Text>}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({});
