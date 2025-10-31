"use client";

import { useState } from "react";
import { FormCheck } from "react-bootstrap";

export default function BooleanStateVariables() {
    const [done, setDone] = useState(false); // declare and initialize boolean state variable
    return (
        <div id="wd-boolean-state-variables">
            <h2>Boolean State Variables</h2>
            <FormCheck
                type="checkbox"
                checked={done}
                onChange={(e) => setDone(e.target.checked)}
                id="wd-boolean-state-checkbox"
                label="Done" />
            {/* checkbox to toggle boolean state variable */}
            <p>{done ? "Done" : "Not done"}</p>
            {/* render text based on boolean state */}
            <hr />
        </div>
    );
}

