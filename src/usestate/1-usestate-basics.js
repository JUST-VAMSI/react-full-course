import React,{ useState } from "react";

const Index=()=>{
const [count,setCount]=useState(0);
const decrement=()=>{
    setCount(count-1);
};

const increment=()=>{
    setCount((prevCount)=>{
        return prevCount+1;
    });
    setCount((prevCount)=>prevCount+1);
};

    return <div>
        <button onClick={decrement}>-</button>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
    </div>
};

export default Index;