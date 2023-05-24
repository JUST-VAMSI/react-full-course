import React, {useState} from 'react'

export default function Index() {
 const[firstname,setFirstname]=useState("");
 const[email,setEmail]=useState("");
 const[password,setPassword]=useState("");

//  const changeFirstname=(e)=>{
//     setFirstname(e.target.value);

//  };

//  const changeEmail=(e)=>{
//     setEmail(e.target.value);

//  };

//  const changePassword=(e)=>{
//     setPassword(e.target.value);

//  };

const handleInputValue=(e, name)=>{
    if(name==="firstname")
    {
        setFirstname(e.target.value);
    }
    else if(name==="email")
    {
        setEmail(e.target.value);
    }
    else if(name==="password")
    {
        setPassword(e.target.value);
    }
};

 const handleSubmit=(e)=>
 {
    e.preventDefault();
    let useObj={
        firstname: firstname,
        email: email,
        password: password,
    };
    console.log(useObj);
 };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="firstname" placeholder='Firstname' value={firstname} onChange={(e)=>handleInputValue(e,"firstname")}></input>
        </div>
        <div>
            <input type="email" name="email" placeholder='Email@gmail.com' value={email} onChange={(e)=>handleInputValue(e,"email")}></input>
        </div>
        <div>
            <input type="password" name="password" placeholder='password' value={password} onChange={(e)=>handleInputValue(e,"password")}></input>
        </div>
        <div>
            <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}
