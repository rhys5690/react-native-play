/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Text } from 'react-native';

 class myPlayground extends Component {
   render() {
     return (
       <Text>Hello world!</Text>
     );
   }
 }

 AppRegistry.registerComponent('myPlayground', () => myPlayground);
