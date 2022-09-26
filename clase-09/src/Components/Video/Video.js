import React, { Component } from "react";
import "./Video.css";
import video from "../../assets/videos/GolTigre.mp4";

export default class Video extends Component {
  render() {
    return (
      <div className="Video">
        <p>Componente: Video</p>
        <video controls>
          <source
            src={video}
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}
