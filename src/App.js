import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = 'AIzaSyBFCpYfnDvUnEb7Rc8IhndNneQQyuvSWdg';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo: null,
        };

        this.videoSearch('Adidas')

    }

    selectedVideo = (selectedVideo) => {
      this.setState({
          selectedVideo
      })
    };

    videoSearch = (term) => {

        YTSearch({key:API_KEY, term:term}, (videos)=>{
            this.setState({
                videos,
                selectedVideo: videos[0],
            })
        });

    };


  render() {
        let {videos, selectedVideo} = this.state;

        const videoSearch = _.debounce((term)=>{
            this.videoSearch(term)
        }, 300);

    return (
      <section>
          <SearchBar onSearchTermChange={videoSearch} />

          <div className={"row paddingSection"}>
              <VideoDetail video={selectedVideo} />
              <VideoList
                  onVideoSelect={(selectedVideo)=>this.selectedVideo(selectedVideo)}
                  videos={videos} />
          </div>

      </section>
    );
  }
}

export default App;
