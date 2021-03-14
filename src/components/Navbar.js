import React from "react";


export default class Navbar extends React.Component{

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
        {!this.props.order ?
        <div>
          <h4>Find</h4>
          <div className="foods">
            {items && items.map((item) => {
              return (
                <span
                  className="food-images"
                  key={item.name}
                  onClick={(event) => this.props.onOrder(event,'nyc', item.name)}
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
            {this.props.cafes[0].name}
            <br/>
            {this.props.cafes[0].location.display_address}
            <br/>
            {this.props.cafes[1].name}
            <br/>
            {this.props.cafes[1].location.display_address}
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


