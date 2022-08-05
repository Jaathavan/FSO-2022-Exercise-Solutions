import Weather from "./Weather"

const CountryInfo = ( { country } ) => {
    const languages = Object.values(country[0].languages)

    return (
        <div>
            <h1>{country[0].name.common}</h1>
            <div>Capital: {country[0].capital}</div>
            <div>Area: {country[0].area} km²</div>
            
            <h2>Languages: </h2>
            {languages.map(l => <li key={l}>{l}</li>)}
            <br />
            <img src={country[0].flags.svg} alt="country flag" />
            <Weather city={country[0].capital} />
        </div>
    )
}

export default CountryInfo