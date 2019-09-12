import React from "react";

const NasaCard = props => {
  return (
    <div className="nasa-list ">
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>
        <img src={props.image} />
      </p>
      <p>Explanation {props.explanation}</p>
      <p>Copyright {props.copyright}</p>
    </div>
  );
};
export default NasaCard;
