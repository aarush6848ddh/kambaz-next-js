"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]); // declare and initialize array state variable
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
        // create new array with existing elements plus new random number
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
        // create new array without the element at index
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <Button onClick={addElement} className="btn btn-success mb-3" id="wd-add-element-click">
                Add Element
            </Button>
            {/* button to add new element */}
            <ul>
                {array.map((item, index) => (
                    <li key={index}>
                        {item}
                        <Button
                            onClick={() => deleteElement(index)}
                            className="btn btn-danger ms-2"
                            id={`wd-delete-element-${index}-click`}>
                            Delete
                        </Button>
                        {/* button to delete element at index */}
                    </li>
                ))}
            </ul>
            {/* render array as list with delete buttons */}
            <hr />
        </div>
    );
}

