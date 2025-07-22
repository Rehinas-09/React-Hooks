// import React, { useEffect, useState } from 'react'

// function IntervalHookCounter() {
//     const [count,setCount]=useState(0)
//     const tick=()=>{
//        setCount=()=>{
//          setCount(count+1)
//        } 
//     }
//     // // useEffect(()=>{
//     // //     const interval=setInterval(tick,1000)
//     // //     return()=>{
//     // //       clearInterval(interval)
//     // //     }
//     // },[])
//   return (
//     <div>
//       {count}
//     </div>   
//   )
// }
   
// export default IntervalHookCounter
import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
  const [count,setCount]=useState(0)
  const tick=()=>{
    setCount(prevCount=>prevCount+1)
  }

  useEffect(()=>{
    // function doSomething(){ 
    //   console.log(someProp)
    // }
    const interval=setInterval(tick,2000)
    return()=>{
      clearInterval(interval)
    }
  },
)
  return (
    <div>
      {count}
    </div>
  )  
}

export default IntervalHookCounter
