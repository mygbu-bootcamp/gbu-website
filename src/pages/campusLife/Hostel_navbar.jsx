import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone } from "lucide-react";

const boysHostels = [
  "Raheem boys hostel",
  "Guru Ghasidas Hostel",
  "Sant ravidas Hostel",
  "Sant kabirdas Hostel",
  "Birsa munda Hostel",
  "Ram Sharan das Hostel",
  "Shree Narayan Guru Hostel",
  "Tulsi Das Hostel",
  "Malik mohammad Jaisi Hostel",
  "Munshi Premchand Hostel",
  "Maharshi valmiki Hostel",
];

const girlsHostels = [
  "Savitribai Phule Hostel",
  "rani Lakshmibai Hostel",
  "Rama Bai Ambedkar Hostel",
  "Mahamaya Hostel",
  "Mahadevi Verma Hostel",
  "Ismat Chughtai Hostel",
];

const moreItems = [
  "Gallery",
  "about hostels",
  "hostel officials",
  "official staff",
  "student utilities",
  "student welfare",
  "do's and don'ts",
  "contact us",
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderDropdown = (items, label, alignRight = false) => (
    <div className={`relative`} ref={dropdownRef}>
      <button
        className="flex items-center gap-1 hover:text-blue-600 transition"
        onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
      >
        {label} <ChevronDown size={16} />
      </button>
      {openDropdown === label && (
        <div
          className={`absolute mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10 animate-fade-in ${
            alignRight ? "right-0" : "left-0"
          }`}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-blue-600 text-white">
      {/* Top bar */}
      <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>Contact: 0120-234 6175</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white text-black shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <img
                src="https://nosplan.in/wp-content/uploads/2022/06/87202-746-7461236_gautam-buddha-university-logo-png-transparent-png.png" // 🔁 Replace with actual logo path
                alt="GBU Logo"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-semibold">
                  Gautam Buddha University Hostels
                </h1>
                <p className="text-sm text-gray-600 leading-tight">
                  An Ultimate Destination for Higher Learning
                </p>
                <p className="text-sm text-gray-700 leading-tight">
                  गौतम बुद्ध विश्वविद्यालय छात्रावास
                </p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap justify-end gap-6 text-sm font-medium">
              <a href="#" className="hover:text-blue-600 transition">
                Home
              </a>
              {renderDropdown(boysHostels, "Boys' Hostels")}
              {renderDropdown(girlsHostels, "Girls' Hostels")}
              <a href="#" className="hover:text-blue-600 transition">
                Married Hostel
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Notices
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Events
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Mess/Dining
              </a>
              {renderDropdown(moreItems, "More", true)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
