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

import Firebase from './src/components/firebaseServer';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from './src/components/card';
import Home from './src/pages/home';


const App = () => {
  const [message, setMessage] = useState('');
  const firebase = new Firebase()
  const [messages, setMessages] = useState([]);
  const [quant, setQuant] = useState(0);


  useEffect(() => {
    function ola() {

      firebase.db.collection("Message").onSnapshot(function (doc) {
        setQuant(doc.size);
        console.log(doc.size);
        data = doc.docs.map(doc => {
          return {
            id: doc.id,
            message: doc.data().message,
            likes: doc.data().likes,
            avatar: doc.data().avatar
          }
        })
        setMessages(data)
      });
    }
    ola();
  }, [])

  function sendMessage() {
    firebase.sendMessage("Message", {
      message: message,
      likes: 0,
      avatar: Math.floor(Math.random() * 14 + 1)
    });
    setMessage('');
  }
  return (

    <View style={styles.container}>

      <View style={styles.appbar}>
        <Text style={styles.texto}>Spotted </Text>
      </View>
      <ScrollView
        style={styles.cards}
      >
        {messages.length === 0 ?
          <Text style={styles.empty}>Acabou :(</Text>
          : (
            messages.map((message, index) => (
              <Card key={message.id} message={message} />
            ))
          )
        }
      </ScrollView>

      <View style={styles.back}>
        <View style={styles.inputt}>
          <TextInput
            style={styles.textInput}
            placeholder="Se declare para alguém :)"
            placeholderTextColor="#FFF"
            multiline={true}
            maxLength={280}
            value={message}
            onChangeText={setMessage}
          />

        </View>
        <TouchableOpacity
          style={styles.icone}
          onPress={sendMessage}
          activeOpacity={0.7}
        >
          <Icon name="ios-arrow-round-forward" size={44} color="#FFF" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
  },
  icone: {
    backgroundColor: "rgb(161,216,242)",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
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
    flex: 1,

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
