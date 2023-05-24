import React, {useReducer} from 'react';

const reducer=(state,action)=>{
  if(action.type==="DELETE_PERSON"){
    const newPersons = state.data.filter((eachPerson)=>{
        return eachPerson.id!==action.payload;
    })
    return {
      ...state,
      data: newPersons,
      length:state.length-1,
  };
  }
  return state;
};
function Final() {

  const initialState={
    data:[
      {id:1,firstname:"vamsi",email:"veeramallavamsi72@gmail.com"},
      {id:2,firstname:"siva",email:"siva@gmail.com"},
    ],
    length:2,
  };
  const [state,dispatch]=useReducer(reducer,initialState);

  const handleDelete=(id)=>{
    dispatch(
      {
        type:"DELETE_PERSON",
        payload:id,
      }
    )
  }
  return (
    <div>
      <h2>lenght:{state.length}</h2>
        {
          state.data.map((eachItem)=>{
            const {id,firstname,email}=eachItem;
            return <div key={id}>
              <h2>firstname:{firstname}</h2>
              <h2>email:{email}</h2>
              <button onClick={()=>handleDelete(id)}>Delete</button>
            </div>
          })
        }
    </div>
  );
};

export default Final