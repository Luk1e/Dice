import React, { Component } from "react";
import "./App.css";

// IMPORT COMPONENTS

import Window from "../components/window";
import Panel from "../components/Panel";
import Table from "../components/Table/Table";

// INSTRUCTION AND LOGO ICON

import Instruction from "../components/Instruction/Instruction";
import Logo from "../components/Logo/Logo";

// ERROR PAGE IF RESOLUTION NOT SUPPORTED(MOBILES)

import Error from "./mobile/Error";

// IMPORT FUNCTIONS

import handleClick from "./Functions/handleClick";
import playerChanger from "./Functions/playerChanger";
import holder from "./Functions/holder";

// START
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      currentPlayer: { "Player  1": 0 },
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  //  GETTING AND SETTING NUMBER OF PLAYERS
  handleClick(number) {
    this.setState({
      players: handleClick(number),
    });
  }

  // Change Player
  playerChanger() {
    this.setState({
      currentPlayer: playerChanger(
        this.state.players,
        this.state.currentPlayer
      ),
    });
  }

  // adds points to player
  holder(points) {
    this.setState({
      players: holder(points, this.state.players, this.state.currentPlayer),
    });
  }

  // CONTROLLING RESOLUTION

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <>
        {this.state.width > 1200 ? (
          <main>
            <Window handleClick={this.handleClick.bind(this)} />
            <Panel
              players={this.state.players}
              currentPlayer={this.state.currentPlayer}
            />
            <Table
              currentPlayer={this.state.currentPlayer}
              playerChanger={this.playerChanger.bind(this)}
              holder={this.holder.bind(this)}
            />
            <Instruction />
            <Logo />
          </main>
        ) : (
          <Error width={this.state.width} height={this.state.height} />
        )}
      </>
    );
  }
}
