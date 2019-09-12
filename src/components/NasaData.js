import React, { useState, useEffect } from "react";
import axios from "axios";

import NasaCard from "./NasaCard";

const NasaData = () => {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=PrOZYgQTtNFWEwI0bjb1ZBRvv7FiF1v02tkiU3hY"
      )
      .then(response => {
        const nasaData = response.data;
        console.log("Nasa Pic of the day", nasaData);
        setNasaData([nasaData]);
      })
      .catch(error => {
        console.log("Sorry no nasa img", error);
      });
  });

  return (
    <div className="NasaInfo">
      {nasaData.map(data => (
        <NasaCard
          title={data.title}
          image={data.url}
          explanation={data.explanation}
          date={data.date}
        />
      ))}
    </div>
  );
};

export default NasaData;
