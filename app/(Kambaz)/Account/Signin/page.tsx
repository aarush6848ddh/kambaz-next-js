"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import db from "../../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        (u.username === credentials.username || u.loginId === credentials.username) &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Sign in</h1>
        <FormControl
          defaultValue={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          placeholder="username"
          className="mb-2"
          id="wd-username"
        />
        <FormControl
          defaultValue={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          placeholder="password"
          type="password"
          className="mb-2"
          id="wd-password"
        />
        <Button
          onClick={signin}
          variant="primary"
          className="w-100 mb-2"
          id="wd-signin-btn">
          Sign in
        </Button>
        <Link href="/Account/Signup" id="wd-signup-link" className="text-center d-block">
          Sign up
        </Link>
      </div>
    </div>
  );
}
