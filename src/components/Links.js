import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'

const Links = ({linkName})=> {
    return(
        <View>
            <TouchableOpacity style={styles.link}>
                <Text style={styles.txt} >{linkName}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    link: {
        paddingTop:30,
    },
    txt: {
        fontSize:16,
    }
});

export {Links};