import React, { useState } from 'react';
import { Animated, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import AppBar from '../components/appbar';
import Card from '../components/card';
import FloatButton from '../components/floatButton';

export default function Home() {
    fadeValue = new Animated.Value(0)


    _start = (value) => {
        Animated.timing(fadeValue, {
            toValue: value,
            duration: 300
        }).start();
    };

    return (
        <View style={styles.MainContainer}>
            <AppBar />
            <ScrollView
                onScrollBeginDrag={() => _start(0)}
                onScrollEndDrag={() => _start(1)}
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
            <Animated.View
                style={{
                    opacity: fadeValue,
                    position: 'absolute',
                    right: 20,
                    bottom: 20,
                }}
            >
                <TouchableOpacity>
                    <FloatButton />
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
});

