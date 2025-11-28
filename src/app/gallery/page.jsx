// components/Gallery.jsx
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
  // images for 1st conference (local paths should be in /public/)
  const firstConferenceImages = [
    '/icraic2it-2-scaled.jpg',
    '/icraic2it-3-scaled.jpg',
    '/icraic2it-4-scaled.jpg',
    '/icraic2it-6-scaled.jpg',
    '/icraic2it-7-scaled.jpg',
    '/icraic2it-8-scaled.jpg',
    '/icraic2it-9-scaled.jpg',
    '/icraic2it-10-scaled.jpg',
    '/icraic2it-11-scaled.jpg',
    '/icraic2it-12-scaled.jpg',
    '/icraic2it-13-scaled.jpg',
    '/icraic2it-17-scaled.jpg',
    '/icraic2it-18-scaled.jpg',
    '/icraic2it-19.jpg',
    '/icraic2it-20-scaled.jpg',
    '/icraic2it-21-scaled.jpg',
    '/icraic2it-22-scaled.jpg',
    '/icraic2it-23-scaled.jpg',
    '/icraic2it-24-scaled.jpg',
    '/icraic2it-26-scaled.jpg',
    '/icraic2it-27-scaled.jpg',
    '/icraic2it-28-scaled.jpg',
    '/icraic2it-29-scaled.jpg',
    '/icraic2it-30-scaled.jpg',
    '/icraic2it-31-scaled.jpg',
    '/icraic2it-32-scaled.jpg',
    '/icraic2it-33-scaled.jpg',
    '/icraic2it-34-scaled.jpg',
    '/icraic2it-36-scaled.jpg',
    '/icraic2it-37-scaled.jpg',
    '/icraic2it-38-scaled.jpg',
    '/icraic2it-39-scaled.jpg',
    '/icraic2it-40-scaled.jpg',
    '/icraic2it-41-scaled.jpg',
  ]

  // images for 2nd conference
  const secondConferenceImages = [
    '/CollegeImages/2.jpg',
    '/CollegeImages/3.jpg',
    '/CollegeImages/4.jpg',
    '/CollegeImages/5.jpg',
    '/CollegeImages/6.jpg',
    '/CollegeImages/7.jpg',
    '/CollegeImages/8.jpg',
    '/CollegeImages/9.jpg',
    '/CollegeImages/10.jpg',
    '/CollegeImages/11.jpg',
    '/CollegeImages/12.jpg',
    '/CollegeImages/13.jpg',
    '/CollegeImages/14.jpg',
    '/CollegeImages/15.jpg',
    '/CollegeImages/16.jpg',
    '/CollegeImages/17.jpg',
    '/CollegeImages/18.jpg',
    '/CollegeImages/19.jpg',
    '/CollegeImages/20.jpg',
    '/CollegeImages/21.jpg',
    '/CollegeImages/22.jpg',
    '/CollegeImages/23.jpg',
    '/CollegeImages/24.jpg',
    '/CollegeImages/25.jpg',
    '/CollegeImages/26.jpg',
    '/CollegeImages/27.jpg',
    '/CollegeImages/28.jpg',
    '/CollegeImages/29.jpg',
    '/CollegeImages/30.jpg',
    '/CollegeImages/31.jpg',
    '/CollegeImages/32.jpg',
    '/CollegeImages/33.jpg',
    '/CollegeImages/34.jpg',
    '/CollegeImages/35.jpg',
    '/CollegeImages/36.jpg',
    '/CollegeImages/37.jpg',
    '/CollegeImages/38.jpg',
    '/CollegeImages/39.jpg',
    '/CollegeImages/40.jpg',
    '/CollegeImages/41.jpg',
    '/CollegeImages/42.jpg',
    '/CollegeImages/43.jpg',
    '/CollegeImages/44.jpg',
    '/CollegeImages/45.jpg',
    '/CollegeImages/46.jpg',
    '/CollegeImages/47.jpg',
    '/CollegeImages/48.jpg',
    '/CollegeImages/49.jpg',
    '/CollegeImages/51.jpg',
    '/CollegeImages/52.jpg',
    '/CollegeImages/53.jpg',
  ]

  const [activeConference, setActiveConference] = useState(1)
  const [images1, setImages1] = useState([])
  const [images2, setImages2] = useState([])

  useEffect(() => {
    // initialize images (keeps component fast on SSR + hydration)
    setImages1(firstConferenceImages)
    setImages2(secondConferenceImages)
  }, [])

  const images = activeConference === 1 ? images1 : images2
  const confTitle =
    activeConference === 1
      ? '1st International Conference on Recent Advancements and Innovations in Computing Communications and Information Technology'
      : '2nd International Conference on Recent Advancements and Innovations in Computing Communications and Information Technology'
  const confDate = activeConference === 1 ? '📅 22–24 April 2022' : '📅 2–3 May 2025'

  return (
    <section className="py-10 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveConference(1)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeConference === 1
                ? 'bg-[#2563eb] text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            1st Conference
          </button>

          <button
            onClick={() => setActiveConference(2)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeConference === 2
                ? 'bg-[#2563eb] text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            2nd Conference
          </button>
        </div>

        {/* Title & date */}
        <header className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900">
            {confTitle}
          </h2>
          <div className="text-indigo-700 text-base md:text-lg mt-2">{confDate}</div>
        </header>

        {/* Grid: 4 columns on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-8">No images to display.</p>
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
                    style={{ objectFit: 'cover' }}
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
  )
}
