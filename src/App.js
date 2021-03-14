import Video from "./components/Video";
import Navbar from "./components/Navbar";
import React from "react";
import data from "./data/video-data";
import {items} from "./data/item-data"
import { getData } from "./helper-function/getYelpData";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      currVideo: "",
      orderItems: [],
      cafes:[],
      order:""
    };
    this.getVideo = this.getVideo.bind(this);
    this.onOrder = this.onOrder.bind(this)
  }
  componentDidMount() {
    this.setState({
      videos: data,
      currVideo: data[3],
      order:false,
      orderItems: items

    });
  }
  getVideo(event, video) {
    event.preventDefault();
    this.setState({
      currVideo: video,
    });
  }

  async onOrder(event, location, item) {
    try {
      event.preventDefault();
      const cafeData= await getData(location, item);
      this.setState({
        order: true ,
       cafes:cafeData.data.businesses
     })

    } catch (error) {
      console.log('Error in getting yelp data', error)
    }

  }

  render() {
    return (
      <div className="App">
        <Video video={this.state.currVideo} />
        <div className="navbar">
          <Navbar
           videos={this.state.videos}
           getVideo={this.getVideo}
           items={this.state.orderItems}
           order={this.state.order}
           onOrder={this.onOrder}
           cafes={this.state.cafes}
           />
        </div>
      </div>
    );
  }
}
