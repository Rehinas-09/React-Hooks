import React, { useState } from 'react'

function HookCounter2() {
    const initialCount=0;
    const[count,setCount]=useState(initialCount)
    const incrementFive=()=>{
       for(let i=0;i<5;i++){
         setCount(pervCount=>pervCount+1)
       }
    } 
  return (  
    <div>          
        Count:{count}
        <button onClick={()=>setCount(pervCount=>pervCount+1)}>Increment</button>
        <button onClick={()=>setCount(pervCount=>pervCount-1)}>Decrement</button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={incrementFive}>Increment Five</button>
    </div> 
  )   
}                        

export default HookCounter2
            