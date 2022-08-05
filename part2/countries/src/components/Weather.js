import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ( { city } ) => {
    const [weather, setWeather] = useState([])
    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a287d39bd4da6bf5c24aa61c6a91700&units=metric`)
          .then((response) => {
            setWeather(response.data)
         })
    }, [])

    return (
        <div>
            <h2>Weather in {city}</h2>
            <div>Temperature: {weather.main.temp} °C</div>

            <div>Wind: {weather.wind.speed} m/s</div>
        </div>
    )
}

export default Weather