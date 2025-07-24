import React, { useReducer,useState } from 'react'
function todoReducer(todos,action){
    switch(action.type){
        case 'add':
            return [...todos,{id:Date.now(),text:action.text}]
        case 'remove':
            return todos.filter(todo=>todo.id!==action.id)    
    }
}
function TodoList() {    
    const[todos,dispatch]=useReducer(todoReducer,[])
    const [input,setInput]=useState('');
    const handleAdd=()=>{
        dispatch({type:'add',text:input});
        setInput('')
    }  
  return (
    <div>
      <input
        value={input}
        onChange={(e)=>setInput(e.target.value)} placeholder='Enter todo' />
        <button onClick={handleAdd}>Add</button>
        <ul> 
            {
                todos.map(todo=>(
                    <li key={todo.id} onClick={(()=>dispatch({type:'remove',id:todo.id}))}>
                        {todo.text}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList;
