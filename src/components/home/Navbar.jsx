import React, { useState, useEffect, useRef } from "react";
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
        <a href="/about-us/vision-mission">Vision & Mission</a>,
        <a href="/about-us/chancellor-message">Chancellor's Message</a>,
        <a href="/about-us/vice-chancellor-message">Vice-Chancellor's Message</a>,
        <a href="/about-us/governance-committees">Governance & Committees</a>,
        <a href="/about-us/strategic-perspective">GBU Strategic Perspective</a>,
        <a href="/about-us/policies-statutes-rti">Policies, Statutes & RTI</a>,
        <a href="/about-us/mandatory-disclosures">Mandatory Disclosures</a>,
        // <a href="/about-us/media-coverage">Media Coverage</a>,
      ],
    },
    {
      key: "academics",
      label: "Academics",
      icon: <GraduationCap size={16} />,
      items: [
        <a href="/academics/academic-calendar">Academic Calendar & Regulations</a>,
        <a href="/academics/cbcs-framework">CBCS Curriculum Framework</a>,
        <a href="/academics/faculty">Faculty Directory</a>,
        <a href="/academics/centers-of-excellence">Centers of Excellence</a>,
        <a href="/academics/international-collaboration">Collaboration</a>,
        <a href="/academics/reports-publications">Reports & Publications</a>,
        <a href="/academics/schools">Schools & Departments</a>,
      ],
    },
    {
      key: "admissions",
      label: "Admissions",
      icon: <FileText size={16} />,
      items: [
        <a href="/admissions/admission-process">Admission Process</a>,
        <a href="/admissions/courses-offered">Courses Offered (UG | PG | PhD)</a>,
        <a href="/admissions/eligibility-reservation">Eligibility & Reservation</a>,
        <a href="/admissions/fee-structure-prospectus">Fee Structure & Prospectus</a>,
        <a href="/admissions/international-admissions">International Admissions</a>,
      ],
    },
    {
      key: "research",
      label: "Research",
      icon: <BookOpen size={16} />,
      items: [
        <a href="/research/research-centers">Research Centers and Labs</a>,
        <a href="/research/publications-patents">Publications and Patents</a>,
        <a href="/research/incubation-innovation">Incubation and Innovation</a>,
        <a href="/research/startups">Startups</a>,
        <a href="/research/funded-projects">Funded Projects</a>,
        <a href="/research/irp-cell">IRP Cell</a>,
        <a href="/research/research-highlights">Research Highlights</a>,
      ],
    },
    {
      key: "campus",
      label: "Campus Life",
      icon: <Home size={16} />,
      items: [
        <a href="/campus-life/virtual-tour">Virtual Tour</a>,
        <a href="/campus-life/hostel-facilities">Hostel Facilities</a>,
        <a href="/campus-life/sports-fitness">Sports & Fitness</a>,
        <a href="/campus-life/cultural-activities">Cultural Activities</a>,
        <a href="/campus-life/clubs-societies">Clubs & Societies</a>,
        <a href="/campus-life/health-wellness">Health & Wellness</a>,
        <a href="/campus-life/campus-events">Campus Events</a>,
      ],
    },
    {
      key: "announcements",
      label: "Announcements",
      icon: <Camera size={16} />,
      items: [
        <a href="/announcements/news-notifications">News & Updates</a>,
        <a href="/announcements/event-calendar">Event Calendar</a>,
        <a href="/announcements/notices">Notices</a>,
        <a href="/announcements/press-releases">Press Releases</a>,
        <a href="/announcements/media-gallery">Media Gallery</a>,
        // <a href="/announcements/newsletter">Newsletter</a>,
      ],
    },
    {
      key: "placements",
      label: "Placements",
      icon: <Briefcase size={16} />,
      items: [
        <a href="/placements/placement-process">Placement Process</a>,
        <a href="/placements/top-recruiters">Top Recruiters</a>,
        <a href="/placements/internship-opportunities">Internship Opportunities</a>,
        <a href="/placements/career-counseling">Career Counseling</a>,
        <a href="/placements/placement-statistics">Placement Statistics</a>,
      ],
    },
    {
      key: "alumni",
      label: "Alumni",
      icon: <Users size={16} />,
      items: [
        <a href="/alumni/alumni-network">Alumni Network</a>,
        <a href="/alumni/alumni-events">Alumni Events</a>,
        <a href="/alumni/alumni-achievements">Alumni Achievements</a>,
        <a href="/alumni/become-mentor">Become a Mentor</a>,
      ],
    },
  ];

  return (
    <nav className="bg-white shadow px-4 md:px-16 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
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
                  <span className="flex items-center gap-2">
                    {icon} {label}
                  </span>
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