import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{ name: '',artist: '', album: ''}],
      playlistName: 'Hot Fire',
      playlistTracks: [{ name: '',artist: '', album: ''}]
    };
      this.addTrack = this.addTrack.bind(this);
     }


     addTrack(track){
       if(!this.state.playlistTracks.includes(track))
       {
         let tracks = this.state.playlistTracks;
         tracks.push(track);
         this.setState({playlistTracks: tracks});
       }
     }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
         <div className="App-playlist">
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}/>
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks = {this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
