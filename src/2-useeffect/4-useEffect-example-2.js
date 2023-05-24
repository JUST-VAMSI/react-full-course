import React, { useState, useEffect } from 'react'

const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
function Index() {
    const[drinksData,setDrinksData] =useState([]);
    const [search,setSearch]=useState("");
    const [loading,setLoading]=useState(false);
    const [isError,setIsError]=useState({status:false,msg:""});
   const fetchData= async (fetchUrl)=>{
    setLoading(true);
    setIsError({status:false,msg:''});
    try{
        const response = await fetch(fetchUrl);
        const {drinks} = await response.json();
        setDrinksData(drinks);
        setLoading(false);
        setIsError({status:false,msg:''});
        if(!drinks){
            throw new Error('data not found');
        }
    }catch(error){
        setLoading(false);
        setIsError({status:true,msg: error.message ||'something went wrong'});
    }
   }
   useEffect(()=>{
    const correctURL =`${URL}${search}`;
    fetchData(correctURL);
   },[search]);

  return (
    <div>
        <form>
            <input type="text" id='search' name='search' placeholder='search something...' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        </form>
        <hr/>
        {loading && !isError?.status && <h1>loading....</h1>}
        {isError?.status && <h3 style={{color:"red"}}>{isError.msg}</h3>}
        {!loading && !isError?.status && <div className='cocktiles'>
            {
                drinksData.map((eachDrink)=>{
                    const {idDrink,strDrink,strDrinkThumb}=eachDrink;
                    return(
                        <div key={idDrink} className='eachCocktile'>
                            <img src={strDrinkThumb} alt={strDrink} width="300px" height="300px"></img>
                            <div className='text'><h3>{strDrink}</h3></div>
                            
                            </div>
                    )
                })
            }
        </div>}
        
    </div>
  );
};

export default Index;