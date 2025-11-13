"use client";

import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34"); // State variable for 'a'
  const [b, setB] = useState("23"); // State variable for 'b'
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <div className="mb-3">
        <FormControl 
          defaultValue={a} 
          onChange={(e) => setA(e.target.value)}
          className="mb-2"
          placeholder="Enter value for 'a'"
        />
        <FormControl 
          defaultValue={b} 
          onChange={(e) => setB(e.target.value)}
          className="mb-2"
          placeholder="Enter value for 'b'"
        />
      </div>
      <div className="d-flex flex-wrap gap-2 mb-3">
        <a 
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
          className="btn btn-primary"
        >
          Add {a} + {b}
        </a>
        <a 
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
          className="btn btn-danger"
        >
          Subtract {a} - {b}
        </a>
        <a 
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
          className="btn btn-success"
        >
          Multiply {a} × {b}
        </a>
        <a 
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
          className="btn btn-warning"
        >
          Divide {a} ÷ {b}
        </a>
      </div>
      <hr />
    </div>
  );
}

