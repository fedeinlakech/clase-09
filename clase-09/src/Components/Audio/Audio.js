import React, { Component } from "react";
import "./Audio.css";
import audio from "../../assets/audios/Incas.mp3";

export default class Audio extends Component {
  render() {
    return (
      <div className="Audio">
        <p>Componente: Audio</p>
        <audio controls>
          <source
            src={audio}
            type="audio/mpeg"
          />
        </audio>
      </div>
    );
  }
}
