import React, { useState } from 'react';

import Home from './pages/home';
import Question from './pages/question';
import {Text, Animated,View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { TextInput, Title, NavigationBar,Card,Image,Subtitle,Caption } from '@shoutem/ui';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.texto}>Spottddded</Text>
      </View>
      <View style={styles.spotted}>
        <Text>Spotted</Text>
      </View>
      <View style={styles.sendMessage}>
        <Text>Sending</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#ccc"
  },
  appbar:{
    height: 50,
    backgroundColor: "#FFF",
  },
  texto:{
    fontFamily: 'HelveticaNeueUltraLightItal',
    fontSize: 40,
  },
  spotted:{
    flex:1
  },
  sendMessage:{

  }
});