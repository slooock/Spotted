/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Card from './src/components/card';
import Home from './src/pages/home';

import Firebase from './src/components/firebaseUtil';

const App = () => {
  fadeValue = new Animated.Value(0);
  var firebase = new Firebase();

  return (

    <View style={styles.container}>

      <View style={styles.appbar}>
        <Text style={styles.texto}>Adventinder</Text>
      </View>
      <ScrollView
        onScrollBeginDrag={() => _start(0)}
        onScrollEndDrag={() => _start(1)}
        style={styles.cards}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>

        <View style={styles.back}>
          <View style={styles.inputt}>
            <TextInput
              style={styles.textInput}
              placeholder="Se declare para alguém :)"
              placeholderTextColor="#FFF"
              multiline={true}
              maxLength={280}
            />

          </View>
        <View style={styles.icone}>
          <Icon name="ios-arrow-round-forward" size={44} color="#FFF" />
        </View>
        </View>   
     
    </View>
  );
};

const styles = StyleSheet.create({
  back:{
    flexDirection: 'row',
  },
  icone:{
    backgroundColor: "rgb(161,216,242)",
    justifyContent: 'center',
    alignItems: 'center',
    flex:0.2,
    borderTopEndRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  appbar: {
    backgroundColor: "rgb(161,216,242)",
    elevation: 3,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 40,
    fontFamily: 'SrabiScript',
    color: '#FFF'
  },
  cards: {
    flex: 1,
    backgroundColor: "rgb(224,230,244)"
  },
  inputt: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(161,216,242)",
    height: 80,
    flex:1,
    
    borderTopStartRadius: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    color: "#FFF",
    marginRight: 10
  },


});

export default App;
