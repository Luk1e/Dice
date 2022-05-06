import React from "react";

import "./Error.css";

//  ERROR PAGE

function Error(props) {
  return (
    <div className="Error-container">
      <div className="error">
        <h1 className="Error-h1 Err2"> S O R R Y </h1>
        <h1 className="Error-h1 ">
          {props.width} x {props.height}{" "}
        </h1>

        <h2 className="Error-h2">YOUR RESOLUTION IS NOT SUPPORTED</h2>
        <h2 className="Error-h2">AT LEAST 1200 x 1080 RESOLUTION IS REQUIRED</h2>
      </div>
    </div>
  );
}

export default Error;
