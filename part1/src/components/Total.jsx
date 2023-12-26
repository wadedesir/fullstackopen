import React from 'react'

export default function Total({parts}) {
  return (
    <p>Number of exercises: {parts.reduce((a, b) =>{
        return a + b.exercises
    }, 0)}</p>
  )
}
