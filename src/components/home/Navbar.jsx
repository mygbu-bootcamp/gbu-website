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
    if (!isClickInsideAnyMenu) setOpenMenu(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menus = [
    {
      key: "about",
      label: "About Us",
      icon: <User size={16} />,
      items: [
        ["Vision & Mission", "/about-us/vision-mission"],
        ["Chancellor's Message", "/about-us/chancellor-message"],
        ["Vice-Chancellor's Message", "/about-us/vice-chancellor-message"],
        ["Governance & Committees", "/about-us/governance-committees"],
        ["GBU Strategic Perspective", "/about-us/strategic-perspective"],
        ["Policies, Statutes & RTI", "/about-us/policies-statutes-rti"],
        ["Mandatory Disclosures", "/about-us/mandatory-disclosures"],
        ["Media Coverage", "/about-us/media-coverage"],
      ],
    },
    {
      key: "academics",
      label: "Academics",
      icon: <GraduationCap size={16} />,
      items: [
        ["Academic Calendar", "/academics/academic-calendar"],
        ["Programs Offered", "/academics/programs"],
        ["Evaluation System", "/academics/evaluation-system"],
        ["Faculties", "/academics/faculties"],
        ["Schools", "/academics/schools"],
      ],
    },
    {
      key: "admissions",
      label: "Admissions",
      icon: <FileText size={16} />,
      items: [
        ["Admission Process", "/admissions/admission-process"],
        ["Fee Structure", "/admissions/fee-structure"],
        ["Scholarships", "/admissions/scholarships"],
        ["FAQs", "/admissions/faqs"],
      ],
    },
    {
      key: "research",
      label: "Research",
      icon: <BookOpen size={16} />,
      items: [
        ["Research Centers", "/research/research-centers"],
        ["Publications", "/research/publications"],
        ["Projects", "/research/projects"],
        ["Patents", "/research/patents"],
      ],
    },
    {
      key: "campus",
      label: "Campus Life",
      icon: <Home size={16} />,
      items: [
        ["Virtual Tour", "/campus-life/virtual-tour"],
        ["Facilities", "/campus-life/facilities"],
        ["Events", "/campus-life/events"],
      ],
    },
    {
      key: "placements",
      label: "Placements",
      icon: <Briefcase size={16} />,
      items: [
        ["Placement Process", "/placements/placement-process"],
        ["Our Recruiters", "/placements/recruiters"],
        ["Placement Reports", "/placements/reports"],
      ],
    },
    {
      key: "alumni",
      label: "Alumni",
      icon: <Users size={16} />,
      items: [
        ["Alumni Network", "/alumni/alumni-network"],
        ["Stay Connected", "/alumni/stay-connected"],
      ],
    },
    {
      key: "announcements",
      label: "Announcements",
      icon: <Camera size={16} />,
      items: [
        ["News & Notifications", "/announcements/news-notifications"],
        ["Upcoming Events", "/announcements/events"],
      ],
    },
  ];

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
          {items.map(([text, path], idx) => (
            <li
              key={idx}
              className="px-3 py-1 rounded cursor-pointer transition hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setOpenMenu(null)}
            >
              <Link to={path}>{text}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

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
                    {items.map(([text, path], idx) => (
                      <li key={idx}>
                        <Link
                          to={path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileOpenMenus({});
                          }}
                          className="block py-1 hover:text-red-600"
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
