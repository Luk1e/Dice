import React from 'react'

const handleClick =(number)=> {
    let players = [];
    for (var i = 0; i < number; i++) {
      let obj = {};
      obj[`Player  ${i+1}`] = 0;
      players.push(obj);
    }
    return players;
}

export default handleClick