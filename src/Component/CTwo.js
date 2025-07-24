import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter';

function CTwo() {
    // const [count,setCount]=useState(0) 
    // const increment=()=>{
    //     setCount(prevCount=>prevCount+1)
    // }
    // const decrement=()=>{
    //     setCount(prevCount=>prevCount-1)
    // }
    // const reset=()=>{ 
    //     setCount(0)
    // }
    const [count,increment,decrement,reset]=useCounter()
  return (
    <div>  
        <h2>Count={count}</h2>
        <button onClick={increment}>incremnet</button>    
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )  
} 

export default CTwo; 
     