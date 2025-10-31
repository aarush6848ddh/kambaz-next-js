"use client";

import { useState } from "react"; // import useState

export default function Counter() {
    const [count, setCount] = useState(7); // create and initialize state variable
    console.log(count); // render state variable
    return (
        <div id="wd-counter">
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)} id="wd-counter-up-click">
                Up
            </button>
            {/* handle events and update state variable with mutator */}
            <button onClick={() => setCount(count - 1)} id="wd-counter-down-click">
                Down
            </button>
            {/* now updates to the state */}
            {/* state variable do update the */}
            {/* DOM as desired */}
            <hr />
        </div>
    );
}

