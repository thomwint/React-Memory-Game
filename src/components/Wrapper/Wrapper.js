import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div>
   <nav className="navbar navbar-dark bg-dark text-white">
   <h1 className="text-center">Minions Matching Game</h1>
   </nav>
  <div className="wrapper">{props.children}</div>;
  </div>
}

export default Wrapper;
