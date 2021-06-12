import React from 'react';
import "./App.sass";
import {SearchBar} from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import PlayList from "../PlayList/PlayList"
import Sportify from '../../util/Spotify';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'myPlayList',
      playlistTracks:[]
    }
  }

  // Use the track’s id property to check if the current song is in the playlistTracks state.
  // If the id is new, add the song to the end of the playlist.
  // Set the new state of the playlist
  addTrack = (track) =>{
    let tracks = this.state.playlistTracks;
    if(tracks.find(saveTrack => saveTrack.id === track.id)){
      return;
    }
    else{
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }
  
  removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(current => current.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName = (name) => {
    this.setState({playlistName: name});
  }

  savePlaylist = () =>{
    alert('success!');
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Sportify.savePlayList(this.state.playlistName,trackUris).then(()=>{
      this.setState({
        playlistName: 'New PlayList',
        playlistTracks: []
      })
    })
  }

  search = (term) =>{
    Sportify.search(term).then(searchResults => {
      this.setState({searchResults : searchResults});
    })
  }

  render(){
    document.title = 'Jamming'
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <PlayList playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlaylist}
                    onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

// https://open.spotify.com/track/0tSV3MPn8u8GlgQyraIFQ9?si=52facc58d9b44f63
