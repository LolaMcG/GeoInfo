import React, {useState, useEffect} from "react";
import CountryList from "../components/CountryList";
import Header from "../components/Header";

const CountryBox = () => {

    

    return (
        <div>
            <Header header="GeoInfo"/>
            <p>Helloooo!</p>
            <CountryList/>
        </div>
    )
}

export default CountryBox