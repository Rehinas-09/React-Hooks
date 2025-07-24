import React, { useRef } from 'react'

function AccessDom() {
    const inputRef=useRef(null)
    const focusInput=()=>{
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} type="text" placeholder="Type here.."/>
        <button onClick={focusInput}>FocusInput</button>
    </div>
  )
}

export default AccessDom
