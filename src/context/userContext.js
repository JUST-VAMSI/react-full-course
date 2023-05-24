import React from "react";

const initialState ={
    firstname:"vamsi",
    lastname:"veeramalla",
    email:"veeramallavamsi72@gmail.com"
};
export const userContext=React.createContext();

export const UserContextProvider=({children})=>{
    return <userContext.Provider value={initialState}>{children}</userContext.Provider>
};