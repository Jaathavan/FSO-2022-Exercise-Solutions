import axios from "axios"
import { useEffect, useState } from "react"

const CountryInfo = ( { country } ) => {
    const [weather, setWeather] = useState([])
    const languages = Object.values(country[0].languages)
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=2a287d39bd4da6bf5c24aa61c6a91700&units=metric"
    
    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital}&appid=2a287d39bd4da6bf5c24aa61c6a91700&units=metric`)
        .then(response => {
            setWeather(response.data)
        })
    })

    return (
        <div>
            <h1>{country[0].name.common}</h1>
            <div>Capital: {country[0].capital}</div>
            <div>Area: {country[0].area} km²</div>
            
            <h2>Languages: </h2>
            {languages.map(l => <li key={l}>{l}</li>)}
            <br></br>
            <img src={country[0].flags.svg}></img>

            <h2>Weather in {country[0].capital}</h2>
            <div>Temperature: </div>

            <div>Wind: </div>
        </div>
    )
}

export default CountryInfo