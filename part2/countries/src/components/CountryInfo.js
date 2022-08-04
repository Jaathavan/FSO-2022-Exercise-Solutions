const CountryInfo = ( { country } ) => {
    
    console.log("C", country[0])
    return (
        <div>
            <h2>{country[0].name.common}</h2>
            <div>Capital: {country[0].capital}</div>
            <div>Area: {country[0].area}</div>
            
            <h3>Languages: </h3>
            
            <img src={country[0].flags.svg}></img>
        </div>
    )
}

export default CountryInfo