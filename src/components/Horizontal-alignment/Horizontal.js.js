import React from "react";
import "../Horizontal-alignment/Horizontal.css";

const Horizontal = () => {
  return (
    <div className="container">
      <div className="row justify-content-column  flex-column ">
        <div className="col-md-3 green">
          <h1>Col A</h1>
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
            includes some style overrides (for working with lists), some link
            padding for larger hit areas, and basic disabled styling.
          </p>
        </div>
        <div className="col-md-3 pink">
          <h1>Col B</h1>
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
          </p>
        </div>
        <div className="col-md-3 orange">
          <h1>Col C</h1>
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
            includes some style overrides (for working with lists), some link
            padding for larger hit areas, and basic disabled styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
