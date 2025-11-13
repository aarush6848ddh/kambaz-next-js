"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (error: any) {
      alert(error.message || "Unable to sign up. Please try again.");
    }
  };

  return (
    <div id="wd-signup-screen" className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Sign up</h1>
        <FormControl
          value={user.username || ""}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
          className="mb-2"
          id="wd-username"
        />
        <FormControl
          value={user.password || ""}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          type="password"
          className="mb-2"
          id="wd-password"
        />
        <Button
          onClick={signup}
          variant="primary"
          className="w-100 mb-2"
          id="wd-signup-btn">
          Sign up
        </Button>
        <Link href="/Account/Signin" id="wd-signin-link" className="text-center d-block">
          Sign in
        </Link>
      </div>
    </div>
  );
}
