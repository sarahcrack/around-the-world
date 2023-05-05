import React from "react";
import { useState, useEffect } from "react";
import "./CountryCard.css";
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

function CountryCard({ selectedRegion }) {
	const [countryData, setCountryData] = useState([]);
	useEffect(() => {
		async function fetchCountries() {
			const response = await fetch(`https://restcountries.com/v3.1/all`);
			const data = await response.json();
			setCountryData(data);
		}
		fetchCountries();
	}, []);
	const filteredCountryData = selectedRegion
		? countryData.filter((country) => country.region === selectedRegion) // filter the countryData array based on the selected region if a region is selected
		: countryData;
	return (
		<div className="container">
			{filteredCountryData.map(
				(country) =>
					country.flags && (
						<CountryDisplay
							key={country.cca3}
							name={country.name.common}
							capital={country.capital?.[0]}
							population={country.population}
							flagUrl={country.flags.svg}
							region={country.region}
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
