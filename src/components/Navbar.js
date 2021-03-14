import React from "react";
import { getData } from "../helper-function/getYelpData";

export default class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cafes:[],
      order:""
    }
    this.onBack = this.onBack.bind(this)
    this.onOrder = this.onOrder.bind(this)
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


  onBack(event){
    event.preventDefault()
    this.setState({
      order:false
    })
    console.log('in the back', this.state)
  }

  render (){
  const videos = this.props.videos;
  const items = this.props.items

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
        <div className="order">
        {!this.state.order ?
        <div>
          <h4>Find</h4>
          <div className="foods">
            {items && items.map((item) => {
              return (
                <span
                  className="food-images"
                  key={item.name}
                  onClick={(event) => this.onOrder(event,'nyc', item.name)}
                >
                  <img
                    src={item.imageUrl}
                    alt="coffee cup"
                    width="50"
                    height="50"
                  />
                </span>
              );
            })}
          </div>
          </div> :
          <div>
            <button onClick={(event)=>{this.onBack(event)}}>Find Somthing Else</button>
            {this.state.cafes[0].name}
            <br/>
            {this.state.cafes[0].location.display_address}
            <br/>
            {this.state.cafes[1].name}
            <br/>
            {this.state.cafes[1].location.display_address}
          </div>}
          <div className="coffee-cup">
            <img
              src="http://clipart-library.com/images/di48x8LAT.jpg"
              alt="coffee cup"
              width="50"
              height="50"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
}


