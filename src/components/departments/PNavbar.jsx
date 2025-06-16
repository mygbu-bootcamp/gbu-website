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
} from "lucide-react";

const PNavbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRefs = useRef({});

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
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

  return (
    <nav className="bg-white shadow px-4 md:px-16 py-3 flex flex-col md:flex-row items-center justify-between relative z-50">
      {/* Logo */}
  <div
  className="flex items-center space-x-3 cursor-pointer"
  onClick={() => window.location.href = '/'}
>
  <img
    src="https://gbu-campus-gateway.lovable.app/lovable-uploads/5ae0d9ed-e0e0-4921-a0f1-8e17676824d6.png"
    alt="GBU Logo"
    className="w-64 h-12 mr-3"
  />
</div>



      {/* Navigation */}
      <ul className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 text-sm text-gray-700 relative">
        {createMenu("About Us", <User size={16} />, "about", [
          <Link to="/about-us/vision-mission">Vision & Mission</Link>,
          <Link to="/about-us/chancellor-message">Chancellor's Message</Link>,
          <Link to="/about-us/vice-chancellor-message">Vice-Chancellor's Message</Link>,
          <Link to="/about-us/governance-committees">Governance & Committees</Link>,
          <Link to="/about-us/strategic-perspective">GBU Strategic Perspective</Link>,
          <Link to="/about-us/policies-statutes-rti">Policies, Statutes & RTI</Link>,
          <Link to="/about-us/mandatory-disclosures">Mandatory Disclosures</Link>,
          <Link to="/about-us/media-coverage">Media Coverage</Link>,
        ])}

        {createMenu("Academics", <GraduationCap size={16} />, "academics", [
          <Link to="/academics/academic-calendar">Academic Calendar & Regulations</Link>,
          <Link to="/academics/news-events">News, Events and Gallery</Link>,
          <Link to="/academics/cbcs-framework">CBCS Curriculum Framework</Link>,
          <Link to="/academics/faculty">Faculty Directory</Link>,
          <Link to="/academics/centers-of-excellence">Centers of Excellence</Link>,
          <Link to="/academics/international-collaboration">International Collaboration</Link>,
          <Link to="/academics/reports-publications">Reports & Publications</Link>,
          <Link to="/academics/schools">Schools & Departments</Link>,
        ])}

        {createMenu("Admissions", <FileText size={16} />, "admissions", [
          <Link to="/admissions/admission-process">Admission Process</Link>,
          <Link to="/admissions/courses-offered">Courses Offered (UG | PG | PhD)</Link>,
          <Link to="/admissions/eligibility-reservation">Eligibility & Reservation</Link>,
          <Link to="/admissions/fee-structure-prospectus">Fee Structure & Prospectus</Link>,
          <Link to="/admissions/international-admissions">International Admissions</Link>,
        ])}

        {createMenu("Research", <BookOpen size={16} />, "research", [
          <Link to="/research/research-centers">Research Centers and Labs</Link>,
          <Link to="/research/publications-patents">Publications and Patents</Link>,
          <Link to="/research/incubation-innovation">Incubation and Innovation</Link>,
          <Link to="/research/startups">Startups</Link>,
          <Link to="/research/funded-projects">Funded Projects</Link>,
          <Link to="/research/irp-cell">IRP Cell</Link>,
          <Link to="/research/research-highlights">Research Highlights</Link>,
        ])}

        {createMenu("Campus Life", <Home size={16} />, "campus", [
          <Link to="/campus-life/hostel-facilities">Hostel Facilities</Link>,
          <Link to="/campus-life/sports-fitness">Sports & Fitness</Link>,
          <Link to="/campus-life/cultural-activities">Cultural Activities</Link>,
          <Link to="/campus-life/clubs-societies">Clubs & Societies</Link>,
          <Link to="/campus-life/health-wellness">Health & Wellness</Link>,
          <Link to="/campus-life/student-support-services">Student Support Services</Link>,
          <Link to="/campus-life/campus-events">Campus Events</Link>,
        ])}

        {createMenu("Announcements", <Camera size={16} />, "announcements", [
          <Link to="/announcements/news-updates">News & Updates</Link>,
          <Link to="/announcements/event-calendar">Event Calendar</Link>,
          <Link to="/announcements/notices">Notices</Link>,
          <Link to="/announcements/press-releases">Press Releases</Link>,
          <Link to="/announcements/media-gallery">Media Gallery</Link>,
          <Link to="/announcements/newsletter">Newsletter</Link>,
        ])}

        {createMenu("Placements", <Briefcase size={16} />, "placements", [
          <Link to="/placements/placement-process">Placement Process</Link>,
          <Link to="/placements/top-recruiters">Top Recruiters</Link>,
          <Link to="/placements/internship-opportunities">Internship Opportunities</Link>,
          <Link to="/placements/career-counseling">Career Counseling</Link>,
          <Link to="/placements/placement-statistics">Placement Statistics</Link>,
        ])}

        {createMenu("Alumni", <Users size={16} />, "alumni", [
          <Link to="/alumni/alumni-network">Alumni Network</Link>,
          <Link to="/alumni/alumni-events">Alumni Events</Link>,
          <Link to="/alumni/alumni-achievements">Alumni Achievements</Link>,
          <Link to="/alumni/become-mentor">Become a Mentor</Link>,
        ])}

        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <Search size={16} />
        </li>
      </ul>
    </nav>
  );
};

export default PNavbar;
