// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import LoginVC from '../screens/LoginVC';
import UserTypeVC from '../screens/UserTypeVC';
import TeachMeLanding from '../screens/TeachMeLanding';
import TeachMeLogin from '../screens/TeachMeLogin';
import TeachMeStudentDashBoard from '../screens/TeachMeStudentDashBoard';
// import TabStack from './TabNav';
import ForgetPassword from '../screens/ForgetPassword';
import CourseList from '../screens/CourseList';
import TableView from '../screens/TableView';
import PdfViewer from '../screens/PdfViewer';
import ExpandableFaq from '../screens/ExpandableFaq';
import StudentProfileList from '../screens/StudentProfileList';
import StudentCompleteProfile from '../screens/StudentCompleteProfile';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import CreateStudentAccount from '../screens/CreateStudentAccount';
import ProductList from '../screens/ProductList';
import CartListVC from '../screens/CartListVC';
import TestHomeLanding from '../screens/TestHomeLanding';
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="TeachMeLanding">
        <Stack.Screen name="TeachMeLanding" component={TeachMeLanding} />
        <Stack.Screen name="TableView" component={TableView} />
        <Stack.Screen name="CourseList" component={CourseList} />
        <Stack.Screen name="TeachMeLogin" component={TeachMeLogin} />
        <Stack.Screen name="LoginVC" component={LoginVC} />
        <Stack.Screen name="UserTypeVC" component={UserTypeVC} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen
          name="TeachMeStudentDashBoard"
          component={TeachMeStudentDashBoard}
        />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="PdfViewer" component={PdfViewer} />
        <Stack.Screen name="ExpandableFaq" component={ExpandableFaq} />
        <Stack.Screen
          name="StudentProfileList"
          component={StudentProfileList}
        />
        <Stack.Screen
          name="StudentCompleteProfile"
          component={StudentCompleteProfile}
        />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen
          name="CreateStudentAccount"
          component={CreateStudentAccount}
        />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="CartListVC" component={CartListVC} />
        <Stack.Screen name="TestHomeLanding" component={TestHomeLanding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
