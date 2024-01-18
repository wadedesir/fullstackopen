import React from 'react'

export default function Numbers({numbers, deleteNum}) {
  return (
    <div>
        {numbers.map((number, i) => {
          return(
          <>
            <p key={i} >{number.name} : {number.number}</p>
            <button onClick={() => deleteNum(number.id)}>delete</button>
          </>
          )
        }
        )}
    </div>
  )
}
