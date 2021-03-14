import Video from "./components/Video";
import Navbar from "./components/Navbar";
import React from "react";
import data from "./data/video-data";
import items from "./data/item-data"
import { getData } from "../helper-function/getYelpData";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      currVideo: "",
      orderItems: [],
      order:false,
    };
    this.getVideo = this.getVideo.bind(this);
    this.onOrder = this.onOrder.bind(this)
  }
  componentDidMount() {
    this.setState({
      videos: data,
      currVideo: data[3],
      orderItems: items

    });
  }
  getVideo(event, video) {
    event.preventDefault();
    this.setState({
      currVideo: video,
    });
  }

  onOrder(event, location, item) {
    event.preventDefault();
    getData(location, item);
    this.setState({ order: true });
  }

  render() {
    return (
      <div className="App">
        <Video video={this.state.currVideo} />
        <div className="navbar">
          <Navbar
           videos={this.state.videos}
           getVideo={this.getVideo}
           onOrder={this.onOrder}
           />
        </div>
      </div>
    );
  }
}
