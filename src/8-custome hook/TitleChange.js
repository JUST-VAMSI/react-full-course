import React,{useState} from 'react';
import usePageTitle from './usePageTitle';

const TitleChange = () => {
    const [count,setCount]=useState(0);
    usePageTitle(count);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count-{count}</button>
    </div>
  )
}

export default TitleChange;