"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setCourse, addCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { addEnrollment, removeEnrollment } from "../Enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses, course } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  // Get courses based on toggle state
  const displayedCourses = showAllCourses
    ? courses
    : currentUser
    ? courses.filter((c: any) =>
        enrollments.some(
          (e: any) => e.user === currentUser._id && e.course === c._id
        )
      )
    : [];
  
  // Check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === courseId
    );
  };
  
  // Handle enroll/unenroll
  const handleEnrollToggle = (courseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    
    if (isEnrolled(courseId)) {
      dispatch(removeEnrollment({ userId: currentUser._id, courseId }));
    } else {
      dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
    }
  };
  
  // Check if user is faculty
  const isFaculty = currentUser?.role === "FACULTY";
  
  return (
    <div id="wd-dashboard" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 id="wd-dashboard-title" className="mb-0">Dashboard</h1>
        <Button
          variant="primary"
          style={{ backgroundColor: "#0d6efd", borderColor: "#0d6efd" }}
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-enrollments-toggle"
        >
          Enrollments
        </Button>
      </div>
      <hr />
      <h5>
        New Course
        <button 
          onClick={() => dispatch(updateCourse())}
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click">
          Update
        </button>
        <button 
          onClick={() => {
            if (course.name && course.name !== "New Course") {
              dispatch(addCourse(course));
            }
          }}
          className="btn btn-primary float-end"
          id="wd-add-new-course-click">
          Add
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))}
        className="mb-2" />
      <FormControl
        value={course.description}
        as="textarea"
        rows={3}
        onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))}
        className="mb-2" />
      <hr />
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} ({displayedCourses.length})
      </h2>
      
      <div 
        id="wd-dashboard-courses" 
        className="d-flex flex-wrap gap-4"
        style={{ 
          paddingLeft: "20px", 
          paddingTop: "35px", 
          paddingBottom: "35px",
          gap: "20px"
        }}
      >
        {displayedCourses.map((course: any) => (
          <Card 
            key={course._id}
            style={{ 
              width: "260px", 
              height: "auto",
              marginBottom: "35px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              minHeight: "320px"
            }}
            className="wd-dashboard-course-card"
          >
            <CardImg 
              variant="top" 
              src={course.image} 
              alt={`${course.name} logo`}
              style={{ height: "150px", objectFit: "cover" }}
            />
            <CardBody style={{ padding: "15px", height: "100%", display: "flex", flexDirection: "column" }}>
              <CardTitle style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>
                {course.name}
              </CardTitle>
              <CardText style={{ color: "#666", fontSize: "14px", marginBottom: "15px", flex: "1" }}>
                {course.description}
              </CardText>
              <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                <Link href={`/Courses/${course._id}/Home`} style={{ textDecoration: "none", flex: 1 }}>
                  <Button variant="primary" size="sm" style={{ width: "100%" }}>
                    Go
                  </Button>
                </Link>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(setCourse(course));
                  }}
                  className="btn btn-warning btn-sm"
                  id="wd-edit-course-click"
                  style={{ flex: 1 }}>
                  Edit
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(deleteCourse(course._id));
                  }}
                  className="btn btn-danger btn-sm"
                  id="wd-delete-course-click"
                  style={{ flex: 1 }}>
                  Delete
                </button>
                {showAllCourses && (
                  <Button
                    variant={isEnrolled(course._id) ? "danger" : "success"}
                    size="sm"
                    onClick={(e) => handleEnrollToggle(course._id, e)}
                    style={{ flex: 1 }}
                    id={`wd-${isEnrolled(course._id) ? "unenroll" : "enroll"}-${course._id}`}
                  >
                    {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                  </Button>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}