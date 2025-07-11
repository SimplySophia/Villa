"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I schedule a property viewing?",
    answer:
      "You can contact us directly or use the form on the property details page to request a viewing.",
  },
  {
    question: "Do you handle both rentals and sales?",
    answer:
      "Yes, we specialize in rentals, commercial listings, and property management — whether you're buying or leasing.",
  },
  {
    question: "Is property management available for landlords?",
    answer:
      "Absolutely. We offer full-service property management including maintenance, rent collection, and tenant management.",
  },
  {
    question: "How often do you update property listings?",
    answer:
      "Our listings are updated in real-time, ensuring you're always seeing the most current availability.",
  },
  {
    question: "Can I get help with relocation?",
    answer:
      "Yes! We offer personalized relocation assistance to make your move stress-free.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition"
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-orange-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-gray-600 text-sm"
                  >
                    <div>{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
