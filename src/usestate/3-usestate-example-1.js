import React,{ useState }from 'react'

export default function Helo() {
    const [showData,setShowData]=useState(false);
    const show=()=>{
        setShowData(!showData)
    };
  return (
    <div>
      <button onClick={show}>{showData?"hide":"show"}</button>
      {showData && (<div className='content'>
        Hi helo nemasthe andharu baunnara!
      </div>)}
      
    </div>
  )
};
