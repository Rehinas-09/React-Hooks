import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter';

function COne() {
const [count,increment,decrement,reset]=useCounter(10)
  return (
    <div>  
        <h2>Count={count}</h2>
        <button onClick={increment}>incremnet</button>    
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
} 

export default COne; 
 