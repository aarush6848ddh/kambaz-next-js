import Link from "next/link";
import { Card, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

const courses = [
  {
    id: "1234",
    name: "CS4550 - Web Development",
    description: "Full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js"
  },
  {
    id: "5678", 
    name: "CS5610 - Web Development CS-5610",
    description: "Advanced web development concepts and frameworks"
  }
];

export default function CoursesPage() {
  return (
    <div id="wd-courses-container">
      <h1>My Courses</h1>
      <p>All your enrolled courses are listed below.</p>
      
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6 col-lg-4 mb-3">
            <Card>
              <CardBody>
                <CardTitle>{course.name}</CardTitle>
                <CardText>{course.description}</CardText>
                <Link href={`/Courses/${course.id}/Home`}>
                  <Button variant="primary">Open Course</Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <h3>Course Navigation</h3>
        <p>You can also navigate directly to specific courses:</p>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <Link href={`/Courses/${course.id}/Home`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
