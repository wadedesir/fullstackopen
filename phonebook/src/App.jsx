import { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Form from './components/Form'
import Filter from './components/Filter'

import service from './services/database'

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  useEffect(() => {
    service
      .getAll()
      .then(resp => {
        setPersons(resp)
        setFilter(resp)
      })
  }, [])
  

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filterVal, setFilterVal] = useState('')
  const [filter, setFilter] = useState(persons)

  const addNumber = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNum
    }

    let exists = false
    persons.forEach(person => {
      if(person.name == newName){
        alert(`${newName} already exists in phonebook!`)
        exists = true
      }

    })

    if(exists) return

    service
      .create(newPerson)
      .then(resp => console.log(resp))

    const newPersons = persons.concat([newPerson])
    setPersons(newPersons)
    setFilter(newPersons)
  }

  const filterItems = (event) => {
    setFilterVal(event.target.value)
    if(event.target.value == ''){
      setFilter(persons)
    }else{
      setFilter(persons.filter(item => item.name == event.target.value))
    }
  }

  const deleteNum = (id) => {
    service
      .remove(id)
      .then(resp => console.log(resp))
    
    const newPersons = persons.filter((person) => person.id !== id)
    setPersons(newPersons)
    setFilter(newPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Filter: <Filter filterVal={filterVal} filterItems={filterItems} />
      <Form newName={newName} setNewName={setNewName} newNum={newNum} setNewNum={setNewNum} addNumber={addNumber}/>
      <h2>Numbers</h2>
      <Numbers numbers={filter} deleteNum={deleteNum}/>
    </div>
  )
}

export default App