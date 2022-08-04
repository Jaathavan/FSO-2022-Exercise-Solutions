const CountryInfo = ( { country } ) => {
    const languages = Object.values(country[0].languages)

    return (
        <div>
            <h2>{country[0].name.common}</h2>
            <div>Capital: {country[0].capital}</div>
            <div>Area: {country[0].area}</div>
            
            <h3>Languages: </h3>
            {languages.map(l => <li key={l}>{l}</li>)}
            <br></br>
            <img src={country[0].flags.svg}></img>
        </div>
    )
}

export default CountryInfo