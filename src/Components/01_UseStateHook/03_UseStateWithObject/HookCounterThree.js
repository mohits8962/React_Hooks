import React, { useState } from "react";

const HookCounterThree = () => {

    const [name, setName] = useState({ firstName: "", lastName: "" })
    return (
        <div>
            <form >
                <input type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />
                <input type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                />

                <h4>Your FirstName is - {name.firstName}</h4>
                <h4>Your LastName is - {name.lastName}</h4>
            </form>
        </div>
    )
};

export default HookCounterThree;
