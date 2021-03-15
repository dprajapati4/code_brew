import React from "react";
import AudioPlayer from 'react-audio-player'

import data from '../data/music-data';

export default class MusicPlayer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playing:true,
      musicList: data,
      position: 0
    }
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.changeSong = this.changeSong.bind(this);
  }

  pause(event){
    event.preventDefault();
    this.rap.audioEl.current.pause();
  }

  play(event){
    event.preventDefault();
    this.rap.audioEl.current.play();
  }
  changeSong(event){
    event.preventDefault();
    const music = this.state.musicList;
    let position = this.state.position;

    if(event.target.name === "previous"){
      position = position - 1;
      if(position < 0){
        position = music.length=1;
      }
    }
    else{
      position = position+1;
      if(position > music.length-1){
        position = 0;
      }
    }
    this.setState({position});
  }

  render(){
    const {musicList, position} = this.state;
    const currentSong = musicList[position];
    return(
      <div className="fl w-25">
      <h4> Pick Your Music </h4>
        <AudioPlayer src={currentSong.url} autoPlay loop ref={(element) => { this.rap = element; }} />
        <button label="previous" onClick={this.changeSong}> {"<"} </button>
        <button label="pause" onClick={this.pause}> PAUSE </button>
        <button label="play" onClick={this.play}> PLAY </button>
        <button label="next" onClick={this.changeSong}> {">"} </button>
        <div> {currentSong.title} </div>
      </div>
    )
  }

}