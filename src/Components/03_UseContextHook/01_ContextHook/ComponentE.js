import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, channelContext } from "./00_ContextHook";

const ComponentE = () => {

    const user = useContext(UserContext)
    const channel = useContext(channelContext)

    return (
        <div>
            {/* <h3>Component E</h3> */}
            <ComponentF />

            <h4>************** Use of useContext Hook **************</h4>
            <h5>{user} - {channel}</h5>
        </div>
    )
};

export default ComponentE;
