import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate=useNavigate();
  const navigateToHome=()=>{
    navigate("../");
  }
  return (
    <div><h1>
        Contact</h1>
        <button onClick={navigateToHome}>Back to home</button></div>
  )
}

export default Contact