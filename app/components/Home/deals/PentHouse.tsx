"use client";

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import { CartButton } from "../../cart/CartButton";

const penthouses = [
  {
    id: "1",
    title: "Skyline Penthouse",
    location: "Collins Ave, Sunny Isles",
    price: 7800,
    image: "/images/listings/property-14.jpg",
  },
  {
    id: "2",
    title: "Luxury High-Rise",
    location: "Oceanfront Drive",
    price: 9600,
    image: "/images/listings/property-07.jpg",
  },
  {
    id: "3",
    title: "Modern Oceanview",
    location: "Pierfront Blvd",
    price: 8900,
    image: "/images/listings/property-09.jpg",
  },
  {
    id: "4",
    title: "Elegant Top-Floor Retreat",
    location: "Palm Beach Skyline",
    price: 10500,
    image: "/images/listings/property-08.jpg",
  },
  {
    id: "5",
    title: "Panoramic City Escape",
    location: "Brickell, Miami",
    price: 8800,
    image: "/images/listings/property-06.jpg",
  },
];

export const PenthouseOffers = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="py-16 bg-white" id="penthouse-offers">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center"
          data-aos="fade-up"
        >
          🏙️ Penthouse Offers
        </h2>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {penthouses.map((p, idx) => (
            <SwiperSlide key={p.id}>
              <div
                className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all flex flex-col"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
                    <p className="text-gray-500">{p.location}</p>
                    <p className="text-orange-600 font-bold mt-1">${p.price}/mo</p>
                  </div>

                  <div className="mt-4">
                    <CartButton item={p} />
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
