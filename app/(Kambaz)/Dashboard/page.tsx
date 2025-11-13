"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setCourse, addCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { addEnrollment, removeEnrollment } from "../Enrollments/reducer";
import * as userClient from "../Account/client";
import * as coursesClient from "../Courses/client";
import * as enrollmentsClient from "../Enrollments/client";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses, course } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (showAllCourses) {
          const allCourses = await coursesClient.fetchAllCourses();
          dispatch(setCourses(allCourses));
        } else {
          const enrolledCourses = await userClient.findMyCourses();
          dispatch(setCourses(enrolledCourses));
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser, showAllCourses, dispatch]);
  
  // Courses are already filtered by server based on showAllCourses state
  const displayedCourses = courses;
  
  // Check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === courseId
    );
  };
  
  // Handle enroll/unenroll
  const handleEnrollToggle = async (courseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    
    try {
      if (isEnrolled(courseId)) {
        await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
        dispatch(removeEnrollment({ userId: currentUser._id, courseId }));
      } else {
        await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId);
        dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
      }
    } catch (error) {
      console.error("Error toggling enrollment:", error);
      alert("Failed to update enrollment. Please try again.");
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
          onClick={async () => {
            if (course._id && course._id !== "0") {
              try {
                await coursesClient.updateCourse(course);
                dispatch(updateCourse());
                alert("Course updated successfully!");
              } catch (error) {
                console.error("Error updating course:", error);
                alert("Failed to update course. Please try again.");
              }
            } else {
              alert("Please select a course to update first.");
            }
          }}
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click">
          Update
        </button>
        <button 
          onClick={async () => {
            if (course.name && course.name !== "New Course") {
              try {
                const newCourse = await userClient.createCourse(course);
                dispatch(addCourse(newCourse));
              } catch (error) {
                console.error("Error creating course:", error);
              }
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
                  onClick={async (event) => {
                    event.preventDefault();
                    try {
                      await coursesClient.deleteCourse(course._id);
                      dispatch(deleteCourse(course._id));
                    } catch (error) {
                      console.error("Error deleting course:", error);
                      alert("Failed to delete course. Please try again.");
                    }
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