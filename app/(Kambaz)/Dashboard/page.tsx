import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

const coursesData = [
  { id: "1234", title: "CS4550 Web Development", subtitle: "Full Stack software developer", image: "/reactlogo.jpg" },
  { id: "1235", title: "CS4550 Node.js", subtitle: "Backend development with Node.js", image: "/nodejslogo.jpeg" },
  { id: "1236", title: "CS4550 MongoDB", subtitle: "NoSQL database management", image: "/mongodblogo.jpg" },
  { id: "1237", title: "CS4550 Express.js", subtitle: "Web application framework", image: "/expresslogo.jpg" },
  { id: "1238", title: "CS4550 JavaScript", subtitle: "Modern JavaScript programming", image: "/javascriptlogo.jpg" },
  { id: "1239", title: "CS4550 HTML/CSS", subtitle: "Web development fundamentals", image: "/htmlcsslogo.jpg" },
  { id: "1240", title: "CS4550 Python", subtitle: "Python programming language", image: "/python logo.jpeg" }
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses</h2>
      
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
        {coursesData.map((course) => (
          <Card 
            key={course.id}
            style={{ 
              width: "260px", 
              height: "auto",
              marginBottom: "35px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              minHeight: "320px"
            }}
            className="wd-dashboard-course-card"
          >
            <Link href={`/Courses/${course.id}/Home`} style={{ textDecoration: "none", color: "inherit" }}>
              <CardImg 
                variant="top" 
                src={course.image} 
                alt={`${course.title} logo`}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <CardBody style={{ padding: "15px", height: "100%" }}>
                <CardTitle style={{ fontSize: "16px", marginBottom: "8px", fontWeight: "bold" }}>
                  {course.title} - {course.subtitle}
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