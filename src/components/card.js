import React from 'react';
import { Image,Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Card = (message) => {


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://st2.depositphotos.com/4529029/9603/v/950/depositphotos_96031530-stock-illustration-cartoon-animal-head-icon-cat.jpg' }}
                />
                <View style={styles.teste}>
                
                    <Text style={styles.descricao}>
                        {message.message.message}
                </Text>
                </View>
            </View>
            <View style={styles.emoticon} >
                <TouchableOpacity 
                    onPress={onClick}
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
        backgroundColor: '#000'
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
        fontSize: 14,
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