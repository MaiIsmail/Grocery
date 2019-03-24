import React from 'react';
import {View,Image,TextInput,StyleSheet} from 'react-native'

const Input = ({imgSrc, placeholder ,Value , onChangeText,secureTextEntry})=>{
    return(
        <View style={styles.container}>
            <TextInput
                placeholder ={placeholder}
                placeholderTextColor ={'#000'}
                outoCorrect={false}
                value={Value}
                style={styles.input}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        height:40,
    },
    input: {
        color:'#000',
        fontSize:16,
        marginLeft:15,
        marginRight:20,
        lineHeight:20,
        flex:2,
        borderBottomWidth:2,
        borderBottomColor:'#d0d0d0',
    },
    label: {
        fontSize:14,
        paddingLeft:5,
        flex:1,
    }
});

export {Input};