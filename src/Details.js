import './App.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import BorderCountries from './BorderCountries';
import Languages from './Languages';


export default function Details() {

        const [country, setCountry] = useState([]);
        const {countryName} = useParams();

        useEffect(() => {
                cargarApiPais();
        }, [countryName]);

        const cargarApiPais = () => {
                fetch("https://restcountries.com/v3.1/name/"+countryName+"?fullText=true")
                .then(response => response.json())
                .then(data => {
                        setCountry(data);
                })
        }

        return(
        <div>
                <header>
                        <strong>Where in the world</strong>
                        {/* <button >Dark Mode</button> */}
                </header>
                <main>

                        <Link to={"/"}>
                                <button className="button-details" id="back">Back</button>
                        </Link>
                        {country.map((elem) => (
                                <div className="info-details">
                                <img src={elem.flags.png} alt=""/>
                                <div className="info-detail">
                                        <h1>{elem.name.common}</h1>
                                        <div class="information">

                                                <ul>
                                                        <li><h4>Native Name:</h4> <p id=""> 
                                                                {elem.name.common}
                                                        </p></li>
                                                        <li><h4>Population:</h4> <p id=""> 
                                                                {elem.population}
                                                        </p></li>
                                                        <li><h4>Region:</h4> <p id=""> 
                                                                {elem.region}
                                                        </p></li>
                                                        <li><h4>Sub Region:</h4> <p id="sub-region"> 
                                                                {elem.subregion}
                                                        </p></li>
                                                        <li><h4>Capital:</h4> <p id=""> 
                                                                {elem.capital}
                                                        </p></li>
                                                </ul>
                                
                                                <ul>
                                                        <li><h4>Top Level Domain:</h4> <p id="top-level-domain"> 
                                                                {elem.tld}
                                                        </p></li>
                                                        <li><h4>Currencies:</h4> <p id="currencies"> 
                                                                {elem.currencies[Object.keys(elem.currencies)[0]].name}
                                                        </p></li>

                                                        <li><h4>Languages: </h4>
                                                        {Object.values(elem.languages).map((language =>
                                                        <Languages 
                                                                language={language}
                                                        >
                                                        </Languages>
                                                        ))}
                                                        </li>
                                                        
                                                </ul>

                                        </div>

                                        <div className="border-countries">
                                                <h4>Border Countries: </h4>
                                                <ul>
                                                {elem.borders != undefined ? (
                                                        elem.borders.map((border) =>
                                                        <BorderCountries 
                                                                border={border}
                                                        >
                                                        </BorderCountries>
                                                        )
                                                ):<p className="non-border-countries">{elem.name.common} has no border countries</p>}
                                                </ul>
                                        </div>
                                </div>
                                </div>
                        ))}

                </main>
        </div>
        )
}