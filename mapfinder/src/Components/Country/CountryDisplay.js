import "./CountryDisplay.css";

function CountryDisplay({ name, capital, population, flagUrl,region }) {
	return (
		<div className="card-container">
			<div className="flag-image">
				<img className="flag" src={flagUrl} alt={`${name} flag`} />
			</div>
			<div className="country-text">
				<h2>{name}</h2>
				<p>
					<strong>Capital:</strong> {capital}
				</p>
				<p>
					<strong>Region: </strong>{region}
				</p>
				<p>
					<strong>Population: </strong>
					{population.toLocaleString()}
				</p>
			</div>
		</div>
	);
}

export default CountryDisplay;
