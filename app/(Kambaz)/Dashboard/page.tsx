"use client";

import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
import { courses } from "../Database";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">My Courses</h2>
      
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
        {courses.map((course) => (
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
            <Link href={`/Courses/${course._id}/Home`} style={{ textDecoration: "none", color: "inherit" }}>
              <CardImg 
                variant="top" 
                src={course.image} 
                alt={`${course.name} logo`}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <CardBody style={{ padding: "15px", height: "100%" }}>
                <CardTitle style={{ fontSize: "16px", marginBottom: "8px", fontWeight: "bold" }}>
                  {course.name}
                </CardTitle>
                <CardText style={{ color: "#666", fontSize: "14px", marginBottom: "15px", flex: "1" }}>
                  {course.description}
                </CardText>
                <Button variant="primary" size="sm" className="mt-auto">
                  Go to Course
                </Button>
              </CardBody>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}