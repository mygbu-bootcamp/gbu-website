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
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const menus = [
    {
      key: "about",
      label: "About Us",
      icon: <User size={16} />,
      items: [
        "About GBU",
        "chancellor-message",
        "vice-chancellor-message",
        "governance-committees",
        "policies-statutes-rti",
        "mandatory-disclosures",
      ].map((slug) => (
        <Link to={`/about-us/${slug}`} key={slug}>
          {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </Link>
      )),
    },
    {
      key: "academics",
      label: "Academics",
      icon: <GraduationCap size={16} />,
      items: [
        ["schools", "Schools & Departments"],
        ["faculty", "Faculty Directory"],
        ["academic-calendar", "Academic Calendar & Regulations"],
        ["cbcs-framework", "CBCS Curriculum Framework"],
        ["centers-of-excellence", "Centers of Excellence"],
        ["international-collaboration", "International Collaboration"],
        ["reports-publications", "Reports & Publications"],
      ].map(([slug, text]) => (
        <Link to={`/academics/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "admissions",
      label: "Admissions",
      icon: <FileText size={16} />,
      items: [
        ["admission-process", "Admission Process"],
        ["courses-offered", "Courses Offered (UG | PG | PhD)"],
        ["eligibility-reservation", "Eligibility & Reservation"],
        ["fee-structure-prospectus", "Fee Structure & Prospectus"],
        ["international-admissions", "International Admissions"],
      ].map(([slug, text]) => (
        <Link to={`/admissions/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "research",
      label: "Research",
      icon: <BookOpen size={16} />,
      items: [
        ["research-centers", "Center of Excellence and Labs"],
        ["publications-patents", "Publications, Patents and Projects"],
        ["incubation", "GBU Incubation Cell"],
        ["institution-innovation", "Institution and Innovation"],
        ["ipr-cell", "IPR Cell"],
      ].map(([slug, text]) => (
        <Link to={`/research/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "campus",
      label: "Campus Life",
      icon: <Home size={16} />,
      items: [
        ["hero", "Overview"],
        ["hostel-facilities", "Hostels"],
        ["sports-fitness", "Sports"],
        ["clubs-societies", "Clubs and Societies"],
        ["meditation-center", "Meditation Centre"],
        ["https://mygbu-nss-ncc.lovable.app/", "National Service Scheme (NSS)"],
        ["https://mygbu-nss-ncc.lovable.app/", "National Cadet Corps (NCC)"],
      ].map(([slug, text]) => (
        <Link to={`/campus-life/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "announcements",
      label: "Announcements",
      icon: <Camera size={16} />,
      items: [
        ["news-notifications", "News & Updates"],
        ["event-calendar", "Upcoming Events"],
        ["notices", "Notices & Circular"],
        ["media-gallery", "Media Gallery"],
        ["newsletter", "Newsletter"],
      ].map(([slug, text]) => (
        <Link to={`/announcements/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "placements",
      label: "Placements",
      icon: <Briefcase size={16} />,
      path: "/placements",
    },
    {
      key: "Anshul",
      label: "Anshul",
      icon: <Users size={16} />,
      items: [
        ["alumni-network", "Alumni Network"],
        ["alumni-events", "Alumni Events"],
        ["become-mentor", "Become a Mentor"],
      ].map(([slug, text]) => (
        <Link to={`/alumni/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
  ];

  const createMenu = (label, icon, menuKey, items, path) => {
    if (path) {
      return (
        <li key={menuKey}>
          <Link
            to={path}
            className="flex items-center gap-1 hover:text-blue-600 text-gray-700 px-3 py-2 text-sm font-medium"
          >
            {icon} {label}
          </Link>
        </li>
      );
    }

    return (
      <li
        key={menuKey}
        className="relative"
        ref={(el) => (menuRefs.current[menuKey] = el)}
        aria-haspopup="true"
      >
        <button
          onClick={() => toggleMenu(menuKey)}
          className="flex items-center gap-1 hover:text-blue-600 text-gray-700 px-3 py-2 text-sm font-medium"
        >
          {icon} {label}
          {openMenu === menuKey ? (
            <ChevronUp size={14} />
          ) : (
            <ChevronDown size={14} />
          )}
        </button>
        {openMenu === menuKey && (
          <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
            <div className="flex flex-col">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpenMenu(null)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </li>
    );
  };

  return (
    <div
      className={`fixed top-9 left-0 w-full z-40 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : "shadow"
      }`}
    >
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.svg"
              alt="GBU Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-1">
              {menus.map((menu) =>
                createMenu(menu.label, menu.icon, menu.key, menu.items, menu.path)
              )}
            </ul>

            {/* Search Icon */}
            <button
              className="ml-4 p-2 hover:bg-gray-100 rounded-full text-gray-700"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-2">
              {menus.map((menu) => (
                <div key={menu.key}>
                  {menu.path ? (
                    <Link
                      to={menu.path}
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <span className="flex items-center gap-2">
                        {menu.icon}
                        {menu.label}
                      </span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleMobileMenu(menu.key)}
                        className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                      >
                        <span className="flex items-center gap-2">
                          {menu.icon}
                          {menu.label}
                        </span>
                        {mobileOpenMenus[menu.key] ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                      {mobileOpenMenus[menu.key] && (
                        <div className="bg-gray-50">
                          {menu.items.map((item, index) => (
                            <div
                              key={index}
                              className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {/* Search in mobile menu */}
              <div className="px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                <span className="flex items-center gap-2">
                  <Search size={16} />
                  Search
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
