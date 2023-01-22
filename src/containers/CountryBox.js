import React, {useState, useEffect} from "react";
import CountryDropdown from "../components/CountryDropdown";
import Header from "../components/Header";
import CountryDetail from "../components/CountryDetail";


const CountryBox = () => {

    const [countries, setCountries] = useState([])
    const [chosenCountry, setChosenCountry] = useState(null)
    const [result, setResult] = useState(null)

    useEffect(() => {
        getCountries()
    }, [])

    useEffect(() => {
        setResult(null)
    }, [chosenCountry])

    const getCountries = function () {
        fetch (`https://restcountries.com/v3.1/all`)
        .then (res => res.json())
        .then (countries => setCountries(countries))
        }

    
        function clearRadioButtons(){
            var ele = document.querySelectorAll("input[type=radio]");
                for(var i=0;i<ele.length;i++){
                ele[i].checked = false;
            }
        }


    const onCountrySelected = function (country) {
        clearRadioButtons()
        setChosenCountry(country)
    }

    const onSideSelected = function (result) {
        setResult(result)
    }

    const sortedCountries = countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common))

    return (
        <div id="country-box">
            <Header
            header="GeoInfo"/>
            {/* <CountryList countries={countries}/> */}
            <CountryDropdown
            countries={sortedCountries}
            onCountrySelected={onCountrySelected}
            />

            {chosenCountry ? <CountryDetail country={chosenCountry} onSideSelected={onSideSelected} result={result}/> : null}

        </div>
    )
}

export default CountryBox