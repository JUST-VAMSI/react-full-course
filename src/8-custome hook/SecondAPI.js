import React from 'react';
import useFetch from './useFetch';


const SecondAPI = () => {
    const [userPostData,loading,isError]=useFetch();
    if(isError){
        return <h1>something went wrong</h1>
    }
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h2>userPostData</h2>
        <div>
            {userPostData.map((eachUser)=>{
                const {id,name}=eachUser;
                return <h4 key={id}>{name}</h4>
            })}
        </div>
    </div>
  )
}

export default SecondAPI;