import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
    const navigate= useNavigate();
    const navigateToHome=()=>{
        navigate("../");
    }
  return (
    <div>
        <h1>Navigation</h1>
        <button onClick={navigateToHome}>back to page</button>
        </div>
  )
}

export default Success