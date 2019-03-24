import React from 'react';
import {I18nManager} from 'react-native';
import RootNavigator from './components/StackNavigatore';
import firebase from 'firebase';

class App extends React.Component{
    constructor(props) {
        super(props);
        I18nManager.forceRTL(true);
    }

    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDV3_71UAcU2YldlTspGUSLfZgQZRjcNXo",
            authDomain: "grocery-6e983.firebaseapp.com",
            databaseURL: "https://grocery-6e983.firebaseio.com",
            projectId: "grocery-6e983",
            storageBucket: "grocery-6e983.appspot.com",
            messagingSenderId: "506196954757"
        })
    }

    render(){
        return(
            <RootNavigator/>
        );
    }
}

export default (App);
