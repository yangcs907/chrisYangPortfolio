import React from 'react';

import orderUpSS1 from "./projectImages/orderUpSS1.png";
import orderUpSS2 from "./projectImages/orderUpSS2.png";


const OrderUp = () => (
  <div className="projectContainer">
    <div className="projectPage">
      <div className="projectDesc">
        <h1>Order Up</h1>
        <p className="division">_________________</p>
        <h5>About</h5>
        <p>This is a full stack web application that I worked on with a group during my time at the Georgia Tech
          Coding Bootcamp. </p>
        <p>A simple app that helps a restaurant manage orders as well as update inventory and menu items. </p>
        <h5>Technologies</h5>
        <ul>
          <li>ReactJS</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>ExpressJS</li>
          <li>NodeJS</li>
          <li>Auth0</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <h5>Visit</h5>
        <a href="https://orderup-restaurant-app.herokuapp.com/">Deployed Site</a>
      </div>
      <div className="projectIMG">
        <img src={orderUpSS1} alt="orderup1" />
        <img src={orderUpSS2} alt="orderup1" />
      </div>
    </div>
  </div>
);


export default OrderUp;
