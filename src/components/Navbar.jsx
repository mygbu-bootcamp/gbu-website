import React, { useState } from 'react';

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);

  return (
    <div className="w-full text-white fixed top-0 left-0 z-50 font-sans">
      {/* Top Bar */}
     
      {/* Main Navbar */}
      <div className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-md">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo.webp"
            alt="GBU Logo"
            className="h-12 w-12 rounded-full border border-white/30"
          />
          <div>
            <div className="text-lg font-bold">GAUTAM BUDDHA UNIVERSITY</div>
            <div className="text-xs text-white/80">An Ultimate Destination for Higher Learning</div>
          </div>
        </div>

        {/* Links */}
        <div className="relative flex gap-6 items-center text-sm">
          <span className="cursor-pointer hover:underline">Home</span>
          <span className="cursor-pointer hover:underline">Admission</span>

          {/* About Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <span className="hover:underline">About Us ▾</span>
            {aboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-2 shadow-lg z-40">
                <div className="hover:underline py-1 px-2">Vision & Mission</div>
                <div className="hover:underline py-1 px-2">Administration</div>
                <div className="hover:underline py-1 px-2">Campus Life</div>
              </div>
            )}
          </div>

          {/* Academic Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setAcademicOpen(true)}
            onMouseLeave={() => setAcademicOpen(false)}
          >
            <span className="hover:underline">Academic ▾</span>
            {academicOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-2 shadow-lg z-40">
                <div className="hover:underline py-1 px-2">Programs</div>
                <div className="hover:underline py-1 px-2">Schools & Departments</div>
                <div className="hover:underline py-1 px-2">Academic Calendar</div>
              </div>
            )}
          </div>

          <span className="cursor-pointer hover:underline">Placements</span>
          <span className="cursor-pointer hover:underline">Contact Us</span>
          <button className="bg-orange-600 px-4 py-1 rounded-full font-semibold text-sm hover:bg-orange-500 transition">
            My GBU Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
