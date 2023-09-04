import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    const [state, setState] = useState(false);
    function toggleClasses() {
        setState(prev => !prev);
    }
    
    return (
        <div>
            <p className={ state ? "active" : ""}>Style me!</p>
            <button onClick={toggleClasses}>Toggle style</button>
        </div>
    );
}
