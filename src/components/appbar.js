import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <Icon style={styles.icon} name="ios-arrow-back" size={24}/>
            <View style={styles.title}>
                <Text style={styles.text}>Spotted</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  
    appBar:{
        backgroundColor: "#FFF",
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        
    },
    icon: {
        color:'#FF9982'
    },
    title:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 20,
        fontWeight: "900"
    }
});


export default AppBar;