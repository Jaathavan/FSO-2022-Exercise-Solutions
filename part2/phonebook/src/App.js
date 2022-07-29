import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addDetails = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if ((persons.filter(person => person.name === newName)).length > 0) {
      alert(`${newName} is already added to phonebook`)
    }
    else if ((persons.filter(person => person.number === newNumber)).length > 0) {
      alert(`${newNumber} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const filteredPersons = newFilter.length === 0
    ? persons
    : persons.filter(person => 
      person.name.includes(newFilter.toUpperCase()) 
      || person.name.includes(newFilter.toLowerCase()) 
      || person.number.includes(newFilter.toString())
      )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        newFilter={newFilter} 
        handleFilterChange={handleFilterChange} 
      />
      
      <h3>Add a New</h3>

      <PersonForm 
        addDetails={addDetails} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />
      
      <h3>Numbers</h3>
      
      <Person filteredPersons={filteredPersons} />
    </div>
  )
}

export default App
