import React, {useEffect,useState} from 'react'

function Index() {
    const[count,setCount]=useState(0);
    const [toggle,setToggle]=useState(true);
    const [pageWidth,setPageWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const resizeHandler=()=>{
            setPageWidth(window.innerWidth);};
            
        window.addEventListener("resize",resizeHandler);
        
        console.log("i am coming from useEffect",count);
        return ()=>{
            console.log("i am removing");
            window.removeEventListener('resize',resizeHandler);
        };
    });
    
  return (
    <div>
      <h2>useEffect</h2>
      <h1>{pageWidth}</h1>
      <button onClick={()=>setToggle(!toggle)}>{toggle ? "open" : "close"}</button>
      <h3>{count}</h3>
      <button onClick={()=>{
        setCount(count+1);
      }}>+</button>
      <p></p>
    </div>
  );
};

export default Index
