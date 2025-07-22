import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
     useEffect(()=>{
        console.log("Count update")
        document.title=`Click ${count}`
     },[count])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>count{count}</button>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    </div>   
  )
}               
export default HookCounterOne;
    