import React from "react";

import {items} from '../data/item-data';
import { getData } from "../helper-function/getYelpData";

export default class Cafes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cafes: [],
      showCafes: false,
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
  }

  render() {
    return (
      <div>
        {!this.state.order ? (
          <div>
            <h4>Find</h4>
            <div className="foods">
              {items.map((item) => {
                  return (
                    <span
                      className="food-images"
                      key={item.name}
                      onClick={(event) => this.onOrder(event, "nyc", item.name)}
                    >
                      <img
                        src={item.imageUrl}
                        alt="food items "
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

            <div>
              {this.state.cafes[0].name}
              <br />
              {this.state.cafes[0].location.display_address}
              <br />
              {this.state.cafes[1].name}
              <br />
              {this.state.cafes[1].location.display_address}
            </div>
          </div>
        )}
      </div>
    );
  }
}
