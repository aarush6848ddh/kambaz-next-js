"use client";

import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

interface BreadcrumbProps {
  cid: string;
}

export default function Breadcrumb({ cid }: BreadcrumbProps) {
  const pathname = usePathname();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  // find the course by its ID
  
  // Extract the current section from the pathname
  // For URLs like /Courses/1234/Home, we want "Home"
  // For URLs like /Courses/1234/People/Table, we want "People"
  const pathSegments = pathname.split("/");
  
  // The URL structure is /Courses/[cid]/[section]
  // So pathSegments[0] = "", pathSegments[1] = "Courses", pathSegments[2] = cid, pathSegments[3] = section
  const currentSection = pathSegments[3] || "Home"; // Default to "Home" if not found
  
  return (
    <h2 className="text-danger">
      <i className="fa fa-align-justify me-4 fs-4 mb-1"></i>
      {course && course.name} &gt; {currentSection}
    </h2>
  );
}
