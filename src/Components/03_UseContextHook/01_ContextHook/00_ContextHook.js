import React from "react";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext()
export const channelContext = React.createContext()

const UseContext = () => {
    return (
        <div>
            <h3>*************** UseContext Hook ***************</h3>
            <UserContext.Provider value={"Mohit"}>
                <channelContext.Provider value={"Developer and Designer"}>
                    <ComponentC />
                </channelContext.Provider>
            </UserContext.Provider>
        </div>
    )
};

export default UseContext;
