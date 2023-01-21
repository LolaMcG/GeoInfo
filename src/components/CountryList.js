import React from "react";
import Country from "./Country";

const CountryList = ({countries}) => {

    const listOfMappedCountries = countries.map((country) => {
        return (
            <Country
            countryName={country.name.common}
            capital={country.capital} 
            continent={country.region}
            population={country.population}
            flag={country.flags.png}
            key={country.index}/>
        )
    })


    return (
        <>
        {listOfMappedCountries}
        </>
    )
}

export default CountryList