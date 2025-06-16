import React, { useState, useEffect } from 'react';

export default function CampusGallery() {
  const allImages = [
    { src: "https://architecture.live/wp-content/uploads/2022/09/5-2048x1448.jpg", alt: "Annual Convocation 2025" },
    { src: "https://architecture.live/wp-content/uploads/2022/09/1-1536x1086.jpg", alt: "Fitness Event" },
    { src: "https://architecture.live/wp-content/uploads/2022/09/7-1536x1086.jpg", alt: "Graduates Event" },
    { src: "https://i0.wp.com/architecture.live/wp-content/uploads/2022/09/2.jpg?ssl=1", alt: "Campus Library" },
    { src: "https://i1.wp.com/architecture.live/wp-content/uploads/2022/09/DSF8790-1024x685.jpg?ssl=1", alt: "Sports Complex" },
    { src: "https://i1.wp.com/architecture.live/wp-content/uploads/2022/09/DSF8790-1024x685.jpg?ssl=1", alt: "Cultural Event" },
    { src: "https://i2.wp.com/architecture.live/wp-content/uploads/2022/09/3-1024x724.jpg?ssl=1", alt: "Lab Facilities" },
    { src: "https://i0.wp.com/architecture.live/wp-content/uploads/2022/09/4-1-1024x724.jpg?ssl=1", alt: "Student Activities" },
  ];

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getThumbnailImages = (startIndex) => {
    const thumbnails = [];
    for (let i = 1; i <= 5; i++) {
      thumbnails.push(allImages[(startIndex + i) % allImages.length]);
    }
    return thumbnails;
  };

  const mainImage = allImages[mainImageIndex];
  const thumbnails = getThumbnailImages(mainImageIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setMainImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
        setIsTransitioning(false);
      }, 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (clickedImage) => {
    if (isTransitioning) return;
    const index = allImages.findIndex((img) => img.src === clickedImage.src);
    if (index !== -1) {
      setMainImageIndex(index);
    }
  };

  const handleImageError = (e) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x500/6B7280/FFFFFF?text=Image+Not+Found';
  };

  return (
    <div className="px-2 md:px-6 xl:px-20 py-10 max-w-screen-xl mx-auto">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-10 text-blue-700">
        Campus Gallery
      </h2>

      {/* Main Image */}
      <div className="relative rounded-xl overflow-hidden shadow-xl mb-4 mx-auto max-w-[1000px]">
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          onError={handleImageError}
          className={`w-full h-[35rem] object-cover transition-transform duration-1000 ease-in-out rounded-xl ${
            isTransitioning ? 'scale-105 opacity-90' : ''
          }`}
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-md">
          <h3 className="text-white text-xl font-semibold text-center">
            {mainImage.alt}
          </h3>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-4 mx-auto max-w-[1000px]">
        {thumbnails.map((image, index) => {
          const globalIndex = (mainImageIndex + index + 1) % allImages.length;
          return (
            <div
              key={globalIndex}
              onClick={() => handleThumbnailClick(image)}
              className={`cursor-pointer transition transform hover:scale-105 rounded-lg overflow-hidden ${
                globalIndex === mainImageIndex ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-20 object-cover rounded-md"
                onError={handleImageError}
              />
            </div>
          );
        })}
      </div>

      {/* View More Button (Just Display) */}
      <div className="flex justify-center mt-12">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          View More
        </button>
      </div>
    </div>
  );
}
