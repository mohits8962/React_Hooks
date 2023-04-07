import React, { useContext } from "react";
import { CountContext } from "./00_UseReducerWithUseContext";

const ComponentD = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            <h4>ComponentD {countContext.countState}</h4>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
};

export default ComponentD;
