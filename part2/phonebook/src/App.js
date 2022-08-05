import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const deleteNumber = (id) => {
    if (window.confirm("Delete ???")) {
      personService.deleteNumber(id)
      setPersons(persons.filter(person => person.id !== id))
    }
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
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
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
      
      {filteredPersons.map(person => 
      <Person 
        key={person.name} 
        name={person.name} 
        number={person.number}
        deleteNumber = {() => deleteNumber(person.id)}
      />)
      }
    </div>
  )
}

export default App
