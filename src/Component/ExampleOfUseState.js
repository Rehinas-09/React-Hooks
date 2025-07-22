// import React, { useEffect } from 'react'

// function ExampleOfUseState() {
//     useEffect(()=>{
//         console.log("component mount")
//     },[])
//   return (
//     <div>
//       Hello
//     </div>
//   )
// }

// export default ExampleOfUseState
// import React, { useEffect, useState } from 'react'

// function ExampleOfUseState() {
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//         console.log(`Count changed ${count}`)
//     },[count])
//   return (
//     <div>
//        <button onClick={()=>setCount(count+1)}>Click me {count}</button>
//     </div>
//   )
// }

// export default ExampleOfUseState
// import React, { useEffect,useState } from 'react'
        
// function ExampleOfUseState() {
//     const [seconds,setSeconds]=useState(0)
//     useEffect(()=>{
//         const interval=setInterval(()=>{
//             setSeconds(prev=>prev+1)
//     },1000);
//     return()=>clearInterval(interval)
//     },[])
//   return (
//     <div>
//       <p>Timer:{seconds}seconds</p>
//     </div>
//   )    
// }
// export default ExampleOfUseState
// import React, { useState,useEffect } from 'react'

// function ExampleOfUseState() {
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount((count)=>count+1)
//     },1000)
//   })
//   return (
//     <div>
//        I have renderes {count} times      
//     </div>
//   )
// }

// export default ExampleOfUseState
// import React, { useEffect, useState } from 'react'

// function ExampleOfUseState() {
//   const [count,setCount]=useState(0);
//   const [calculation,setCalculation]=useState(0)
//   useEffect(()=>{
//      setCalculation(()=>count*2)
//   },[count])
//   return (
//     <div>
//       <p>Count:{count}</p>
//       <button onClick={()=>setCount((c)=>c+1)}>+</button>
//       <p>Calculation:{calculation}</p>             
//     </div>
//   )
// }

// export default ExampleOfUseState
// import React, { useEffect, useState } from 'react'

// function ExampleOfUseState() {
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//     let timer=setTimeout(()=>{
//        setCount((count)=>count+1)
//     },1000);
//     return()=>clearTimeout(timer)
//   },[])                 
//   return (    
//     <div>
//        {count} 
//     </div>             
//   )      
// }              
// export default ExampleOfUseState
    