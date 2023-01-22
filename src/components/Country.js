import React from "react";

const Country = ({countryName, capital, continent, population, flag, amerCont, drive, onSideSelected, result}) => {


    const handleChange = function (evt) {
        const chosenSide = evt.target.value
        // onNewSelection(countryName)
        const actualSide =  drive
        if (chosenSide === actualSide){
            onSideSelected ("Correct! In " + countryName + " they drive on the " + actualSide + " side of the road")
        } else {
            onSideSelected ("Incorrect! In " + countryName + " they drive on the " + actualSide + " side of the road")
        }
    }

    return (
        <div>
            <div>
                <img src={flag} id="flag"/>
            </div>

            <div id="country-text">
                <p>The country you've chosen is <span>{countryName}</span></p>

                <p>{!capital ? countryName + " has no official capital" : "The capital of " + countryName + " is "}<span>{capital}</span></p>

                <p>{continent === "Antarctic" ? countryName + " is on the continent of The Antarctic" : 
                continent === "Americas" ? countryName + " is on the continent of " + amerCont :
                countryName + " is on the continent of " + continent}</p>

                <p>{population === 0 ? "No one permanently lives here!"
                : "It has a population of " + population}</p>

                <p>Can you guess what side of the road they drive on in {countryName}?</p>
                    <input type="radio" id="left" name="drive_side" value="left" onChange={handleChange}/>
                    <label for="left">The Left</label><br/>
                    <input type="radio" id="right" name="drive_side" value="right" onChange={handleChange}/>
                    <label for="left">The Right</label><br/>
                
                <p>{result}</p>
            </div>
        </div>
    )
}

export default Country