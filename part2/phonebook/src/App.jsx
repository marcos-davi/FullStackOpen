import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "José Padilha" },
  ]);

  const [newName, setNewName] = useState("");

  const Persons = ({ persons }) => {
    return (
      <div>
        {persons.map((person) => (
          <div key={person.name}>{person.name}</div>
        ))}
      </div>
    );
  };
  const handleNoteChange = (event) => {

    setNewName(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();
    const person = { name: newName };
    setPersons(persons.concat(person));
    setNewName("");
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} method="POST">
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
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
