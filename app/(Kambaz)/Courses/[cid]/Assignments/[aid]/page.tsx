import { Button, FormControl, FormSelect, FormCheck, Card, CardBody, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
        <FormControl id="wd-name" defaultValue="A1" />
      </div>
      
      {/* Description */}
      <div className="mb-3">
        <p className="text-success mb-2">The assignment is available online</p>
        <label htmlFor="wd-description" className="form-label fw-bold">Assignment Description</label>
        <FormControl 
          as="textarea" 
          id="wd-description" 
          rows={8} 
          defaultValue="Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: • Your full name and section • Links to each of the lab assignments • Link to the Kanbas application • Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
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
                <FormControl id="wd-points" defaultValue={100} type="number" />
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
            <FormControl type="datetime-local" id="wd-due-date" defaultValue="2024-05-13T23:59" />
          </Col>
          <Col md={4}>
            <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
            <FormControl type="datetime-local" id="wd-available-from" defaultValue="2024-05-06T00:00" />
          </Col>
          <Col md={4}>
            <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
            <FormControl type="datetime-local" id="wd-available-until" />
          </Col>
        </Row>
      </div>
      
      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
