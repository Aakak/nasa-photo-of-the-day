import React from "react";

const NasaCard = props => {
  return (
    <div className="nasa-list ">
      <h2>{props.title}</h2>
      <p>Today's date: {props.date}</p>
      <p>
        <img src={props.image} />
      </p>
      <p>Explanation: {props.explanation}</p>
    </div>
  );
};
export default NasaCard;
