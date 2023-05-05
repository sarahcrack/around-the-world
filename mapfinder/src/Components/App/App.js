import { useState } from "react";
import "./App.css";
import CountryCard from "../CountryCard/CountryCard";

function App() {
	// set up a state for the country name
	//   const [countryName, setCountryName] = useState("spain");
	const [selectedRegion, setSelectedRegion] = useState(""); // set up a state for the selected region
	const handleRegionChange = (event) => {
		setSelectedRegion(event.target.value); // update the selected region state when the user chooses a region from the select input
	};

	return (

		<div className="App">
     <header><h1> Where in the world shall we go?! 🗺 </h1></header>
			<div className="filter-container">
				<div className="filters">
					<label htmlFor="region-select">Filter by region: </label>
					<select
						id="region-select"
						value={selectedRegion}
						onChange={handleRegionChange}
					>
						<option value="">All</option>
						<option value="Africa">Africa</option>
						<option value="Americas">Americas</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</div>
			<CountryCard selectedRegion={selectedRegion} />
			{/* // pass the selected region as a prop down to the CountryCard component */}
		</div>
	);
}
export default App;
