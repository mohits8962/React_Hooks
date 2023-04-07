import React from "react";
import { UserContext, channelContext } from "./00_ContextHook";

const ComponentF = () => {
    return (
        <div>
            <h3>Component F</h3>
            <UserContext.Consumer>
                {
                    (user) => {
                        return (
                            <channelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>
                                                <h3>User Context Value -- {user}</h3>
                                                <h5>Channel Context Value -- {channel}</h5>
                                            </div>
                                        )
                                    }
                                }
                            </channelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer >
        </div >
    )
};

export default ComponentF;
