import React, { useState } from 'react'

import LogoWindow from './LogoWindow';
import logo from "./logo.png"
import "./Logo.css"

function Logo() {
    const [display,setDisplay]=useState("none");
    function start(){
       setDisplay((display=="flex")? "none" : "flex");
       
    }
  return (
    <div className='Logo-container'>
         <div className='Logo-icon' onClick={start} ><img src={logo}/></div>
         <div  style={{display: display}}>
            <LogoWindow start={start}/>
         </div>
     </div>

  )
}

export default Logo