import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Countries from './Countries';
import Input from './Input';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState('');

  const handleFilter = (event) => setCountriesFilter(event.target.value);

  const countriesToShow = countriesFilter ?
                          countries.filter(country => country.name.toUpperCase().search(countriesFilter.toUpperCase()) !== -1)
                          : countries;
                          
  useEffect(() => {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      setCountries(response.data);
    })
  }, []);

  if (countriesFilter === '') {

    return (
      <div>
        <h2>Country info searcher: </h2>
        <Input value={countriesFilter} onChangeHandler={handleFilter}/>
      </div>
    )
  }

  if (countriesToShow.length > 10) {

    return (
      <div>
        <p>Find countries: </p>
        <Input value={countriesFilter} onChangeHandler={handleFilter}/>
        <p>Too many matches, specify another filter.</p>
      </div>
    )
  }

  if (countriesToShow.length > 1 && countriesToShow.length <= 10) {

    return (
      <div>
      <p>Find countries: </p>
      <Input value={countriesFilter} onChangeHandler={handleFilter}/>
      <br />
      <h3>Matches: </h3>
      {countriesToShow.map(country =>
        <p key={country.name}>{country.name}</p>
        )}
      </div>
    )
  }
  
  return (
    <div>
      <p>Find countries: </p>
      <Input value={countriesFilter} onChangeHandler={handleFilter}/>
      <Countries countries={countriesToShow} />
    </div>
  )
};


export default App;
