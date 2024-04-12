import React from "react";
import { Link } from "react-router-dom";
import "../Button/Button.css";

const Navbar = () => {
  return (
    <div className="container mb-5">
      <h2 className="text-center my-4">Bootstrap Navbar Classes</h2>
      <div className="row">
        <div className="col mb-3">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img
              style={{ width: "35px", height: "35px" }}
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            ></img>
            <Link to="/logo" className="navbar-brand">
              Company Logo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                {/* ////-----------------------------------------------/// */}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/help"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Help
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="link1">
                        Link1
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="link2">
                        Link2
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="link3">
                        Link3
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="link4">
                        Link4
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* ////-----------------------------------------------/// */}
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="form-inline flex-end me-sm-2" action=" ">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                ></input>
              </form>
              <button className="btn btn-outline-success my-2 my-sm-0">
                {" "}
                Search
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
