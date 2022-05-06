import React from "react";
import "./Winner.css"

function Winner(props) {
   function  RELOAD(){
        window.location.reload();
    }
  return (
    <div className="winner-container" style={{ display: props.display }}>
      <div className="winner-window">
      <h1>Winner!</h1>
      <h2>{props.name}</h2>
      <button className="winner-button" onClick={RELOAD}>PLAY AGAIN</button>
      </div>
    </div>
  );
}

export default Winner;
