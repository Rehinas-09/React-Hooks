import React,{useState,useMemo} from 'react'

function Counter2() {
    const [CounterOne,setCounterOne]=useState(0)
    const [CounterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(CounterOne+1)
    }     
    const incrementTwo=()=>{ 
        setCounterTwo(CounterTwo+1)
    }
    const isEven=useMemo(()=>{
        let i=0     
        while(i<200000)i++ 
        return CounterTwo%2==0; 
    },[CounterTwo] )
  return (    
    <div>  
        <div> 
             <button onClick={incrementOne}>Count One-{CounterOne}</button>
           
        </div>
        <div>
            <button onClick={incrementTwo}>Count two-{CounterTwo}</button>
           <span>{isEven?"even":'odd'}</span>
        </div>      
    </div> 
  )         
}    
export default Counter2
  