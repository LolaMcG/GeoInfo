import React, {useState, useEffect} from "react";
import CountryDropdown from "../components/CountryDropdown";
import CountryList from "../components/CountryList";
import Header from "../components/Header";
import CountryDetail from "../components/CountryDetail";


const CountryBox = () => {

    const [countries, setCountries] = useState([])
    const [chosenCountry, setChosenCountry] = useState(null)

    useEffect(() => {
        getCountries()
    })

    const getCountries = function () {
        fetch (`https://restcountries.com/v3.1/all`)
        .then (res => res.json())
        .then (countries => setCountries(countries))
    }

    const onCountrySelected = function (country) {
        setChosenCountry(country)
    }

    return (
        <div>
            <Header
            header="GeoInfo"/>
            {/* <CountryList countries={countries}/> */}
            <CountryDropdown
            countries={countries}
            onCountrySelected={onCountrySelected}
            />

            {chosenCountry ? <CountryDetail country={chosenCountry}/> : null}
        </div>
    )
}

export default CountryBox