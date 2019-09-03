import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatButton = () => {

    return (
            <View style={styles.container}>
                <Icon name="ios-add" size={34} color="#FFF"></Icon>
            </View>
    );
};


const styles = StyleSheet.create({

    container: {
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        backgroundColor: '#FF9982'
    }
});

export default FloatButton;