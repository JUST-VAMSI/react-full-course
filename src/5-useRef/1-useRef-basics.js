import React, { useState,useEffect, useRef } from 'react'

const Final = () => {
    const [firstname,setFirstname]=useState('');
    const renderCount = useRef(1);

    useEffect(()=>{
        renderCount.current = renderCount.current +1;
    })
  return (
    <>
    <input type="text" name="firstname" onChange={(e)=>{
        setFirstname(e.target.value);
    }}></input>
    <h3>Typing: {firstname}</h3>
    <p>render {renderCount.current} times</p>
    </>
  )
}

export default Final