import React, { useEffect, useRef } from "react";

const slides = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s",
    title: "GAUTAM BUDDHA UNIVERSITY",
    subtitle: "HOSTEL MANAGEMENT SYSTEM",
    description: "Experience world-class hostel facilities designed for academic excellence and comfortable living",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s",
    title: "GAUTAM BUDDHA UNIVERSITY",
    subtitle: "DIGITAL CAMPUS LIFE",
    description: "Wi-Fi enabled hostels, smart access, and digital service portals",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s",
    title: "GAUTAM BUDDHA UNIVERSITY",
    subtitle: "COMFORT & SUPPORT",
    description: "Round-the-clock warden and medical support for all students",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s",
    title: "GAUTAM BUDDHA UNIVERSITY",
    subtitle: "ECO-FRIENDLY INITIATIVES",
    description: "Rainwater harvesting, solar panels, and green zones inside campus",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uP1wKA0Ib1pwxeD-pXgHfX4DyKf5KgNvbg&s",
    title: "GAUTAM BUDDHA UNIVERSITY",
    subtitle: "UNITY IN DIVERSITY",
    description: "A vibrant community fostering mutual respect and cultural exchange",
  },
];

export default function ImageCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container) {
          container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });

          // Loop to beginning
          setTimeout(() => {
            if (
              container.scrollLeft + container.offsetWidth >=
              container.scrollWidth - 5
            ) {
              container.scrollTo({ left: 0, behavior: "auto" });
            }
          }, 600);
        }
      }, 4000); // 4 seconds
    };

    startAutoScroll();
    return () => clearInterval(scrollInterval);
  }, []);

  // ...existing code...
  return (
    <div className="relative w-screen h-[60vh] overflow-hidden">
      <div
        ref={scrollRef}
        className="flex h-full overflow-x-scroll scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        {[...slides, ...slides].map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative snap-center flex-shrink-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 text-white">
              <h1 className="text-5xl md:text-6xl font-bold drop-shadow-md">
                {slide.title}
              </h1>
              <h2 className="text-3xl mt-2 font-semibold drop-shadow">
                {slide.subtitle}
              </h2>
              <p className="mt-4 text-lg max-w-2xl drop-shadow">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}