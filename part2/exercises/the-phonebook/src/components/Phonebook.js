import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Phones from "./Phones";

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "3624662233" },
  ]);

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      phone: newPhone,
    };

    if (persons.find((person) => person.name === newPerson.name) === undefined) {

      if (persons.find((person) => newPerson.phone === person.phone) === undefined) {

        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewPhone("");
      } else {
          
        alert(`number: ${newPerson.phone} is already on the phonebook.`);
        setNewName("");
        setNewPhone("");
      }
    } else {
        
      alert(`${newPerson.name} is already added to the phonebook.`);
      setNewName("");
      setNewPhone("");
    }
  };

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleNameChange = (event) => setNewName(event.target.value);

  const handlePhoneChange = (event) => setNewPhone(event.target.value);

  return (
    <div>
      <Header title="The Phonebook" />
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <Header title="Numbers: " />
      <Phones persons={persons} />
    </div>
  );
};

export default Phonebook;
