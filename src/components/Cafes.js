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
    try {
      event.preventDefault();
      await this.setLocation();
      // const cafeData = await getData(this.state.coordinates, item);
      this.setState({
        order: true,
        // cafes: cafeData.data.businesses,
        cafes: yelpData.businesses
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
    console.log("_____CAFE STATE_____", this.state);
    const {cafes} = this.state;
    return (
      <div className="order">
        {!this.state.order ? (
          <div>
            <h4>Find</h4>
            <div className="foods">
              {items.map((item) => {
                return (
                  <span
                    className="food-images"
                    key={item.name}
                    onClick={(event) => this.onOrder(event, item.name)}
                  >
                    <img
                      src={item.imageUrl}
                      alt="food items"
                      width="50"
                      height="50"
                    />
                  </span>
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
              Find Somthing Else
            </button>
            <div className="cafe-list">
            {cafes.map(cafe => <SingleCafe cafe={cafe}/>)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
