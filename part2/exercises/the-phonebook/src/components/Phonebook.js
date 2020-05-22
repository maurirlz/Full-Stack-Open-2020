import React, { useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import Phones from './Phones';
import Filter from './Filter';
import numberService from '../services/numbers';

const Phonebook = () => {

    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [personFilter, setPersonFilter] = useState('');

    const handleNameChange = (event) => setNewName(event.target.value);
    const handlePhoneChange = (event) => setNewPhone(event.target.value);
    const handlePersonFilter = (event) => setPersonFilter(event.target.value);

    useEffect(() => {
            numberService
            .getAll()
            .then(personsData => {
                setPersons(personsData);
            })
    }, []);

    const checkIfNameIsNotPresent = (checkingPerson) => {

        return (persons.find((person) => person.name.toUpperCase() === checkingPerson.name.toUpperCase()) ===  undefined)
    }

    const checkIfPhoneIsNotPresent = (checkingPerson) => {

        return (persons.find((person) => checkingPerson.phone === person.phone) === undefined)
    }

    const showPersons = personFilter ?
        persons.filter(person => person.name.toUpperCase().search(personFilter.toUpperCase()) !== -1)
        : persons;

    const addPerson = (event) => {
        event.preventDefault();

        const newPerson = {
            name: newName,
            phone: newPhone,
        };

        if (checkIfNameIsNotPresent(newPerson) && checkIfPhoneIsNotPresent(newPerson)) {

            numberService
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson));
                });
        } else {

            const confirm = window.confirm(`${newPerson.name} is already added on the phone book, replace the old number with the new one?`);

            if (confirm) {

                const existingPerson = persons.find(person => newPerson.name === person.name);
                const changedPerson = {...existingPerson, phone: newPerson.phone};

                numberService
                    .update(changedPerson, existingPerson.id)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.name !== returnedPerson.name ? person : returnedPerson));
                    })
            } else {

                setNewName('');
                setNewPhone('');
            }
        }
    };

    const deletePerson = (id) => {

        numberService
            .deletedItem(id)
            setPersons(persons.filter(person => person.id !== id));
    };

    return (
        <div>
            <Filter filterChange={handlePersonFilter} value={personFilter} />
            <Header title='Add a new: ' />
            <Form
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newPhone={newPhone}
                handlePhoneChange={handlePhoneChange}
            />
            <Header title='Numbers: ' />
            <Phones persons={showPersons} deleteHandler={deletePerson} />
        </div>
    );
};


export default Phonebook;
