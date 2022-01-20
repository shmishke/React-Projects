import React from "react";
import Card from "../Card/Card";

const CardList = (props) => {
  return (
    <div className="container card-list">
      <h3> CARD LIST</h3>
      {props.niz.map((e, i, arr) => (
        <Card inc={props.inc} name={e} index={i}></Card>
      ))}
    </div>
  );
};

export default CardList;
