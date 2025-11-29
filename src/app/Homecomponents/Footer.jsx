"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {

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
    <footer className="bg-gray-100 text-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* CONFERENCE IDENTITY */}
        <div className="text-center md:text-left">
  
  {/* LOGO */}
  <img 
    src="/image/logo.png" 
    alt="Conference Logo" 
    className="w-20 h-20 mx-auto md:mx-0 object-contain" 
  />

  {/* TITLE */}
  <h2 className="font-bold text-lg text-blue-900 mt-3">
    ICRAIC2IT - 2025
  </h2>

  {/* DESCRIPTION */}
  <p className="mt-3 text-sm leading-relaxed max-w-xs">
    International Conference on Recent Advancements in AI, Computational Intelligence and Inclusive Technologies.
  </p>
</div>


        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2 uppercase text-sm">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.slice(0, 6).map(({ label, link }, i) => (
              <li key={i}>
                <Link href={link} className="hover:text-[#EB1165] transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MORE LINKS */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2 uppercase text-sm">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.slice(6).map(({ label, link }, i) => (
              <li key={i}>
                <Link href={link} className="hover:text-[#EB1165] transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2 uppercase text-sm">
            Follow Us
          </h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#EB1165]"><Facebook size={20} /></a>
            <a href="#" className="hover:text-[#EB1165]"><Twitter size={20} /></a>
            <a href="#" className="hover:text-[#EB1165]"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#EB1165]"><Linkedin size={20} /></a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-gray-200 mt-10 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} ICRAIC2IT - All Rights Reserved | Designed with ❤️
        </div>
      </div>
    </footer>
  );
}
