import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout(
  { children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>
) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <i className="fa fa-align-justify me-4 fs-4 mb-1"></i>
        Course {cid}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-flex d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}
