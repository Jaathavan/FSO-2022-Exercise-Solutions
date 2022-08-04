import { useState, useEffect } from "react";
import axios from "axios";

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

  const filteredCountries = countries.filter(country => country.name.common.includes(filter) )
  const displayCountries = filteredCountries.length > 10 
  ? "Too many, specify another filter"
  : filteredCountries.map(country => <div key={country.name.common}>{country.name.common}</div>)

  return (
    <div>
      <div>Find Countries: <input value={filter} onChange={handleFilterChange}></input></div>
      {displayCountries}
    </div>
  );
}

export default App;
