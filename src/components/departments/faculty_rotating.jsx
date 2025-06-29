import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faculty = [
  { name: "Prof. Sanjay Kumar Sharma", title: "Professor", image: "https://faculty.gbu.ac.in/uploads/photos/66052fb965b32_sanjay.sharma.jpg" },
  { name: "Dr. Arpit Bhardwaj", title: "Associate Professor and Dean(ICT)", image: "https://faculty.gbu.ac.in/uploads/photos/6735c61d170ee_WhatsApp%20Image%202024-11-14%20at%203.12.33%20PM.jpeg" },
  { name: "Dr. Arun Solanki", title: "Assistant Professor and HOD", image: "https://faculty.gbu.ac.in/uploads/photos/67c6a617c08be_cropped-arun.jpg" },
  { name: "Dr. Neeta Singh", title: "Assistant Professor and HOD", image: "https://faculty.gbu.ac.in/uploads/photos/67c48c839f452_280409.png" },
  { name: "Dr. Vidushi Sharma", title: "Assistant Professor and HOD", image: "https://faculty.gbu.ac.in/uploads/photos/66052f0435179_vidushi.jpg" },
  { name: "Dr. Vimlesh Kumar Ray", title: "Assistant Professor", image: "https://faculty.gbu.ac.in/uploads/photos/66052fd60f82d_vimlesh.jpg" },
  { name: "Dr. Aarti Gautam Dinker", title: "Assistant Professor", image: "https://faculty.gbu.ac.in/uploads/photos/6605300c5c849_aarti.jpg" },
  { name: "Dr. Gaurav Kumar", title: "Assistant Professor", image: "https://faculty.gbu.ac.in/uploads/photos/6721e9346dac1_Photo-removebg-preview.png" },
  { name: "Dr. Raju Pal", title: "Assistant Professor", image: "https://faculty.gbu.ac.in/uploads/photos/660a761667ced_CS%20Raju%20Pal.jpg" },
  { name: "Dr. Priyanka Goyal", title: "Assistant Professor", image: "https://faculty.gbu.ac.in/uploads/photos/66052fa591258_priyankag.jpg" },
  { name: "Dr. Rajesh Mishra", title: "Assistant Professor", image: "https://faculty.gbu.ac.in/uploads/photos/67c341c729a98_rajesh%20photo.jpg" },
  { name: "Dr. Anika", title: "Assistant Professor", image: "https://faculty.gbu.ac.in/uploads/photos/672ee826e3b19_Anika.jpg" },

  // { name: "Dr. Seema Joshi", title: "Assistant Professor", image: "https://via.placeholder.com/200x250?text=Dr.+Seema+Joshi" },
  // { name: "Dr. Seema Joshi", title: "Assistant Professor", image: "https://via.placeholder.com/200x250?text=Dr.+Seema+Joshi" },

];

const chunkArray = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const cardSetVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export default function FacultyCarouselMultiple() {
  const cardsPerSlide = 3;
  const chunks = chunkArray(faculty, cardsPerSlide);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % chunks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [chunks.length]);

  return (
    <section className="py-10 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8">
        Faculty of ICT
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="relative w-full max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={cardSetVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="flex justify-center items-stretch gap-6 flex-wrap"
          >
            {chunks[index].map((member, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md border border-blue-200 p-4 w-[250px] flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-44 object-cover rounded-xl shadow mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {chunks.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              } transition-transform`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
