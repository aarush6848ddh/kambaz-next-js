"use client";

import { useState } from "react";

export default function EventObject() {
    const [event, setEvent] = useState(null); // initialize event
    const handleClick = (e: any) => {
        e.target = e.target.outerHTML; // replace target with HTML
        delete e.view; // to avoid circular reference
        setEvent(e); // set event object
    };
    return (
        <div id="wd-event-object">
            <h2>Event Object</h2>
            <button
                onClick={(e) => handleClick(e)}
                className="btn btn-primary"
                id="wd-display-event-obj-click">
                Display Event Object
            </button>
            {/* button that triggers event */}
            <pre>{JSON.stringify(event, null, 2)}</pre>
            {/* convert event object into */}
            {/* string to display */}
            <hr />
        </div>
    );
}

