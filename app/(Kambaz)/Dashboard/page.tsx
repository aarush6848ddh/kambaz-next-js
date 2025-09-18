import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses</h2>
      <hr />
      <div id="wd-dashboard-courses" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        <div className="wd-dashboard-course" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", backgroundColor: "#f9f9f9" }}>
          <Link href="/Courses/1234" className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/reactlogo.jpg" width={200} height={150} alt="React.js logo" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ padding: "10px 0" }}>
              <h5 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title" style={{ margin: "0 0 15px 0", color: "#666" }}>
                Full Stack software developer
              </p>
              <button style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", backgroundColor: "#f9f9f9" }}>
          <Link href="/Courses/1235" className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/nodejslogo.jpeg" width={200} height={150} alt="Node.js logo" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ padding: "10px 0" }}>
              <h5 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>CS1235 Node.js</h5>
              <p className="wd-dashboard-course-title" style={{ margin: "0 0 15px 0", color: "#666" }}>
                Backend development with Node.js
              </p>
              <button style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", backgroundColor: "#f9f9f9" }}>
          <Link href="/Courses/1236" className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/mongodblogo.jpg" width={200} height={150} alt="MongoDB logo" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ padding: "10px 0" }}>
              <h5 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>CS1236 MongoDB</h5>
              <p className="wd-dashboard-course-title" style={{ margin: "0 0 15px 0", color: "#666" }}>
                NoSQL database management
              </p>
              <button style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", backgroundColor: "#f9f9f9" }}>
          <Link href="/Courses/1237" className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/expresslogo.jpg" width={200} height={150} alt="Express.js logo" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ padding: "10px 0" }}>
              <h5 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>CS1237 Express.js</h5>
              <p className="wd-dashboard-course-title" style={{ margin: "0 0 15px 0", color: "#666" }}>
                Web application framework
              </p>
              <button style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", backgroundColor: "#f9f9f9" }}>
          <Link href="/Courses/1238" className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/javascriptlogo.jpg" width={200} height={150} alt="JavaScript logo" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ padding: "10px 0" }}>
              <h5 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>CS1238 JavaScript</h5>
              <p className="wd-dashboard-course-title" style={{ margin: "0 0 15px 0", color: "#666" }}>
                Modern JavaScript programming
              </p>
              <button style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", backgroundColor: "#f9f9f9" }}>
          <Link href="/Courses/1239" className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/htmlcsslogo.jpg" width={200} height={150} alt="HTML/CSS logo" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ padding: "10px 0" }}>
              <h5 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>CS1239 HTML/CSS</h5>
              <p className="wd-dashboard-course-title" style={{ margin: "0 0 15px 0", color: "#666" }}>
                Web development fundamentals
              </p>
              <button style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", backgroundColor: "#f9f9f9" }}>
          <Link href="/Courses/1240" className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/python logo.jpeg" width={200} height={150} alt="Python logo" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ padding: "10px 0" }}>
              <h5 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>CS1240 Python</h5>
              <p className="wd-dashboard-course-title" style={{ margin: "0 0 15px 0", color: "#666" }}>
                Python programming language
              </p>
              <button style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
