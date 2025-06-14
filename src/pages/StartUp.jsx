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
    <>
      <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">StartUp Ecosystem</h1>
            <p className="lead text-muted">
              Nurturing the next generation of innovative startups born from cutting-edge research
            </p>
          </div>
        </div>

        {/* Startup Statistics */}
        <div className="row mb-5">
          <div className="col-md-3 text-center mb-4">
            <div className="bg-primary text-white rounded p-4">
              <h2 className="fw-bold mb-2">50+</h2>
              <p className="mb-0">Startups Incubated</p>
            </div>
          </div>
          <div className="col-md-3 text-center mb-4">
            <div className="bg-success text-white rounded p-4">
              <h2 className="fw-bold mb-2">₹25Cr+</h2>
              <p className="mb-0">Funding Raised</p>
            </div>
          </div>
          <div className="col-md-3 text-center mb-4">
            <div className="bg-info text-white rounded p-4">
              <h2 className="fw-bold mb-2">200+</h2>
              <p className="mb-0">Jobs Created</p>
            </div>
          </div>
          <div className="col-md-3 text-center mb-4">
            <div className="bg-warning text-white rounded p-4">
              <h2 className="fw-bold mb-2">75%</h2>
              <p className="mb-0">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Featured Startups */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="text-primary text-2xl">Our Startup Portfolio</h3>
            <p className="text-muted">Meet the innovative companies that started their journey with us</p>
          </div>
          
          {startups.map((startup) => (
            <div key={startup.id} className="col-lg-6 mb-4">
              <div className="card h-100 card-hover border-0 shadow">
                <div className="card-body">
                  <div className="row align-items-center mb-3">
                    <div className="col-auto">
                      <img 
                        src={startup.logo} 
                        alt={startup.name}
                        className="rounded"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col">
                      <h5 className="card-title text-primary mb-1">{startup.name}</h5>
                      <small className="text-muted">{startup.founders}</small>
                    </div>
                    <div className="col-auto">
                      <span className="badge bg-primary">{startup.sector}</span>
                    </div>
                  </div>
                  
                  <p className="card-text text-muted mb-3">{startup.mission}</p>
                  <p className="small text-muted mb-3">{startup.description}</p>
                  
                  <div className="row g-2 mb-3">
                    <div className="col-6 col-md-3">
                      <small className="text-muted d-block">Founded</small>
                      <strong>{startup.founded}</strong>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-muted d-block">Funding</small>
                      <strong className="text-success">{startup.funding}</strong>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-muted d-block">Team Size</small>
                      <strong>{startup.employees}</strong>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-muted d-block">Stage</small>
                      <strong className="text-info">{startup.status}</strong>
                    </div>
                  </div>
                  
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="fas fa-globe me-1"></i>
                      Visit Website
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="fas fa-info-circle me-1"></i>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Services */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="text-primary text-2xl">Startup Support Services</h3>
            <p className="text-muted">Comprehensive ecosystem to help your startup succeed</p>
          </div>
          
          {supportServices.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className={`${service.icon} text-primary fs-3`}></i>
                  </div>
                  <h5 className="card-title text-primary mb-3">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Highlight */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="bg-light rounded p-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3 className="text-primary text-2xl mb-3">Success Story Spotlight</h3>
                  <h4 className="mb-3">AgroSense Technologies</h4>
                  <p className="text-muted mb-4">
                    "Starting from a university research project, AgroSense has grown into a leading AgriTech company 
                    serving over 10,000 farmers across India. The mentorship and infrastructure support from the 
                    university incubator was instrumental in our journey."
                  </p>
                  <div className="d-flex align-items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=60&h=60&fit=crop" 
                      alt="Founder"
                      className="rounded-circle me-3"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div>
                      <strong>Dr. Rajesh Kumar</strong>
                      <br />
                      <small className="text-muted">Co-founder & CEO, AgroSense Technologies</small>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-4">
                      <strong className="text-success d-block">10,000+</strong>
                      <small className="text-muted">Farmers Served</small>
                    </div>
                    <div className="col-4">
                      <strong className="text-info d-block">₹2.5Cr</strong>
                      <small className="text-muted">Funding Raised</small>
                    </div>
                    <div className="col-4">
                      <strong className="text-warning d-block">30%</strong>
                      <small className="text-muted">Yield Increase</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                    alt="AgroSense Success"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="text-primary text-2xl">Join Our Startup Ecosystem</h3>
            <p className="text-muted">Simple process to get started</p>
          </div>
          
          <div className="col-12">
            <div className="row text-center">
              <div className="col-md-3 mb-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">1</span>
                </div>
                <h6>Apply Online</h6>
                <small className="text-muted">Submit your startup idea and business plan</small>
              </div>
              
              <div className="col-md-3 mb-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">2</span>
                </div>
                <h6>Evaluation</h6>
                <small className="text-muted">Expert panel reviews your application</small>
              </div>
              
              <div className="col-md-3 mb-4">
                <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">3</span>
                </div>
                <h6>Pitch Presentation</h6>
                <small className="text-muted">Present your idea to our selection committee</small>
              </div>
              
              <div className="col-md-3 mb-4">
                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">4</span>
                </div>
                <h6>Incubation</h6>
                <small className="text-muted">Begin your startup journey with our support</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartUp;
