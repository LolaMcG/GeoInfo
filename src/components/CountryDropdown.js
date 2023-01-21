import React from "react";
import DropdownItem from "./DropdownItem";

const CountryDropdown = ({countries, onCountrySelected}) => {
    
    const CountryOptions = countries.map((country, index) => {
        return (
            <DropdownItem country={country} key={index} index={index}/>
        )
    })

    const handleChange = function (evt) {
        const chosenCountry = countries[evt.target.value]
        onCountrySelected(chosenCountry)
    }


    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Select a country to find out more!</option>
            {CountryOptions}
        </select>
    )
}

export default CountryDropdown