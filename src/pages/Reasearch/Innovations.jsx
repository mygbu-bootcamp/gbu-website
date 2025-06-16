import React from 'react';

const TeamCard = ({ name, position }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 text-center hover:scale-105 transition-transform duration-300">
      <div className="w-24 h-24 mx-auto mb-4 bg-blue-200 rounded-full flex items-center justify-center text-3xl font-bold text-white">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500">{position}</p>
    </div>
  );
};

const Innovations = () => {
  const innovations = [
    {
      id: 1,
      title: "Smart Agriculture Monitoring System",
      description: "IoT-based precision farming solution that optimizes water usage and crop yields using AI analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      category: "AgriTech",
      stage: "Commercialized",
      impact: "30% yield increase",
      team: "Dr. A. Patel, Dr. B. Singh",
      year: "2024"
    },
    {
      id: 2,
      title: "Portable Medical Diagnostic Device",
      description: "AI-powered portable device for rapid medical diagnosis in remote areas using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "HealthTech",
      stage: "Prototype",
      impact: "95% accuracy rate",
      team: "Dr. P. Sharma, Dr. K. Verma",
      year: "2024"
    },
    {
      id: 3,
      title: "Solar Panel Efficiency Optimizer",
      description: "Smart system that maximizes solar panel efficiency through automated cleaning and positioning.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      category: "CleanTech",
      stage: "Pilot Testing",
      impact: "25% efficiency boost",
      team: "Dr. S. Kumar, Dr. R. Gupta",
      year: "2023"
    },
    {
      id: 4,
      title: "Waste-to-Energy Conversion System",
      description: "Innovative technology that converts organic waste into clean energy using advanced biogas processes.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      category: "Environmental",
      stage: "Scale-up",
      impact: "80% waste reduction",
      team: "Dr. N. Jain, Dr. M. Agarwal",
      year: "2023"
    }
  ];

  const incubationPrograms = [
    {
      id: 1,
      name: "TechStart Incubator",
      description: "Early-stage technology startup incubation program with mentorship and funding support.",
      duration: "12 months",
      startups: 25,
      successRate: "75%",
      funding: "₹2-10 Lakhs"
    },
    {
      id: 2,
      name: "Social Innovation Lab",
      description: "Incubation program focused on social impact startups addressing community challenges.",
      duration: "18 months",
      startups: 15,
      successRate: "80%",
      funding: "₹5-15 Lakhs"
    },
    {
      id: 3,
      name: "GreenTech Accelerator",
      description: "Specialized program for environmental and sustainability-focused technology ventures.",
      duration: "15 months",
      startups: 20,
      successRate: "70%",
      funding: "₹3-12 Lakhs"
    }
  ];

  const teamMembers = [
    { name: 'Dr Shakti Sahi', position: 'Chief Technology Officer' },
    { name: 'Dr Satish K Mittal', position: 'Chief Operations Officer' },
    { name: 'Dr Vinay Kumar Litoria', position: 'Nodal Officer' },
    { name: 'Mr. Raj Kumar', position: 'Manager' },
    { name: 'Mr. Manish Bhardwaj', position: 'Office Assistant' },
    { name: 'Mr. Shekhar Chandra', position: 'Office Attendant' },
  ];
  
  return (
    <div className="container mx-auto px-4 mt-24 mb-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">Innovations & Incubation</h1>
        <p className="text-gray-600 text-lg">Transforming research into real-world solutions through innovation and entrepreneurship</p>
      </div>

      {/* Carousel */}
      <div className="mb-16">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-lg">
            {innovations.map((innovation, index) => (
              <div key={innovation.id} className={`flex flex-col md:flex-row ${index !== 0 ? 'hidden' : ''}`}>
                <div className="md:w-1/2">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="md:w-1/2 flex items-center bg-gray-50">
                  <div className="p-6 md:p-10">
                    <div className="mb-4 space-x-2">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">{innovation.category}</span>
                      <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">{innovation.stage}</span>
                    </div>
                    <h3 className="text-2xl text-blue-700 font-semibold mb-2">{innovation.title}</h3>
                    <p className="text-gray-600 mb-4">{innovation.description}</p>
                    <div className="flex flex-wrap text-sm text-gray-700 mb-4">
                      <div className="w-1/2 mb-2">
                        <span className="block text-gray-500">Impact</span>
                        <span className="font-semibold text-green-600">{innovation.impact}</span>
                      </div>
                      <div className="w-1/2 mb-2">
                        <span className="block text-gray-500">Team</span>
                        <span>{innovation.team}</span>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="mb-16 text-center">
        <h3 className="text-blue-700 text-2xl font-semibold mb-6">Innovation Focus Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '🌱', title: 'AgriTech', desc: 'Smart farming solutions and agricultural innovation' },
            { icon: '❤️', title: 'HealthTech', desc: 'Medical devices and healthcare technology' },
            { icon: '🔆', title: 'CleanTech', desc: 'Renewable energy and environmental solutions' },
            { icon: '🤖', title: 'DeepTech', desc: 'AI, IoT, and advanced technology solutions' }
          ].map((item, i) => (
            <div key={i} className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Incubation Programs */}
      <div className="mb-16 text-center">
        <h3 className="text-blue-700 text-2xl font-semibold mb-2">Incubation Programs</h3>
        <p className="text-gray-600 mb-8">Comprehensive support for turning ideas into successful ventures</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {incubationPrograms.map(program => (
            <div key={program.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-blue-700 text-lg font-semibold mb-2">{program.name}</h4>
              <p className="text-gray-600 text-sm mb-4">{program.description}</p>
              <div className="text-sm text-left space-y-2 mb-4">
                <div><span className="text-gray-500">Duration:</span> {program.duration}</div>
                <div><span className="text-gray-500">Funding Range:</span> <span className="text-green-600 font-semibold">{program.funding}</span></div>
                <div><span className="text-gray-500">Startups Supported:</span> {program.startups}</div>
                <div><span className="text-gray-500">Success Rate:</span> <span className="text-yellow-600 font-semibold">{program.successRate}</span></div>
              </div>
              <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Apply Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-100 py-16 px-4">
        <h2 className="text-2xl text-center mb-10 text-blue-700 font-bold">GBU Incubation Centre Team</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} name={member.name} position={member.position} />
          ))}
        </div>
      </div>

      {/* Innovation Process */}
      <div className="text-center mt-16 mb-12">
        <h3 className="text-blue-700 text-2xl font-semibold mb-2">Innovation Journey</h3>
        <p className="text-gray-600 mb-6">From idea to market-ready solution</p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { step: 1, color: 'bg-blue-600', title: 'Ideation', desc: 'Research-based idea generation' },
            { step: 2, color: 'bg-green-600', title: 'Validation', desc: 'Market and technical validation' },
            { step: 3, color: 'bg-cyan-600', title: 'Prototyping', desc: 'Building and testing prototypes' },
            { step: 4, color: 'bg-yellow-500', title: 'Incubation', desc: 'Mentorship and support' },
            { step: 5, color: 'bg-red-600', title: 'Pilot Testing', desc: 'Real-world testing and feedback' },
            { step: 6, color: 'bg-gray-700', title: 'Commercialization', desc: 'Market launch and scaling' },
          ].map((item, i) => (
            <div key={i} className="w-32">
              <div className={`${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold`}>{item.step}</div>
              <h6 className="font-semibold">{item.title}</h6>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white text-center py-12 rounded-lg">
        <h3 className="text-2xl font-bold mb-3">Ready to Innovate?</h3>
        <p className="mb-6">Join our innovation ecosystem and transform your research into impactful solutions</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">Submit Innovation Proposal</button>
          <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">Apply for Incubation</button>
        </div>
      </div>
    </div>
  );
};

export default Innovations;