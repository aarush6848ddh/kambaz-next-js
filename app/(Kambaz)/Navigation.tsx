import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircle } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  return (
    <ListGroup 
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed start-0 bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
    >
      <ListGroupItem className="border-0 bg-black text-center py-4">
        <a href="https://www.northeastern.edu/" target="_blank" className="text-white text-decoration-none">
          <div className="fw-bold fs-4 mb-1">N</div>
          <div className="fw-bold fs-6">Northeastern University</div>
        </a>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Account" className="text-white text-decoration-none">
          <FaRegCircle className="fs-1 text-white mb-1" />
          <div className="fw-bold">Account</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-white text-center py-3">
        <Link href="/Dashboard" className="text-danger text-decoration-none">
          <AiOutlineDashboard className="fs-1 text-danger mb-1" />
          <div className="fw-bold text-danger">Dashboard</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Courses" className="text-white text-decoration-none">
          <LiaBookSolid className="fs-1 text-white mb-1" />
          <div className="fw-bold">Courses</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Calendar" className="text-white text-decoration-none">
          <IoCalendarOutline className="fs-1 text-white mb-1" />
          <div className="fw-bold">Calendar</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Inbox" className="text-white text-decoration-none">
          <FaInbox className="fs-1 text-white mb-1" />
          <div className="fw-bold">Inbox</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-3">
        <Link href="/Labs" className="text-white text-decoration-none">
          <LiaCogSolid className="fs-1 text-white mb-1" />
          <div className="fw-bold">Labs</div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
