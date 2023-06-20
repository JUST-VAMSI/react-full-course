import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const navigationToPage=()=>{
    navigate("/success");
  }
  return (
    <div>
      <h1>
        Home</h1>
        <button onClick={navigationToPage}>Submit</button>
        </div>
  )
}

export default Home