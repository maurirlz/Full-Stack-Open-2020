import React, { useState } from 'react';
import Number from './components/Number';


const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [ newName, setNewName ] = useState('');


  const addPerson = (event) => {

    event.preventDefault();

    const newPerson = {

      name: newName
    };

    setPersons(persons.concat(newPerson));
    setNewName('');
  }

  const handleNoteChange = (event) => setNewName(event.target.value);

  return (
    <div>
      <h2>The Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Number key={person.name} name={person.name}/>
      )}
    </div>
  )
}

export default App