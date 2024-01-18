import React from 'react'

export default function Filter({filterVal, filterItems}) {
  return (
    <input value={filterVal} onChange={(event) => filterItems(event)}/>
  )
}
