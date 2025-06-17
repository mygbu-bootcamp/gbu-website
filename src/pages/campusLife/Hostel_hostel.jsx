import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";

const hostels = {
  boys: {
    title: "Boys' Hostels",
    subtitle: "3000+ Students • 11 Hostel Blocks",
    items: [
      { name: "Sant Ravidas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Sant Kabir Das", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Birsa Munda", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Ram Sharan Das", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Shri Narayan Guru", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Raheem boys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Guru Ghasidas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Maharshi Valmiki", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Malik Mohammad Jaisi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Tulsi Das", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Munshi Premchand", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
    ],
  },
  girls: {
    title: "Girls' Hostels",
    subtitle: "1500+ Students • 6 Hostel Blocks",
    items: [
      { name: "Savitri Bai Phule", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Rani Laxmi Bai", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Ramabai Ambedkar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Mahamaya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Mahadevi Verma", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
      { name: "Ismat Chughtai Hostel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s" },
    ],
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const HostelCarousel = ({ title, subtitle, items }) => {
  const scrollRef = useRef(null);
  const loopedItems = [...items, ...items];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrame;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      el.scrollLeft += scrollSpeed;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="mb-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ height: "450px", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-6 w-max px-4 py-2">
          {loopedItems.map((hostel, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.07 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 min-w-[280px] max-w-[280px] h-[360px] flex flex-col justify-between"
            >
              <div>
                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {hostel.name}
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0 text-center">
                <div className="mt-2">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200">
                    More Info →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MarriedScholarsCard = () => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-green-50 border border-green-200 rounded-2xl shadow-md p-6 text-center mx-auto w-full max-w-3xl mt-8"
  >
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-green-700 mb-2">
        Married Research Scholars Accommodation
      </h3>
      <div className="flex justify-center mb-4">
        <HomeIcon className="h-6 w-6 text-green-600" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Married Accommodation"
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <p className="text-gray-600">
        Dedicated accommodation for married research scholars with family facilities.
      </p>
      <a
        href="#"
        className="inline-block mt-4 text-green-700 font-medium hover:underline"
      >
        Learn More →
      </a>
    </div>
  </motion.div>
);

export default function HostelList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Student Accommodation
        </h1>
        <p className="text-gray-600 text-lg">
          Comfortable and modern living spaces for all students
        </p>
      </div>

      <HostelCarousel {...hostels.boys} />
      <HostelCarousel {...hostels.girls} />

      {/* 🔽 Main Heading for Married Scholars Section */}
      <div className="text-center mt-20 mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Married Accommodation</h2>
        <p className="text-gray-500 text-sm">For research scholars with families</p>
      </div>

      <MarriedScholarsCard />
    </div>
  );
}
