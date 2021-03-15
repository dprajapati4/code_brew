import React from "react";
import AudioPlayer from 'react-audio-player'

const music = [];

export default class MusicPlayer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playing:true,
      musicList: [],
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
    return(
      <div className="fl w-25">
      <h4> Pick your music </h4>
        <AudioPlayer src="https://18463.live.streamtheworld.com/METRO_FM.mp3" autoPlay={false} ref={(element) => { this.rap = element; }} />
        <button label="PAUSE" onClick={this.pause}> PAUSE </button>
        <button label="PLAY" onClick={this.play}> PLAY </button>
        <button label="previous" onClick={this.changeSong}> BACK </button>
        <button label="next" onClick={this.changeSong}> NEXT </button>

      </div>
    )
  }

}

// play pause
// next
//  previous