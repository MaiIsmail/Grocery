import {StyleSheet, Text, TouchableOpacity,View } from 'react-native'
import React,{Component} from 'react';

const SignUpBtn = ({title,onPress}) => {
    return(
        <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.txt} >{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 80,
        height: 35,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        borderRadius: 0.5,
        borderBottomColor:'#000',
        borderBottomWidth:1,
        borderStyle: 'dotted',

    },
    txt: {
        color:'#000',
        fontSize:18,
        // fontFamily: 'Cairo-Regular',
        fontWeight:'bold',
    },
});

export {SignUpBtn};