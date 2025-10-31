import Link from "next/link";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p><strong>Student Name:</strong> Aarush Singh</p>
      <p><strong>Section:</strong> CS4550 Fall 2024</p>
      
      <hr />
      
      <TOC />
      
      <div className="mt-4">
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <Link href="/Labs/Lab1" id="wd-lab1-link">
              Lab 1: HTML Examples
            </Link>
          </li>
          <li>
            <Link href="/Labs/Lab2" id="wd-lab2-link">
              Lab 2: CSS Basics
            </Link>
          </li>
          <li>
            <Link href="/Labs/Lab3" id="wd-lab3-link">
              Lab 3: JavaScript Fundamentals
            </Link>
          </li>
          <li>
            <Link href="/Labs/Lab4" id="wd-lab4-link">
              Lab 4: React Events
            </Link>
          </li>
          <li>
            <Link href="/" id="wd-kambaz-link">
              Kambaz Application
            </Link>
          </li>
          <li>
            <a href="https://github.com/aarush6848ddh/kambaz-next-js" id="wd-github" target="_blank" rel="noopener noreferrer">
              My GitHub Repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
