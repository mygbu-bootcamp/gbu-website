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
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Publications & Patents</h1>
        <p className="text-lg text-gray-600">Explore our extensive research output and intellectual property portfolio</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-600 text-white rounded shadow p-6 text-center">
          <h3 className="text-2xl font-bold">500+</h3>
          <p>Total Publications</p>
        </div>
        <div className="bg-green-600 text-white rounded shadow p-6 text-center">
          <h3 className="text-2xl font-bold">75+</h3>
          <p>Patents Filed</p>
        </div>
        <div className="bg-cyan-600 text-white rounded shadow p-6 text-center">
          <h3 className="text-2xl font-bold">25.5</h3>
          <p>Avg Impact Factor</p>
        </div>
        <div className="bg-yellow-500 text-white rounded shadow p-6 text-center">
          <h3 className="text-2xl font-bold">5000+</h3>
          <p>Total Citations</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab('publications')}
          className={`px-4 py-2 rounded-full font-medium transition ${
            activeTab === 'publications' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Research Publications
        </button>
        <button
          onClick={() => setActiveTab('patents')}
          className={`px-4 py-2 rounded-full font-medium transition ${
            activeTab === 'patents' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Patents
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={selectedSchool}
          onChange={(e) => setSelectedSchool(e.target.value)}
        >
          <option value="">Select School</option>
          {schools.map((school, idx) => (
            <option key={idx} value={school}>{school}</option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Environmental Science">Environmental Science</option>
          <option value="Biotechnology">Biotechnology</option>
          <option value="Engineering">Engineering</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Business Ethics">Business Ethics</option>
          <option value="Materials Science">Materials Science</option>
        </select>

        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Search by year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Journal Article">Journal Article</option>
          <option value="Research Article">Research Article</option>
          <option value="Review Article">Review Article</option>
          <option value="Original Research">Original Research</option>
        </select>

        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2 flex-1"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeTab === 'publications' &&
          filteredPublications.length > 0 &&
          filteredPublications.map(pub => (
            <div key={pub.id} className="bg-white shadow rounded p-6">
              <h5 className="text-xl font-semibold mb-2">{pub.title}</h5>
              <p className="text-gray-600">{pub.authors}</p>
              <p><strong>Journal:</strong> {pub.journal}</p>
              <p><strong>Year:</strong> {pub.year}</p>
              <p><strong>Impact Factor:</strong> {pub.impact}</p>
              <p><strong>Citations:</strong> {pub.citations}</p>
            </div>
          ))}

        {activeTab === 'patents' &&
          patents.length > 0 &&
          patents.map(patent => (
            <div key={patent.id} className="bg-white shadow rounded p-6">
              <h5 className="text-xl font-semibold mb-2">{patent.title}</h5>
              <p className="text-gray-600">{patent.inventors}</p>
              <p><strong>Patent No:</strong> {patent.patentNo}</p>
              <p><strong>Filing Date:</strong> {patent.filingDate}</p>
              <p><strong>Status:</strong> {patent.status}</p>
            </div>
          ))}

        {activeTab === 'publications' && filteredPublications.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No publications found.
          </div>
        )}

        {activeTab === 'patents' && patents.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No patents found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;
