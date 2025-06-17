import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leaders = [
  {
    name: "Shri Yogi Adityanath",
    title: "Hon'ble Chancellor",
    description:
      "A visionary leader guiding GBU with a focus on holistic development and academic excellence. He emphasizes blending Indian knowledge systems with modern education.",
    image:
      "https://imgs.search.brave.com/VjKY5Yvq19ZxZJYb5w87AGzQRsMoAg74044ChyaVhPI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L1RoZV9VdHRh/cl9QcmFkZXNoX0No/aWVmX01pbmlzdGVy/LF9TaHJpX1lvZ2lf/QWRpdHlhbmF0aF9t/ZWV0aW5nX3RoZV9Q/cmVzaWRlbnQsX1No/cmlfUmFtX05hdGhf/S292aW5kLF9hdF9S/YXNodHJhcGF0aV9C/aGF2YW4sX2luX05l/d19EZWxoaV9vbl9G/ZWJydWFyeV8xMCxf/MjAxOF8oY3JvcHBl/ZCkuanBn",
  },
  {
    name: "Dr. Rana P. Singh",
    title: "Hon'ble Vice-Chancellor",
    description:
      "Dr. Singh is an expert in stem cell research, tumor biology, and space medicine. With over 20 years in academia, he leads GBU with a commitment to interdisciplinary education.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Rana-P-Singh.png",
  },
];

const cardVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const VisionaryLeadership = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % leaders.length);
    }, 8000); // 8s delay

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-green-100 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Visionary <span className="text-blue-800">Leadership</span>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="relative w-full max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="w-full h-[360px] bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl border border-blue-200 p-8 flex flex-col md:flex-row items-center gap-10"
          >
            <img
              src={leaders[index].image}
              alt={leaders[index].name}
              className="w-[220px] h-[300px] object-cover rounded-xl shadow-md flex-shrink-0"
            />
            <div className="text-center md:text-left max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                {leaders[index].name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {leaders[index].title}
              </p>
              <p className="text-gray-700 text-base">
                {leaders[index].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {leaders.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionaryLeadership;
