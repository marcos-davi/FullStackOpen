import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: '00346762345' },
    { name: "José Padilha", number: '003467633445'},
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const Persons = ({ persons }) => {
    return (
      <div>
        {persons.map((person) => (

          <div key={person.name}>{person.name} {person.number}</div>
        ))}
      </div>
    );
  };
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={persons} />
    </div>
  );
};
export default App;
