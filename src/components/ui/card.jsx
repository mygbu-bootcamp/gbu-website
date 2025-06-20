import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ====== Card Variants ======
export const Card = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

// ====== Main CardContent Component (Slider) ======
export const CardContent = ({ cards = [], title = "", subtitle = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [cards.length]);

  if (!cards.length) return null;

  return (
    <div className="py-16 bg-gradient-to-br from-blue-100 via-white to-green-100 overflow-hidden">
      <div className="text-center mb-12">
        {title && (
          <h2 className="text-4xl font-bold text-blue-800">
            {title}
            <div className="w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full" />
          </h2>
        )}
        {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={Card}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="w-full h-[360px] bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl border border-blue-200 p-8 flex flex-col md:flex-row items-center gap-10"
          >
            <img
              src={cards[index].image}
              alt={`Slide ${index}`}
              className="w-[220px] h-[300px] object-cover rounded-xl shadow-md flex-shrink-0"
            />
            <div className="text-center md:text-left max-w-2xl">
              {cards[index].name && (
                <CardTitle>{cards[index].name}</CardTitle>
              )}
              {cards[index].title && (
                <CardDescription>{cards[index].title}</CardDescription>
              )}
              {cards[index].description && (
                <p className="text-gray-700 text-base">
                  {cards[index].description}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ====== Placeholder Exports for Compatibility ======

export const CardHeader = ({ children }) => (
  <div className="px-6 pt-6">{children}</div>
);

export const CardFooter = ({ children }) => (
  <div className="px-6 pb-6 mt-4 border-t">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-2xl md:text-3xl font-bold text-blue-900">{children}</h3>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-600 mb-3">{children}</p>
);
