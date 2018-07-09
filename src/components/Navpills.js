import React from "react";
import { Link } from "react-router-dom";
import "./pages/index.css"

const Navpills = () => (
  <div className="navpills">
    <ul className="nav nav-tabs">
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/about">Resumé</Link>
      </li>
      <li>
      <Link to="/projects">Projects</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
);

export default Navpills;
