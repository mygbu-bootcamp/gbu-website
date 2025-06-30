import { useState } from 'react';

const CampusRecruiters = () => {
  const [hoveredCompany, setHoveredCompany] = useState(null);

  const companies = {
    all: [
      { name: "Samsung", logo: "https://www.gbu.ac.in/USICT/media/img/recute/samsung.png" },
      { name: "TCS", logo: "https://www.gbu.ac.in/USICT/media/img/recute/tcs.png" },
      { name: "Adobe", logo: "https://www.gbu.ac.in/USICT/media/img/recute/adobe.png" },
      { name: "Tech Mahindra", logo: "https://www.gbu.ac.in/USICT/media/img/recute/tech.png" },
      { name: "Metro", logo: "https://www.gbu.ac.in/USICT/media/img/recute/metro.png" },
      { name: "HCL", logo: "https://www.gbu.ac.in/USICT/media/img/recute/hcl.png" },
      { name: "Byjus", logo: "https://www.gbu.ac.in/USICT/media/img/recute/byjus.png" },
      { name: "Nagrro", logo: "https://www.gbu.ac.in/USICT/media/img/recute/nagrro.png" },
      { name: "Apple", logo: "https://www.gbu.ac.in/USICT/media/img/recute/apple.png" },
      { name: "White Hat Junior", logo: "https://www.gbu.ac.in/USICT/media/img/recute/white.png" },
      { name: "Hexaware", logo: "https://www.gbu.ac.in/USICT/media/img/recute/hexaware.png" },
      { name: "Blinkit", logo: "https://www.gbu.ac.in/USICT/media/img/recute/blink-it-logo.png" },
      { name: "Toppr", logo: "https://www.gbu.ac.in/USICT/media/img/recute/Toppr_logo.png" },
      { name: "Wipro", logo: "https://www.gbu.ac.in/USICT/media/img/recute/wipro.png" },
      { name: "Scaler", logo: "https://www.gbu.ac.in/USICT/media/img/recute/scaler.png" },
      { name: "Chegg", logo: "https://www.gbu.ac.in/USICT/media/img/recute/Chegg-Logo.png" },
      { name: "Salesforce", logo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg" },
      { name: "Microsoft", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZccZTUqqBQ5cWG3h4nRZA7-hv-6QPv8OQ_Q&s" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Our Esteemed Campus Recruiters
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building strong corporate partnerships across diverse domains, fostering trust and creating exceptional career opportunities for our students.
            </p>
          </div>

          {/* Company Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {companies.all.map((company, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCompany(company)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                <div className="w-20 h-20 bg-white rounded-full border border-gray-200 shadow-md overflow-hidden mb-3">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-red-600 transition-colors duration-300">
                  {company.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Optional Recruiter Testimonials */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              What Our Recruiters Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sample Testimonial */}
              <div className="bg-white/80 backdrop-blur-sm pt-4 border-0 shadow-xl rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">TCS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">HR Director, TCS</h4>
                      <p className="text-sm text-gray-600">Technology Services</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "GBU students consistently demonstrate excellent technical skills and adaptability."
                  </p>
                </div>
              </div>
              {/* Add more testimonials if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusRecruiters;
