import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)

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

  const deleteNumber = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService.deleteNumber(id)
      setPersons(persons.filter(person => person.id !== id))
      setNotification(`Deleted ${name}`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
    }
  }

  const updateNumber = (id) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = { ...person, number: newNumber }
    personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const addDetails = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if ((persons.filter(person => person.name === newName)).length > 0) {
      if(window.confirm(`${newName} is already added to phonebook, replace older number with new number?`)) {
        let person = persons.find(p => p.name === newName)
        updateNumber(person.id)
        setNotification(`Updated Number for ${person.name}`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      }
    }
    else {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotification(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
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
      <Notification message={notification} />

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
        deleteNumber = {() => deleteNumber(person.id, person.name)}
      />)
      }
    </div>
  )
}

export default App
