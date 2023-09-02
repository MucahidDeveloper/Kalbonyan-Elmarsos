// App.js:
import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product title="Product 1" price="10" description="First product"></Product>
            <Product title="Product 2" price="20" description="Second product"></Product>
        </div>
    );
}

// Product.js :
import React from 'react';
import './styles.css';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">import './styles.css';
            {props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}

// style.css:
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
}

.product {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #373535;
    color: #e7e4e4;
    border-radius: 8px;
}

.product h2,
.product p {
    margin: 0.5rem 0;
}

.price {
    font-size: 0.75rem;
    color: #bab6b6;
}