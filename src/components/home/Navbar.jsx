import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  User,
  GraduationCap,
  FileText,
  BookOpen,
  Home,
  Camera,
  Briefcase,
  Users,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const menuRefs = useRef({});

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = (menuKey) => {
    setMobileOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const handleClickOutside = (event) => {
    const isClickInsideAnyMenu = Object.values(menuRefs.current).some(
      (ref) => ref?.contains(event.target)
    );
    if (!isClickInsideAnyMenu) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const createMenu = (label, icon, menuKey, items) => (
    <li
      className="relative"
      ref={(el) => (menuRefs.current[menuKey] = el)}
      aria-haspopup="true"
      aria-expanded={openMenu === menuKey}
    >
      <button
        type="button"
        onClick={() => toggleMenu(menuKey)}
        className={`flex items-center gap-1 cursor-pointer ${
          openMenu === menuKey ? "text-red-600" : "hover:text-red-600"
        }`}
      >
        {icon}
        {label} ▾
      </button>
      {openMenu === menuKey && (
        <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border rounded-lg z-40 p-2 text-left">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="px-3 py-1 rounded cursor-pointer transition hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setOpenMenu(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  const menus = [
    {
      key: "about",
      label: "About Us",
      icon: <User size={16} />,
      items: [
        <Link to="/about-us/vision-mission">Vision & Mission</Link>,
        <Link to="/about-us/chancellor-message">Chancellor's Message</Link>,
        <Link to="/about-us/vice-chancellor-message">Vice-Chancellor's Message</Link>,
        <Link to="/about-us/governance-committees">Governance & Committees</Link>,
        <Link to="/about-us/strategic-perspective">GBU Strategic Perspective</Link>,
        <Link to="/about-us/policies-statutes-rti">Policies, Statutes & RTI</Link>,
        <Link to="/about-us/mandatory-disclosures">Mandatory Disclosures</Link>,
        <Link to="/about-us/media-coverage">Media Coverage</Link>,
      ],
    },
    {
      key: "academics",
      label: "Academics",
      icon: <GraduationCap size={16} />,
      items: [
        <Link to="/academics/academic-calendar">Academic Calendar & Regulations</Link>,
        <Link to="/academics/cbcs-framework">CBCS Curriculum Framework</Link>,
        <Link to="/academics/faculty">Faculty Directory</Link>,
        <Link to="/academics/centers-of-excellence">Centers of Excellence</Link>,
        <Link to="/academics/international-collaboration">International Collaboration</Link>,
        <Link to="/academics/reports-publications">Reports & Publications</Link>,
        <Link to="/academics/schools">Schools & Departments</Link>,
      ],
    },
    {
      key: "admissions",
      label: "Admissions",
      icon: <FileText size={16} />,
      items: [
        <Link to="/admissions/admission-process">Admission Process</Link>,
        <Link to="/admissions/courses-offered">Courses Offered (UG | PG | PhD)</Link>,
        <Link to="/admissions/eligibility-reservation">Eligibility & Reservation</Link>,
        <Link to="/admissions/fee-structure-prospectus">Fee Structure & Prospectus</Link>,
        <Link to="/admissions/international-admissions">International Admissions</Link>,
      ],
    },
    {
      key: "research",
      label: "Research",
      icon: <BookOpen size={16} />,
      items: [
        <Link to="/research/research-centers">Research Centers and Labs</Link>,
        <Link to="/research/publications-patents">Publications and Patents</Link>,
        <Link to="/research/incubation-innovation">Incubation and Innovation</Link>,
        <Link to="/research/startups">Startups</Link>,
        <Link to="/research/funded-projects">Funded Projects</Link>,
        <Link to="/research/irp-cell">IRP Cell</Link>,
        <Link to="/research/research-highlights">Research Highlights</Link>,
      ],
    },
    {
      key: "campus",
      label: "Campus Life",
      icon: <Home size={16} />,
      items: [
        <Link to="/campus-life/virtual-tour">Virtual Tour</Link>,
        <Link to="/campus-life/hostel-facilities">Hostel Facilities</Link>,
        <Link to="/campus-life/sports-fitness">Sports & Fitness</Link>,
        <Link to="/campus-life/cultural-activities">Cultural Activities</Link>,
        <Link to="/campus-life/clubs-societies">Clubs & Societies</Link>,
        <Link to="/campus-life/health-wellness">Health & Wellness</Link>,
        <Link to="/campus-life/campus-events">Campus Events</Link>,
      ],
    },
    {
      key: "announcements",
      label: "Announcements",
      icon: <Camera size={16} />,
      items: [
        <Link to="/announcements/news-notifications">News & Updates</Link>,
        <Link to="/announcements/event-calendar">Event Calendar</Link>,
        <Link to="/announcements/notices">Notices</Link>,
        <Link to="/announcements/press-releases">Press Releases</Link>,
        <Link to="/announcements/media-gallery">Media Gallery</Link>,
        <Link to="/announcements/newsletter">Newsletter</Link>,
      ],
    },
    {
      key: "placements",
      label: "Placements",
      icon: <Briefcase size={16} />,
      items: [
        <Link to="/placements/placement-process">Placement Process</Link>,
        <Link to="/placements/top-recruiters">Top Recruiters</Link>,
        <Link to="/placements/internship-opportunities">Internship Opportunities</Link>,
        <Link to="/placements/career-counseling">Career Counseling</Link>,
        <Link to="/placements/placement-statistics">Placement Statistics</Link>,
      ],
    },
    {
      key: "alumni",
      label: "Alumni",
      icon: <Users size={16} />,
      items: [
        <Link to="/alumni/alumni-network">Alumni Network</Link>,
        <Link to="/alumni/alumni-events">Alumni Events</Link>,
        <Link to="/alumni/alumni-achievements">Alumni Achievements</Link>,
        <Link to="/alumni/become-mentor">Become a Mentor</Link>,
      ],
    },
  ];

  return (
    <nav className="bg-white shadow px-4 md:px-16 py-3 flex items-center justify-between relative z-50">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img src="/assets/logo.png" alt="GBU Logo" className="w-64 h-12 mr-3" />
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-wrap justify-center gap-6 text-sm text-gray-700 relative">
        {menus.map(({ key, label, icon, items }) =>
          createMenu(label, icon, key, items)
        )}
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <Search size={16} />
        </li>
      </ul>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50 px-4 py-4">
          <ul className="flex flex-col gap-2 text-sm text-gray-700">
            {menus.map(({ key, label, icon, items }) => (
              <li key={key}>
                <button
                  onClick={() => toggleMobileMenu(key)}
                  className="w-full flex justify-between items-center py-2 px-2 text-left hover:text-blue-600"
                >
                  <span className="flex items-center gap-2">{icon} {label}</span>
                  {mobileOpenMenus[key] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {mobileOpenMenus[key] && (
                  <ul className="pl-6 flex flex-col gap-1 mt-1">
                    {items.map((item, idx) => (
                      <li key={idx}>
                        <div
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileOpenMenus({});
                          }}
                          className="block py-1 hover:text-red-600"
                        >
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:text-blue-600">
              <Search size={16} />
              Search
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
