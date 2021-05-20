import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Statistics from './components/Statistics'
import Course from './Course';

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

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const ClickGood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(average+0.1)
    setPositive(((good+1)*100)/(all+1))
  }

  const ClickNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAverage(average+0)
    setPositive(((good)*100)/(all+1))
  }

  const ClickBad = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage(average-(1/22.5))
    setPositive(((good)*100)/(all+1))
  }

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map( course => <Course course={course} />)}
      <div>
        <div>
          <h1>Give feedback</h1>
          <button onClick={ClickGood}>good</button>
          <button onClick={ClickNeutral}>neutral</button>
          <button onClick={ClickBad}>bad</button>
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      </div>
      <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} placeholder="filter" onChange={handleFilter} />
      </div>
      <form onSubmit={handleClick}>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} placeholder="newName" onChange={handleChangeNewName}/>
        </div>
        <div>
          number: <input value={newNumber} placeholder="newNumber" onChange={handleChangeNewNumber}/>
        </div>
        <div>
          <button id='form-phonebook' type="submit">add</button>
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
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))