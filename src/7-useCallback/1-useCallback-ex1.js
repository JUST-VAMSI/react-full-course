import React,{useState, useCallback} from 'react'
import Count from './Count';
import Button from './Button';
import Title from './Title';




const Final = () => {
    const [age,setAge]=useState(0);
    const [salary,setSalary]=useState(7000);

    const incrementAge=useCallback(()=>{
        setAge(age+1);
    },[age]);

    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000);
    },[salary]);

  return (
    <div>
    <Title />
    <Count text="age" number={age}/>
    <Button clickHandler={incrementAge}>incrementAge</Button>
    <Count text="salary" number={salary}/>
    <Button clickHandler={incrementSalary}>incrementSalary</Button>
    </div>
  )
}

export default Final