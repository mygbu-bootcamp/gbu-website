import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gbuFull from "../assets/gbuFull.png";
import gbuHalf from "../assets/gbuHalf.png";

// Import Saira Condensed font
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;700;900&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const PreLoad = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trgigger animation on component mount
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Layer 1: Background - Full Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${gbuFull})`,
          backgroundPosition: "center center",
        }}
      />

      {/* Layer 2: Animated Text - Middle Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={
            animationComplete ? { y: -250, opacity: 1 } : { y: 400, opacity: 0 }
          }
          transition={{
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-2xl tracking-wider"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}
            initial={{ scale: 0.9 }}
            animate={animationComplete ? { scale: 1 } : { scale: 0.9 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block mb-2 text-white font-bold"
            >
              WELCOME TO
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 1.1 }}
              className="block text-white font-bold"
            >
              SMART CAMPUS
            </motion.div>
          </motion.h1>
        </motion.div>
      </div>

      {/* Layer 3: Building Only (Top Layer) - Masks the text */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-20"
        style={{
          backgroundImage: `url(${gbuHalf})`,
          backgroundPosition: "center center",
        }}
      />
    </div>
  );
};

export default PreLoad;
