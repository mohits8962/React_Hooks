import React from "react";
import FocusInput from "./FocusInput";
import ClassTimer from "./ClassTimer";
import HookTimer from "./HookTimer";

const RefHook = () => {
    return (
        <div>
            <h3>******* UseRef Hook *********</h3>
            <FocusInput/>
            <ClassTimer/>
            <HookTimer/>
        </div>
    )
};

export default RefHook;
