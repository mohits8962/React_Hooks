import React from "react";
import ClassMouse from "./ClassMouse";
import HookMouse from "./HookMouse";

const RunEffectOnlyOnce = () => {
    return (
        <div>
            <h3>********************* Run Effect Only Once ******************</h3>
            <ClassMouse />
            <HookMouse />
        </div>
    )
};

export default RunEffectOnlyOnce;
