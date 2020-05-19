import React from 'react';

const Country = ({ name, capital, population, languages, flag }) => {
    
    return (
        <div>
            <h1>{name}</h1>

            <p>Country capital: {capital}</p>
            <p>Total population: {population}</p>

            <h2>Spoken Languages: </h2>
            <ul>
                {languages.map(language => 
                <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <h2>Flag: </h2>
            <img src={flag} alt={name + "flag"} width="256"></img>
        </div>
    )
}

export default Country;