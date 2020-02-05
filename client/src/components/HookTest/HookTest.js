import React, { useState } from "react";

const HookTest = props => {
    let [count, increment] = useState(0);

    const handleClick = () => {
        increment(count + 99);
        console.log(useState, count, increment);
    }
    
    return(
        <div onClick={handleClick}>
            {count}
        </div>
    )
}

export default HookTest;