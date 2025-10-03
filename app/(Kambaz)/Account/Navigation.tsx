import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaRegCircle, FaUser, FaUserPlus, FaUserCircle, FaRegUser } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";

export default function AccountNavigation() {
  return (
    <ListGroup
      id="wd-account-navigation"
      className="rounded-0 position-fixed start-0 bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
    >
      <ListGroupItem className="border-0 bg-black text-center py-4">
        <a href="https://www.northeastern.edu/" target="_blank" className="text-white text-decoration-none">
          <div className="fw-bold fs-4 mb-1">N</div>
          <div className="fw-bold fs-6">Northeastern University</div>
        </a>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-white text-center py-3">
        <Link href="/Account/Signin" className="text-danger text-decoration-none">
          <FaRegCircle className="fs-1 text-danger mb-1" />
          <div className="fw-bold text-danger">Signin</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Account/Signup" className="text-white text-decoration-none">
          <FaUserPlus className="fs-1 text-white mb-1" />
          <div className="fw-bold">Signup</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Account" className="text-white text-decoration-none">
          <FaRegUser className="fs-1 text-white mb-1" />
          <div className="fw-bold">Account</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Account/Profile" className="text-white text-decoration-none">
          <FaUserCircle className="fs-1 text-white mb-1" />
          <div className="fw-bold">Profile</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Dashboard" className="text-white text-decoration-none">
          <AiOutlineDashboard className="fs-1 text-white mb-1" />
          <div className="fw-bold">Dashboard</div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
