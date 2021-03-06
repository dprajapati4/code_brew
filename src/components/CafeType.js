import React from "react";
import data from '../data/video-data';

export default class CafeType extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const videoObj = data.find((video)=> video.title === event.target.value );
    this.props.changeVideo(videoObj);
  }


  render() {
    const {currentVideo} = this.props;
    return (
      <div className="fl w-25">
        <h4> Pick Your Cafe </h4>
        <label>
          {/* Pick your favorite flavor: */}
          <select value={currentVideo.title} onChange={this.handleChange}>
            {data.map(video => <option key={video.title} value={video.title}>{video.title}</option>
            )}
          </select>
        </label>
        <div>

        <a href={currentVideo.url} target="_blank" rel="noreferrer">
        Video Source
        </a>
        </div>


      </div>
    );
  }
}