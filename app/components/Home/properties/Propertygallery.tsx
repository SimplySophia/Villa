"use client";

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

interface ImageGalleryProps {
  images: string[];
}

export const PropertyGallery = ({ images }: ImageGalleryProps) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSelected((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (e.key === "ArrowRight") {
      setSelected((prev) => (prev + 1) % images.length);
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [images.length]);


  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative w-[400px] md:w-[500px] h-[300px] md:h-[400px] mx-auto rounded-lg overflow-hidden">
        <Image
          src={images[selected]}
          alt={`Property image ${selected + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-opacity duration-500 opacity-100"   
            priority
        />

      </div>

      {/* Thumbnail Scroll */}
      <div className="flex gap-3 overflow-x-auto mt-4 pb-1">
        {images.map((img, index) => (
        <div
           key={index}
           role="button"
           aria-label={`Select image ${index + 1}`}
           onClick={() => setSelected(index)}
           className={`relative w-28 h-20 rounded cursor-pointer border-2 ${
           selected === index ? "border-orange-500" : "border-transparent"
           }`}
     >
           <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
