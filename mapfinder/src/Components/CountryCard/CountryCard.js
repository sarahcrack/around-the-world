import React from "react";
import { useState, useEffect } from "react";

import CountryDisplay from "../Country/CountryDisplay";

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

function CountryCard() {
  //create a function that calls the rest countries API using useEffect
  //call Germany
  //display in App

  const [countryData, setCountryData] = useState([]); //set up a state for the country data and set it to an empty array to start with

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(`https://restcountries.com/v3.1/all`); //fetch the data from the API
      const data = await response.json();
      setCountryData(data);
    }
    fetchCountries();
  }, []);

  return (
    <div>
      {countryData.map(
        (
          country //map through the countryData array and render a CountryDisplay component for each country, passing down the country's name, capital, population, and flag URL as props.
        ) => (
          <CountryDisplay
            key={country.cca3}
            name={country.name.common}
            capital={country.capital?.[0]}
            population={country.population}
            flagUrl={country.flags.svg}
          />
        )
      )}
    </div>
  );
}

export default CountryCard;

// In this implementation, the CountryCard component fetches all the countries from the API using the all endpoint, and sets the fetched data in the countryData state.
//Then, it maps through the countryData array and renders a Country component for each country, passing down the country's name, capital, population, and flag URL as props.
// The Country component receives the props and renders the country's name, capital, population, and flag image.
