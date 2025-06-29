import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy, Code, Rocket, Target } from "lucide-react";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const highlightVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      rotateY: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              About Us
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
              variants={highlightVariants}
            />
          </motion.div>
          <motion.p
            className="text-xl text-gray-600 mt-6 font-medium"
            variants={itemVariants}
          >
            School of Information and Communication Technology
          </motion.p>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 text-blue-400 opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <Code size={40} />
          </motion.div>
          <motion.div
            className="absolute top-32 right-20 text-purple-400 opacity-30"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1s" }}
          >
            <Lightbulb size={35} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-1/4 text-indigo-400 opacity-30"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          >
            <Rocket size={45} />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Card */}
            <motion.div
              className="relative group h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl h-full flex flex-col">
                <motion.div
                  className="flex items-center mb-6"
                  variants={iconVariants}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white mr-4">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Mission
                  </h3>
                </motion.div>
                <div className="flex-grow">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The{" "}
                    <span className="font-semibold text-blue-600">
                      School of Information and Communication Technology
                      (SOICT/USICT)
                    </span>{" "}
                    is a premier institution committed to nurturing future-ready
                    technocrats, innovators, and entrepreneurs in the dynamic
                    field of{" "}
                    <span className="font-semibold text-purple-600">
                      ICT (Information and Communication Technology)
                    </span>
                    .
                  </p>
                  <motion.div
                    className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <p className="text-gray-700 italic">
                      Guided by our vision of{" "}
                      <span className="font-semibold text-indigo-600">
                        excellence and ethics
                      </span>
                      , we empower students with cutting-edge knowledge,
                      hands-on experience, and a strong value system to thrive
                      in the global digital economy.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              className="relative group h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl h-full flex flex-col">
                <motion.div
                  className="flex items-center mb-6"
                  variants={iconVariants}
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white mr-4">
                    <Trophy size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Commitment
                  </h3>
                </motion.div>
                <div className="flex-grow">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    At SOICT, we don't just teach technology—we inspire{" "}
                    <span className="font-semibold text-purple-600">
                      future pioneers
                    </span>
                    . Through{" "}
                    <span className="font-semibold text-indigo-600">
                      interdisciplinary research, hackathons, and mentorship
                    </span>
                    , we foster a culture of curiosity and excellence.
                  </p>
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-800">
                          Skilled, motivated, and ethically grounded
                          professionals
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <p className="text-gray-700">
                        Ready to tackle global challenges
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                      <p className="text-gray-700">
                        Transform the ICT landscape
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
