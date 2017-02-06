// Index.android.js place code in here for Android!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
// when you make your own module you have to give relative path
// we might have modules named the same thing, packager needs to know which is which
import Header from './src/components/Header';

// Create a component
const App = () => (
  // below is a self closing component, you are not adding text to your header component
  <Header headerText={'Albums'} />
  );

// Render it to the device
// not having curly braces is implicit return of App without having to use return()
AppRegistry.registerComponent('albums', () => App);
