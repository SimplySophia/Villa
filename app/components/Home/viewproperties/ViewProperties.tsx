"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../../Helper/SectionHeading";

export const ViewProperties = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 bg-white">
      <SectionHeading heading="|Take a Virtual Tour" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left image */}
          <motion.div className="relative w-full lg:w-1/3 h-[200px] flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 1.05 }}
          >
            <Image
              src="/images/videoview/video-bg4.jpg"
              alt="Interior Preview"
              fill
              sizes="(max-width: 1024px) 100vw, 300px"
              className="rounded-xl object-cover shadow-lg"
            />
          </motion.div>

          {/* Center video thumbnail */}
          <motion.div className="w-full lg:w-1/3 text-center mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p className="text-gray-600 mb-4" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Click below to explore the full interior in motion.
            </motion.p>
            <motion.div
              onClick={() => setShowModal(true)}
              className="relative aspect-video w-full max-w-md mx-auto cursor-pointer group"
              whileTap={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/videoview/video-bg2.jpg"
                alt="Video Frame"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                priority
                className="rounded-lg object-cover"
              />
              <motion.div className="absolute inset-0 flex items-center justify-center"
                whileTap={{ scale: 1.15 }}
              >
                <div className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
                  ▶
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div className="relative w-full lg:w-1/3 h-[200px] flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 1.05 }}
          >
            <Image
              src="/images/videoview/video-bg3.jpg"
              alt="Interior"
              fill
              sizes="(max-width: 1024px) 100vw, 300px"
              className="rounded-xl object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="relative aspect-video w-full">
                <video controls autoPlay className="w-full h-full object-cover">
                  <source src="/videos/tour.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-white bg-black/60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
