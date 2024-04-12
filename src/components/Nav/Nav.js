import React from "react";
import { Link } from "react-router-dom";
import "../Button/Button.css";

const Nav = () => {
  return (
    <div className="container mt-5">
      <h2 className="mt-3 text-center">Bootstrap Nav classes</h2>
      <div className="row py-3">
        <div className="col">
          <ul className="nav nav-pills nav-justified">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col py-2">
          <div className="nav">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link " to="/help">
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
