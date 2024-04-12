import React from "react";
import "../Horizontal-alignment/Horizontal.css";

const Vertical = () => {
  return (
    <div className="container">
      <div className="row align-items-start" style={{ height: "400px" }}>
        <div className="col-md-3 green">
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
          </p>
        </div>
        <div className="col-md-3 pink align-self-center">
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
          </p>
        </div>
        <div className="col-md-3 red">
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vertical;
