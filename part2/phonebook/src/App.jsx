import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

      

  const handleNoteChangeName = (event) => {
    setNewName(event.target.value);    
  };
  const handleNoteChangeNumber = (event) => {    
    setNewNumber(event.target.value);
  };

  
  const addPerson = (event) => {
    event.preventDefault();
    const allPerson = persons.map((person) => person.name)
    if (allPerson.includes(newName)) {
      alert(`${newName} is alread added to phonebook`)
      return
    }
    {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("")
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const personsList = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()))
  const listNames = () => personsList.map(person => 
    <p key={person.name}>{person.name} {person.number}</p>
  )
  
  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter show with<input value={filter} onChange={handleFilterChange}></input></p>
      <h2>add a new</h2>
      <form onSubmit={addPerson} method="POST">
        <div>
          name: <input value={newName} onChange={handleNoteChangeName} />
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNoteChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>{listNames()}</>
    </div>
  );
};
export default App;
