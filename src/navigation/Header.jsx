"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PawPrintIcon } from "../app/icon/icon";
import { usePathname } from "next/navigation";
import { useSession, signOut as nextAuthSignOut } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const getInitials = () => {
    if (!session?.user?.email) return null;

    const initials = session.user.email
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();

    const avatarStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      background: "#3498db",
      color: "white",
      fontWeight: "bold",
      fontSize: "14px",
    };

    return <div style={avatarStyles}>{initials}</div>;
  };

  const whiteListedPaths = [
    "/",
    "/signup",
    "/appointment",
    "/user-dashboard",
    "/admin",
    "/pet-traine",
  ];
  const hideHeader = whiteListedPaths.includes(pathname);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await nextAuthSignOut({ redirect: false }); // Prevent automatic redirection
      window.location.href = "/"; // Redirect manually
      toast.success("Successfully signed out.");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  if (!isClient || hideHeader) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-6 w-full transition-colors opacity-80 duration-300 bg-primary text-primary-foreground shadow-md`}
      style={{ zIndex: 1000 }}
    >
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <PawPrintIcon className="h-6 w-6 ml-2" />
        <span className="text-lg font-bold ml-2">Pet-Care Hub</span>
      </Link>
      <nav className="hidden md:flex items-center justify-center mx-auto space-x-8 gap-6">
        <NavLink href="#home" currentPath={pathname} label="Home" />
        <NavLink href="#services" currentPath={pathname} label="Services" />
        <NavLink href="#contact" currentPath={pathname} label="Contact" />
        <NavLink
          href="#testimonial"
          currentPath={pathname}
          label="Testimonials"
        />
        <NavLink href="#facilities" currentPath={pathname} label="Facilities" />
      </nav>
      <div className="flex items-center gap-4 mr-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9">
              <AvatarFallback>{getInitials()}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`relative z-50 bg-white text-[#1a1b1e]`}
            style={{ zIndex: 1000 }}
          >
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <BurgerIcon isOpen={isMenuOpen} />
        </button>
      </div>
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 right-0 shadow-lg bg-white text-[#1a1b1e]`}
        >
          <nav className="flex flex-col items-start p-4 ml-10 space-y-4 ">
            <NavLink
              href="#home"
              currentPath={pathname}
              label="Home"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              href="#services"
              currentPath={pathname}
              label="Services"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              href="#contact"
              currentPath={pathname}
              label="Contact"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              href="#testimonial"
              currentPath={pathname}
              label="Testimonials"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              href="#facilities"
              currentPath={pathname}
              label="Facilities"
              onClick={() => setIsMenuOpen(false)}
            />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, currentPath, label, onClick }) {
  const isActive = href === currentPath;

  return (
    <Link
      href={href}
      className={`text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 mx-3 ${
        isActive ? "text-blue-600" : "text-[#1a1b1e]"
      }`}
      prefetch={false}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function BurgerIcon({ isOpen }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      )}
    </svg>
  );
}
