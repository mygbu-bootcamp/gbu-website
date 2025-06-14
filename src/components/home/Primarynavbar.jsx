// import React from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Info,
  CreditCard,
  User,
  Phone,
  LogIn,
  Map,
} from "lucide-react";

const Primarynavbar = () => {
  return (
    <nav
      className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-700 text-white text-sm"
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="w-full py-2 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-2">
        {/* Left links */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link to="/tenders" className="flex items-center gap-1  hover:text-yellow-400">
            <Send size={14} /> Tenders
          </Link>
          <Link to="/recruitments" className="flex items-center gap-1 hover:text-yellow-400">
            <Send size={14} /> Recruitments
          </Link>
          <Link to="/booking" className="flex items-center gap-1  hover:text-yellow-400 ">
            Booking
          </Link>
          <Link to="/rti" className="flex items-center gap-1 hover:text-yellow-400">
            <Info size={14} /> RTI
          </Link>
          <Link to="/sitemap" className="flex items-center gap-1 hover:text-yellow-400">
            Sitemap
          </Link>
        </div>

        {/* Right links */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link to="/online-fee-payment" className="flex items-center gap-1 hover:text-yellow-400">
            <CreditCard size={14} /> Online Fee Payment
          </Link>
          <Link to="/student-portal" className="flex items-center gap-1 hover:text-yellow-400">
            <User size={14} /> Student Portal
          </Link>
          <Link to="/employee-login" className="flex items-center gap-1 hover:text-yellow-400">
            <LogIn size={14} /> Employee Login
          </Link>
          <Link to="/directory" className="flex items-center gap-1 hover:text-yellow-400">
            <Map size={14} /> Directory
          </Link>
          <Link to="/contact-us" className="flex items-center gap-1 hover:text-yellow-400">
            <Phone size={14} /> Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Primarynavbar;
