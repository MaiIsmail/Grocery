import React from 'react';
import {View,StyleSheet} from 'react-native'

const Container=(props) =>{
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:5,
        marginRight:5,
        marginTop:5,
    }
});

export {Container};