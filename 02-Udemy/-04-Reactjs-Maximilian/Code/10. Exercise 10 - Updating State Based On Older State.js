import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [IncrementCount, setIncrement] = React.useState("0");
    const onSub = (event) => {
        setIncrement(prevState => +prevState + 1);
    };
    
    return (
      <div>
        <p id="counter">{IncrementCount}</p>
        <button onClick={onSub}>Increment</button>
      </div>
    );
}