// import React from 'react'
// const initialState={count:0}
// function reducer(state,action){
//     switch(action.type){
//         case `increment`:
//             return {count:state.count+1}
//         case `decrement`:
//             return {count:state.count-1}   
//         case `reset`:
//             return initialState
//         default:
//             throw new Error ('Unkown action error')         
//     }
// }
// function UseReducer() {
//    const [state,dispatch]=useReducer(reducer,initialState)
//   return ( 
//     <div>

//         <h2>Count:{state.count}</h2>
//         <button onClick={()=>dispatch({type:'increment'})}>+</button>
//         <button onClick={()=>dispatch({type:'decrement'})}>-</button>
//         <button onClick={()=>dispatch({type:'reset'})}>reset</button>
//     </div>
//   )
// }
// export default UseReducer                                                    
