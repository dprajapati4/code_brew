import Video from "./components/Video";
import Navbar from "./components/Navbar";
import React from "react";


import data from "./data/video-data";
import getGeolocation from './helper-function/getGeolocation';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      currVideo: "",
      orderItems: [],
      coordinates:{} // TODO: add nyc coordinates as default
    };
    this.getVideo = this.getVideo.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  async setLocation(){
    const location = await getGeolocation();
    console.log("this is",location);
    if(location){
      const coordinates = { longitude: location.coords.longitude, latitude: location.coords.latitude };
      this.setState({coordinates});
    }
  }

async componentDidMount() {
  await this.setLocation();
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
    console.log("this is app state", this.state)
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
