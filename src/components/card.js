import React from 'react';
import { Image,Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://fthmb.tqn.com/DrRD0vrmFfmZyd41vHbMhUAoeLA=/768x0/filters:no_upscale()/GettyImages-545840549-58e7e5ca5f9b58ef7e53fc0f.jpg' }}
                />
                <View style={styles.teste}>
                    <Text style={styles.titulo}>Titulo do spotted</Text>
                    <Text style={styles.descricao}>
                        A espera final agora seria por uma decisão de Dembélé em aceitar ou não ir para o PSG como parte do negócio. As negociações terão continuidade amanhã
                </Text>
                </View>
            </View>
            <View style={styles.emoticon} >
                <Icon name="ios-heart-empty" size={24} color= '#666'/>
                <Text style={styles.quantidade}>324</Text>
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