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

  const filteredCountries = countries.filter(country => country.name.common.includes(filter.toUpperCase()) || country.name.common.includes(filter.toLowerCase()))

  return (
    <div>
      <div>Find Countries: <input value={filter} onChange={handleFilterChange}></input></div>
      
    </div>
  );
}

export default App;
