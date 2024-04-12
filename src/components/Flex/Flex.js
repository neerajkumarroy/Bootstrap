import React from "react";
import "../Flex/Flex.css";

const Flex = () => {
  return (
    <div className="container">
      <div className="row  ">
        <div className="col-md-3 green">
          <h1>Col-1</h1>
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
          </p>
        </div>
        <div className="col-md-3 pink d-none d-sm-block ">
          <h1>Col-2</h1>
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
          </p>
        </div>
        <div className="col-md-3 red">
          <h1>Col-3</h1>
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
          </p>
        </div>
        <div className="col-md-3 blue">
          <h1>Col-4</h1>
          <p>
            The base .nav component is built with flexbox and provide a strong
            foundation for building all types of navigation components. It
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flex;
