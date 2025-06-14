import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="research-hero" style={{ marginTop: '76px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-primary mb-4">
                Research & Innovation at GBU
              </h1>
              <p className="lead text-muted mb-4">
                Driving groundbreaking research and fostering innovation across multiple disciplines. 
                Explore our research excellence, cutting-edge laboratories, and startup ecosystem.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/research/publications" className="btn btn-primary btn-lg">
                  View Publications
                </Link>
                <Link to="/research/centers" className="btn btn-outline-primary btn-lg">
                  Research Centers
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Research at GBU" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Research Projects */}
            <div className="bg-blue-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold">150+</h3>
              <p className="mt-2 text-sm">Research Projects</p>
            </div>

            {/* Research Centers */}
            <div className="bg-green-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold">25+</h3>
              <p className="mt-2 text-sm">Research Centers</p>
            </div>

            {/* Publications */}
            <div className="bg-cyan-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="mt-2 text-sm">Publications</p>
            </div>

            {/* Patents Filed */}
            <div className="bg-yellow-500 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="mt-2 text-sm">Patents Filed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Publications and Patents Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="fw-bold text-primary mb-3">Publications & Patents</h2>
              <p className="lead text-muted">Explore our latest research publications and patent portfolio</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="row mb-4">
            <div className="col-12">
              <ul className="nav nav-pills nav-fill mb-4" id="publicationsTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="publications-tab" data-bs-toggle="pill" data-bs-target="#publications" type="button" role="tab">
                    <i className="fas fa-book me-2"></i>
                    Recent Publications
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="patents-tab" data-bs-toggle="pill" data-bs-target="#patents" type="button" role="tab">
                    <i className="fas fa-lightbulb me-2"></i>
                    Patents & IP
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content" id="publicationsTabContent">
            {/* Publications Tab */}
            <div className="tab-pane fade show active" id="publications" role="tabpanel">
              <div className="row g-4">
                {/* Publication Card */}
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 card-hover border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-primary">Journal Article</span>
                        <small className="text-muted">2024</small>
                      </div>
                      <h6 className="card-title text-primary">Machine Learning Approaches for Climate Change Prediction</h6>
                      <p className="card-text small text-muted mb-2">
                        <strong>Authors:</strong> Dr. A. Kumar, Dr. B. Singh, Dr. C. Patel
                      </p>
                      <p className="card-text small text-muted mb-2">
                        <strong>Journal:</strong> Nature Climate Change
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-success">Impact Factor: 15.3</small>
                        <small className="text-info">Citations: 145</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Publication Cards... */}
                {/* Repeat the same structure for other publications */}
              </div>

              <div className="text-center mt-4">
                <Link to="/research/publications" className="btn btn-primary">
                  View All Publications
                </Link>
              </div>
            </div>

            {/* Patents Tab */}
            <div className="tab-pane fade" id="patents" role="tabpanel">
              {/* Patents Card */}
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 card-hover border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-success">Granted</span>
                        <small className="text-muted">2024</small>
                      </div>
                      <h6 className="card-title text-primary">Smart Irrigation System Using IoT</h6>
                      <p className="card-text small text-muted mb-2">
                        <strong>Inventors:</strong> Dr. A. Patel, Dr. B. Kumar, Ms. S. Sharma
                      </p>
                      <p className="card-text small text-muted mb-2">
                        <strong>Patent No:</strong> IN202411001234
                      </p>
                      <p className="card-text small text-muted">
                        <strong>Filing Date:</strong> March 15, 2024
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Patent Cards... */}
              </div>

              <div className="text-center mt-4">
                <Link to="/research/publications" className="btn btn-primary">
                  View All Patents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700">Explore Our Research Ecosystem</h2>
            <p className="text-gray-600 mt-2">Discover the various facets of research and innovation at our university</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Research Centers & Labs */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-flask text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-green-700 font-semibold text-lg mb-2">Research Centers & Labs</h3>
              <p className="text-gray-600 mb-4">State-of-the-art research facilities and specialized laboratories.</p>
              <Link to="/research/centers" className="text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition">
                Visit Centers
              </Link>
            </div>

            {/* Innovations & Incubation */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-yellow-600 font-semibold text-lg mb-2">Innovations & Incubation</h3>
              <p className="text-gray-600 mb-4">Cutting-edge innovations and our technology incubation programs.</p>
              <Link to="/research/innovations" className="text-yellow-600 border border-yellow-600 px-4 py-2 rounded hover:bg-yellow-600 hover:text-white transition">
                Explore Innovations
              </Link>
            </div>

            {/* StartUp Ecosystem */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-rocket text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-red-600 font-semibold text-lg mb-2">StartUp Ecosystem</h3>
              <p className="text-gray-600 mb-4">Meet the startups born from our research and innovation programs.</p>
              <Link to="/research/startup" className="text-red-600 border border-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition">
                Meet Startups
              </Link>
            </div>

            {/* Funded Projects & IPR */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-cyan-600 text-2xl"></i>
              </div>
              <h3 className="text-cyan-600 font-semibold text-lg mb-2">Funded Projects & IPR</h3>
              <p className="text-gray-600 mb-4">Research funding information and intellectual property resources.</p>
              <Link to="/research/funded-projects" className="text-cyan-600 border border-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
