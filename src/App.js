import { useEffect } from 'react';
import './App.css';
import CountryList from './CountryList';
import Details from './Details';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

function App() {

useEffect(() => {
    console.log("cargando");
})
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CountryList/>}></Route>
                <Route path="/details/:countryName" element={<Details/>}></Route>
            </Routes>

        </BrowserRouter>
    );
}

export default App;

