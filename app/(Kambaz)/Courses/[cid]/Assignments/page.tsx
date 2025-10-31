"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button, FormControl, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch, FaCheckCircle, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [deleteConfirm, setDeleteConfirm] = useState<{ show: boolean; assignmentId: string | null }>({ show: false, assignmentId: null });
  
  // Filter assignments for the current course
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);
  
  // Calculate total points for the course
  const totalPoints = courseAssignments.reduce((sum: number, assignment: any) => sum + assignment.points, 0);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric',
      hour12: true,
      minute: '2-digit'
    });
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    dispatch(deleteAssignment(assignmentId));
    setDeleteConfirm({ show: false, assignmentId: null });
  };

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
          <Button 
            variant="danger" 
            size="lg" 
            id="wd-add-assignment"
            onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
          >
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
          <span className="text-muted">{totalPoints} pts</span>
          <BsPlus className="fs-4 text-muted" />
          <IoEllipsisVertical className="fs-4 text-muted" />
        </div>
      </div>
      
      {/* Assignments List */}
      <ListGroup className="rounded-0" id="wd-assignment-list">
        {courseAssignments.map((assignment: any) => (
          <ListGroupItem key={assignment._id} className="wd-assignment-list-item p-3 border-start border-success border-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <div className="d-flex align-items-center mb-2">
                  <BsGripVertical className="me-2 fs-4 text-muted" />
                  <Link 
                    href={`/Courses/${cid}/Assignments/${assignment._id}`} 
                    className="wd-assignment-link fw-bold text-decoration-none"
                  >
                    {assignment.title}
                  </Link>
                </div>
                <div className="text-muted small ms-4">
                  {assignment.description} | Not available until {formatDate(assignment.availableFrom)} | Due {formatDate(assignment.dueDate)} | {assignment.points} pts
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <FaCheckCircle className="fs-4 text-success" />
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger p-0"
                  onClick={(e) => {
                    e.preventDefault();
                    setDeleteConfirm({ show: true, assignmentId: assignment._id });
                  }}
                  id={`wd-delete-assignment-${assignment._id}`}
                >
                  <FaTrash />
                </Button>
                <IoEllipsisVertical className="fs-4 text-muted" />
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>

      {/* Delete Confirmation Modal */}
      <Modal show={deleteConfirm.show} onHide={() => setDeleteConfirm({ show: false, assignmentId: null })}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteConfirm({ show: false, assignmentId: null })}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={() => deleteConfirm.assignmentId && handleDeleteAssignment(deleteConfirm.assignmentId)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
