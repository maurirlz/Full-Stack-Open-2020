import React from 'react';
import Country from './Country';

const Countries = ({ countries }) => {

    return (
        <div>
        {countries.map(country => 
            <Country key= {country.name} name= {country.name} capital= {country.capital} population= {country.population} languages={country.languages} flag={country.flag}/>
        )}
        </div>
    )
}


export default Countries;