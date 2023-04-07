import React, { useState } from "react";

const HookCounter = () => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h3>Hook Counter</h3>
            <button onClick={incrementCount}>Count {count} Times</button>
        </div>
    )
};

export default HookCounter;
