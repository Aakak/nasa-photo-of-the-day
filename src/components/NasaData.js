import React, { useState, useEffect } from "react";
import axios from "axios";

import NasaCard from "./NasaCard";

const NasaData = () => {
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
    <div className="NasaInfo">
      {nasaData.map(data => (
        <NasaCard
          title={data.title}
          image={data.url}
          explanation={data.explanation}
          date={data.date}
          copyright={data.copyright}
        />
      ))}
    </div>
  );
};

export default NasaData;
