"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type Property = {
  id: string;
  title: string;
  type: "apartment" | "penthouse" | "villa";
  location: string;
  price: number;
  bedrooms: number;
  area: number;
  floor: number;
  image: string;
};

const allProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment",
    type: "apartment",
    location: "Sunny Isles Beach, FL",
    price: 3200,
    bedrooms: 2,
    area: 524,
    floor: 3,
    image: "/images/listings/property-01.jpg",
  },
  {
    id: "2",
    title: "Luxury Penthouse",
    type: "penthouse",
    location: "Collins Ave, Sunny Isles",
    price: 7800,
    bedrooms: 4,
    area: 760,
    floor: 18,
    image: "/images/listings/property-02.jpg",
  },
  {
    id: "3",
    title: "Villa Retreat",
    type: "villa",
    location: "Downtown Sunny Isles",
    price: 5500,
    bedrooms: 3,
    area: 640,
    floor: 1,
    image: "/images/listings/property-06.jpg",
  },
];

export const Properties = () => {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<number>(10000);

  const filtered = allProperties.filter((prop) => {
    const matchesType = typeFilter === "all" || prop.type === typeFilter;
    const matchesPrice = prop.price <= priceFilter;
    return matchesType && matchesPrice;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-red-400 mb-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          |Available Listings
        </motion.h2>

        {/* Filter Bar */}
        <motion.div
          className="flex flex-wrap gap-4 items-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="all">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="penthouse">Penthouse</option>
            <option value="villa">Villa</option>
          </select>

          <div className="flex items-center gap-2">
            <label htmlFor="price" className="text-gray-600">Max Price:</label>
            <input
              type="range"
              id="price"
              min={1000}
              max={10000}
              step={500}
              value={priceFilter}
              onChange={(e) => setPriceFilter(parseInt(e.target.value))}
              className="w-40"
            />
            <span className="text-gray-800 font-medium">${priceFilter}</span>
          </div>
        </motion.div>

        {/* Grid of Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property, idx) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-orange-600 font-bold mt-2">${property.price.toLocaleString()}/mo</p>
                <div className="text-gray-600 mt-2 text-sm flex flex-wrap gap-4">
                  <span className="text-gray-900">🛏 {property.bedrooms} Beds</span>
                  <span className="text-gray-900">📐 {property.area} m²</span>
                  <span className="text-gray-900">🏢 Floor {property.floor}</span>
                </div>

                <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className="inline-block mt-4">
                  <Link
                    href={`/properties/${property.id}`}
                    className="text-sm text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-full transition inline-block"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No listings match your filters.</p>
        )}
      </div>
    </section>
  );
};
