import React from "react";

import { getData } from "../helper-function/getYelpData";
import Invite from './Invite';
import Cafes from './Cafes';
import MusicPlayer from "./MusicPlayer";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cafes: [],
      order: "",
    };
    this.onBack = this.onBack.bind(this);
    this.onOrder = this.onOrder.bind(this);
  }

  async onOrder(event, location, item) {
    try {
      event.preventDefault();
      const cafeData = await getData(location, item);
      this.setState({
        order: true,
        cafes: cafeData.data.businesses,
      });
    } catch (error) {
      console.log("Error in getting yelp data", error);
    }
  }

  onBack(event) {
    event.preventDefault();
    this.setState({
      order: false,
    });
    console.log("in the back", this.state);
  }

  render() {
    const videos = this.props.videos;
    return (
      <div id="container">
        <h1>Cafe Code Brew</h1>
        <div className="navbar-container">
          <div className="categorys">
            <h4> Pick your cafe </h4>
            {videos.map((video) => {
              return (
                <button
                  onClick={(event) => this.props.getVideo(event, video)}
                  type="submit"
                  key={video.title}
                >
                  {video.title}
                </button>
              );
            })}
          </div>
          <MusicPlayer />
            <Cafes />
          <div className="coffee-cup">
           <Invite />
          </div>
        </div>
      </div>
    );
  }
}
