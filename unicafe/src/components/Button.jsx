import React from 'react'

export default function Button({handler, text}) {
  return (
    <button onClick={handler}>{text}</button>
  )
}
