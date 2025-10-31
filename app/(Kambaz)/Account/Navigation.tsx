"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaRegCircle, FaUser, FaUserPlus, FaUserCircle, FaRegUser } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  
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
      {links.includes("Signin") && (
        <ListGroupItem className={`border-0 text-center py-3 ${pathname === '/Account/Signin' ? 'bg-white' : 'bg-black'}`}>
          <Link href="/Account/Signin" className={`text-decoration-none ${pathname === '/Account/Signin' ? 'text-danger' : 'text-white'}`}>
            <FaRegCircle className={`fs-1 mb-1 ${pathname === '/Account/Signin' ? 'text-danger' : 'text-white'}`} />
            <div className={`fw-bold ${pathname === '/Account/Signin' ? 'text-danger' : 'text-white'}`}>Signin</div>
          </Link>
        </ListGroupItem>
      )}
      {links.includes("Signup") && (
        <ListGroupItem className={`border-0 text-center py-3 ${pathname === '/Account/Signup' ? 'bg-white' : 'bg-black'}`}>
          <Link href="/Account/Signup" className={`text-decoration-none ${pathname === '/Account/Signup' ? 'text-danger' : 'text-white'}`}>
            <FaUserPlus className={`fs-1 mb-1 ${pathname === '/Account/Signup' ? 'text-danger' : 'text-white'}`} />
            <div className={`fw-bold ${pathname === '/Account/Signup' ? 'text-danger' : 'text-white'}`}>Signup</div>
          </Link>
        </ListGroupItem>
      )}
      {links.includes("Profile") && (
        <ListGroupItem className={`border-0 text-center py-3 ${pathname === '/Account/Profile' ? 'bg-white' : 'bg-black'}`}>
          <Link href="/Account/Profile" className={`text-decoration-none ${pathname === '/Account/Profile' ? 'text-danger' : 'text-white'}`}>
            <FaUserCircle className={`fs-1 mb-1 ${pathname === '/Account/Profile' ? 'text-danger' : 'text-white'}`} />
            <div className={`fw-bold ${pathname === '/Account/Profile' ? 'text-danger' : 'text-white'}`}>Profile</div>
          </Link>
        </ListGroupItem>
      )}
    </ListGroup>
  );
}
