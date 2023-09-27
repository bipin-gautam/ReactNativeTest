// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestHomeLanding from '../screens/TestHomeLanding';
import TrendingItemDetail from '../screens/TrendingItemDetail';
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="TestHomeLanding">
        <Stack.Screen name="TestHomeLanding" component={TestHomeLanding} />
        <Stack.Screen
          name="TrendingItemDetail"
          component={TrendingItemDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
