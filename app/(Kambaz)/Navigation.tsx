"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircle } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
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
      <ListGroupItem className={`border-0 text-center py-3 ${pathname.startsWith('/Account') ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Account" className={`text-decoration-none ${pathname.startsWith('/Account') ? 'text-danger' : 'text-white'}`}>
          <FaRegCircle className={`fs-1 mb-1 ${pathname.startsWith('/Account') ? 'text-danger' : 'text-white'}`} />
          <div className={`fw-bold ${pathname.startsWith('/Account') ? 'text-danger' : 'text-white'}`}>Account</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className={`border-0 text-center py-3 ${pathname === '/Dashboard' ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Dashboard" className={`text-decoration-none ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`}>
          <AiOutlineDashboard className={`fs-1 mb-1 ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`} />
          <div className={`fw-bold ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`}>Dashboard</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className={`border-0 text-center py-3 ${pathname === '/Dashboard' ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Dashboard" className={`text-decoration-none ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`}>
          <LiaBookSolid className={`fs-1 mb-1 ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`} />
          <div className={`fw-bold ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`}>Courses</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className={`border-0 text-center py-3 ${pathname.startsWith('/Calendar') ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Calendar" className={`text-decoration-none ${pathname.startsWith('/Calendar') ? 'text-danger' : 'text-white'}`}>
          <IoCalendarOutline className={`fs-1 mb-1 ${pathname.startsWith('/Calendar') ? 'text-danger' : 'text-white'}`} />
          <div className={`fw-bold ${pathname.startsWith('/Calendar') ? 'text-danger' : 'text-white'}`}>Calendar</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className={`border-0 text-center py-3 ${pathname.startsWith('/Inbox') ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Inbox" className={`text-decoration-none ${pathname.startsWith('/Inbox') ? 'text-danger' : 'text-white'}`}>
          <FaInbox className={`fs-1 mb-1 ${pathname.startsWith('/Inbox') ? 'text-danger' : 'text-white'}`} />
          <div className={`fw-bold ${pathname.startsWith('/Inbox') ? 'text-danger' : 'text-white'}`}>Inbox</div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className={`border-0 text-center py-3 ${pathname.startsWith('/Labs') ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Labs" className={`text-decoration-none ${pathname.startsWith('/Labs') ? 'text-danger' : 'text-white'}`}>
          <LiaCogSolid className={`fs-1 mb-1 ${pathname.startsWith('/Labs') ? 'text-danger' : 'text-white'}`} />
          <div className={`fw-bold ${pathname.startsWith('/Labs') ? 'text-danger' : 'text-white'}`}>Labs</div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
