import React, { useState } from 'react';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('publications');
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const schools = [
    'Biotechnology',
    'Buddhist Studies & Civilization',
    'Engineering',
    'Humanities & Social Sciences',
    'Information & Communication Technology',
    'Law, Justice and Governance',
    'Management',
    'Vocational Studies & Applied Sciences'
  ];

  const publications = [
    {
      id: 1,
      title: "Machine Learning Approaches for Climate Change Prediction",
      authors: "Dr. A. Kumar, Dr. B. Singh, Dr. C. Patel",
      journal: "Nature Climate Change",
      year: "2024",
      impact: "15.3",
      citations: 145,
      type: "Journal Article",
      category: "Environmental Science",
      school: "Engineering"
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Drug Discovery",
      authors: "Dr. P. Sharma, Dr. R. Gupta",
      journal: "Science",
      year: "2024",
      impact: "47.7",
      citations: 203,
      type: "Research Article",
      category: "Biotechnology",
      school: "Biotechnology"
    },
    {
      id: 3,
      title: "Sustainable Energy Storage Systems: A Comprehensive Review",
      authors: "Dr. S. Mehta, Dr. N. Jain, Dr. V. Agarwal",
      journal: "Energy & Environmental Science",
      year: "2023",
      impact: "32.4",
      citations: 298,
      type: "Review Article",
      category: "Energy",
      school: "Engineering"
    },
    {
      id: 4,
      title: "AI-Driven Healthcare: Transforming Medical Diagnosis",
      authors: "Dr. K. Singh, Dr. M. Verma",
      journal: "The Lancet Digital Health",
      year: "2023",
      impact: "23.8",
      citations: 187,
      type: "Original Research",
      category: "Healthcare",
      school: "Information & Communication Technology"
    },
    {
      id: 5,
      title: "Advanced Materials for Space Applications",
      authors: "Dr. D. Rao, Dr. L. Chandra",
      journal: "Materials Today",
      year: "2024",
      impact: "28.1",
      citations: 156,
      type: "Research Article",
      category: "Materials Science",
      school: "Vocational Studies & Applied Sciences"
    },
    {
      id: 6,
      title: "Corporate Governance in Digital Age",
      authors: "Dr. A. Sharma, Dr. R. Patel",
      journal: "Journal of Business Ethics",
      year: "2024",
      impact: "12.8",
      citations: 98,
      type: "Research Article",
      category: "Business Ethics",
      school: "Management"
    },
    {
      id: 7,
      title: "Human Rights and Social Justice",
      authors: "Dr. M. Singh, Dr. P. Kumar",
      journal: "Human Rights Quarterly",
      year: "2023",
      impact: "8.5",
      citations: 124,
      type: "Journal Article",
      category: "Human Rights",
      school: "Law, Justice and Governance"
    },
    {
      id: 8,
      title: "Buddhist Philosophy in Modern Psychology",
      authors: "Dr. T. Lama, Dr. S. Chakraborty",
      journal: "Journal of Buddhist Studies",
      year: "2024",
      impact: "6.2",
      citations: 67,
      type: "Research Article",
      category: "Philosophy",
      school: "Buddhist Studies & Civilization"
    }
  ];

  const patents = [
    {
      id: 1,
      title: "Smart Irrigation System Using IoT and Machine Learning",
      inventors: "Dr. A. Patel, Dr. B. Kumar, Ms. S. Sharma",
      patentNo: "IN202411001234",
      filingDate: "2024-03-15",
      status: "Granted",
      category: "AgriTech"
    },
    {
      id: 2,
      title: "Novel Battery Technology for Electric Vehicles",
      inventors: "Dr. R. Singh, Dr. M. Gupta",
      patentNo: "IN202411005678",
      filingDate: "2024-01-20",
      status: "Under Review",
      category: "Energy Storage"
    },
    {
      id: 3,
      title: "AI-Based Medical Image Analysis System",
      inventors: "Dr. P. Sharma, Dr. N. Verma, Dr. K. Jain",
      patentNo: "IN202311009876",
      filingDate: "2023-11-10",
      status: "Granted",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Quantum Encryption Algorithm for Secure Communications",
      inventors: "Dr. S. Kumar, Dr. A. Singh",
      patentNo: "IN202411002468",
      filingDate: "2024-02-28",
      status: "Filed",
      category: "Cybersecurity"
    }
  ];

  // Filter publications based on selected filters
  const filteredPublications = publications.filter(pub => {
    const matchesSchool = !selectedSchool || pub.school === selectedSchool;
    const matchesCategory = !selectedCategory || pub.category === selectedCategory;
    const matchesYear = !selectedYear || pub.year === selectedYear;
    const matchesType = !selectedType || pub.type === selectedType;
    const matchesSearch = !searchTerm || 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSchool && matchesCategory && matchesYear && matchesType && matchesSearch;
  });

  return (
    <>
      <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">Publications & Patents</h1>
            <p className="lead text-muted">
              Explore our extensive research output and intellectual property portfolio
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="row mb-5">
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm bg-primary text-white text-center">
              <div className="card-body">
                <h3 className="fw-bold">500+</h3>
                <p className="mb-0">Total Publications</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm bg-success text-white text-center">
              <div className="card-body">
                <h3 className="fw-bold">75+</h3>
                <p className="mb-0">Patents Filed</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm bg-info text-white text-center">
              <div className="card-body">
                <h3 className="fw-bold">25.5</h3>
                <p className="mb-0">Avg Impact Factor</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm bg-warning text-white text-center">
              <div className="card-body">
                <h3 className="fw-bold">5000+</h3>
                <p className="mb-0">Total Citations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="row mb-4">
          <div className="col-12">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'publications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('publications')}
                >
                  <i className="fas fa-book me-2"></i>
                  Research Publications
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'patents' ? 'active' : ''}`}
                  onClick={() => setActiveTab('patents')}
                >
                  <i className="fas fa-gavel me-2"></i>
                  Patents
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-start">
              {/* School Filter */}
              <select
                className="form-select me-3 mb-2"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
              >
                <option value="">Select School</option>
                {schools.map((school, index) => (
                  <option key={index} value={school}>{school}</option>
                ))}
              </select>

              {/* Category Filter */}
              <select
                className="form-select me-3 mb-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {/* Add dynamic categories if needed */}
                <option value="Environmental Science">Environmental Science</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Engineering">Engineering</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Business Ethics">Business Ethics</option>
                <option value="Materials Science">Materials Science</option>
              </select>

              {/* Year Filter */}
              <input
                type="text"
                className="form-control me-3 mb-2"
                placeholder="Search by year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              />

              {/* Type Filter */}
              <select
                className="form-select me-3 mb-2"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="Journal Article">Journal Article</option>
                <option value="Research Article">Research Article</option>
                <option value="Review Article">Review Article</option>
                <option value="Original Research">Original Research</option>
              </select>

              {/* Search */}
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="row">
          {activeTab === 'publications' && filteredPublications.length > 0 && filteredPublications.map(pub => (
            <div className="col-md-6 mb-4" key={pub.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{pub.title}</h5>
                  <p className="card-text">{pub.authors}</p>
                  <p className="card-text"><strong>Journal:</strong> {pub.journal}</p>
                  <p className="card-text"><strong>Year:</strong> {pub.year}</p>
                  <p className="card-text"><strong>Impact Factor:</strong> {pub.impact}</p>
                  <p className="card-text"><strong>Citations:</strong> {pub.citations}</p>
                </div>
              </div>
            </div>
          ))}
          {activeTab === 'patents' && patents.length > 0 && patents.map(patent => (
            <div className="col-md-6 mb-4" key={patent.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{patent.title}</h5>
                  <p className="card-text">{patent.inventors}</p>
                  <p className="card-text"><strong>Patent No:</strong> {patent.patentNo}</p>
                  <p className="card-text"><strong>Filing Date:</strong> {patent.filingDate}</p>
                  <p className="card-text"><strong>Status:</strong> {patent.status}</p>
                </div>
              </div>
            </div>
          ))}
          {activeTab === 'publications' && filteredPublications.length === 0 && (
            <div className="col-12">
              <p>No publications found.</p>
            </div>
          )}
          {activeTab === 'patents' && patents.length === 0 && (
            <div className="col-12">
              <p>No patents found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Publications;
