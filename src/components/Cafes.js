import React from "react";

import SingleCafe from './SingleCafe';

import { items } from "../data/item-data";
import { yelpData } from "../data/temp_yelp_data";
import { getData } from "../helper-function/getYelpData";
import getGeolocation from "../helper-function/getGeolocation";

export default class Cafes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cafes: [],
      showCafes: false,
      loadingCafes: false,
      coordinates: { latitude: "40.730610", longitude: "74.0060" },
    };

    this.onBack = this.onBack.bind(this);
    this.onOrder = this.onOrder.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  async setLocation() {
    const location = await getGeolocation();
    if (location) {
      const coordinates = {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      };
      this.setState({ coordinates });
    }
  }

  async onOrder(event, item) {
    this.setState({loadingCafes:true})
    try {
      event.preventDefault();
      await this.setLocation();
      const cafeData = await getData(this.state.coordinates, item);
      this.setState({
        order: true,
        cafes: cafeData.data.businesses,
        loadingCafes: false
        // cafes: yelpData.businesses
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
  }

  render() {
    const {cafes, loadingCafes} = this.state;
    return (
      <div className="fl w-25">
        {!this.state.order ? (
          <div>
            <h4>Find Your Snack</h4>
            <div className="foods">
            {loadingCafes && <div> Finding locations near you :D</div>}
              {items.map((item) => {
                return (
                <img key={item.name} onClick={(event) => this.onOrder(event, item.name)} src={item.imageUrl} className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"/>
              );
              })}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={(event) => {
                this.onBack(event);
              }}
            >
              Find Something Else
            </button>
            <div className="cafe-list">
            {cafes.map(cafe => <SingleCafe key={cafe.id} cafe={cafe}/>)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
