import Video from "./components/Video";
import Navbar from "./components/Navbar";
import React from "react";
// import 'semantic-ui-css/semantic.min.css'

import data from "./data/video-data";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      currVideo: "",
      orderItems: [],
    };
    this.changeVideo = this.changeVideo.bind(this);
  }

  async componentDidMount() {
    this.setState({
      videos: data,
      currVideo: data[3],
    });
  }

  changeVideo(video) {
    this.setState({
      currVideo: video,
    });
  }

  render() {
    return (
      <div className="App">
        <Video video={this.state.currVideo} />
        <div className="navbar">
          <Navbar
            videos={this.state.videos}
            changeVideo={this.changeVideo}
            currentVideo={this.state.currVideo}
            items={this.state.orderItems}
          />
        </div>
      </div>
    );
  }
}
