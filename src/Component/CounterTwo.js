import React,{useReducer} from 'react'

const initialValue={
    firstCounter:0,
    secondCounter:10
} 
const reducer=(state,action)=>{
    switch(action.type){
        case `increment`:
            return {...state,firstCounter:state.firstCounter+action.value}
        case `decrement`:
            return {...state,firstCounter:state.firstCounter-action.value}
        case `incrementTwo`:
            return {...state,secondCounter:state.secondCounter+action.value}
        case `decrementTwo`:
            return {...state,secondCounter:state.secondCounter-action.value}    
        case `reset`:                      
            return initialValue     
        default:                       
            return state                                                
    }                                                                                              
}                                                               
function CounterTwo() {                     
    const [count,dispatch]=useReducer(reducer,initialValue)     
  return (         
    <div>
        <div>First Counter:{count.firstCounter}</div>
        <div>Second Counter:{count.secondCounter}</div>
       <button onClick={()=>dispatch({type:"increment",value:1})}>Increment</button>
       <button onClick={()=>dispatch({type:"decrement",value:1})}>Decrement</button>  
       <button onClick={()=>dispatch({type:"increment",value:5})}>Increment</button>
       <button onClick={()=>dispatch({type:"decrement",value:5})}>Decrement</button>   
       <button onClick={()=>dispatch({type:"incrementTwo",value:5})}>Increment Counter2</button>
       <button onClick={()=>dispatch({type:"decrementTwo",value:5})}>Decrement Counetr2</button>
       <button onClick={()=>dispatch({type:"reset"})}>Reset</button>                               
    </div>    
  )                 
}                                              

export default CounterTwo   