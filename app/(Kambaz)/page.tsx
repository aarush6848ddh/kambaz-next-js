import Link from "next/link";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <h1>Kambaz</h1>
      <p>Welcome to Kambaz - Your Learning Management System</p>
      <div>
        <Link href="/Account/Signin" style={{ marginRight: "20px" }}>
          Sign In
        </Link>
        <Link href="/Dashboard" style={{ marginRight: "20px" }}>
          Dashboard
        </Link>
        <Link href="/Labs/Lab1">
          Lab Exercises
        </Link>
      </div>
    </div>
  );
}
