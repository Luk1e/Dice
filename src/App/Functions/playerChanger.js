import React from 'react'

 const playerChanger=(players,currentPlayer) => {
    let index = players.findIndex((object) => {
        return Object.keys(object)[0] == Object.keys(currentPlayer)[0];
      });
     return index == players.length - 1
      ? players[0]
      : players[index + 1];
}

export default playerChanger