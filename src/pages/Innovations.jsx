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
    <>
      <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">Innovations & Incubation</h1>
            <p className="lead text-muted">
              Transforming research into real-world solutions through innovation and entrepreneurship
            </p>
          </div>
        </div>

        {/* Featured Innovation Carousel */}
        <div className="row mb-5">
          <div className="col-12">
            <div id="innovationCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {innovations.map((_, index) => (
                  <button 
                    key={index}
                    type="button" 
                    data-bs-target="#innovationCarousel" 
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                  />
                ))}
              </div>
              
              <div className="carousel-inner rounded shadow">
                {innovations.map((innovation, index) => (
                  <div key={innovation.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row g-0 bg-light">
                      <div className="col-md-6">
                        <img 
                          src={innovation.image} 
                          alt={innovation.title}
                          className="img-fluid h-100 object-cover"
                          style={{ objectFit: 'cover', height: '400px' }}
                        />
                      </div>
                      <div className="col-md-6 d-flex align-items-center">
                        <div className="p-5">
                          <div className="mb-3">
                            <span className="badge bg-primary me-2">{innovation.category}</span>
                            <span className="badge bg-success">{innovation.stage}</span>
                          </div>
                          <h3 className="text-primary mb-3">{innovation.title}</h3>
                          <p className="text-muted mb-4">{innovation.description}</p>
                          <div className="row g-3 mb-4">
                            <div className="col-6">
                              <small className="text-muted d-block">Impact</small>
                              <strong className="text-success">{innovation.impact}</strong>
                            </div>
                            <div className="col-6">
                              <small className="text-muted d-block">Team</small>
                              <strong>{innovation.team}</strong>
                            </div>
                          </div>
                          <button className="btn btn-primary">Learn More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-control-prev" type="button" data-bs-target="#innovationCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#innovationCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="text-primary text-2xl">Innovation Focus Areas</h3>
          </div>
          
          <div className="col-md-3 text-center mb-4">
            <div className="border rounded p-4 h-100 card-hover">
              <i className="fas fa-seedling text-success fs-1 mb-3"></i>
              <h5 className="text-success">AgriTech</h5>
              <p className="text-muted small">Smart farming solutions and agricultural innovation</p>
            </div>
          </div>
          
          <div className="col-md-3 text-center mb-4">
            <div className="border rounded p-4 h-100 card-hover">
              <i className="fas fa-heartbeat text-danger fs-1 mb-3"></i>
              <h5 className="text-danger">HealthTech</h5>
              <p className="text-muted small">Medical devices and healthcare technology</p>
            </div>
          </div>
          
          <div className="col-md-3 text-center mb-4">
            <div className="border rounded p-4 h-100 card-hover">
              <i className="fas fa-solar-panel text-warning fs-1 mb-3"></i>
              <h5 className="text-warning">CleanTech</h5>
              <p className="text-muted small">Renewable energy and environmental solutions</p>
            </div>
          </div>
          
          <div className="col-md-3 text-center mb-4">
            <div className="border rounded p-4 h-100 card-hover">
              <i className="fas fa-microchip text-primary fs-1 mb-3"></i>
              <h5 className="text-primary">DeepTech</h5>
              <p className="text-muted small">AI, IoT, and advanced technology solutions</p>
            </div>
          </div>
        </div>

        {/* Incubation Programs */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="text-primary text-2xl">Incubation Programs</h3>
            <p className="text-muted">Comprehensive support for turning ideas into successful ventures</p>
          </div>
          
          {incubationPrograms.map((program) => (
            <div key={program.id} className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow card-hover">
                <div className="card-body">
                  <h5 className="card-title text-primary mb-3">{program.name}</h5>
                  <p className="card-text text-muted mb-4">{program.description}</p>
                  
                  <div className="row g-2 mb-4">
                    <div className="col-6">
                      <small className="text-muted d-block">Duration</small>
                      <strong>{program.duration}</strong>
                    </div>
                    <div className="col-6">
                      <small className="text-muted d-block">Funding Range</small>
                      <strong className="text-success">{program.funding}</strong>
                    </div>
                    <div className="col-6">
                      <small className="text-muted d-block">Startups Supported</small>
                      <strong>{program.startups}</strong>
                    </div>
                    <div className="col-6">
                      <small className="text-muted d-block">Success Rate</small>
                      <strong className="text-warning">{program.successRate}</strong>
                    </div>
                  </div>
                  
                  <button className="btn btn-outline-primary w-100">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-12 px-4 bg-gray-100 min-h-screen">
          <h2 className="text-2xl text-center mb-10 text-primary">GBU Incubation Centre Team</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} name={member.name} position={member.position} />
            ))}
          </div>
        </div>

        {/* Innovation Process */}
        <div className="row mb-5 mt-10">
          <div className="col-12 text-center mb-4">
            <h3 className="text-primary text-2xl">Innovation Journey</h3>
            <p className="text-muted">From idea to market-ready solution</p>
          </div>
          
          <div className="col-12">
            <div className="row text-center">
              <div className="col-md-2 mb-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">1</span>
                </div>
                <h6>Ideation</h6>
                <small className="text-muted">Research-based idea generation</small>
              </div>
              
              <div className="col-md-2 mb-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">2</span>
                </div>
                <h6>Validation</h6>
                <small className="text-muted">Market and technical validation</small>
              </div>
              
              <div className="col-md-2 mb-4">
                <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">3</span>
                </div>
                <h6>Prototyping</h6>
                <small className="text-muted">Building and testing prototypes</small>
              </div>
              
              <div className="col-md-2 mb-4">
                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">4</span>
                </div>
                <h6>Incubation</h6>
                <small className="text-muted">Mentorship and support</small>
              </div>
              
              <div className="col-md-2 mb-4">
                <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">5</span>
                </div>
                <h6>Pilot Testing</h6>
                <small className="text-muted">Real-world testing and feedback</small>
              </div>
              
              <div className="col-md-2 mb-4">
                <div className="bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">6</span>
                </div>
                <h6>Commercialization</h6>
                <small className="text-muted">Market launch and scaling</small>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row">
          <div className="col-12">
            <div className="bg-gradient text-white rounded p-5 text-center" 
                 style={{background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'}}>
              <h3 className="mb-3">Ready to Innovate?</h3>
              <p className="mb-4">
                Join our innovation ecosystem and transform your research into impactful solutions
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-light btn-lg">Submit Innovation Proposal</button>
                <button className="btn btn-light btn-lg">Apply for Incubation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovations;
