import React from "react";

export default function WelcomePage() {
  return (
    <>
      {/* Main welcome section */}
      <div className="relative h-screen flex flex-col justify-center overflow-hidden">

        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 text-white max-w-3xl px-4 sm:pl-10 pb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-left">
            Welcome to <span className="text-orange-500">Gautam</span>{" "}
            <span className="text-orange-600">Buddha University</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empowering minds, shaping futures through excellence in education,
            research, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow focus:outline-none focus:ring-2 focus:ring-green-400"
              type="button"
            >
              Explore Programs
            </button>
            <button
              className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-6 rounded shadow focus:outline-none focus:ring-2 focus:ring-lime-400"
              type="button"
            >
              Virtual Tour
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div
        role="region"
        aria-label="Latest announcements"
        style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "relative",
          padding: "10px 0",
          height: "40px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            animation: "scrollText 25s linear infinite",
            whiteSpace: "nowrap",
            zIndex: 9999,
          }}
        >
          📢 New admissions open for 2024-25 academic session | 🎓 Convocation
          ceremony scheduled for March 2024 | 🔬 Research grant applications
          deadline extended | 📚 Library renovation completed with
          state-of-the-art facilities | 🏆 GBU ranked among top universities in
          India
        </div>
      </div>

      <style>{`
        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
}
