"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openBrochure, setOpenBrochure] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Committees", link: "/committiees" },
    { label: "Location", link: "/location" },
    { label: "Authors Guidelines", link: "/authorsguidelines" },
    { label: "Registration", link: "/registration" },
    { label: "Awards", link: "/awards" },
    { label: "Accommodation", link: "/accommodation" },
    { label: "Contact Us", link: "/contactus" },
    { label: "Gallery", link: "/gallery" },
    { label: "Brochure", link: "/brochure" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      
      {/* 🔹 TITLE */}
      <h1 className="text-center px-4 py-3 font-extrabold text-blue-950 leading-tight text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
        International Conference on Recent Advancements in Artificial Intelligence,
        Computational Intelligence, and Inclusive Technologies |
        <span className="text-[#EB1165] font-bold"> ICRAIC2IT - 2026</span>
      </h1>

      {/* 🔹 NAVIGATION BAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-800 transition">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex flex-wrap gap-6 lg:gap-8 text-gray-700 font-semibold tracking-wide uppercase">
          {navLinks.map(({ label, link }, i) => (
            <li key={i} className="relative group">

              {/* 💡 Regular menu item */}
              {label !== "Brochure" ? (
                <>
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
                </>
              ) : (
                <>
                  {/* BROCHURE TRIGGER (Desktop) */}
                  <button className="cursor-pointer transition hover:text-[#EB1165]">
                    {label}
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48 z-50"
                  >
                    <Link
                      href="/brochure/download"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      📄 Download Brochure
                    </Link>

                    <Link
                      href="/brochure/souvenir-1"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      🎁 Souvenir - 1
                    </Link>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* 📱 MOBILE SLIDE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white shadow ${
          open ? "max-h-[600px] opacity-100 py-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-gray-700 uppercase tracking-wide font-medium">
          {navLinks.map(({ label, link }, i) => (
            <li key={i}>
              {/* Normal items */}
              {label !== "Brochure" ? (
                <Link
                  href={link}
                  onClick={() => setOpen(false)}
                  className={`block py-1 transition ${
                    pathname === link ? "text-[#EB1165] font-bold" : "hover:text-[#EB1165]"
                  }`}
                >
                  {label}
                </Link>
              ) : (
                <>
                  {/* Mobile expand toggle */}
                  <button
                    onClick={() => setOpenBrochure(!openBrochure)}
                    className="flex justify-between items-center w-full py-1 hover:text-[#EB1165]"
                  >
                    {label}
                    <span
                      className={`transition-transform duration-300 ${
                        openBrochure ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Mobile submenu */}
                  {openBrochure && (
                    <div className="ml-4 flex flex-col gap-2 text-sm">
                      <Link
                        href="/brochure/download"
                        onClick={() => {
                          setOpen(false);
                          setOpenBrochure(false);
                        }}
                        className="hover:text-[#EB1165]"
                      >
                        📄 Download Brochure
                      </Link>

                      <Link
                        href="/brochure/souvenir-1"
                        onClick={() => {
                          setOpen(false);
                          setOpenBrochure(false);
                        }}
                        className="hover:text-[#EB1165]"
                      >
                        🎁 Souvenir - 1
                      </Link>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
