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

import Firebase from '../components/firebaseServer';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/card';


const arroz = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const firebase = new Firebase();
    const [messages, setMessages] = useState([]);
    const [quant, setQuant] = useState(0);

    useEffect(() => {
        function ola() {

            firebase.db.collection("Message").onSnapshot(function (doc) {
                setQuant(doc.size);
                data = doc.docs.map(doc => {
                    return {
                        id: doc.id,
                        message: doc.data().message,
                        likes: doc.data().likes,
                        avatar: doc.data().avatar,
                        insertData: doc.data().insertData,
                        commentQuant: doc.data().comment.length
                    }
                })
                data.sort(function (a, b) {
                    if (a.insertData < b.insertData) {
                        return 1;
                    }
                    if (a.insertData > b.insertData) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                });
                setMessages(data)
            });
        }
        ola();
    }, [])

    async function handleComment(message) {
        navigation.navigate('Comment',{ message: message });
    }

    function sendMessage() {
        firebase.sendMessage("Message", {
            message: message,
            likes: 0,
            avatar: Math.floor(Math.random() * 26 + 1),
            insertData: firestore.FieldValue.serverTimestamp(),
            comment:[]
        });

        setMessage('');
    }
    return (

        <View style={styles.container}>

            <View style={styles.appbar}>
                <Text style={styles.texto}>Spotted </Text>
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

export default arroz;
