import React from 'react'

import logo from "../Logo/logo.png"
function InstructionWindow(props) {
  return (
    <div className='Instructor-window-container'>
    <div className='Instruction-window'>
       <div className='box'>
      <img className='box-logo' src={logo}/>
       <h1> I N S T  R U C T I O N</h1>
       </div>
       <h2>
       Each player takes turns rolling and can roll as many times as they want until they reach a total of 50 points.
         A turn ends when a player holds or rolls 1 on one of the dice.If the player rolls a 1 at any time,they lose the points
         accumulated during that turn and their turn is over.If the player holds,those points are stored and their turn is over.
       </h2>
      <button onClick={props.start} className="Instruction-window-button"> C L O S E </button>
    </div>
    </div>
  )
}

export default InstructionWindow