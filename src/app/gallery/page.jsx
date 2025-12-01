// components/Gallery.jsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  // images for 1st conference (local paths should be in /public/)
  const firstConferenceImages = [
    "/icraic2it-2-scaled.jpg",
    "/icraic2it-3-scaled.jpg",
    "/icraic2it-4-scaled.jpg",
    "/icraic2it-6-scaled.jpg",
    "/icraic2it-7-scaled.jpg",
    "/icraic2it-8-scaled.jpg",
    "/icraic2it-9-scaled.jpg",
    "/icraic2it-10-scaled.jpg",
    "/icraic2it-11-scaled.jpg",
    "/icraic2it-12-scaled.jpg",
    "/icraic2it-13-scaled.jpg",
    "/icraic2it-17-scaled.jpg",
    "/icraic2it-18-scaled.jpg",
    "/icraic2it-19.jpg",
    "/icraic2it-20-scaled.jpg",
    "/icraic2it-21-scaled.jpg",
    "/icraic2it-22-scaled.jpg",
    "/icraic2it-23-scaled.jpg",
    "/icraic2it-24-scaled.jpg",
    "/icraic2it-26-scaled.jpg",
    "/icraic2it-27-scaled.jpg",
    "/icraic2it-28-scaled.jpg",
    "/icraic2it-29-scaled.jpg",
    "/icraic2it-30-scaled.jpg",
    "/icraic2it-31-scaled.jpg",
    "/icraic2it-32-scaled.jpg",
    "/icraic2it-33-scaled.jpg",
    "/icraic2it-34-scaled.jpg",
    "/icraic2it-36-scaled.jpg",
    "/icraic2it-37-scaled.jpg",
    "/icraic2it-38-scaled.jpg",
    "/icraic2it-39-scaled.jpg",
    "/icraic2it-40-scaled.jpg",
    "/icraic2it-41-scaled.jpg",
  ];

  // images for 2nd conference
  const secondConferenceImages = [
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
    "/16.jpg",
    "/17.jpg",
    "/18.jpg",
    "/19.jpg",
    "/20.jpg",
    "/21.jpg",
    "/22.jpg",
    "/23.jpg",
    "/24.jpg",
    "/25.jpg",
    "/26.jpg",
    "/27.jpg",
    "/28.jpg",
    "/29.jpg",
    "/30.jpg",
    "/31.jpg",
    "/32.jpg",
    "/33.jpg",
    "/34.jpg",
    "/35.jpg",
    "/36.jpg",
    "/37.jpg",
    "/38.jpg",
    "/39.jpg",
    "/40.jpg",
    "/41.jpg",
    "/42.jpg",
    "/43.jpg",
    "/44.jpg",
    "/45.jpg",
    "/46.jpg",
    "/47.jpg",
    "/48.jpg",
    "/49.jpg",
    "/51.jpg",
    "/52.jpg",
    "/53.jpg",
  ];

  const [activeConference, setActiveConference] = useState(1);
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // initialize images (keeps component fast on SSR + hydration)
    setImages1(firstConferenceImages);
    setImages2(secondConferenceImages);
  }, []);

  const images = activeConference === 1 ? images1 : images2;
  const confTitle =
    activeConference === 1
      ? "1st International Conference on Recent Advancements and Innovations in Computing Communications and Information Technology"
      : "2nd International Conference on Recent Advancements and Innovations in Computing Communications and Information Technology";
  const confDate =
    activeConference === 1 ? "📅 22–24 April 2022" : "📅 2–3 May 2025";

  return (
    <section className="py-10 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveConference(1)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeConference === 1
                ? "bg-[#2563eb] text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            1st Conference
          </button>

          <button
            onClick={() => setActiveConference(2)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeConference === 2
                ? "bg-[#2563eb] text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            2nd Conference
          </button>
       <button
      className={`px-4 py-2 rounded-md text-sm font-medium transition ${
        active
          ? "bg-[#2563eb] text-white shadow"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      onClick={() => setActive(!active)}
    >
      <a href="https://nriit.edu.in/quadnext-2026/">
        3rd Conference
      </a>
    </button>
        </div>

        {/* Title & date */}
        <header className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900">
            {confTitle}
          </h2>
          <div className="text-indigo-700 text-base md:text-lg mt-2">
            {confDate}
          </div>
        </header>

        {/* Grid: 4 columns on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-8">
              No images to display.
            </p>
          ) : (
            images.map((src, idx) => (
              <a
                key={`${activeConference}-${idx}`}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-sm hover:shadow-md transform hover:-translate-y-1 transition"
                aria-label={`Open image ${idx + 1}`}
              >
                <div className="relative w-full h-48 sm:h-40 lg:h-44">
                  <Image
                    src={src}
                    alt={`${confTitle} — ${idx + 1}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
