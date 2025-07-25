"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/hero/banner-01.jpg",
  "/images/hero/banner-02.jpg",
  "/images/hero/banner-03.jpg",
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative min-h-screen pt-[104px] overflow-hidden">
      {/* Carousel container */}
      <div
        className="absolute top-0 left-0 h-full w-full flex transition-transform duration-[1200ms] ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-full w-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center text-white text-center px-4 py-8 h-full">
        <div className="flex flex-col items-center gap-4 w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow">
            Find Your Perfect Space in Sunny Isles
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto drop-shadow">
            Rentals and commercial real estate at your fingertips
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 py-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("deals")}
              className="bg-orange-600 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-700 transition"
            >
              View Hot Deals
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("map")}
              className="border-2 border-orange-600 text-orange-600 px-6 py-2 rounded-xl hover:bg-white hover:text-orange-700 transition bg-white/10 backdrop-blur-md"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
