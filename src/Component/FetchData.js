// import React, { useEffect, useState } from 'react'

// function FetchData() {
//     const[users,setUsers]=useState([]);
//     const[loading,setLoading]=useState(true)
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response=>response.json())
//         .then(data=>{
//             setUsers(data);
//             setLoading(false)
//         })
//         .catch(error=>{
//             console.error("Error fetching data:",error)
//             setLoading(false) 
//         })
//     },[])
//   return (
//     <div>
//        <h2>User List</h2>
//        {
//          loading?<p>Loading...</p>:(
//             <ul>
//                 {
//                     users.map(user=>(
//                         <li key={user.id}>{user.name}({user.email})</li>
//                     ))
//                 }
//             </ul>
//          )
//        }
//     </div>
//   )
// }

// // export default FetchData
// import React, { useEffect,userState } from 'react'

// function FetchData() {
//     const [user,setUser]=useState(null);
//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(res=>res.json())
//     .then(data=>setUser(data))
//     },[userId])
//   return  user?(
//     <div>
//          <h3>{user.name}</h3>
//          <p>{user.email}</p>               
//     </div>
//   ):<p>Loading user....</p>
// }

// export default FetchData


