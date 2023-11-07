import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,latlng,timezones,maps,capital,languages"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  const handleOptionCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <select name="" id="" onChange={handleOptionCountry}>
        {countries.map((country1, index) => (
          <option key={index} value={country.value}>
            {country1.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}
