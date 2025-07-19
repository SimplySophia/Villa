"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import { CartButton } from "../../cart/CartButton";
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";

const villas = [
  {
    id: "1",
    title: "Serene Ocean Villa",
    location: "Sunny Isles Waterfront",
    price: 6200,
    image: "/images/listings/property-13.jpg",
  },
  {
    id: "2",
    title: "Coastal Palm Villa",
    location: "Golden Shores",
    price: 7000,
    image: "/images/listings/property-15.jpg",
  },
  {
    id: "3",
    title: "Zen Garden Estate",
    location: "Bay View Drive",
    price: 7500,
    image: "/images/listings/property-16.jpg",
  },
  {
    id: "4",
    title: "Tropical Escape Villa",
    location: "Sunset Bay, Sunny Isles",
    price: 8000,
    image: "/images/listings/property-10.jpg",
  },
  {
    id: "5",
    title: "Modern Minimal Villa",
    location: "Ocean Breeze Hills",
    price: 8600,
    image: "/images/listings/property-12.jpg",
  },
];

export const VillaPackages = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left"
          data-aos="fade-up"
        >
          🏡 Villa Packages
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {villas.map((v, idx) => (
            <SwiperSlide key={v.id}>
              <div
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 100}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between p-4 flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {v.title}
                    </h3>
                    <p className="text-gray-500">{v.location}</p>
                    <p className="text-orange-600 font-bold mt-1">
                      ${v.price.toLocaleString()}/mo
                    </p>
                  </div>

                  <div className="mt-4">
                    <CartButton item={v} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
