"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group list-group-flush fs-5">
      {links.map((link) => {
        const isActive = pathname.includes(link);
        const href = link === "People" 
          ? `/Courses/${cid}/People/Table` 
          : `/Courses/${cid}/${link}`;
        
        return (
          <Link 
            key={link}
            href={href}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item list-group-item-action border-0 ${
              isActive ? 'active' : 'text-danger'
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
