"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/hero/banner-01.jpg",
  "/images/hero/banner-02.jpg",
  "/images/hero/banner-03.jpg",
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full flex transition-transform duration-[1200ms] ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-2 z-10">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Space in Sunny Isles
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            Rentals and commercial real estate at your fingertips
          </p>
        </div>
      </div>
    </section>
  );
};
