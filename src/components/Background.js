import React from 'react';
import { ImageBackground } from 'react-native';

const Background = (props) => {
    const {children}=props;
    return(
        <ImageBackground
            source={require('../Images/back.png')}
            style={{width:'100%',height:'100%'}}
        >
            {children}
        </ImageBackground>
    );
};

export {Background};