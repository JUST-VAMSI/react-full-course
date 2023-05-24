import React from 'react'
import ChildComponent from './childComponent';
const ParentComponent=()=> {
  
  return (
    <div>
        <h1>useContext ParentComponent </h1>
        <ChildComponent />
    </div>
  )
};

export default ParentComponent;