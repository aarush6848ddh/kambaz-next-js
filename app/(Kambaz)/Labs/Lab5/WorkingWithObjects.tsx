"use client";

import { useState } from "react";
import { FormControl, FormCheck } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  // create a state variable that holds
  // default values for the form below.
  // eventually we'll fetch this initial
  // data from the server and populate
  // the form with the remote data so
  // we can modify it here in the UI
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M1",
    name: "Node.js Basics",
    description: "Introduction to Node.js and Express.js",
    course: "CS4550",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a 
        id="wd-retrieve-assignments"
        href={`${ASSIGNMENT_API_URL}`}
        className="btn btn-primary"
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a 
        id="wd-retrieve-assignment-title"
        href={`${ASSIGNMENT_API_URL}/title`}
        className="btn btn-primary"
      >
        Get Title
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <div className="d-flex align-items-center gap-2 mb-3">
        <FormControl 
          className="w-75" 
          id="wd-assignment-title"
          defaultValue={assignment.title} 
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })}
        />
        {/* form element to edit local state variable */}
        {/* used to encode in URL that updates */}
        {/* property in remote object */}
        <a 
          id="wd-update-assignment-title"
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}>
          {/* encode the title in the URL that */}
          {/* updates the title */}
          Update Title
        </a>
      </div>
      <div className="d-flex align-items-center gap-2 mb-3">
        <FormControl 
          type="number"
          className="w-75" 
          id="wd-assignment-score"
          defaultValue={assignment.score} 
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })}
        />
        <a 
          id="wd-update-assignment-score"
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
      </div>
      <div className="d-flex align-items-center gap-2 mb-3">
        <FormCheck
          type="checkbox"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })}
          label="Completed"
        />
        <a 
          id="wd-update-assignment-completed"
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
      </div>
      <hr />
      
      <h3>Module Object</h3>
      <h4>Retrieving Module</h4>
      <a 
        id="wd-retrieve-module"
        href={`${MODULE_API_URL}`}
        className="btn btn-primary mb-2"
      >
        Get Module
      </a>
      <br />
      <a 
        id="wd-retrieve-module-name"
        href={`${MODULE_API_URL}/name`}
        className="btn btn-primary"
      >
        Get Module Name
      </a>
      <hr />
      
      <h4>Modifying Module Properties</h4>
      <div className="d-flex align-items-center gap-2 mb-3">
        <FormControl 
          className="w-75" 
          id="wd-module-name"
          defaultValue={module.name} 
          onChange={(e) =>
            setModule({ ...module, name: e.target.value })}
        />
        <a 
          id="wd-update-module-name"
          className="btn btn-primary"
          href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}>
          Update Module Name
        </a>
      </div>
      <div className="d-flex align-items-center gap-2 mb-3">
        <FormControl 
          className="w-75" 
          id="wd-module-description"
          defaultValue={module.description} 
          onChange={(e) =>
            setModule({ ...module, description: e.target.value })}
        />
        <a 
          id="wd-update-module-description"
          className="btn btn-primary"
          href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}>
          Update Module Description
        </a>
      </div>
      <hr />
    </div>
  );
}

