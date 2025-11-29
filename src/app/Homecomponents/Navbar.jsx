"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Committees", link: "/committees" },
    { label: "Location", link: "/location" },
    { label: "Authors Guidelines", link: "/authors-guidelines" },
    { label: "Registration", link: "/registration" },
    { label: "Awards", link: "/awards" },
    { label: "Accommodation", link: "/accommodation" },
    { label: "Contact Us", link: "/contact-us" },
    { label: "Gallery", link: "/gallery" },
    { label: "Brochure", link: "/brochure" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 overflow-hidden">
      
      {/* 🔹 TITLE */}
      <h1 className="text-center px-4 py-3 font-extrabold text-blue-950 leading-tight
        text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
        International Conference on Recent Advancements in Artificial Intelligence,
        Computational Intelligence, and Inclusive Technologies |
        <span className="text-[#EB1165] font-bold"> ICRAIC2IT - 2025</span>
      </h1>

      {/* 🔹 NAVIGATION BAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 transition"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex flex-wrap gap-6 lg:gap-8 text-gray-700 font-semibold tracking-wide uppercase">
          {navLinks.map(({ label, link }, i) => (
            <li key={i} className="relative group">
              <Link
                href={link}
                className={`transition ${
                  pathname === link ? "text-[#EB1165]" : "hover:text-[#EB1165]"
                }`}
              >
                {label}
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[#EB1165] transition-all duration-300 ${
                  pathname === link ? "w-full" : "group-hover:w-full w-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 MOBILE SLIDE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white shadow ${
          open ? "max-h-[600px] opacity-100 py-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-gray-700 uppercase tracking-wide font-medium">
          {navLinks.map(({ label, link }, i) => (
            <li key={i} onClick={() => setOpen(false)}>
              <Link
                href={link}
                className={`block py-1 transition ${
                  pathname === link ? "text-[#EB1165] font-bold" : "hover:text-[#EB1165]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
