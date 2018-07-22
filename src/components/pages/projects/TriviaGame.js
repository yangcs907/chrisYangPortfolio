import React from "react";

import TriviaGameSS1 from "./projectImages/TriviaGameSS1.png";
import TriviaGameSS2 from "./projectImages/TriviaGameSS2.png";

const TriviaGame = () => (
  <div className="projectContainer">
  <div className="projectPage">
    <div className="projectDesc">
      <h1>Trivia Game</h1>
      <p className="division">_________________</p>
      <h5>About</h5>
      <p>This is a personal project that I did early on during my time at the Georgia Tech Coding Bootcamp</p>
      <p>Created using HTML, CSS, JavasScript and jQuery</p>
      <h5>Technologies</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
      </ul>
      <h5>Visit</h5>
      <a href="https://yangcs907.github.io/TriviaGame/">Deployed Site</a>
    </div>
    <div className="projectIMG">
      <img src={TriviaGameSS1} alt="TriviaGame" />
      <img src={TriviaGameSS2} alt="TriviaGame2" />
    </div>
  </div>
</div>
);

export default TriviaGame;
