import React from "react";
import "../Nesting/Nesting.css";

const Nesting = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 pink">
          <h2>First Heading Here</h2>
          <div className="row red">
            <div className="col-6">
              <h2> Sub Heading Here</h2>
              <p>
                Redux is an open-source JavaScript library used for managing the
                state of an application. It is commonly used with libraries like
                React or Angular for building user interfaces. Redux follows the
                principles of Flux architecture, providing a predictable state
                container that helps to manage the state of an entire
                application in a single immutable state tree.
              </p>
            </div>
            <div className="col-6">
              <h2> Sub Heading Here</h2>
              <p>
                Redux is an open-source JavaScript library used for managing the
                state of an application. It is commonly used with libraries like
                React or Angular for building user interfaces. Redux follows the
                principles of Flux architecture, providing a predictable state
                container that helps to manage the state of an entire
                application in a single immutable state tree.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nesting;
