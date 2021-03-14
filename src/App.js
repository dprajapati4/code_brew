import Video from "./components/Video";
import Navbar from "./components/Navbar";
import React from "react";

import data from "./data/video-data";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      currVideo: "",
      orderItems: [],
    };
    this.getVideo = this.getVideo.bind(this);
  }

  async componentDidMount() {
    this.setState({
      videos: data,
      currVideo: data[3],
    });
  }
  getVideo(event, video) {
    event.preventDefault();
    this.setState({
      currVideo: video,
    });
  }

  render() {
    console.log("this is app state", this.state);
    return (
      <div className="App">
        <Video video={this.state.currVideo} />
        <div className="navbar">
          <Navbar
            videos={this.state.videos}
            getVideo={this.getVideo}
            items={this.state.orderItems}
          />
        </div>
      </div>
    );
  }
}
