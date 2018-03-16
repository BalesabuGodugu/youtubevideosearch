import React, { Component } from "react";
import _ from 'lodash';
import { render } from "react-dom";
import searchYouTube from "youtube-api-search";
import Searchbar from "./Searchbar";
import VideoList from "./video_list";
import VideoDetails from './video_detail';

const API_KEY = "AIzaSyBFZLjd9yMe1Z4WkOetnuQNDeC6hIBKN4g";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo:null
    };
    this.videoSearch('react.js');
  }
  videoSearch(term){
    searchYouTube({ key: API_KEY, term: term, maxResults: 10 }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
    
    return (
      <div >
    
        <div className="container">
        <Searchbar onSearchTeamChange={videoSearch}/>
        <div className="row">
        <VideoDetails
        
         video={this.state.selectedVideo}/>
        <VideoList  
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        videos={this.state.videos}/>
      </div>
    </div>
    </div>
    );
  }
}

render(<App />, document.getElementById("root"));
