import React, { useContext } from 'react'

import userContext from '../Component/UserContext'
function ProfileClass() {
    const user=useContext(userContext)
  return (
    <div>
       <h2>Welcome,{user.name}</h2>
       <p>Email:{user.email}</p>
    </div>
  )
}

export default ProfileClass


