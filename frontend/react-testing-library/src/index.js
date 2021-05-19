import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

function Search(value, data){
  const filter = value.toUpperCase()
  const newData = data.filter(item => {
    if (item.name.toUpperCase().indexOf(filter) > -1) {
      return item
    }
  })
  return newData
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('0')
  const [ filter, setFilter ] = useState("")
  const [ newPersons, setNewPersons ] = useState([])

  const handleChangeNewName = ({target}) => {
    setNewName(target.value)
  }

  const handleChangeNewNumber = ({target}) => {
    setNewNumber(target.value)
  }

  function noRepeat(persons, name){
    const found = persons.find(person => person.name === name)
    if (found) {
      return true
    }
    return false
  }

  const handleFilter = ({target}) => {
    setFilter(target.value)
    setNewPersons(Search(target.value, persons))
  }

  const handleClick = (e) => {
    e.preventDefault()
    if(noRepeat(persons, newName)){
      window.alert(`${newName}, is already added to phonebook`);
    } else {
      setPersons([...persons, {name: newName, number: newNumber}])
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilter} />
      </div>
      <form onSubmit={handleClick}>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleChangeNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filter.length > 0 ? newPersons.map(person => {
          return(
            <div key={person.name}>
              <h4>{person.name}, {person.number}</h4>
            </div>
          )
        })
        :
        persons.map(person => {
          return(
            <div key={person.name}>
              <h4>{person.name}, {person.number}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
