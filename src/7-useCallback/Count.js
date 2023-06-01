import React from 'react'

const Count=({text,number})=>{
    return <div>{text}: {number}</div>
}

export default React.memo(Count);