import React, { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Phones from "./Phones";
import Filter from "./Filter";
import axios from 'axios';

const Phonebook = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [personFilter, setPersonFilter] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);
  const handlePersonFilter = (event) => setPersonFilter(event.target.value);

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data);
    })
  }, []);

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
        handlePhoneChange={handlePhoneChange}
      />
      <Header title="Numbers: " />
      <Phones persons={showPersons} />
    </div>
  );
};


export default Phonebook;
