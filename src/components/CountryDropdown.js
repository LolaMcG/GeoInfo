import React from "react";
import DropdownItem from "./DropdownItem";

const CountryDropdown = ({countries}) => {
    
    const CountryOptions = countries.map((country, index) => {
        return (
            <DropdownItem country={country} index={index}/>
        )
    })

    return (
        <select defaultValue="">
            <option value="" selected>Select a country to find out more!</option>
            {CountryOptions}
        </select>
    )
}

export default CountryDropdown