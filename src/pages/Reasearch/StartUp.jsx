import React from 'react';

const StartUp = () => {
  const startups = [
    {
      id: 1,
      name: "AgroSense Technologies",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop",
      founders: "Dr. Rajesh Kumar, Ms. Priya Sharma",
      mission: "Revolutionizing agriculture through AI-powered crop monitoring and precision farming solutions.",
      sector: "AgriTech",
      founded: "2023",
      funding: "₹2.5 Cr",
      employees: "15",
      status: "Series A",
      website: "www.agrosense.tech",
      description: "AgroSense uses satellite imagery and IoT sensors to provide farmers with real-time insights about crop health, soil conditions, and optimal harvesting times."
    },
    {
      id: 2,
      name: "MedAI Diagnostics",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
      founders: "Dr. Neha Singh, Dr. Amit Verma",
      mission: "Making advanced medical diagnostics accessible to rural and underserved communities worldwide.",
      sector: "HealthTech",
      founded: "2022",
      funding: "₹4.2 Cr",
      employees: "25",
      status: "Series A",
      website: "www.medai-diagnostics.com",
      description: "Portable AI-powered diagnostic devices that can detect multiple diseases with 95% accuracy using a single blood drop."
    },
    {
      id: 3,
      name: "CleanEnergy Solutions",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop",
      founders: "Dr. Sanjay Patel, Ms. Kavita Jain",
      mission: "Accelerating the transition to clean energy through innovative storage and optimization technologies.",
      sector: "CleanTech",
      founded: "2023",
      funding: "₹3.8 Cr",
      employees: "20",
      status: "Seed",
      website: "www.cleanenergy-solutions.in",
      description: "Advanced battery management systems and solar optimization technology that increases renewable energy efficiency by 30%."
    },
    {
      id: 4,
      name: "EduTech Innovations",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop",
      founders: "Dr. Vikash Gupta, Ms. Ritu Agarwal",
      mission: "Transforming education through immersive AR/VR learning experiences and AI-powered personalization.",
      sector: "EdTech",
      founded: "2024",
      funding: "₹1.5 Cr",
      employees: "12",
      status: "Pre-Series A",
      website: "www.edutech-innovations.com",
      description: "Virtual reality learning platforms that make complex scientific concepts accessible through interactive 3D simulations."
    },
    {
      id: 5,
      name: "CyberShield Security",
      logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop",
      founders: "Dr. Ankit Singh, Mr. Rohit Kumar",
      mission: "Protecting businesses and individuals from cyber threats using quantum-safe encryption technologies.",
      sector: "CyberSecurity",
      founded: "2023",
      funding: "₹2.1 Cr",
      employees: "18",
      status: "Seed",
      website: "www.cybershield-security.in",
      description: "Next-generation cybersecurity solutions using quantum cryptography and AI-powered threat detection."
    },
    {
      id: 6,
      name: "WasteToWealth Systems",
      logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop",
      founders: "Dr. Meera Joshi, Mr. Arjun Mehta",
      mission: "Converting waste into valuable resources through innovative biotechnology and circular economy solutions.",
      sector: "Environmental",
      founded: "2022",
      funding: "₹3.2 Cr",
      employees: "22",
      status: "Series A",
      website: "www.wastetowealth.co.in",
      description: "Biotechnology solutions that convert organic waste into biofuels, fertilizers, and other valuable products."
    }
  ];

  const supportServices = [
    {
      title: "Mentorship Program",
      description: "One-on-one guidance from industry experts and successful entrepreneurs",
      icon: "fas fa-user-tie"
    },
    {
      title: "Funding Support",
      description: "Access to seed funding, angel investors, and venture capital networks",
      icon: "fas fa-hand-holding-usd"
    },
    {
      title: "Technical Infrastructure",
      description: "State-of-the-art labs, equipment, and research facilities",
      icon: "fas fa-cogs"
    },
    {
      title: "Legal & IP Support",
      description: "Patent filing, trademark registration, and legal compliance assistance",
      icon: "fas fa-balance-scale"
    },
    {
      title: "Market Access",
      description: "Industry connections, customer introductions, and partnership opportunities",
      icon: "fas fa-handshake"
    },
    {
      title: "Skill Development",
      description: "Workshops, training programs, and business development courses",
      icon: "fas fa-graduation-cap"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto mt-24 mb-12 px-4">
      {/* Header */}
    

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-center">
        <div className="bg-primary text-white rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-2">50+</h2>
          <p>Startups Incubated</p>
        </div>
        <div className="bg-green-600 text-white rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-2">₹25Cr+</h2>
          <p>Funding Raised</p>
        </div>
        <div className="bg-sky-500 text-white rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-2">200+</h2>
          <p>Jobs Created</p>
        </div>
        <div className="bg-yellow-500 text-white rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-2">75%</h2>
          <p>Success Rate</p>
        </div>
      </div>

      {/* Startup Portfolio */}
      <div className="text-center mb-10">
        <h3 className="text-2xl text-primary font-semibold">Our Startup Portfolio</h3>
        <p className="text-gray-500">Meet the innovative companies that started their journey with us</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {startups.map((startup) => (
          <div key={startup.id} className="bg-white rounded-lg shadow hover:shadow-md transition">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <img src={startup.logo} alt={startup.name} className="w-16 h-16 rounded object-cover mr-4" />
                <div>
                  <h5 className="text-primary font-semibold">{startup.name}</h5>
                  <p className="text-sm text-gray-500">{startup.founders}</p>
                </div>
                <span className="ml-auto bg-primary text-white text-xs px-3 py-1 rounded-full">{startup.sector}</span>
              </div>
              <p className="text-gray-600 mb-2">{startup.mission}</p>
              <p className="text-sm text-gray-500 mb-4">{startup.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 text-sm gap-3 mb-4">
                <div>
                  <p className="text-gray-400">Founded</p>
                  <p className="font-medium">{startup.founded}</p>
                </div>
                <div>
                  <p className="text-gray-400">Funding</p>
                  <p className="text-green-600 font-medium">{startup.funding}</p>
                </div>
                <div>
                  <p className="text-gray-400">Team Size</p>
                  <p className="font-medium">{startup.employees}</p>
                </div>
                <div>
                  <p className="text-gray-400">Stage</p>
                  <p className="text-sky-600 font-medium">{startup.status}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="border border-primary text-primary text-sm px-3 py-1 rounded hover:bg-primary hover:text-white">
                  Visit Website
                </button>
                <button className="border border-gray-400 text-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support Services */}
      <div className="text-center mb-10">
        <h3 className="text-2xl text-primary font-semibold">Startup Support Services</h3>
        <p className="text-gray-500">Comprehensive ecosystem to help your startup succeed</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {supportServices.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow transition text-center p-6">
            <div className="w-20 h-20 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <i className={`${service.icon} text-primary text-2xl`}></i>
            </div>
            <h5 className="text-primary font-semibold mb-2">{service.title}</h5>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Success Story */}
      <div className="bg-gray-100 rounded-lg p-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-primary text-2xl font-bold mb-3">Success Story Spotlight</h3>
            <h4 className="text-lg font-semibold mb-3">AgroSense Technologies</h4>
            <p className="text-gray-600 mb-4">
              "Starting from a university research project, AgroSense has grown into a leading AgriTech company 
              serving over 10,000 farmers across India. The mentorship and infrastructure support from the 
              university incubator was instrumental in our journey."
            </p>
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=60&h=60&fit=crop"
                alt="Founder"
                className="w-14 h-14 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-semibold">Dr. Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Co-founder & CEO, AgroSense Technologies</p>
              </div>
            </div>
            <div className="grid grid-cols-3 text-center">
              <div>
                <p className="text-green-600 text-lg font-bold">10,000+</p>
                <p className="text-gray-500 text-sm">Farmers Served</p>
              </div>
              <div>
                <p className="text-sky-600 text-lg font-bold">₹2.5Cr</p>
                <p className="text-gray-500 text-sm">Funding Raised</p>
              </div>
              <div>
                <p className="text-yellow-500 text-lg font-bold">30%</p>
                <p className="text-gray-500 text-sm">Yield Increase</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
              alt="AgroSense Success"
              className="rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="text-center mb-10">
        <h3 className="text-2xl text-primary font-semibold">Join Our Startup Ecosystem</h3>
        <p className="text-gray-500">Simple process to get started</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {['Apply Online', 'Evaluation', 'Pitch Presentation', 'Incubation'].map((step, index) => {
          const colors = ['bg-primary', 'bg-green-600', 'bg-sky-500', 'bg-yellow-500'];
          const descriptions = [
            'Submit your startup idea and business plan',
            'Expert panel reviews your application',
            'Present your idea to our selection committee',
            'Begin your startup journey with our support',
          ];
          return (
            <div key={index}>
              <div className={`text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-3 ${colors[index]}`}>
                <span className="font-bold text-xl">{index + 1}</span>
              </div>
              <h6 className="font-semibold">{step}</h6>
              <p className="text-sm text-gray-500">{descriptions[index]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StartUp;