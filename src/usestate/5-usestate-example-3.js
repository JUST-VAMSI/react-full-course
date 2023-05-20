import React, {useState} from 'react'

function Index() {
   
 const [message,setMessage]=useState({
    text:"",
    id:""
 });
 const [list,setList]=useState([]);
  const changeMessage=(e)=>{
    setMessage({
        ...message,
        text: e.target.value,
    })
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    let newTodo={
        text:message.text,
        id: new Date().getTime().toString(),
    };
    setList([...list,newTodo]);
  };
  
  const delText=(comingId)=>{
    setList(list.filter((eachItem)=>{
        const {id}=eachItem;
        return id!==comingId;
    }));
    
  };

  const [edit,setEdit]=useState({
    id:"",
    isEditing: false,
  });

  const changeEditState=(comingId)=>{
    setEdit({
        ...edit,
        id: comingId,
        isEditing:true,
    });
    let editableItem = list.find((eachItem)=>eachItem.id === comingId);
    setMessage({
        ...message,
        text:editableItem.text,
        id:editableItem.id,
    });
  };

  const changeEdit=(e)=>{
    e.preventDefault();
       setList(list.map((eachItem)=>{
            if(eachItem.id===edit.id)
            {
                return {
                    text:message.text,
                    id:eachItem.id,

                };
            }
            else{
                return eachItem;
            }
        }));
        setMessage({
            text:"",
            id:"",
        });
        setEdit({
            id:"",
            isEditing:false,
        });
  };
  return (
    <div>
     <form>
        <input type="text" placeholder='name' value={message.text} onChange={changeMessage}></input>
        {edit.isEditing === true ? <button type="submit"onClick={changeEdit}>Edit</button> : <button type="submit" onClick={handleSubmit}>Add</button>}
        
     </form>
     <hr/>
     {list.length === 0 && <h3>There is no list items!</h3>}
     <ul>
        {
            list.map((eachItem)=>{
                const {text,id}=eachItem;
                return <li key={id}>
                    <h5>{text}</h5>
                    <button onClick={()=>changeEditState(id)}>edit</button>
                    <button onClick={()=>delText(id)}>delete</button>
                </li>
            })
        }
     </ul>
    </div>
  )
}

export default Index
