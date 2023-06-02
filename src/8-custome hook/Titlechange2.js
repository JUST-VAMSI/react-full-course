import React,{useState} from 'react'
import usePageTitle from './usePageTitle';

const Titlechange2 = () => {
    const [count,setCount]=useState(0);
    usePageTitle(count);
  return (
    <div>
        <button onClick={()=>{
            setCount(count+1);
        }}>Count-{count}</button>
    </div>
  )
}

export default Titlechange2