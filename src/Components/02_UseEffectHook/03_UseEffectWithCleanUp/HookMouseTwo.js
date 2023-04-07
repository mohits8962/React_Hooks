import React, { useState, useEffect } from "react";

const HookMouseTwo = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect Called');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("Component Unmounting Code")
            window.addEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
};

export default HookMouseTwo;
