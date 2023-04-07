import React from "react";
import HookCounterTwo from "./HookCounterTwo";
import ClassCounterTwo from "./ClassCounterTwo";

const UseStateWithPrevState = () => {
    return (
        <div>
            <h3>************** UseState Hook With PrevState **************</h3>
            <ClassCounterTwo/>
            <HookCounterTwo />
        </div>
    )
};

export default UseStateWithPrevState;
