import React from 'react'

function Child({onClick}) {
    console.log('child rendered')
  return (
    <button onClick={onClick}>Click me</button>
  )
} 


export default Child
