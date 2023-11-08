import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,latlng,timezones,maps,capital,languages"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  const selectCountry = countries.find(
    (country) => selectedCountry === country.name.common
  );

  console.log(selectCountry);
  return (
    <div>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country...</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      <div>
        {selectCountry ? (
          <div>
            <span>His flag</span>{" "}
            <img
              src={selectCountry.flags.png}
              alt=""
              style={{ width: "100px", height: "70px", marginTop: "20px" }}
            />
            <p>
              The country that you have selected is: {selectCountry.name.common}
            </p>
            <p>Capital: {selectCountry.capital}</p>
            <p>Population: {selectCountry.population}</p>
            <p>Latitude and Longitude: {selectCountry.latlng}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
