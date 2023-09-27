import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import ModalComponent from '../component/ModalComponent';

const {width} = Dimensions.get('window');
const data = [
  {
    id: 1,
    imageText: 'Best platform for online education',
    imageLink: require('../assets/image/gradesCuate1.png'),
  },
  {
    id: 2,
    imageText: 'Best platform for online education',
    imageLink: require('../assets/image/gradesCuate1.png'),
  },
  {
    id: 3,
    imageText: 'Best platform for online education',
    imageLink: require('../assets/image/gradesCuate1.png'),
  },
];

const TeachMeLanding = ({navigation}) => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCreateAccBtnTapped, setIsCreateAccBtnTapped] = useState(false);

  const openPopupLogin = () => {
    setIsPopupVisible(true);
  };
  const openPopupCreateAcc = () => {
    setIsPopupVisible(true);
    setIsCreateAccBtnTapped(true);
  };
  const goToPage = ({id}) => {
    setIsPopupVisible(false);
    if (isCreateAccBtnTapped) {
      // Assuming isCreateAccBtnTapped is a boolean variable
      navigation.navigate('TeachMeLogin', {userType: id});
    } else {
      navigation.navigate('TeachMeLogin', {userType: id});
    }
  };

  const goToProductLis = () => {
    navigation.navigate('ProductList');
  };
  const goToHomePage = () => {
    navigation.navigate('TestHomeLanding');
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  const translateX = scrollValue.interpolate({
    inputRange: [0, width],
    outputRange: [0, 20],
  });
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/logo.png')}
        style={{marginTop: 100, marginBottom: 20, alignSelf: 'center'}}
      />
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{height: '50%'}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollValue}}}],
          {useNativeDriver: false},
        )}>
        {data.map(x => (
          <View style={styles.card} key={x.id}>
            <Image
              source={x.imageLink}
              alignSelf="center"
              resizeMode="center"
              style={{paddingHorizontal: 40, width: 300}}
              key={x}
            />
            <Text style={{alignSelf: 'center'}}>{x.imageText}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorConatiner} pointerEvents="none">
        {data.map(x => (
          <Indicator x={x} key={x.id} />
        ))}
        <Animated.View
          style={[
            styles.activeIndicator,
            {position: 'absolute', transform: [{translateX}]},
          ]}
        />
      </View>
      <TouchableOpacity
        style={styles.createAccountBtn}
        onPress={openPopupCreateAcc}>
        <Text style={{alignSelf: 'center', color: 'white'}}>
          CREATE AN ACCOUNT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logInBtn} onPress={openPopupLogin}>
        <Text style={{alignSelf: 'center', color: 'black'}}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigateAsGuest} onPress={goToProductLis}>
        <Text style={{alignSelf: 'center', textDecorationLine: 'underline'}}>
          Navigate as a guest
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigateAsGuest} onPress={goToHomePage}>
        <Text style={{alignSelf: 'center', textDecorationLine: 'underline'}}>
          Navigate To Test
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPopupVisible}
        onRequestClose={closePopup}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={closePopup}
          activeOpacity={1}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupText}>User Type</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <ModalComponent
                title="Select Student"
                onPress={() => {
                  goToPage({id: 3});
                }}
                image={require('../assets/image/student.png')}
              />
              <ModalComponent
                title="Select Tutor"
                onPress={() => {
                  goToPage({id: 2});
                }}
                image={require('../assets/image/tutor.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default TeachMeLanding;
const Indicator = () => {
  return <View style={styles.indicator} />;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Display from the bottom
  },
  popupContainer: {
    height: 350,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  popupText: {
    fontSize: 28,
    color: 'black',
    marginTop: 30,
    textAlign: 'left',
    marginBottom: 17,
    fontWeight: '600',
  },
  closeButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    width: width - 10,

    marginHorizontal: 5,
    borderRadius: 5,
    marginTop: 50,
  },
  indicatorConatiner: {
    alignSelf: 'center',
    // position: 'absolute',
    // bottom: 20,
    flexDirection: 'row',
    marginTop: 40,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00000044',
    marginHorizontal: 5,
  },
  activeIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#F78B01',
    marginHorizontal: 5,
  },
  createAccountBtn: {
    marginTop: 50,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F78B01',
    borderRadius: 10,
    justifyContent: 'center',
  },
  logInBtn: {
    marginTop: 20,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F7B500',
    borderRadius: 10,
    justifyContent: 'center',
  },
  navigateAsGuest: {
    marginTop: 5,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    color: 'black',
  },
});
