"use client";

import Image from "next/image";
import { Calendar, Users, Home } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto space-y-16">
      {/* Intro Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">About Villa Realty</h1>
        <p className="text-orange-600 mt-2 text-lg sm:text-xl">
          Your gateway to premium spaces in Sunny Isles Beach
        </p>
      </motion.div>

      {/* Who We Are Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="relative w-full h-60 sm:h-72 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/listings/property-16.jpg"
            alt="Sunny Isles Beach"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Villa Realty is a modern real estate platform built to connect people with premium rental apartments,
            luxury penthouses, and commercial properties in the heart of Sunny Isles Beach.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            From curated listings to live maps and dedicated support, we’re making it easier than ever to find the
            perfect space.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our mission is simple: provide smooth experiences and expert guidance for your real estate journey.
          </p>
        </div>
      </motion.div>

      {/* Agent Showcase */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Agents</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((agent) => (
            <motion.div
              key={agent}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <Image
                src={`/images/agents/agent-${agent}.jpg`}
                alt={`Agent ${agent}`}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Agent {agent}</h3>
              <p className="text-gray-500 text-sm">Certified Real Estate Expert</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline / Vision Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-orange-50 p-6 sm:p-10 rounded-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Journey</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Calendar className="w-10 h-10 text-orange-500 mx-auto mb-2" />
            <h4 className="font-bold text-lg">Founded in 2022</h4>
            <p className="text-sm text-gray-600">Started with a vision to transform real estate search.</p>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Users className="w-10 h-10 text-orange-500 mx-auto mb-2" />
            <h4 className="font-bold text-lg">Trusted Network</h4>
            <p className="text-sm text-gray-600">Partnered with 50+ agents and property owners.</p>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Home className="w-10 h-10 text-orange-500 mx-auto mb-2" />
            <h4 className="font-bold text-lg">100+ Deals</h4>
            <p className="text-sm text-gray-600">Closed over 100 successful rentals and leases.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              name: "Samantha Lee",
              feedback: "Villa Realty helped me find a beautiful penthouse within days. Professional and reliable!",
            },
            {
              name: "James O.",
              feedback: "Their listings are top quality, and their agents were helpful every step of the way.",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow"
            > 
              <p className="text-gray-700 italic text-sm sm:text-base">- {testimonial.feedback}</p>
              <p className="mt-4 text-orange-600 font-semibold text-sm">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
