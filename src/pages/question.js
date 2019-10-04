import React, { useState } from 'react';
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

import Firebase from '../components/firebaseServer';

import Icon from 'react-native-vector-icons/Ionicons';

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

export default function Question({ navigation }) {
    const [imagens, setImagens] = useState([im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12, im13, im14, im15, im16, im17, im18, im19, im20, im21, im22, im23, im24, im25, im26, im27]);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState(navigation.getParam('message'));
    const firebase = new Firebase();

    async function sendComment() {
        const resposta = await firebase.db.collection("Message").doc(message.id);
        const data = await resposta.get();
        let vetor = data.data().comment;
        vetor.push(comment);
        resposta.update({ comment: vetor });
        handleComment();
    }
    function handleComment() {
        navigation.navigate('Comment',{message:message});
    }
    return(
        <View style={styles.container}>
            <View style={styles.appbar}>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={handleComment}>
                        <Icon name='ios-arrow-back' size={33} color="rgb(161, 216, 242)" ></Icon>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={sendComment}
                >
                    <Text style={styles.texto}>Comentar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.comentario}>
                <Image
                    style={styles.avatar}
                    source={imagens[2]}
                />
                <View style={styles.textInput}>
                    <TextInput style={styles.text}
                        multiline={true}
                        placeholderTextColor={"rgb(161,216,242)"}
                        placeholder={"Faça um comentário : )"}
                        selectionColor={"rgb(161,216,242)"}
                        maxLength={280}
                        onChangeText={setComment}
                        
                    />
               </View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        color:"#666",
        fontSize: 20,
    },
    textInput: {
        flex:1,        
        height:300,
        color:"#666"
    },
    container:{
        flex:1,
        backgroundColor:"#FFF",
        marginHorizontal: 10,
    },
    comentario:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: 10
    },
    texto:{
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    button:{
        height:30,
        width:100,
        backgroundColor: "rgb(161,216,242)",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    appbar: {
        justifyContent: 'space-between',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: '#FFF'
    },
});