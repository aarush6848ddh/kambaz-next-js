"use client";

import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 }); // declare and initialize object state
    // variable with multiple fields
    return (
        <div id="wd-object-state-variables">
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            {/* display raw JSON */}
            <FormControl
                defaultValue={person.name}
                onChange={(e) => setPerson({ ...person, name: e.target.value })}
                id="wd-object-state-name" />
            {/* initialize input field with an object's */}
            {/* field value */}
            {/* update field as user types. copy old */}
            {/* object, override specific field with new */}
            {/* value */}
            <FormControl
                defaultValue={person.age}
                onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
                id="wd-object-state-age" />
            {/* update field as user types. copy old */}
            {/* object, */}
            {/* override specific field with new value */}
            <hr />
        </div>
    );
}

