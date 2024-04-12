import React from "react";
import "../Margin/Margin.css";

const Margin = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 orange m-md-auto">
          <p>
            Redux is an open-source JavaScript library used for managing the
            state of an application. It is commonly used with libraries like
            React or Angular for building user interfaces. Redux follows the
            principles of Flux architecture, providing a predictable state
            container that helps to manage the state of an entire application in
            a single immutable state tree.
          </p>
        </div>
        <div className="col-sm-3 red ">
          <p>
            Redux is an open-source JavaScript library used for managing the
            state of an application. It is commonly used with libraries like
            React or Angular for building user interfaces. Redux follows the
            principles of Flux architecture, providing a predictable state
            container that helps to manage the state of an entire application in
            a single immutable state tree.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Margin;
