import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {countries.map((country, index) => (
        <div className="container" key={index}>
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="image-flag"
          />
          <p key={index}>{country.name.common}</p>
        </div>
      ))}
    </div>
  );
}
