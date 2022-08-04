import { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./components/CountryInfo";


const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(filter.toLowerCase()) 
  )

  const displayCountries = filteredCountries.length > 10 
  ? "Too many matches, specify another filter"
  : filteredCountries.length === 1 ? <CountryInfo country={filteredCountries} />
  : filteredCountries.map(country => 
    <div key={country.name.common}>
      {country.name.common + "  "}
      <button>show</button>
    </div>
    )

  return (
    <div>
      <div>Find Countries: <input value={filter} onChange={handleFilterChange}></input></div>
      {displayCountries}
    </div>
  );
}

export default App;
