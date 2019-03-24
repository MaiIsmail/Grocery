import {StyleSheet, Text, TouchableOpacity,View } from 'react-native'
import React,{Component} from 'react';

const Button = ({title, onPress, online}) => {
    return(
        <View>
            <TouchableOpacity style={[styles.btn,{backgroundColor:online?'#fff':'#1ADCAF'}]} onPress={onPress}>
                <Text style={[styles.txt,{color:online?'#1ADCAF':'#fff'}]} >{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 140,
        height: 35,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        marginTop:10,
        borderRadius:20,
        borderColor:'#1ADCAF',
        borderWidth:1,

    },
    txt: {
        fontSize:18,
        fontWeight:'bold',
    },
});

export {Button};