import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);

  return (
    <div className="w-full text-white fixed top-0 left-0 z-50 font-sans">
      <div className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo.webp"
            alt="GBU Logo"
            className="h-12 w-12 rounded-full border border-white/30"
          />
          <div>
            <div className="text-lg font-bold">GAUTAM BUDDHA UNIVERSITY</div>
            <div className="text-xs text-white/80 hidden sm:block">An Ultimate Destination for Higher Learning</div>
          </div>
        </div>

        {/* Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className={`sm:flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm absolute sm:static top-full left-0 w-full sm:w-auto bg-white/10 sm:bg-transparent backdrop-blur-xl sm:backdrop-blur-none border-t sm:border-none border-white/20 p-4 sm:p-0 transition-all duration-300 ease-in ${menuOpen ? 'block' : 'hidden'}`}>
          <span className="cursor-pointer hover:underline">Home</span>
          <span className="cursor-pointer hover:underline">Admission</span>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !menuOpen && setAboutOpen(true)}
            onMouseLeave={() => !menuOpen && setAboutOpen(false)}
          >
            <div
              className="cursor-pointer hover:underline flex justify-between items-center"
              onClick={() => menuOpen && setAboutOpen(!aboutOpen)}
            >
              About Us ▾
            </div>
            {(aboutOpen || (!menuOpen && aboutOpen)) && (
              <div className="sm:absolute top-full left-0 mt-2 w-full sm:w-40 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-2 shadow-lg z-40">
                <div className="hover:underline py-1 px-2">Vision & Mission</div>
                <div className="hover:underline py-1 px-2">Administration</div>
                <div className="hover:underline py-1 px-2">Campus Life</div>
              </div>
            )}
          </div>

          {/* Academic Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !menuOpen && setAcademicOpen(true)}
            onMouseLeave={() => !menuOpen && setAcademicOpen(false)}
          >
            <div
              className="cursor-pointer hover:underline flex justify-between items-center"
              onClick={() => menuOpen && setAcademicOpen(!academicOpen)}
            >
              Academic ▾
            </div>
            {(academicOpen || (!menuOpen && academicOpen)) && (
              <div className="sm:absolute top-full left-0 mt-2 w-full sm:w-44 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-2 shadow-lg z-40">
                <div className="hover:underline py-1 px-2">Programs</div>
                <div className="hover:underline py-1 px-2">Schools & Departments</div>
                <div className="hover:underline py-1 px-2">Academic Calendar</div>
              </div>
            )}
          </div>

          <span className="cursor-pointer hover:underline">Placements</span>
          <span className="cursor-pointer hover:underline">Contact Us</span>
          <button className="bg-orange-600 px-4 py-1 rounded-full font-semibold text-sm hover:bg-orange-500 transition w-fit mt-2 sm:mt-0">
            My GBU Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
