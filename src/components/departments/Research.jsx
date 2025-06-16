import React from "react";
// Import your background image
import backgroundImage from "../../assets/research.jpg";

const HeroBanner = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "blur(2px)",
        }}
      />

      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />

      {/* Clean Background Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading with Staggered Animation */}
          <div className="mb-8 space-y-4">
            <div className="relative inline-block">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white drop-shadow-2xl">
                <span className="relative inline-block transform hover:scale-105 transition-transform duration-300">
                  Research
                  <div className="absolute -inset-1 bg-white/10 rounded-lg blur-xl opacity-50" />
                </span>
                <span className="text-white mx-4">&</span>
                <span className="relative inline-block transform hover:scale-105 transition-transform duration-300">
                  Development
                  <div className="absolute -inset-1 bg-white/10 rounded-lg blur-xl opacity-50" />
                </span>
              </h1>

              {/* Clean Line Under Heading */}
              <div className="mt-6 mx-auto w-32 h-1 bg-white/60 rounded-full" />
            </div>
          </div>

          {/* Subheading with Fade-in Animation */}
          <div className="relative">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-100 leading-relaxed max-w-4xl mx-auto">
              Research and Development (R&D) play a{" "}
              <span className="font-semibold text-white">crucial role</span> in
              universities.
            </p>

            {/* Subtle Glow Effect Behind Text */}
            <div className="absolute inset-0 bg-white/5 rounded-lg blur-sm" />
          </div>

          {/* Clean Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-8">
            <div
              className="w-12 h-12 border-2 border-white/30 rounded-full animate-spin"
              style={{ animationDuration: "8s" }}
            />
            <div
              className="w-8 h-8 border-2 border-white/30 rounded-full animate-spin"
              style={{ animationDuration: "6s", animationDirection: "reverse" }}
            />
            <div
              className="w-12 h-12 border-2 border-white/30 rounded-full animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
        </div>
      </div>

      {/* Clean Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-white/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-white/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-white/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-white/30" />
    </div>
  );
};

export default HeroBanner;
