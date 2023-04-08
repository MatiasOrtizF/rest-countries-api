import './App.css';
import Data from './Data';
import { useEffect, useState } from 'react';
import Select from "react-select";
import { Link } from 'react-router-dom';

function CountryList() {

useEffect(() => {
    allCountries();
}, []);

const [datas, setDatas] = useState([]);

const cambioInput = (e) => {
    if(e.target.value.length>0) {
        fetch("https://restcountries.com/v3.1/name/"+e.target.value)
        .then(response => response.json())
        .then(data => {
            if(data.length>0){
                setDatas(data);
            }else {
                setDatas([]);
            }
        })
    } else {
        allCountries();
    }
}

const allCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        setDatas(data);
    })
}

const filtrarPorRegiones = ({value}) => {
    if(value!="All") {
        fetch("https://restcountries.com/v3.1/region/"+value)
        .then(response => response.json())
        .then(data => {
            setDatas(data);
        })
    } else {
        allCountries();
    }
}

const selectRegion = [
    { label: 'All', value: 'All'},
    { label: 'Africa', value: 'Africa'},
    { label: 'America', value: 'America'},
    { label: 'Asia', value: 'Asia'},
    { label: 'Europe', value: 'Europe'},
    { label: 'Oceania', value: 'Oceania'},
]

    return (
        <div>
            
            <header>
                <strong>Where in the world</strong>
                {/* <button >Dark Mode</button> */}
            </header>

            <main className="">
                <div>
                <div className="inputs">
                        <input id="country-name" placeholder="Search for a country..." type="text"
                            onChange={ cambioInput }
                        />    
                        <Select
                            defaultValue={ { label: 'Filter by Region', value: "0" } }
                            options = { selectRegion }
                            onChange = { filtrarPorRegiones }
                        />
                    </div>
                    <div class="container">
                        {datas?.map((data)=> (
                            <Link className='links' to={`/details/${data.name.common}`}>
                                <Data 
                                img={data.flags.png}
                                country={data.name.common}      
                                population={data.population}
                                region={data.region}
                                capital={data.capital}
                                >
                                </Data>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

        </div>
    );
}

export default CountryList;
