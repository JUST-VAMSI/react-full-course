import React,{useState,useEffect} from 'react'

const URL="https://jsonplaceholder.typicode.com/users";
function Index() {
    const [userData,setUserData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [isError,setIsError]=useState({status:false,msg:""});

const fetchUserData= async (url)=>{
    setLoading(true);
    setIsError({status:false,msg:''});
    try {
        const response= await fetch(url);
  const data= await response.json();
  setUserData(data);
  setLoading(false);
  setIsError({status:false,msg:''});
  if(response.status === 404){
    throw new Error("data not found");
  }
    } catch (error) {
        setLoading(false);
        setIsError({status:true,msg:error.message || "something went wrong,plz try again!"});
    }
  
};

useEffect(()=>{
  fetchUserData(URL);
},[]);
 
if(loading){
    return <div>
        <h2>Loading....</h2>
    </div>
}
if(isError?.status){
    return <div>
        <h3 style={{color:"red"}}>{isError?.msg}</h3>
    </div>
}
  return (
    <div>
        <h1>useEffect example-1</h1>
        <div className='profiles'>
           {
              (userData).map((eachUser)=>{
                const {id,name,email}=eachUser;
                return <div key={id} className='eachprofile'>
                    <img src="https://th.bing.com/th/id/OIP.4cwQfpsdXlva-s2Xo49_AAHaLL?pid=ImgDet&rs=1" alt="jocker" width="200px" height="300px"></img>
                    <div className='name'>{name}</div>
                    <div className='email'>{email}</div>
                </div>
              })
           }
        </div>
    </div>
  )
}

export default Index;