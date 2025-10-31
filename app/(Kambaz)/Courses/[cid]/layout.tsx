import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import ProtectedCoursesWrapper from "./ProtectedCoursesWrapper";

export default async function CoursesLayout(
  { children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>
) {
  const { cid } = await params;
  
  return (
    <ProtectedCoursesWrapper>
      <div id="wd-courses">
        <Breadcrumb cid={cid} />
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
    </ProtectedCoursesWrapper>
  );
}
