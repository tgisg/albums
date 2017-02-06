/* eslint max-len: "off" */
// cant destructure out component library and get rid of react because when babel turns jsx into javascript it is turning jsx into react.createElement calls
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  // the state = {} is identical to saying getInitialState. can do state = something because this is initializing, but wouldn't do this.state = something ever
  state = { albums: [] };
  // at this point could do this.state.albums which returns empty array

  //note that it is probably more appropriate to use componentDidMount here
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
  // helper method to make album items
  // when trying to render Js object in react, must wrap object in curly braces
  renderAlbums() {
    return this.state.albums.map(album =>
      //in real life would make the key an id but this tutorial doesn't have that
      //inside of the curly braces you make the variable name, and album in orange is the property name. there is no connection between the two, could name the prop whatever, not bad practice to name them the same though
      <AlbumDetail key={album.title} album={album} />
    );
  }
  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
