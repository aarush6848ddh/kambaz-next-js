"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { add } from "./addReducer";

export default function AddRedux() {
  const [a, setA] = useState(12); // declare state variable a
  const [b, setB] = useState(23); // declare state variable b
  const { sum } = useSelector((state: any) => state.addReducer); // read the sum state variable from the reducer
  const dispatch = useDispatch(); // get dispatch function
  return (
    <div id="wd-add-redux" className="w-25">
      <h3>Add Redux</h3>
      <h4>{a} + {b} = {sum}</h4>
      {/* display the arithmetic addition of a and b */}
      <FormControl
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        id="wd-add-redux-input-a" />
      {/* input field for variable a */}
      <FormControl
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        id="wd-add-redux-input-b" />
      {/* input field for variable b */}
      <Button
        onClick={() => dispatch(add({ a, b }))}
        id="wd-add-redux-click">
        Add Redux
      </Button>
      {/* on click, call add reducer function to */}
      {/* compute the arithmetic addition of a and b, */}
      {/* and store it in application state */}
      {/* variable sum */}
      <hr />
    </div>
  );
}

