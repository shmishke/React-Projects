import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card container">
      <h1>{props.name}</h1>
      <button
        onClick={() => {
          props.inc(props.index);
        }}
      >
        INC
      </button>
    </div>
  );
};

export default Card;
