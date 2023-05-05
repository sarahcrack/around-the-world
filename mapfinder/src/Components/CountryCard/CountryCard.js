import React from "react";
import { useState, useEffect } from "react";

/*
PLAN    
    Display the data on the page
        Material UI to import cards & in a grid
    
    In App:
    Send down the default countries from App
        - In App call the card component and send down default data that we want to appear

    In card component:
        - Create a function that calls the Rest Countries API 
        - Write a function that takes in a prop from App that sets the name of the country that will be called in the API 
        - Display .flags.png"url", .name, .capital, .population
*/

function CountryCard({ countryName }) {
  //create a function that calls the rest countries API using useEffect
  //call Germany
  //display in App

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      console.log(data);
      setCountryData(data[0]);
      console.log(data[0].name.common);
    }
    fetchCountry();
  }, [countryName]);

  return <div>{countryData.name.common}</div>;
}

/* <div>
        <h2>{countryData.name.common}</h2>
        <p>Capital: {countryData.capital[0]}</p>
        <p>Population: {countryData.population}</p>
        {/* Add other properties you want to display */

export default CountryCard;
