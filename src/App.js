import { useEffect } from 'react';
import './App.css';
import CountryList from './CountryList';
import Details from './Details';
import { HashRouter, Routes ,Route } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<CountryList/>}></Route>
                <Route path="/details/:countryName" element={<Details/>}></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;

