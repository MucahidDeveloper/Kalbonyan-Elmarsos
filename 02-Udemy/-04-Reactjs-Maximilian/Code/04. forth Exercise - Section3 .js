// App.js:

import React from 'react';
import ExerciseComponent from './ExerciseComponent.js';
// don't change the Component name "App"
export default function App() {
    return <ExerciseComponent/>
        );
}


// ExerciseComponent.js:

import React from 'react';
// Todo: Add your component code
// Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!

export default function ExerciseComponent () {
    return <p>First exercise - done!</p>
}