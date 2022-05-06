import React from 'react'
// IMPORT SOUNDS
import dice from "./dice.mp3"
import loss from "./loss.mp3"
import save from "./save.mp3"
import winner from "./winner.mp3"

//  AUDIO PLAYER

function Play(name) {
    switch(name) {
        case "dice":
            new Audio(dice).play()
          break;
        case "loss":
            new Audio(loss).play() 
          break;
        case "save":
            new Audio(save).play() 
            break;
            case "winner":
                new Audio(winner).play() 
                break;
      } 
}

export default Play