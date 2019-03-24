/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Button from './src/components/Button'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , TextInput} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Mai Ismail Abu Muaileq</Text>
        <Text style={styles.txt}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
          <Text style={styles.txt}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter Password" />
        <Button/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AA9FB1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    margin: 5,
  },
  input: {
      backgroundColor: '#B5BEC6',
      width: 200,
      height: 40,
      margin: 5,
      borderRadius:10,
  },
});
