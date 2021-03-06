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
    TouchableOpacity,
    Image
} from 'react-native';
import { firestore } from 'firebase';

import Firebase from '../components/firebaseServer';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/card';


import im1 from '../assets/cats/1.jpg';
import im2 from '../assets/cats/2.jpg';
import im3 from '../assets/cats/3.jpg';
import im4 from '../assets/cats/4.jpg';
import im5 from '../assets/cats/5.jpg';
import im6 from '../assets/cats/6.jpg';
import im7 from '../assets/cats/7.jpg';
import im8 from '../assets/cats/8.jpg';
import im9 from '../assets/cats/9.png';
import im10 from '../assets/cats/10.jpg';
import im11 from '../assets/cats/11.jpg';
import im12 from '../assets/cats/12.jpg';
import im13 from '../assets/cats/13.jpg';
import im14 from '../assets/cats/14.jpg';
import im15 from '../assets/cats/15.jpg';
import im16 from '../assets/cats/16.png';
import im17 from '../assets/cats/17.png';
import im18 from '../assets/cats/18.png';
import im19 from '../assets/cats/19.png';
import im20 from '../assets/cats/20.png';
import im21 from '../assets/cats/21.png';
import im22 from '../assets/cats/22.png';
import im23 from '../assets/cats/23.png';
import im24 from '../assets/cats/24.png';
import im25 from '../assets/cats/25.png';
import im26 from '../assets/cats/26.jpg';
import im27 from '../assets/cats/27.jpg';


const Comment = ({ navigation }) => {
    const [imagens, setImagens] = useState([im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12, im13, im14, im15, im16, im17, im18, im19, im20, im21, im22, im23, im24, im25, im26, im27]);
    const [message, setMessage] = useState(navigation.getParam('message'));
    const [vetor, setVetor] = useState([]);

    const firebase = new Firebase();

    async function handleQuestion(message) {
        navigation.navigate('Question', { message: message });
    }
    function handleHome() {
        navigation.navigate('Home');
    }

    useEffect(() => {
        async function ola() {
            const resposta = await firebase.db.collection("Message").doc(message.id);
            resposta.onSnapshot(docSnapshot => {
                setVetor(docSnapshot.data().comment);
            }, err => {
                console.log(`Encountered error: ${err}`);
            });

        }
        ola();
    }, []);
   
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.appbar}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={handleHome}>
                            <Icon name='ios-arrow-back' size={33} color="rgb(161, 216, 242)" ></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                        <Text style={styles.texto}>Spotted </Text>
                    </View>
                </View>
                <View style={styles.marginHorizontal10}>
                    <View style={styles.row} >
                        <View style={styles.colum} >
                            <View style={styles.traco} />
                            <View>
                                <Image
                                    style={styles.avatar}
                                    source={imagens[message.avatar]}
                                />
                            </View>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.descricao}>{message.message}</Text>
                    </View>
                    <View style={styles.rowComent}>
                        <Text style={styles.quant}>{vetor.length}</Text>
                        <Text style={styles.like}>Comentarios</Text>
                        <Text style={styles.quant}>{message.likes}</Text>
                        <Text style={styles.like}>Curtidas</Text>
                    </View>
                </View>
                <View style={styles.marginTop}>
                    {
                        vetor.map(
                            (item,index)=>{
                                return(
                                    <View key={index}>
                                        <Card 
                                            key={index} 
                                            message={message} 
                                            comment={{
                                                message:item.message,
                                                likes: item.likes,
                                                avatar: item.avatar,
                                                index: index,
                                                id: message.id
                                            }} />
                                    </View>
                                );
                            }
                        )
                    }

                </View>
            </ScrollView>

            <TouchableOpacity 
                style={styles.floatButton} 
                onPress={()=>handleQuestion(message)}
            >
                <Icon name='ios-add' size={50} color="#FFF" ></Icon>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    floatButton: {
        height: 60,
        width: 60,
        backgroundColor: "rgb(161,216,242)",
        position: 'absolute',
        right: 20,
        bottom: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    container: {
        backgroundColor: "#FFF",
    },
    appbar: {
        backgroundColor: "#FFF",
        elevation: 3,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
        height: 40,
        width: 100,
        position: 'absolute'
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    texto: {
        fontSize: 40,
        fontFamily: 'SrabiScript',
        color: "rgb(161,216,242)"
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: '#FFF'
    },
    traco: {
        backgroundColor: "rgb(161, 216, 242)",
        height: 20,
        width: 5
    },
    colum: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    rowComent: {
        flexDirection: 'row',
        marginTop: 10
    },
    descricao: {
        fontSize: 25,
        marginTop: 5,
        color: '#666',
        lineHeight: 30,
    },
    quant: {
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 5
    },
    like: {
        fontSize: 18,
        color: '#666',
        marginRight: 10
    },
    marginHorizontal10: {
        marginHorizontal: 10
    },
    cards: {
        marginTop: 20
    }
});

export default Comment;
