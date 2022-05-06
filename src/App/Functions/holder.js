import React from 'react'

const holder =(points,players,currentPlayer)=> {
    let index = players.findIndex((object) => {
        return Object.keys(object)[0] == Object.keys(currentPlayer)[0];
      });
      let playersArr = [...players];
      playersArr[index][Object.keys(playersArr[index])[0]] += points;
      return playersArr;
}

export default holder