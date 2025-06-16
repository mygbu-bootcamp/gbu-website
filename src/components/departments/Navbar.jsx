import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes/routes';

const DropdownItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm text-gray-800 font-semibold flex items-center hover:text-purple-700 transition"
      >
        {title}
        <span className="ml-1">▾</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-lg border border-gray-200 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-5 py-2 text-sm text-gray-700 hover:bg-purple-50"
              onClick={() => setIsOpen(false)} // Close dropdown on link click
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
        <nav className="flex items-center space-x-6 font-medium">
          <Link to={routes.home} className="text-black hover:text-purple-700">Home</Link>
          <Link to={routes.faculty} className="text-black hover:text-purple-700">Faculty</Link>

          <DropdownItem
            title="About Us"
            items={[
              { label: "Dean's Message", href: routes.about.dean },
              { label: "USICT COEIDrone Technologies", href: routes.about.coeidrone },
              { label: "USICT COEIRAEM", href: routes.about.coeiraem },
              { label: "USICT Board of Studies", href: routes.about.board },
              { label: "USICT Staff Members", href: routes.about.staff },
              { label: "USICT Laboratories", href: routes.about.labs },
              { label: "USICT Activities", href: routes.about.activities },
            ]}
          />

          <DropdownItem
            title="Departments & Academic Programs"
            items={[
              { label: "Department of Computer Science and Engineering", href: routes.departments.cse },
              { label: "Department of Information Technology", href: routes.departments.it },
              { label: "Department of Electronic & Communication", href: routes.departments.ece },
            ]}
          />

          <DropdownItem
            title="Research"
            items={[
              { label: "Research Area and Profile", href: routes.research.profile },
              { label: "Training and Consultancy", href: routes.research.consultancy },
              { label: "Research Scholars", href: routes.research.scholars },
              { label: "Research Projects", href: routes.research.projects },
              { label: "Patents", href: routes.research.patents },
            ]}
          />

          <Link to="/Contactus" className="text-gray-800 hover:text-purple-700 transition">Contact us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
