import {StyleSheet, View} from 'react-native';
import React from 'react';
import Main from './src/navigation/Main';
import {Provider} from 'react-redux';
import store from './src/component/redux/CartStore';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAEB',
  },
});
