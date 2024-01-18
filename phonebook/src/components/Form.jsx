import React from 'react'

export default function Form({addNumber, newName, setNewName, newNum, setNewNum}) {
  return (
    <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}  />
        </div>
        <div>
          Number: <input value={newNum} onChange={(event) => setNewNum(event.target.value)}  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}
