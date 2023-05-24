import React,{ useContext } from "react";
import { userContext } from "../context/userContext";

const SubChildComponent=()=>{
    const data=useContext(userContext);

    const {firstname,lastname,email}=data;

    return (
        <div>
            <h3>SubChildComponent</h3>
            <h4>firstname: {firstname}</h4>
            <h4>lastname: {lastname}</h4>
            <h4>email: {email}</h4>
        </div>
    );
};
export default SubChildComponent;