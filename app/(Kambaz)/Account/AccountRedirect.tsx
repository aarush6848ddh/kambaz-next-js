"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function AccountRedirect() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/Account/Profile");
    } else {
      router.push("/Account/Signin");
    }
  }, [currentUser, router]);

  return null;
}
