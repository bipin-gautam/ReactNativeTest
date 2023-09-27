import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ExpandableItem from './ExpandableItem';

const ExpandableFaq = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      title:
        'Can you tell me more about the existing demand for my course topic?',
      content:
        'A standard course is video-based. Additional teaching tools (like assignments, quizzes, and coding exercises, etc) can be added to create a rich learning experience for students. For courses regarding certification preparation, we also offer instructors the ability to create a Practice Test course.',
    },
    {
      id: '2',
      title: 'Do I have to pay any fees in order to become an instructor?',
      content:
        'A standard course is video-based. Additional teaching tools (like assignments, quizzes, and coding exercises, etc) can be added to create a rich learning experience for students. For courses regarding certification preparation, we also offer instructors the ability to create a Practice Test course.',
    },
    // Add more items as needed
  ];

  const handleBack = () => {
    console.log('Back Pressed!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handleBack();
        }}
        style={styles.backButton}>
        <Image source={require('../assets/image/path.png')} />
      </TouchableOpacity>
      <Text style={styles.header}>FAQ's</Text>
      <Text>Here are some frequently asked questions.</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ExpandableItem title={item.title} content={item.content} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  backButton: {
    width: 50,
    marginBottom: 50,
    marginTop: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  listContainer: {
    marginTop: 20,
  },
});

export default ExpandableFaq;
