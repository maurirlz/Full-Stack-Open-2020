import React from 'react';
import Number from './Number'

const Phones = ({ persons }) => {

    return (
        persons.map(person =>
            <Number key={person.name} name={person.name} number={person.phone}/>
        )
    )
}


export default Phones