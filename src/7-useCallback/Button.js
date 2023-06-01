import React from 'react'

const Button=({children ,clickHandler})=>{
    return <button onClick={clickHandler}>{children}</button>
}

export default React.memo(Button);