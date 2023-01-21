import React from "react";

const Country = ({countryName, capital, continent, population, flag}) => {
    
    
    return (
        <div>
            <img src={flag}/>

            <p>The country you've chosen is {countryName}</p>

            <p>{!capital ? countryName + " has no official capital" : "The capital of " + countryName + "is " + capital}</p>

            <p>{continent === "Antarctic" ? countryName + " is on the continent of The Antarctic" : countryName + " is on the continent of " + continent}</p>

            <p>{population === 0 ? "No one permanently lives here!"
            : "It has a population of " + population}</p>
        </div>
    )
}

export default Country