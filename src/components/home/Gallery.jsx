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
  const mainImage = allImages[mainImageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setMainImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
        setIsTransitioning(false);
      }, 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (clickedImage) => {
    if (isTransitioning) return;
    const index = allImages.findIndex((img) => img.src === clickedImage.src);
    if (index !== -1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setMainImageIndex(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const handleImageError = (e) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x500/6B7280/FFFFFF?text=Image+Not+Found';
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="w-[95vw] max-w-7xl py-6 sm:py-10 lg:py-16 mx-auto px-3 sm:px-6 lg:px-8">
        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          /* Enhanced mobile optimizations */
          @media (max-width: 640px) {
            .mobile-optimized {
              padding-left: 12px;
              padding-right: 12px;
            }
          }
          
          /* Tablet optimizations */
          @media (min-width: 641px) and (max-width: 1024px) {
            .tablet-optimized {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          
          /* Desktop optimizations */
          @media (min-width: 1025px) {
            .desktop-optimized {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
        `}</style>

        {/* Enhanced Title */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mb-2 sm:mb-3">
            Event Gallery
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Image Container */}
        <div className="relative w-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl mb-4 sm:mb-6 lg:mb-8 group">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            onError={handleImageError}
            className={`w-full h-[220px] xs:h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] object-cover transition-all duration-1000 ease-in-out ${
              isTransitioning ? 'scale-110 opacity-80 blur-[2px]' : 'scale-100 opacity-100 blur-0'
            }`}
          />
          
          {/* Enhanced Image Caption */}
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-md sm:rounded-lg lg:rounded-xl max-w-[85%] sm:max-w-[75%] border border-white/20">
            <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-center leading-tight drop-shadow-lg">
              {mainImage.alt}
            </h3>
          </div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 flex gap-1.5 sm:gap-2 lg:gap-2.5">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(allImages[index])}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  index === mainImageIndex 
                    ? 'bg-white scale-125 shadow-lg shadow-white/50' 
                    : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Loading indicator overlay */}
          {isTransitioning && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Enhanced Thumbnails */}
        <div className="w-full overflow-x-auto no-scrollbar pb-2 sm:pb-3 lg:pb-4">
          <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 xl:gap-5 min-w-max px-2 sm:px-4 lg:px-0">
            {allImages.map((image, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(image)}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-110 rounded-md sm:rounded-lg lg:rounded-xl overflow-hidden shadow-md hover:shadow-lg active:scale-95 ${
                  index === mainImageIndex 
                    ? 'ring-2 sm:ring-3 lg:ring-4 ring-blue-500 scale-105 shadow-lg shadow-blue-500/25' 
                    : 'hover:ring-2 hover:ring-blue-300 hover:shadow-xl'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={handleImageError}
                  className="w-14 h-10 xs:w-16 xs:h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-20 xl:w-32 xl:h-22 2xl:w-36 2xl:h-24 object-cover transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Image Counter */}
        <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 shadow-md">
            <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">
              <span className="font-bold text-blue-600">{mainImageIndex + 1}</span> of <span className="font-bold">{allImages.length}</span>
            </span>
          </div>
        </div>

        {/* Enhanced View More Button */}
        <div className="flex justify-center">
          <button className="group relative px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-3.5 lg:py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-lg sm:rounded-xl lg:rounded-2xl hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold shadow-lg hover:shadow-xl lg:hover:shadow-2xl transform hover:scale-105 active:scale-95 border border-blue-500/30">
            <span className="relative z-10 flex items-center">
              View More Gallery
              <svg 
                className="inline-block ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md bg-gray-200/50 rounded-full h-1 sm:h-1.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-4000 ease-linear"
              style={{ width: `${((mainImageIndex + 1) / allImages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}