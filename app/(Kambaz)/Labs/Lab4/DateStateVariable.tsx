"use client";

import { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";

export default function DateStateVariable() {
    const [startDate, setStartDate] = useState<Date | null>(null); // declare state without initializing
    // initialize with today's date only on client to avoid hydration mismatch
    useEffect(() => {
        setStartDate(new Date());
    }, []);
    const dateObjectToHtmlDateString = (date: Date | null) => {
        if (!date) return "";
        // utility function to convert date object
        // to YYYY-MM-DD format for HTML date
        // picker
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}-${date.getDate() < 10 ? 0 : ""}${date.getDate()}`;
    };
    
    if (!startDate) {
        return (
            <div id="wd-date-state-variables">
                <h2>Date State Variables</h2>
                <p>Loading...</p>
            </div>
        );
    }
    
    return (
        <div id="wd-date-state-variables">
            <h2>Date State Variables</h2>
            <h3>{JSON.stringify(startDate)}</h3>
            {/* display raw date object */}
            <h3>{dateObjectToHtmlDateString(startDate)}</h3>
            {/* display in YYYY-MM-DD format for input */}
            {/* of type date */}
            <FormControl
                type="date"
                value={dateObjectToHtmlDateString(startDate)}
                onChange={(e) => setStartDate(new Date(e.target.value))}
                id="wd-date-state-input" />
            {/* set HTML input type to date */}
            {/* update when you change the date with */}
            {/* the date picker */}
            <hr />
        </div>
    );
}

