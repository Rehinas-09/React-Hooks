import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() {
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log('Button clicked')
    },[])
  return (
    <div>
      <p>Parent Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <Child onClick={handleClick}/> 
    </div>
  )
}

export default Parent
