"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const navLinks = [
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
    <footer className="bg-gray-100 text-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* CONFERENCE IDENTITY */}
        <div className="text-center md:text-left">
          {/* LOGO */}
          <img
            src="/image/nri.png"
            alt="Conference Logo"
            className="w-40 h-10"
          />

          {/* TITLE */}
          <h2 className="font-bold text-lg text-blue-900 mt-3">
            ICRAIC2IT - 2026
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            International Conference on Recent Advancements in AI, Computational
            Intelligence and Inclusive Technologies.
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
            <a href="https://www.facebook.com/NRIInstituteOfTechnology/" className="hover:text-[#EB1165]">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/OfNri" className="hover:text-[#EB1165]">
              <Twitter size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UCjp3K64XEIqE3G3nAEmdyZQ?view_as=subscriber" className="hover:text-[#EB1165]">
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/company/nri-institute-of-technology-vij/posts/?feedView=all" className="hover:text-[#EB1165]">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-gray-200 mt-10 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} ICRAIC2IT - All Rights Reserved |
          Designed with ❤️
        </div>
      </div>
    </footer>
  );
}
