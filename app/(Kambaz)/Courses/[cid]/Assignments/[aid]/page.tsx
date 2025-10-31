"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button, FormControl, FormSelect, FormCheck, Card, CardBody, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";

// Format date for datetime-local input
const formatDateForInput = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const isNew = aid === "new";
  
  // Find the assignment data if editing
  const existingAssignment = !isNew ? assignments.find((a: any) => a._id === aid) : null;
  
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 100,
    availableFrom: "",
    dueDate: "",
    availableUntil: "",
  });

  useEffect(() => {
    if (existingAssignment) {
      setAssignment({
        title: existingAssignment.title || "",
        description: existingAssignment.description || "",
        points: existingAssignment.points || 100,
        availableFrom: formatDateForInput(existingAssignment.availableFrom),
        dueDate: formatDateForInput(existingAssignment.dueDate),
        availableUntil: existingAssignment.availableUntil ? formatDateForInput(existingAssignment.availableUntil) : "",
      });
    } else if (isNew) {
      // Set default dates for new assignment
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      setAssignment({
        title: "",
        description: "",
        points: 100,
        availableFrom: formatDateForInput(now.toISOString()),
        dueDate: formatDateForInput(tomorrow.toISOString()),
        availableUntil: "",
      });
    }
  }, [existingAssignment, isNew]);

  const handleSave = () => {
    const assignmentData = {
      _id: isNew ? undefined : aid,
      title: assignment.title,
      description: assignment.description,
      points: parseInt(assignment.points.toString()),
      course: cid,
      availableFrom: assignment.availableFrom ? new Date(assignment.availableFrom).toISOString() : new Date().toISOString(),
      dueDate: assignment.dueDate ? new Date(assignment.dueDate).toISOString() : new Date().toISOString(),
      availableUntil: assignment.availableUntil ? new Date(assignment.availableUntil).toISOString() : undefined,
      module: "",
    };

    if (isNew) {
      dispatch(addAssignment(assignmentData));
    } else {
      dispatch(updateAssignment({ ...assignmentData, _id: aid }));
    }
    
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
        <FormControl 
          id="wd-name" 
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      
      {/* Description */}
      <div className="mb-3">
        <p className="text-success mb-2">The assignment is available online</p>
        <label htmlFor="wd-description" className="form-label fw-bold">Assignment Description</label>
        <FormControl 
          as="textarea" 
          id="wd-description" 
          rows={8} 
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>
      
      {/* Assignment Details Table */}
      <div className="mb-4">
        <table className="table">
          <tbody>
            <tr>
              <td className="text-end align-top pe-3">
                <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
              </td>
              <td>
                <FormControl 
                  id="wd-points" 
                  value={assignment.points}
                  onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })}
                  type="number" 
                />
              </td>
            </tr>
            <tr>
              <td className="text-end align-top pe-3">
                <label htmlFor="wd-group" className="form-label fw-bold">Assignment Group</label>
              </td>
              <td>
                <FormSelect id="wd-group">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECT">PROJECT</option>
                </FormSelect>
              </td>
            </tr>
            <tr>
              <td className="text-end align-top pe-3">
                <label htmlFor="wd-display-grade-as" className="form-label fw-bold">Display Grade as</label>
              </td>
              <td>
                <FormSelect id="wd-display-grade-as">
                  <option value="Percentage">Percentage</option>
                  <option value="Points">Points</option>
                  <option value="Letter Grade">Letter Grade</option>
                </FormSelect>
              </td>
            </tr>
            <tr>
              <td className="text-end align-top pe-3">
                <label htmlFor="wd-submission-type" className="form-label fw-bold">Submission Type</label>
              </td>
              <td>
                <FormSelect id="wd-submission-type">
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="On Paper">On Paper</option>
                </FormSelect>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Online Entry Options Card */}
      <Card className="mb-4">
        <CardBody>
          <h5 className="fw-bold mb-3">Online Entry Options</h5>
          <div className="d-flex flex-column gap-2">
            <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
            <FormCheck type="checkbox" id="wd-website-url" defaultChecked label="Website URL" />
            <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" />
          </div>
        </CardBody>
      </Card>
      
      {/* Assign Section */}
      <div className="mb-4">
        <h5 className="fw-bold mb-3">Assign</h5>
        
        <div className="mb-3">
          <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
          <div className="d-flex align-items-center gap-2">
            <FormControl id="wd-assign-to" defaultValue="Everyone" />
            <Button variant="outline-secondary" size="sm">
              <FaTimes />
            </Button>
          </div>
        </div>
        
        <Row className="mb-3">
          <Col md={4}>
            <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
            <FormControl 
              type="datetime-local" 
              id="wd-due-date" 
              value={assignment.dueDate}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
            />
          </Col>
          <Col md={4}>
            <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
            <FormControl 
              type="datetime-local" 
              id="wd-available-from" 
              value={assignment.availableFrom}
              onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
            />
          </Col>
          <Col md={4}>
            <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
            <FormControl 
              type="datetime-local" 
              id="wd-available-until" 
              value={assignment.availableUntil}
              onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
            />
          </Col>
        </Row>
      </div>
      
      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <Button 
          variant="secondary" 
          onClick={() => router.push(`/Courses/${cid}/Assignments`)}
        >
          Cancel
        </Button>
        <Button 
          variant="danger" 
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
