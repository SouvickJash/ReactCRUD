import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateContext from './CreateContext'

const ContextState = ({children}) => {
   const[user,setUser]=useState([])
   const getData=async()=>{
        const url='https://api.escuelajs.co/api/v1/products'
        const response = await axios.get(`${url}`)
        setUser(response?.data)
   }
useEffect(()=>{
    getData()
},[])
// console.log(user)

  return (
    <>
      <CreateContext.Provider value={user}>
         {children}
      </CreateContext.Provider>
    </>
  )
}

export default ContextState
