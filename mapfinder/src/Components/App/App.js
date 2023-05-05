import { useState } from "react";
import "./App.css";
import CountryCard from "../CountryCard/CountryCard";

function App() {
  // set up a state for the country name
//   const [countryName, setCountryName] = useState("spain");

  return (
    <div className="App">
      <CountryCard  />
    </div>
  );
}

export default App;
