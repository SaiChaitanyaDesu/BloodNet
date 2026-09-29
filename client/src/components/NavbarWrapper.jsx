"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const noNavbarRoutes = ["/",
     "/login/staff",
     "/login/bloodbank",
     "/login/recipient",
     "/login/donor",
     "/register/staff",
     "/register/donor",
     "/register/recipient",
     "/register/bloodbank",
    ]; 

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (noNavbarRoutes.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}
