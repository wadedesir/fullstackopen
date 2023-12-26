import React from 'react'
import Part from './Part'

export default function Content({parts}) {
  return (
    <div>
        <Part text={parts[0].name} exercise={parts[0].exercises} />
        <Part text={parts[1].name} exercise={parts[1].exercises} />
        <Part text={parts[2].name} exercise={parts[2].exercises} />
    </div>
  )
}
