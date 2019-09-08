import React,{useState} from 'react';
import { Image,Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Firebase from './firebaseServer';
import { firestore } from 'firebase';

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


const Card = (message) => {
    const firebase = new Firebase()
    const [imagens, setImagens] = useState([im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12,im13,im14,im15]);
    console.log(message.message.avatar);
    async function incrementLike() {
        
        const increment = firestore.FieldValue.increment(1);
        const resposta = await firebase.db.collection("Message").doc(message.message.id);
        resposta.update({likes:increment});
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={styles.avatar}
                    source={imagens[message.message.avatar]}
                />
                <View style={styles.teste}>
                
                    <Text style={styles.descricao}>
                        {message.message.message}
                </Text>
                </View>
            </View>
            <View style={styles.emoticon} >
                <TouchableOpacity 
                    onPress={incrementLike}
                >
                    <Icon name="ios-heart" size={24} color= '#DF3A01'/>
                </TouchableOpacity>
                <Text style={styles.quantidade}>{message.message.likes}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 0,
        borderColor: '#C0C0C0',
        paddingBottom:10,
        backgroundColor: "#FFF",
        opacity: 100,
        marginBottom: 1,
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: '#FFF'
    },
    card:{
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
    },
    teste:{
        flex:1,
        marginLeft: 10,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#111'

    },
    descricao:{
        fontSize: 20,
        marginTop: 5,
        color: '#666',
        lineHeight: 21
    },
    emoticon:{
        marginLeft: 10,
        marginTop: 2,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    quantidade:{
        marginLeft: 5,
        color: '#666',
    }

});

export default Card;