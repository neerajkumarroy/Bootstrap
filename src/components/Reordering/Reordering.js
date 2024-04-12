import React from "react";
import "../Reordering/Reordering.css";

const Reordering = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col order-md-last orange ">col1</div>
        <div className="col red">col2</div>
        <div className="col green order-md-first">col3</div>
        <div className="col pink ">col4</div>
      </div>
    </div>
  );
};

export default Reordering;
