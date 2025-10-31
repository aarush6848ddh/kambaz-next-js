"use client";

import { ReactNode, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import ProtectedRoute from "../../Account/ProtectedRoute";

export default function ProtectedCoursesWrapper({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  // Check if user is enrolled in the course
  const isEnrolled = currentUser && enrollments.some(
    (e: any) => e.user === currentUser._id && e.course === cid
  );

  useEffect(() => {
    // If user is signed in but not enrolled, redirect to Dashboard
    if (currentUser && !isEnrolled) {
      router.push("/Dashboard");
    }
  }, [currentUser, isEnrolled, cid, router]);

  // Don't render if user is signed in but not enrolled
  if (currentUser && !isEnrolled) {
    return null;
  }

  return <ProtectedRoute>{children}</ProtectedRoute>;
}
