// Index.ios.js place code in here for IOS!!!

// Import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';

// Create a component
const App = () => {
  return (
    <Text>Some Content</Text>
  );
};

// Render it to the device
// not having curly braces is implicit return of App without having to use return()
ReactNative.AppRegistry.registerComponent('albums', () => App);
