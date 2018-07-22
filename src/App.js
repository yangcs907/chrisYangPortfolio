import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import OrderUp from "./components/pages/projects/OrderUp";
import GifWorld from "./components/pages/projects/GifWorld";
import JSDrumKit from "./components/pages/projects/JSDrumKit";
import TriviaGame from "./components/pages/projects/TriviaGame";
const App = () => (
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects/OrderUp" component={OrderUp} />
      <Route path="/projects/GifWorld" component={GifWorld} />
      <Route path="/projects/DrumKit" component={JSDrumKit} />
      <Route path="/projects/TriviaGame" component={TriviaGame} />
    <div className="footer">
      <Footer />
    </div>
  </div>
  </Router>
);

export default App;
