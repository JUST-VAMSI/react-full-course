import React, { useReducer,useEffect, useState } from 'react'

const reducer=(state,action)=>{
  if(action.type==="UPDATES_USERS_DATA"){
    return {
      ...state,
      userData: action.payload,  
      }
  }
  if(action.type==="LOADING")
  {
    return {
      ...state,
      isLoading: action.payload,
    }
  }
  if(action.type==="DELETE")
  {
    const newPersons=state.userData.filter((eachUser)=>{
      return eachUser.id !== action.payload
    });
    return {
      ...state,
      userData: newPersons,
    }
  }
  if(action.type==="EDITING")
  {
    return{
      ...state,
      isEdit:action.payload,
    }
  }
  if(action.type === "USER_UPDATE")
  {
    const newUsers=state.userData.map((eachUser)=>{
      if(eachUser.id === action.payload.id){
        return {
          id: action.payload.id,
          email:action.payload.email,
          name:action.payload.name,
        }
      }
      else{
        return eachUser;
      }
    });
    return {
      ...state,
      userData: newUsers,
    }
  }
    return state;
};

const Final = () => {
  const fetchUsersData= async (url)=>{
    dispatch({type:"LOADING",payload:true});
    dispatch({type:"ERROR",payload:{status:false,msg:""}});
    try {
      const response= await fetch(url);
    const data = await response.json();
    dispatch ({type:"UPDATES_USERS_DATA",payload:data});
    dispatch({type:"LOADING",payload:false});
    dispatch({type:"ERROR",payload:{status:false,msg:""}});

    } catch (error) {
      dispatch({type:"LOADING",payload:false});
      dispatch({type:"ERROR",payload:{status:true,msg:error.message}});
    }
  };
useEffect(()=>{
  fetchUsersData("https://jsonplaceholder.typicode.com/users");
},[]);


const initialState={
  userData:[],
  isLoading:false,
  isError: {status:false,msg:''},
  isEdit:{status:false,id:'',name:'',email:''},
};
  const [state,dispatch]=useReducer(reducer,initialState);  
   
  if(state.isLoading)
  {
    return <div>
      <h2>Loading....</h2>
    </div>
  }
  const handleDelete=(id)=>{
    dispatch({
      type:"DELETE",
      payload:id,
    });
  }
  const updateData=(id,email,name)=>{
    dispatch({
      type:"USER_UPDATE",
      payload:{
        id,email,name,
      }
    });
    dispatch({type:"EDITING",
            payload:{status:false,id:"",name:"",email:""}});
  }
  return (
    <div>
        <h2>users Information</h2>
        {state.isEdit?.status && <EditingUser id={state.isEdit.id} comingEmail={state.isEdit.email} 
        comingTitle={state.isEdit.name} updateData={updateData}/>}
        {
          state.userData.map((eachUser)=>{
            const{id,email,name}=eachUser;
            return <div key={id}>
              <h3>email:{email}</h3>
              <h3>name:{name}</h3>
              <button onClick={()=>handleDelete(id)}>Delete</button>
              <button onClick={()=>dispatch({type:"EDITING",
            payload:{status:true,id:id,name:name,email}})}>Edit</button>
            </div>
          })
        }
    </div>
  )
};

const EditingUser=({id,comingEmail,comingTitle,updateData})=>{
  const [title,setTitle]=useState(comingTitle || "");
  const [email,setEmail]=useState(comingEmail || "");
  return <>
  <form>
    <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    <button onClick={()=>updateData(id, email, title)}>Update</button>
  </form>
  </>
};

export default Final;