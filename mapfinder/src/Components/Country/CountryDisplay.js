function CountryDisplay({ name, capital, population, flagUrl }) {
  return (
    <div>
      <img src={flagUrl} alt={`${name} flag`} />
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
    </div>
  );
}

export default CountryDisplay;
