import React, {useState} from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App(props) {
    const [price, setDiscount] = useState(100)
    function Handler () {
        setDiscount("75");
    }
    return (
        <div>
            <p>${price}</p>
            <button onClick={Handler}>Apply Discount</button>
        </div>
    );
}
