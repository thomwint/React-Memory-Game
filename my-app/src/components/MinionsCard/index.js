import React from "react";
import "./style.css";

function MinionsCard(props) {
  return (
      <div role="img" aria-label="click-item" className="click-minion img-fluid">
        <button onClick={props.handleIncrement}><img className="minion-image flex-center" alt={props.name} src={props.image} /></button>
      </div>
  );
}

export default MinionsCard;
