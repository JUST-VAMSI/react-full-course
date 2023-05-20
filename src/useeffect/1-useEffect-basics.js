import React, {useEffect,useState} from 'react'

function Index() {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("i am coming from useEffect");
    },[]);
    
  return (
    <div>
      <h2>useEffect</h2>
      <h3>{count}</h3>
      <button onClick={()=>{
        setCount(count+1);
      }}>+</button>
      <p></p>
    </div>
  );
};

export default Index
