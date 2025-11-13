"use client";

import { useEffect, useState } from "react";
import { FormControl, FormCheck } from "react-bootstrap";
import * as client from "./client";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };

  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <div className="mb-3">
        <FormControl
          defaultValue={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className="mb-2"
        />
        <FormControl
          defaultValue={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          className="mb-2"
        />
        <FormControl
          type="date"
          defaultValue={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
          className="mb-2"
        />
        <div className="form-check form-switch mb-2">
          <FormCheck
            type="checkbox"
            checked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
            label="Completed"
          />
        </div>
      </div>
      <button
        className="btn btn-primary me-2"
        onClick={() => updateTitle(assignment.title)}
      >
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}

