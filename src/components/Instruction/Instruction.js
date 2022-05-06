import React, { useState } from 'react'

import instruction from "./instruction.png"
import InstructionWindow from './InstructionWindow'

import "./Instruction.css"
function Instruction() {
    const [display,setDisplay]=useState("none");
    function start(){
       setDisplay((display=="flex")? "none" : "flex");
       
    }
    
  return (
     <div className='Instruction-container'>
         <div className='Instruction-icon' onClick={start} ><img src={instruction}/></div>
         <div  style={{display: display}}>
         <InstructionWindow start={start}/>
         </div>
     </div>
  )
}

export default Instruction