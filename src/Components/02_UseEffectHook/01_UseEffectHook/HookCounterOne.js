import React, { useState, useEffect } from "react";

const HookCounterOne = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("UseEfect - Updating Document Title");
        document.title = `You Clicked ${count} Times`
    }, [count]);


    return (
        <div>
            <h3>Hook Counter</h3>
            <input type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
        </div>
    )
};

export default HookCounterOne;
