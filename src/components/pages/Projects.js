import React from "react";


const Projects = () => (
  <div>
    <div className="home">
      <h1>Chris Yang</h1>
      <p>___________________________</p>
      <p className="subHead">Web Developer      |      <a href="https://github.com/yangcs907"><i className="fab fa-github"></i></a>     |     <a href="https://www.linkedin.com/in/chris-yang-53a66636/">
            <i className="fab fa-linkedin"></i>
            </a>
      </p>
    </div>
    <div className="pageHead">
      <h1>Projects</h1>
      <p className="division">_____________</p>
    </div>
    <div className="projectCard">
      <h4>Order Up</h4>
      <a href="/projects/OrderUp">
      <img src="./images/orderUpSS1.png" alt="orderUp1" />
      </a>
      <p>A restaurant app that manages orders and menu items</p>
    </div>
    <div className="projectCard">
      <h4>Gif World</h4>
      <a href="/projects/GifWorld">
      <img src="./images/GifWorldSS1.png" alt="Gifworld" />
      </a>
      <p>A simple gif search app using the giphy API</p>
    </div>
    <div className="projectCard">
      <h4>JS Drum Kit</h4>
      <a href="/projects/DrumKit">
      <img src="./images/DrumKit.png" alt="DrumKit" />
      </a>
      <p>Neat little interactive drum kit site. Use your keyboard to create sounds!</p>
    </div>
    <div className="projectCard">
      <h4>Trivia Game</h4>
      <a href="/projects/TriviaGame">
      <img src="./images/TriviaGameSS1.png" alt="TriviaGame" />
      </a>
      <p>Simple timed trivia game</p>
    </div>
  </div>
);

export default Projects;
