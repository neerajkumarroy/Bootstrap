import React from "react";
import "../Button/Button.css";
import logo2 from "../Image/assets/logo2.jpeg";
import logo3 from "../Image/assets/logo3.jpeg";
import logo4 from "../Image/assets/logo4.jpeg";
import logo5 from "../Image/assets/logo5.jpeg";
import logo6 from "../Image/assets/logo6.jpeg";
import logo7 from "../Image/assets/logo7.jpeg";

const Image1 = () => {
  return (
    <div className="container">
      <h2 className="py-3 text-center">Bootstrap Image and Video Classes</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            src={logo2}
            alt="Description of your image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4">
          <img
            src={logo3}
            alt="Description of your image"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-md-4">
          <img
            src={logo4}
            alt="Description of your image"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src={logo5}
            alt="Description of your image "
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-4">
          <img
            src={logo6}
            alt="Description of your image"
            className="img-fluid rounded-pill mt-5"
          />
        </div>
        <div className="col-md-4">
          <figure className="figure">
            <img
              src={logo7}
              alt="Description of your image"
              className="img-fluid figure-img mt-5"
            />
            <figcaption className="figure-caption text-end">
              These are Animal Image
            </figcaption>
          </figure>
        </div>
      </div>
      {/* ////---------------------This is Video Section----------------------////////// */}

      <div className="embed-responsive embed-responsive-16by9">
        <div className="row">
          <div className="col-md-4">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/0GOgPRxbcNc?rel=0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Image1;
