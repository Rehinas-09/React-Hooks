import React, { useContext } from 'react'
import { countContext } from '../App'

function Cf() {
  const countContext=useContext(countContext)
  return (
    <div>
      Component  F 
        <button click={()=>countContext.countDispatch(`increment`)}>Increment</button>
       <button click={()=>countContext.countDispatch(`deccrement`)}>Decrement</button>
       <button click={()=>countContext.countDispatch(`reset`)}>reset</button>
    </div>
  )
}

export default Cf
 