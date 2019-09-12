import React from "react";
import styled from "styled-components";

//Styles

const MainDiv = styled.div`
  width: 880px;
  background: #6a5acd;
  color: white;
  text-align: center;
  font-family: roboto;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

const MainH2 = styled.h2`
  text-align: center;
  color: red;
`;

//NasaCard Props

const NasaCard = props => {
  return (
    <MainDiv className="nasa-list ">
      <h2>{props.title}</h2>
      <p>{props.date}</p>

      <Image classname="nasa-img" img src={props.image} />

      <p>Explanation {props.explanation}</p>
      <p>Copyright {props.copyright}</p>
    </MainDiv>
  );
};

export default NasaCard;
