import React, { useState } from "react";

const HookCounterTwo = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(initialCount)}>Reset </button><br />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button><br />
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button><br />
            <button onClick={incrementByFive}>Increment By 5</button>
        </div>
    )
};

export default HookCounterTwo;
