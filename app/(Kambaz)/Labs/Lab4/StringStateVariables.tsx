"use client";

import { useState } from "react"; // import useState
import { FormControl } from "react-bootstrap";

export default function StringStateVariables() {
    const [firstName, setFirstName] = useState("John"); // declare and
    // initialize
    // state variable
    return (
        <div id="wd-string-state-variables">
            <h2>String State Variables</h2>
            {/* render string */}
            <p>{firstName}</p>
            {/* state variable */}
            <FormControl
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="wd-string-state-input" />
            {/* initialize a */}
            {/* text input field with the state variable */}
            {/* update the state variable at each key stroke */}
            <hr />
        </div>
    );
}

