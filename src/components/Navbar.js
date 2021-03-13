import React from "react";
import data from "../data/video-data";

const Navbar = (props) => {
  const videos = data;
  return (
    <div id="container">
      <h1>Cafe Code Brew</h1>
      <div className="navbar-container">
        <div className="categorys">
          <h4> Pick your cafe </h4>
          {videos.map((video) => {
            return (
              <button
                onClick={(event) => props.getVideo(event, video)}
                type="submit"
                key={video.title}
              >
                {video.title}
              </button>
            );
          })}
          <p> Find </p>
          <button>Cookie</button>
          <div className="coffee-cup">
            <img
              src="http://clipart-library.com/images/di48x8LAT.jpg"
              alt="coffee cup"
              width="50"
              height="50"
            />
          </div>
          <br/>
          <p> Cake </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
