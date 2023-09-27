import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Product from './Product';
import {Items} from '../constants/Constants';

const TestHomeLanding = () => {
  const renderListItem = ({item}) => {
    console.log('fdsfdsfdsfdsfzzzzzzzzz');
    return <Product item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Trending Merchants</Text>
      </View>
      <FlatList data={Items} renderItem={renderListItem} />
    </SafeAreaView>
  );
};

export default TestHomeLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  header: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
