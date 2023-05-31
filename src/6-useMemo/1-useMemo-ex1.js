import React,{ useState, useMemo} from 'react'

const Final = () => {
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);
    const doubleNumber=useMemo(()=>{
        return slowFunction(number);
    },[number]);
    const theme=useMemo(()=>{
        return {
            background:dark?'black':'white',
            color:dark?'white':'black',
        }
    },[dark]);
  return (
    <>
    <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    </div>
    <br/>
    <div>
    <button onClick={()=>setDark(!dark)}>change theme</button>
    </div>
    <div>
        <h2 style={theme}>hi frnds: {doubleNumber}</h2>
    </div>
    </>
  )
}
const slowFunction=(number)=>{
    for(let index=0;index<10000000;index+1)
    {
        return number*2;
    }
    

}

export default Final