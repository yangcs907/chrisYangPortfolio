import React, { Component } from "react";
import "./pages/index.css"

class Navpills extends Component {
    render() {
      return(
    <nav className="nav-wrapper">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Resumé</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
  </nav>
  )
  }
};

export default Navpills;
