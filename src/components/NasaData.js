import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

import {
  Container,
  Row,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";

export const NasaData = () => {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=gaZnOlV3l36WMlwd2hPAcydKUZ3aGjaLqsA1m4oe"
      )
      .then(response => {
        const nasaData = response.data;
        console.log("Nasa Pic of the day", nasaData);
        setNasaData([nasaData]);
      })
      .catch(error => {
        console.log("Sorry no nasa img", error);
      });
  }, []);

  return (
    <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Nasa Picture Of The Day</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button>Change Color</Button>
          </NavItem>
        </Nav>
      </Navbar>

      <Row>
        {nasaData.map(data => (
          <NasaCard
            title={data.title}
            image={data.url}
            date={data.date}
            explanation={data.explanation}
            copyright={data.copyright}
          />
        ))}
      </Row>
    </Container>
  );
};
export default NasaData;
