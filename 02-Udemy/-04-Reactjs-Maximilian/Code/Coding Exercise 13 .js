import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    // let color;
    let sit = false;
    const [fontcolor, setColor] = useState(false)
    function changeStyle () {
        setColor(fontcolor => !fontcolor);
    }
    return (
        <div>
            <p style= {{color: fontcolor ? "red" : "white"}}>Style me!</p>
            <button onClick={changeStyle}>Toggle style</button>
        </div>
    );
}
