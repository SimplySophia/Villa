"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../Helper/SectionHeading";
import { motion } from "framer-motion";

export const BestDeals = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden" id="deals">
      <SectionHeading heading="|Best Deals" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/deals/deal-01.jpg"
          alt="Best Deals"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover the Best Deals
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Explore top-tier apartments, luxurious penthouses, and serene villas tailored to your lifestyle.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { label: "Apartment Deals", href: "/apartment-deals", color: "bg-orange-500" },
            { label: "Penthouse Offers", href: "/pent-house", color: "bg-gray-600", hover: "bg-orange-500" },
            { label: "Villa Packages", href: "/villa-packages", color: "bg-orange-500" },
          ].map((btn, idx) => (
            <motion.div key={idx} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <Link
                href={btn.href}
                className={`${btn.color} hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md`}
              >
                {btn.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
