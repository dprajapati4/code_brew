import Video from "./components/Video";
import Navbar from "./components/Navbar";
import React from "react";
import data from './data/video-data';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      currVideo: "",
      order:false,
    }
    this.getVideo = this.getVideo.bind(this)
  }
  componentDidMount() {
    this.setState({
      videos:data,
      currVideo:data[3]
       });

  }
  getVideo(event, video){
    event.preventDefault()
    this.setState({
      currVideo:video
    })
  }

  onOrder(event){}

  render() {
    return (
      <div className="App">
        <Video video={this.state.currVideo} />
        <div className="navbar">
        <Navbar
        videos={this.state.videos}
        getVideo={this.getVideo}
        />
        </div>
      </div>
    );
  }
}


