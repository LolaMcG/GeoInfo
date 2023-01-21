import React from "react";
import Country from "./Country";

const CountryList = ({countries}) => {

    const listOfMappedCountries = countries.map((country) => {
        return (
            <Country countryName={country.name.common} key={country.index}/>
        )
    })


    return (
        <>
        <p>This is the CountryList component</p>
        {listOfMappedCountries}
        </>
    )
}

export default CountryList