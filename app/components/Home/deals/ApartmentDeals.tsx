"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import { CartItem } from "@/hooks/useCart";
import { CartButton } from "../../cart/CartButton";

const apartments: CartItem[] = [
  {
    id: "1",
    title: "Oceanview Apartment",
    location: "Sunny Isles Beach",
    price: 3500,
    image: "/images/listings/property-01.jpg",
  },
  {
    id: "2",
    title: "Modern High-Rise",
    location: "Collins Avenue",
    price: 2900,
    image: "/images/listings/property-02.jpg",
  },
  {
    id: "3",
    title: "Luxury Seafront",
    location: "Downtown Sunny Isles",
    price: 4100,
    image: "/images/listings/property-03.jpg",
  },
];

export default function ApartmentDeals() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-5">
        <h2 className="text-3xl font-bold text-gray-800">🔥 Apartment Deals</h2>
        <p className="text-gray-500">Hot offers, hand-picked for you</p>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {apartments.map((apt) => (
          <SwiperSlide key={apt.id}>
            <div
              data-aos="fade-up"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full">
                  <Image
                    src={apt.image}
                    alt={apt.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-medium px-2 py-1 rounded">
                    Hot Deal
                  </span>
                </div>

                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{apt.title}</h3>
                  <p className="text-sm text-gray-500">{apt.location}</p>
                  <p className="text-orange-600 font-bold text-lg mt-1">
                    ${apt.price.toLocaleString()}/mo
                  </p>
                </div>
              </div>

              {/* Cart Button */}
              <div className="p-5 pt-0">
                <CartButton item={apt} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
