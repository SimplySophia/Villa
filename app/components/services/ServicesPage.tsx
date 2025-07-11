"use client";

import { motion } from "framer-motion";
import FAQ from "./FAQ";

const services = [
  {
    title: "Residential Rentals",
    description: "Find top apartments and homes for rent in Sunny Isles Beach.",
    icon: "🏠",
  },
  {
    title: "Commercial Listings",
    description: "Browse commercial properties for offices, retail, and more.",
    icon: "🏢",
  },
  {
    title: "Property Management",
    description: "We manage and maintain properties with care and professionalism.",
    icon: "🛠️",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 20, x: 30 }}
        transition={{ duration: 0.10 }}
      >
        Our Services
      </motion.h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Ready to work with us? Let’s make your real estate journey smooth and successful.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full transition"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
        >
          Contact Us
        </motion.a>
      </div>
      <FAQ />
    </div>
  );
}
