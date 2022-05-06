import React from "react";

import logo from "./logo.png";
import cancel from "./cancel.png"
function LogoWindow(params) {
  return (
    <div className="Logo-window-container">
      <div className="Logo-window">
        <img  className="logo-img" src={logo} />
        <div className="Links">
          <a target="_blank" href="https://luk1e.github.io/Portfolio/Main.html">MORE GAMES</a>
          <a target="_blank" href="https://www.facebook.com/">CONTACT ME</a>
          <a  target="_blank" href="https://luk1e.github.io/Portfolio/Main.html">PORTFOLIO</a>
        </div>
        <h3 onClick={params.start} className="Logo-window-button"><img src={cancel} className="close"/></h3>
      </div>
    </div>
  );
}

export default LogoWindow;
