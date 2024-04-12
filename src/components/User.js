//Container , Row , Col , Grid ,
import React from "react";
import "./bootstrap.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="container">
      <div className="row" id="navbar">
        <div className="col-12">
          <p>Website Name</p>
        </div>
      </div>
      <div className="row" id="menue">
        <div className="col-12">
          <ul>
            <li>
              <Link to="/home">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              <Link to="/help">Help</Link>{" "}
            </li>
            <li>
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className=" col-md-3" id="sidebar">
          <ul>
            <li>
              <Link to="/home">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              <Link to="/help">Help</Link>{" "}
            </li>
            <li>
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>
        <div className=" col-md-6" id="content">
          <h3>sub Heading</h3>
          <p>
            Redux is an open-source JavaScript library used for managing the
            state of an application. It is commonly used with libraries like
            React or Angular for building user interfaces. Redux follows the
            principles of Flux architecture, providing a predictable state
            container that helps to manage the state of an entire application in
            a single immutable state tree.
          </p>
        </div>
        <div className="col-md-3" id="sidebar">
          <ul>
            <li>
              <Link to="/home">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              <Link to="/help">Help</Link>{" "}
            </li>
            <li>
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="row" id="footer">
        <div className="col-12">
          <p>Copyright © 2024 FTECHIZ | All Rights Reserved |</p>
        </div>
      </div>
    </div>
  );
};

export default User;
