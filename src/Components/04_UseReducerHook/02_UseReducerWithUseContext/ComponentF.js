import React, { useContext } from "react";
import { CountContext } from "./00_UseReducerWithUseContext";

const ComponentF = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            <h4>ComponentF {countContext.countState}</h4>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
};

export default ComponentF;
