/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './src/Screens/Dashboard'
import Browse from './src/Screens/Browse'
import Library from './src/Screens/Library'
import FullView from './src/Screens/FullView'
import Splash from './src/Screens/Splash'
import settings from './src/Screens/settings'
import SignIn from './src/Screens/SignIn'
import SignUp from './src/Screens/SignUp'
import api from './src/Screens/apis'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import {
  firebase
} from '@react-native-firebase/firestore'

export default class App extends React.Component {

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyABqeAnSey_4l-oc1WZscTbB5Ta0qgZQWA",
      authDomain: "comicbook-4a83d.firebaseapp.com",
      databaseURL: "https://comicbook-4a83d-default-rtdb.firebaseio.com",
      projectId: "comicbook-4a83d",
      storageBucket: "comicbook-4a83d.appspot.com",
      messagingSenderId: "669899573411",
      appId: "1:669899573411:web:d6b9a17e3a4ec57e015716",
      measurementId: "G-7L8S4ZW38Z"
    };
    // Initialize Firebase
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  
  
  
  }

  render(){
    api()
    return (
      <NavigationContainer
      >
        <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen
            name="Splash"
            component={Splash}
             
          />
           <Stack.Screen
            name="SignUp"
            component={SignUp}
             
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
             
          />
         <Stack.Screen
            name="Settings"
            component={settings}
             
          />
             <Stack.Screen
            name="Home"
            component={Home}
             
          />
             <Stack.Screen
            name="Browse"
            component={Browse}
             
          />
             <Stack.Screen
            name="Library"
            component={Library}
             
          />
             <Stack.Screen
            name="FullView"
            component={FullView}
             
          />
      
      
        </Stack.Navigator>
      </NavigationContainer>
    );
}}

const styles = StyleSheet.create({
 });

 
