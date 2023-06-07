import {useState,useEffect} from 'react'

const URL="https://jsonplaceholder.typicode.com/users";
const useFetch = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [isError,setIsError]=useState(false);

    const makeAPICall= async(URL)=>{
        setIsError(false);
        setLoading(true);
        try {
            const response = await fetch(URL);
        const data = await response.json();
        setData(data);
        setIsError(false);
        setLoading(false);
        } catch (error) {
            setIsError(true);
            setLoading(false);
        }
    }
    useEffect(()=>{
        makeAPICall(URL);
    },[]);
    
    return [data,loading,isError];
}

export default useFetch