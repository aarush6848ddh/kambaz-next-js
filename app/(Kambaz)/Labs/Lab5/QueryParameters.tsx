"use client";

import { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34"); // State variable for 'a'
  const [b, setB] = useState("23"); // State variable for 'b'
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <FormControl 
        id="wd-query-parameter-a"
        className="mb-2"
        defaultValue={a} 
        type="number"
        onChange={(e) => setA(e.target.value)} 
      />
      <FormControl 
        id="wd-query-parameter-b"
        className="mb-2"
        defaultValue={b} 
        type="number"
        onChange={(e) => setB(e.target.value)} 
      />
      <div className="d-flex flex-wrap gap-2 mb-3">
        <a 
          id="wd-query-parameter-add"
          href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
          className="btn btn-primary"
        >
          Add {a} + {b}
        </a>
        <a 
          id="wd-query-parameter-subtract"
          href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
          className="btn btn-danger"
        >
          Subtract {a} - {b}
        </a>
        <a 
          id="wd-query-parameter-multiply"
          href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
          className="btn btn-success"
        >
          Multiply {a} × {b}
        </a>
        <a 
          id="wd-query-parameter-divide"
          href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
          className="btn btn-warning"
        >
          Divide {a} ÷ {b}
        </a>
      </div>
      {/* create additional links to test multiply and divide. use IDs starting with wd-query-parameter- */}
      <hr />
    </div>
  );
}

