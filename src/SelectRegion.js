import React from "react";
import Select from "react-select";

const selectRegion = [
    { label: 'Africa', value: 'Africa'},
    { label: 'America', value: 'America'},
    { label: 'Asia', value: 'Asia'},
    { label: 'Europe', value: 'Europe'},
    { label: 'Oceania', value: 'Oceania'},
]

const filterByRegionSelected = (country) => {
    let hola =  fetch ("https://restcountries.com/v3.1/region/"+country)
        .then(response => response.json())
        .then(data=> {
            console.log(data)
        })
}

export default function SelectRegion() {

    const handleSelectChange = ( {value} ) => {
        console.log(value);
        filterByRegionSelected(value);
    }

    return (
        <Select
            defaultValue={ { label: 'Filter by Region', value: "0" } }
            options = { selectRegion }
            onChange = { handleSelectChange }
        />
    );
}