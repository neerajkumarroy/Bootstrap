import React from "react";
import "../Padding/Padding.css";

const Padding = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 p-auto pink">
          When using display: grid or display: flex, you can make use of gap
          utilities on the parent element. This can save on having to add margin
          utilities to individual children of a grid or flex container. Gap
          utilities are responsive by default, and are generated via our
          utilities API, based on the $spacers Sass map
        </div>
        <div className="col-md-4 orange pt-5">
          utilities to individual children of a grid or flex container. Gap
          utilities are responsive by default, and are generated via our
          utilities API, based on the $spacers Sass map
        </div>
      </div>
    </div>
  );
};

export default Padding;
