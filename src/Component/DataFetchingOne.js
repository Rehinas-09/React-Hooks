import React, { useEffect, useState, useSyncExternalStore } from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState({})
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(response=>{
        setLoading(false)
        setPost(response.data)
        setError('')
      })
       .catch(error=>{
        setLoading(false)
        setPost({})
        setError('Somthing went wrong')
    })
    },[])
  return (   
    <div>
         {loading? `Loading`:post.title}
         {error? error:null}
    </div>
  )
} 

export default DataFetchingOne; 
