"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/image/5.jpg",
  "/image/2.webp",
  "/image/3.jpg",
  "/image/4.jpg",
  "/image/1.jpg",
  "/image/6.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // Auto Slide (Fix infinite re-render)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-xl">

      {/* SLIDES */}
      <div className="relative h-48 sm:h-64 md:h-96 lg:h-[450px]">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out
              ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            `}
          />
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 hover:bg-white shadow-md backdrop-blur-sm p-3 rounded-full transition"
      >
        <ChevronLeft className="text-gray-800" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 hover:bg-white shadow-md backdrop-blur-sm p-3 rounded-full transition"
      >
        <ChevronRight className="text-gray-800" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300
              ${current === i ? "bg-[#EB1165] scale-125" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
