import React from 'react';
import "./App.sass";
import {SearchBar} from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import PlayList from "../PlayList/PlayList"

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {name:'name1',artist: 'artist1', album: 'album1', id:'id1'},
        {name:'name2',artist: 'artist1', album: 'album2', id:'id2'},
        {name:'name3',artist: 'artist1', album: 'album3', id:'id3'},
        {name:'name3',artist: 'artist1', album: 'album3', id:'id7'}

      ],
      playlistName: 'myPlayList',
      playlistTracks:[
        {name:'name3',artist: 'artist1', album: 'album4', id:'id4'},
        {name:'name4',artist: 'artist1', album: 'album5', id:'id5'},
        {name:'name5',artist: 'artist1', album: 'album6', id:'id6'}
      ]
    }
  }
  render(){
    document.title = 'Jamming'
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <PlayList playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}


