import React from 'react';
import useFetch from './useFetch';


const FirstAPI = () => {
    const [userData,loading,isError]=useFetch();
    if(isError){
        return <h1>something went wrong</h1>
    }
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h2>UserData</h2>
        <div>
            {userData.map((eachUser)=>{
                const {id,username}=eachUser;
                return <h4 key={id}>{username}</h4>
            })}
        </div>
    </div>
  )
}

export default FirstAPI