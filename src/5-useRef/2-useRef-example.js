import React,{useState,useRef,useEffect} from 'react'

const Final = () => {
    const [firstname,setFirstname]=useState('');
    const inputDom = useRef("");

    useEffect(()=>{
        
    })
    const focus=()=>{
        inputDom.current.focus();
    }
  return (
    <>
    <input type="text" ref={inputDom} name="firstname" onChange={(e)=>{
        setFirstname(e.target.value);
    }}></input>
    <h3>Typing: {firstname}</h3>
    <button onClick={focus}>Focus</button>
    </>
  )
}

export default Final