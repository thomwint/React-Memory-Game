import React from "react";
import "./style.css";

function MinionsCard(props) {
  return (
    <div>
      <div aria-label="click-item" className={`click-item${props.gameOver ? 'gameOver' : ''}`} onClick={() => props.ItemClick(props.id)}>
        <button><img className="minion-image" alt={props.name} src={props.image} /></button>
      </div>
    </div>
  );
}

export default MinionsCard;
