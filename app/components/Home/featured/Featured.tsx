"use client";

import Image from "next/image";
import SectionHeading from "../../Helper/SectionHeading";
import { motion } from "framer-motion";

const cardItems = [
  {
    img: "/icons/featured/info-icon-01.png",
    title: "250ms",
    desc: "Total Flat Space",
  },
  {
    img: "/icons/featured/info-icon-02.png",
    title: "Contract",
    desc: "Contract Ready",
  },
  {
    img: "/icons/featured/info-icon-03.png",
    title: "Payment",
    desc: "Payment Process",
  },
  {
    img: "/icons/featured/info-icon-04.png",
    title: "Safety",
    desc: "24/7 Under Control",
  },
];

export const Featured = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeading heading="|Featured Spotlights" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-2">
        <motion.div
          className="relative flex flex-col lg:flex-row gap-8 justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Left Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="lg:w-1/4 w-full h-100 relative rounded overflow-hidden"
          >
            <Image
              src="/images/featured/featured.jpg"
              alt="Main Feature"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover rounded"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-10 bg-orange-600 rounded-full w-15 h-15"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/featured/featured-icon.png"
              alt="Edge Visual"
              width={70}
              height={70}
              className="rounded-lg ring-4 ring-white shadow-lg object-cover"
            />
          </motion.div>

          {/* Center Write-up */}
          <motion.div
            className="lg:w-1/3 w-full flex items-start justify-center px-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-4 text-black">
                Best Apartment & Sea View
              </h3>
              <motion.div
                className="bg-gray-100 w-full mt-10 p-5 rounded"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-700 text-lg px-2 py-4">
                  Wake up to stunning ocean views in our premium Sunny Isles
                  apartments. These limited listings offer luxury, location,
                  and lifestyle all in one unbeatable package. Schedule a tour
                  today!
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="lg:w-1/4 w-full bg-white rounded-xl py-6 flex flex-col justify-between items-center gap-4 shadow-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {cardItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-8 px-4"
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative w-15 h-15 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 40px, 60px"
                    priority
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-lg text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
