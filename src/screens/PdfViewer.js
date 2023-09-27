import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet,TouchableOpacity,Image, View} from 'react-native';
import Pdf from 'react-native-pdf';

const PdfViewer = ({navigation}) => {
    // const navigation = useNavigation()
    const handleBack = () => {
        // Handle the press event here
        console.log('Back Pressed!');
        navigation.goBack();
      };
  return (
    <View style={{flex: 1}}>
          <TouchableOpacity
        onPress={handleBack}
        style={{width: 50, marginTop: 10,padding: 30,}}>
        <Image source={require('../assets/image/path.png')} />
      </TouchableOpacity>
      <Pdf
        source={{uri: 'https://www.africau.edu/images/default/sample.pdf', cache: true}}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(`Error: ${error}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default PdfViewer;
