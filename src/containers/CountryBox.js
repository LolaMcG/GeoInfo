import React, {useState, useEffect} from "react";
import CountryList from "../components/CountryList";
import Header from "../components/Header";

const CountryBox = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries()
    })

    const getCountries = function () {
        fetch (`https://restcountries.com/v3.1/all`)
        .then (res => res.json())
        .then (countries => setCountries(countries))
    }

    return (
        <div>
            <Header header="GeoInfo"/>
            <p>Helloooo!</p>
            <CountryList countries={countries}/>
        </div>
    )
}

export default CountryBox