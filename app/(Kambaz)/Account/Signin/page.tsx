"use client";

import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Sign in</h1>
        <FormControl placeholder="username" className="mb-2" />
        <FormControl placeholder="password" type="password" className="mb-2" />
        <Link href="/Dashboard" id="wd-signin-btn">
          <Button variant="primary" className="w-100 mb-2">Sign in</Button>
        </Link>
        <Link href="/Account/Signup" id="wd-signup-link" className="text-center d-block">
          Sign up
        </Link>
      </div>
    </div>
  );
}
