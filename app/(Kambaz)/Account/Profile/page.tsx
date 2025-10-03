import Link from "next/link";
import { FormControl, FormSelect, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: "500px" }}>
        <h1 className="text-center mb-4">Profile</h1>
        <FormControl defaultValue="alice" placeholder="username" className="mb-2" />
        <FormControl defaultValue="123" placeholder="password" type="password" className="mb-2" />
        <FormControl defaultValue="Alice" placeholder="First Name" className="mb-2" />
        <FormControl defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
        <FormControl defaultValue="2000-01-01" type="date" className="mb-2" />
        <FormControl defaultValue="alice@wonderland.com" type="email" className="mb-2" />
        <FormSelect defaultValue="USER" className="mb-3">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </FormSelect>
        <Link href="/Account/Signin">
          <Button variant="danger" className="w-100">Sign out</Button>
        </Link>
      </div>
    </div>
  );
}
