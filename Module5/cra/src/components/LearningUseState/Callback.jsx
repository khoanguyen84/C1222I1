import React, { useState } from "react";

function Callback(){
    const [count, setCount] = useState(0);
    const handleIncreament = () => {
        setCount((prev) => prev + 1)
        setCount((prev) => {
            //logic
            return prev + 1;
        })
        setCount((prev) => {
            return prev + 1;
        })
    }
    console.log('re-render');
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncreament}>Increament</button>
        </div>
        
    )
}

export default Callback;