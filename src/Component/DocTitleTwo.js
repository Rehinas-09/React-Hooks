import React, { useState } from 'react'
import Count from './Count'
import UseDocumentTitle from '../Hooks/useDocumentTite'

function DocTitleTwo() {
    const [count,setCount]=useState(0)
     UseDocumentTitle(count)
  return (   
    <div> 
      <button onClick={()=>setCount(count+1)}>Count -{count}</button>
    </div>
  )
}

export default DocTitleTwo
 