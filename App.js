/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Animated,
  TouchableOpacity
} from 'react-native';
import { firestore } from 'firebase';

import Firebase from './src/components/firebaseServer';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from './src/components/card';
import Comment from './src/pages/comment';

import Route from './src/routes';

const App = () => {
  return (

    <Route/>
  );
};

export default App;
