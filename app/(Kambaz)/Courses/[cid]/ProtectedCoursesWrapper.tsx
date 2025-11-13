"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import ProtectedRoute from "../../Account/ProtectedRoute";
import * as userClient from "../../Account/client";

export default function ProtectedCoursesWrapper({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [isEnrolled, setIsEnrolled] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is faculty (faculty can access any course)
  const isFaculty = currentUser?.role === "FACULTY";

  useEffect(() => {
    const checkEnrollment = async () => {
      if (!currentUser) {
        setIsLoading(false);
        return;
      }

      // Faculty can access any course
      if (isFaculty) {
        setIsEnrolled(true);
        setIsLoading(false);
        return;
      }

      try {
        // Fetch user's enrolled courses and check if current course is in the list
        const enrolledCourses = await userClient.findMyCourses();
        const enrolled = enrolledCourses.some((course: any) => course._id === cid);
        setIsEnrolled(enrolled);
      } catch (error) {
        console.error("Error checking enrollment:", error);
        setIsEnrolled(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkEnrollment();
  }, [currentUser, cid, isFaculty]);

  useEffect(() => {
    // If user is signed in but not enrolled (and not faculty), redirect to Dashboard
    if (!isLoading && currentUser && !isEnrolled && !isFaculty) {
      router.push("/Dashboard");
    }
  }, [currentUser, isEnrolled, isLoading, isFaculty, router]);

  // Show loading state or don't render if user is signed in but not enrolled
  if (isLoading) {
    return null; // or a loading spinner
  }

  if (currentUser && !isEnrolled && !isFaculty) {
    return null;
  }

  return <ProtectedRoute>{children}</ProtectedRoute>;
}
