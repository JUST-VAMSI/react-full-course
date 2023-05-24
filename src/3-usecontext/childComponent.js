import React from "react";
import SubChildComponent from "./subChildComponent";

const ChildComponent=()=>{
    return (
        <div>
            <h2>ChildComponent</h2>
            <SubChildComponent />
        </div>
    );

};

export default ChildComponent;