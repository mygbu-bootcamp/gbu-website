import React from 'react';


const ResearchCenters = () => {
  const centers = [
    {
      id: 1,
      name: "Centre for Artificial Intelligence & Machine Learning",
      shortName: "AI-ML Center",
      description: "Advanced research in AI, ML, deep learning, and neural networks with state-of-the-art computing infrastructure.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      location: "Block A, Research Complex",
      head: "Dr. Rajesh Kumar",
      established: "2020",
      facilities: ["GPU Clusters", "Quantum Simulators", "Edge Computing Lab", "Vision Lab"],
      researchAreas: ["Computer Vision", "NLP", "Robotics", "Quantum ML"]
    },
    {
      id: 2,
      name: "Biotechnology Research Centre",
      shortName: "BioTech Center",
      description: "Cutting-edge biotechnology research focusing on healthcare, pharmaceuticals, and agricultural applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      location: "Life Sciences Building",
      head: "Dr. Priya Sharma",
      established: "2018",
      facilities: ["Cell Culture Lab", "Genomics Lab", "Protein Lab", "Biosafety Level 2"],
      researchAreas: ["Gene Therapy", "Drug Discovery", "Bioprocessing", "Synthetic Biology"]
    },
    {
      id: 3,
      name: "Renewable Energy Research Institute",
      shortName: "RERI",
      description: "Sustainable energy solutions including solar, wind, and energy storage technologies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      location: "Green Technology Campus",
      head: "Dr. Amit Patel",
      established: "2019",
      facilities: ["Solar Testing Lab", "Wind Tunnel", "Battery Testing", "Smart Grid Lab"],
      researchAreas: ["Photovoltaics", "Energy Storage", "Smart Grids", "Fuel Cells"]
    },
    {
      id: 4,
      name: "Materials Science & Engineering Lab",
      shortName: "MSE Lab",
      description: "Advanced materials research for aerospace, automotive, and electronics industries.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      location: "Engineering Block C",
      head: "Dr. Sanjay Gupta",
      established: "2017",
      facilities: ["XRD Lab", "SEM/TEM", "Mechanical Testing", "Thin Film Lab"],
      researchAreas: ["Nanomaterials", "Composites", "Smart Materials", "Biomaterials"]
    },
    {
      id: 5,
      name: "IoT & Cyber Security Research Centre",
      shortName: "IoT-Security Center",
      description: "Internet of Things and cybersecurity research for smart cities and industrial applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      location: "IT Building, Floor 3",
      head: "Dr. Neha Singh",
      established: "2021",
      facilities: ["IoT Testbed", "Security Lab", "5G Lab", "Blockchain Lab"],
      researchAreas: ["IoT Security", "Blockchain", "5G Networks", "Edge Computing"]
    },
    {
      id: 6,
      name: "Environmental Science Research Lab",
      shortName: "ESR Lab",
      description: "Environmental monitoring, climate change research, and sustainable development solutions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      location: "Environmental Sciences Building",
      head: "Dr. Kavita Mehta",
      established: "2016",
      facilities: ["Air Quality Lab", "Water Testing", "GIS Lab", "Climate Chamber"],
      researchAreas: ["Climate Change", "Pollution Control", "Remote Sensing", "Green Chemistry"]
    }
  ];

  return (
   <div className="container mx-auto mt-24 mb-12 px-4">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">
          Research Centers & Laboratories
        </h1>
        <p className="text-lg text-gray-600">
          World-class research facilities driving innovation across multiple disciplines
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { value: '25+', label: 'Research Centers', bg: 'bg-blue-600' },
          { value: '150+', label: 'Research Faculty', bg: 'bg-green-600' },
          { value: '₹50Cr+', label: 'Research Funding', bg: 'bg-teal-600' },
          { value: '300+', label: 'Active Projects', bg: 'bg-yellow-500' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className={`${stat.bg} text-white rounded-lg p-4`}>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Research Centers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {centers.map((c) => (
          <div key={c.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="relative">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                Est. {c.established}
              </span>
            </div>
            <div className="p-6 flex flex-col h-full">
              <div className="mb-4">
                <h5 className="text-xl font-semibold text-blue-600">{c.name}</h5>
                <small className="text-gray-500">{c.shortName}</small>
              </div>
              <p className="text-gray-600 mb-4 flex-1">{c.description}</p>
              <div className="mb-4 space-y-1 text-sm">
                <div><span className="font-medium text-blue-600">Head:</span> {c.head}</div>
                <div><span className="font-medium text-blue-600">Location:</span> {c.location}</div>
              </div>
              <div className="mb-4">
                <h6 className="font-medium text-blue-600 mb-2">Key Facilities:</h6>
                <div className="flex flex-wrap gap-2">
                  {c.facilities.map((f, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h6 className="font-medium text-blue-600 mb-2">Research Areas:</h6>
                <div className="flex flex-wrap gap-2">
                  {c.researchAreas.map((a, i) => (
                    <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex gap-2">
                <button className="flex-1 bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition">
                  Visit Lab
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 text-sm py-2 rounded hover:bg-blue-50 transition">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl text-blue-600 font-semibold mb-4">
              Industry Collaborations & Partnerships
            </h3>
            <p className="text-gray-600 mb-6">
              Our research centers actively collaborate with leading industries, government organizations, and international institutions to drive innovation and translate research into real-world solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-gray-800">
                <i className="fas fa-handshake text-blue-600"></i>
                <span>50+ Industry Partners</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <i className="fas fa-globe text-green-600"></i>
                <span>20+ International Ties</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <i className="fas fa-users text-teal-600"></i>
                <span>100+ Joint Projects</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
              Partner With Us
            </button>
            <button className="w-full border border-blue-600 text-blue-600 py-3 rounded hover:bg-blue-50 transition">
              Schedule Lab Visit
            </button>
          </div>
        </div>
      </div>

      {/* Equipment & Infrastructure */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl text-blue-600 font-semibold mb-2">Research Infrastructure</h3>
        <p className="text-gray-600 mb-8">State-of-the-art equipment and facilities</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: 'fa-microscope', title: 'Advanced Instrumentation', desc: 'High-end analytical and characterization equipment' },
            { icon: 'fa-server', title: 'Computing Infrastructure', desc: 'High-performance computing clusters and cloud resources' },
            { icon: 'fa-shield-alt', title: 'Safety Systems', desc: 'Comprehensive safety protocols and emergency systems' },
            { icon: 'fa-wifi', title: 'Smart Connectivity', desc: 'IoT-enabled labs with real-time monitoring' },
          ].map((item) => (
            <div key={item.title} className="border rounded-lg p-6 flex flex-col items-center">
              <i className={`fas ${item.icon} text-2xl text-blue-600 mb-3`}></i>
              <h5 className="font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchCenters;
