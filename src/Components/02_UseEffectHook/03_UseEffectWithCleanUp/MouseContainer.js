import React, { useState } from "react";
import HookMouseTwo from "./HookMouseTwo";

const MouseContainer = () => {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouseTwo />}
        </div>
    )
};

export default MouseContainer;
