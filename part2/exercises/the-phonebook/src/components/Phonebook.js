import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Phones from "./Phones";
import Filter from "./Filter";

const Phonebook = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [personFilter, setPersonFilter] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);
  const handlePersonFilter = (event) => setPersonFilter(event.target.value);

  const checkIfNameIsNotPresent = (checkingPerson) => {

    return (persons.find((person) => person.name.toUpperCase() === checkingPerson.name.toUpperCase()) === undefined)
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

        
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewPhone("");
      } else {
    
        alert(`${newPerson.name} is already on the phonebook.`);
        setNewName("");
        setNewPhone("");
      }
    };

  return (
    <div>
      <Filter filterChange={handlePersonFilter} value={personFilter} />
      <Header title="Add a new: " />
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}﻿
      />
      <Header title="Numbers: " />
      <Phones persons={showPersons} />
    </div>
  );
};


export default Phonebook;
