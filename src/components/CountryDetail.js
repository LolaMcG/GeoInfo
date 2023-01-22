import React from "react";
import Country from "./Country";

const CountryDetail = ({country, onSideSelected, result}) => {
    return (
            <div id="country">
                <Country
                countryName={country.name.common}
                capital={country.capital}
                continent={country.region}
                amerCont={country.subregion}
                population={country.population}
                flag={country.flags.png}
                key={country.index}
                drive={country.car.side}
                onSideSelected={onSideSelected}
                result={result}
                />
            </div>
        )
}

export default CountryDetail