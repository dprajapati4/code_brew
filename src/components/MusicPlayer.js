import React from "react";
import AudioPlayer from 'react-audio-player'

export default class MusicPlayer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playing:true,
      musicList: []
    }
    // this.pause = this.pause.bind(this);
  }


  render(){
    console.log("THATS", this.rap);
    return(
      <div className="music-player">
      <h4> Pick your music </h4>
        <AudioPlayer src="http://node-24.zeno.fm/60ef4p33vxquv?rj-ttl=5&rj-tok=AAABcfD5im8AKkQwULjleajGRg" autoPlay ref={(element) => { this.rap = element; }} />
        <button label="PAUSE" onClick={(event) => this.rap.props.onPause(event)}/>
        <button label="PLAY" onClick={(event) => this.rap.props.onPlay(event)}/>

      </div>
    )
  }

}

// play pause
// next
//  previous