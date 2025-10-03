import Link from "next/link";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      {/* Top Control Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="position-relative" style={{ width: "300px" }}>
          <FormControl 
            placeholder="Search..." 
            id="wd-search-assignment"
            className="ps-5"
          />
          <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
        </div>
        <div className="d-flex gap-2">
          <Button variant="secondary" size="lg" id="wd-add-assignment-group">
            <BsPlus className="me-1" />
            Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment">
            <BsPlus className="me-1" />
            Assignment
          </Button>
        </div>
      </div>
      
      {/* Assignments Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 id="wd-assignments-title" className="fw-bold mb-0">
          ASSIGNMENTS
        </h3>
        <div className="d-flex align-items-center gap-2">
          <span className="text-muted">40% of Total</span>
          <BsPlus className="fs-4 text-muted" />
          <IoEllipsisVertical className="fs-4 text-muted" />
        </div>
      </div>
      
      {/* Assignments List */}
      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroupItem className="wd-assignment-list-item p-3 border-start border-success border-4">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-2">
                <BsGripVertical className="me-2 fs-4 text-muted" />
                <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-decoration-none">
                  A1
                </Link>
              </div>
              <div className="text-muted small ms-4">
                Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex gap-2">
              <FaCheckCircle className="fs-4 text-success" />
              <IoEllipsisVertical className="fs-4 text-muted" />
            </div>
          </div>
        </ListGroupItem>
        
        <ListGroupItem className="wd-assignment-list-item p-3 border-start border-success border-4">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-2">
                <BsGripVertical className="me-2 fs-4 text-muted" />
                <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link fw-bold text-decoration-none">
                  A2
                </Link>
              </div>
              <div className="text-muted small ms-4">
                Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex gap-2">
              <FaCheckCircle className="fs-4 text-success" />
              <IoEllipsisVertical className="fs-4 text-muted" />
            </div>
          </div>
        </ListGroupItem>
        
        <ListGroupItem className="wd-assignment-list-item p-3 border-start border-success border-4">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-2">
                <BsGripVertical className="me-2 fs-4 text-muted" />
                <Link href="/Courses/1234/Assignments/125" className="wd-assignment-link fw-bold text-decoration-none">
                  A3
                </Link>
              </div>
              <div className="text-muted small ms-4">
                Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex gap-2">
              <FaCheckCircle className="fs-4 text-success" />
              <IoEllipsisVertical className="fs-4 text-muted" />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
