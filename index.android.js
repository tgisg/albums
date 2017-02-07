// Index.android.js place code in here for Android!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// when you make your own module you have to give relative path
// we might have modules named the same thing, packager needs to know which is which
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  // below is a self closing component, you are not adding text to your header component
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );

// Render it to the device
// not having curly braces is implicit return of App without having to use return()
AppRegistry.registerComponent('albums', () => App);
