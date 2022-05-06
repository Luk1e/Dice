import React, { useState } from "react";

import "./Table.css";
import Winner from "../Winner/Winner";
import Play from "../sound/Play";

function Table(props) {
  // STATES

  const [points, setPoints] = useState(0);
  const [diceone, setdiceOne] = useState(0);
  const [dicetwo, setdiceTwo] = useState(0);
  const [display, setDisplay] = useState("none");
  const [end, setEnd] = useState(false);

  // RUN WINNER

  function WINNER(currPoints) {
    let savedPoints = props.currentPlayer[Object.keys(props.currentPlayer)[0]];
    // IF POINTS 100
    if (currPoints + savedPoints >= 50) {
      Play("winner");
      // STOP BUTTONS
      setEnd(true);
      // AFTER 1 SECOND RUN WINNER WINDOW
      setTimeout(() => {
        setDisplay("flex");
      }, 1000);
    }
  }

  // ROLL

  function ROLL() {
    Play("dice");
    document.getElementById("ROLL").classList.remove("BIG");

    if (!end) {
      //current rolled dices
      document.getElementById("Turn").style.color = "white";
      let dice1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      let dice2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      setdiceOne(dice1);
      setdiceTwo(dice2);
      if (dice1 === 1 || dice2 === 1) {
        Play("loss");
        setPoints(0);
        props.playerChanger();
        document.getElementById("Turn").style.color = "black";
        document.getElementById("ROLL").classList.add("BIG");
      } else {
        WINNER(dice1 + dice2 + points);
        setPoints(points + dice1 + dice2);
      }
    }
  }
  //HOLD
  function HOLD() {
    props.holder(points);
    setPoints(0);
    Play("save");
    props.playerChanger();
    document.getElementById("Turn").style.color = "green";
    document.getElementById("ROLL").classList.add("BIG");
  }

  return (
    <div className="Table">
      {/* header */}

      <h1 className="Turn" id="Turn">
        {props.currentPlayer == null
          ? "Player 0"
          : Object.keys(props.currentPlayer)[0]}
        's Turn
      </h1>
      <h1 className="Points">POINTS : {points}</h1>

      {/* DICE */}

      <div className="Dice-block">
        <div className={diceone == 1 ? "Dice red" : "Dice"}>{diceone}</div>
        <div className={dicetwo == 1 ? "Dice red" : "Dice"}>{dicetwo}</div>
      </div>

      {/* BUTTONS */}

      <div className="Buttons">
        <button className="ROLL BIG" onClick={ROLL} id="ROLL">
          ROLL
        </button>

        <button className="HOLD" onClick={HOLD}>
          HOLD
        </button>
      </div>
      {<Winner display={display} name={Object.keys(props.currentPlayer)[0]} />}
    </div>
  );
}

export default Table;
