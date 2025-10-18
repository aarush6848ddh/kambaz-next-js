"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircle, FaUser } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

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
          <FaUser className={`fs-1 mb-1 ${pathname.startsWith('/Account') ? 'text-danger' : 'text-white'}`} />
          <div className={`fw-bold ${pathname.startsWith('/Account') ? 'text-danger' : 'text-white'}`}>Account</div>
        </Link>
      </ListGroupItem>
      {links.map((link) => {
        const IconComponent = link.icon;
        const isActive = pathname.includes(link.label);
        return (
          <ListGroupItem 
            key={link.label} 
            className={`border-0 text-center py-3 ${isActive ? 'bg-white' : 'bg-black'}`}
          >
            <Link 
              href={link.path} 
              className={`text-decoration-none ${isActive ? 'text-danger' : 'text-white'}`}
            >
              <IconComponent className={`fs-1 mb-1 ${isActive ? 'text-danger' : 'text-white'}`} />
              <div className={`fw-bold ${isActive ? 'text-danger' : 'text-white'}`}>{link.label}</div>
            </Link>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
