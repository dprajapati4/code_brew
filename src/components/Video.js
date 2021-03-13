import React from "react";
import ReactPlayer from 'react-player'

export default class Video extends React.Component {
  render() {
    return (
      <div className="video-background">
    <div className="video-foreground">
    <ReactPlayer
        url={this.props.video.url}
        playing={true}
        controls={false}
        muted={true}
        config={{
          youtube: {
            playerVars: { playerVars: {
              rel: 0,
              autoplay: 1,
              showinfo: 0,
              controls: 0,
              playsinline: 1
            } }
          }
        }}
          />
    </div>
  </div>

    )
  }
}