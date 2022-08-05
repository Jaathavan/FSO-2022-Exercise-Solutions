import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({ city }) => {
    const [weather, setWeather] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
          )
          .then((response) => {
            setWeather(response.data);
         });
    }, []);

    //weather.main statement is required to conditionally render so that the info is not rendered when the state is undefined
    return (
        <>
            {weather.main ? (
                <div>
                    <h2>Weather in {city}</h2>
                    <div>Temperature: {weather.main.temp} °C</div>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    <div>Wind: {weather.wind.speed} m/s</div>
                </div>
            ) : null}
        </>
    )
}

export default Weather