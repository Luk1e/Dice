import React from "react";
import "./Panel.css";

function Panel(props) {
  const item = (index, player) => (
    <div  className={(Object.keys(player)[0]==Object.keys(props.currentPlayer)[0])? "currentPlayer-border Player" : "Player"} key={index}>
      <h1  className={(Object.keys(player)[0]==Object.keys(props.currentPlayer)[0])? "currentPlayer-color" : ""} >
        {Object.keys(player)[0]}: {Object.values(player)[0]}
      </h1>
    </div>
  );
  return (
    <>
      <div className="Panel">
        {props.players.map((player, index) => item(index, player))}
      </div>
    </>
  );
}

export default Panel;
