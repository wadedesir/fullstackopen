import React from 'react'

export default function StatisticLine({text, stat}) {
  return (
    <tr>
        <td>{text}:</td>
        <td>{stat}</td>
    </tr>
  )
}
