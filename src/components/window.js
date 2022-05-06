import React from "react";
import "./window.css";

function Window(props) {
  let playerNumber = 0;

  // STARTS GAME +  PASSES NUMBER OF PLAYERS

  function start() {
    playerNumber = document.getElementById("player-number").value;
    isNaN(playerNumber) || playerNumber > 4 || playerNumber < 1 
      ? alert("Maximum 4 Players")
      : (document.getElementById("Players").style.display = "none");
    props.handleClick(playerNumber);
  }

  return (
    <div className="window-container" id="Players">
      <div className="window">
        <h1>HELLO PLAYERS</h1>
        <label htmlFor="player-number">
          CHOOSE NUMBER OF PLAYERS{" "}
          <h2 className="black-text">(MAXIMUM 4 PLAYERS)</h2>
          <input type="text" id="player-number" />
        </label>
        <button
          onClick={() => {
            start();
          }}
        >
          START
        </button>
      </div>
    </div>
  );
}

export default Window;
