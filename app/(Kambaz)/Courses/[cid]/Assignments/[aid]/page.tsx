"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button, FormControl, FormSelect, FormCheck, Card, CardBody, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { assignments } from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  
  // Find the assignment data
  const assignment = assignments.find((a: any) => a._id === aid);
  
  // If assignment not found, show error or redirect
  if (!assignment) {
    return (
      <div className="p-4">
        <h3>Assignment not found</h3>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="secondary">Back to Assignments</Button>
        </Link>
      </div>
    );
  }
  
  // Format date for datetime-local input
  const formatDateForInput = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
        <FormControl id="wd-name" defaultValue={assignment.title} />
      </div>
      
      {/* Description */}
      <div className="mb-3">
        <p className="text-success mb-2">The assignment is available online</p>
        <label htmlFor="wd-description" className="form-label fw-bold">Assignment Description</label>
        <FormControl 
          as="textarea" 
          id="wd-description" 
          rows={8} 
          defaultValue={assignment.description}
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
                <FormControl id="wd-points" defaultValue={assignment.points} type="number" />
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
              defaultValue={formatDateForInput(assignment.dueDate)} 
            />
          </Col>
          <Col md={4}>
            <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
            <FormControl 
              type="datetime-local" 
              id="wd-available-from" 
              defaultValue={formatDateForInput(assignment.availableFrom)} 
            />
          </Col>
          <Col md={4}>
            <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
            <FormControl type="datetime-local" id="wd-available-until" />
          </Col>
        </Row>
      </div>
      
      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="secondary">Cancel</Button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </div>
  );
}
