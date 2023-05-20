import React,{ useState } from 'react';

const Index=()=>{
    const initialArr=[{
        id:1,
        firstname:"vamsi",
        lastname:"v",
        age:20,
    },
    {
        id:2,
        firstname:"venkat",
        lastname:"vv",
        age:21,
    }
];

    const[data,setData]=useState(initialArr);

    // const changeFirst=()=>{
    //     setData({
    //         ...data,
    //         firstname:"siva",
    //     }
    //     )
    // };

    // const changeLast=()=>{
    //     setData({
    //         ...data,
    //         lastname:"veeramalla",
    //     }
    //     )
    // };
    const handleDel=(comingId)=>{
        const filterData = data.filter((eachItem)=>{
            const {id}=eachItem;
            return id!==comingId;
        })
        setData(filterData);
    };
    return <div>
       {data.map((eachItem)=>{
        const {firstname,lastname,age,id}=eachItem;
        return (
            <ul>
            <li><h3>my name is {firstname}</h3></li>
            <li><h2>my surname is {lastname}</h2></li>
            <li><h3>my age is {age}</h3></li>
            <li><button onClick={()=>handleDel(id)}>del</button></li>
            </ul>
        );
       })}
        
    </div>
};

export default Index;