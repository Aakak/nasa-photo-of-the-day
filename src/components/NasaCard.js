import React from "react";
import styled from "styled-components";

//Styles
const MainDiv = styled.div`
  width: 900px;
  font-family: roboto;
  margin: 0 auto;
  padding-top: 30px;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

const MainTitile = styled.h2`
  background-color: lightgrey;
`;

//NasaCard Props

const NasaCard = props => {
  return (
    <MainDiv className="nasa-list ">
      <h2 className="Main-Title">{props.title}</h2>
      <p>{props.date}</p>
      <Image classname="nasa-img" img src={props.image} />
      <p>Explanation {props.explanation}</p>
      <p>Copyright {props.copyright}</p>
    </MainDiv>
  );
};

export default NasaCard;
