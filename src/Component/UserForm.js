import React, { useState } from 'react'
import useInput from '../Hooks/useInput'

function UserForm() {
    // const [firstName,setFirstName]=useState('')
    // const [lastName,setLastName]=useState('')
    const [firstName,bindFirstName,resetFirstName]=useInput('')  
    const [lastName,bindLastName,resetLastName]=useInput(' ')
    const handleSubmit=(e)=>{
        e.preventDefault()  
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <div>
        <label>First Name</label>
        <input type='text' {...bindFirstName}></input>
        </div>  
        <div>
            <label>Last Name</label>
            <input type="text" value={lastName} {...bindLastName}/>
        </div>
        <button type="submit">Submit</button>
      </form>  
    </div >  
  )      
}            
export default UserForm;
 