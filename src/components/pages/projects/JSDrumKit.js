import React from "react";

import DrumKit from "./projectImages/DrumKit.png";

const JSDrumKit = () => (
  <div className="projectPage">
    <div className="projectDesc">
      <h1>JS Drum Kit</h1>
      <p className="division">_________________</p>
      <h5>About</h5>
      <p>This is a personal project of mine, using ES6 Javascript, HTML and CSS to create an interactive drum kit. </p>
      <p>Simply press the keys on your keyboard to make drum kit sounds.</p>
      <h5>Technologies</h5>
      <ul>
        <li>ES6</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <h5>Visit</h5>
      <a href="https://yangcs907.github.io/JS-Drum-Kit/">Deployed Site</a>
    </div>
    <div className="projectIMG">
      <img src={DrumKit} alt="DrumKit" />
    </div>
  </div>
);

export default JSDrumKit;
