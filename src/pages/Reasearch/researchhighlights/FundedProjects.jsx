 import React, { useState } from "react";

const FundedProjects = () => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fundedProjects = [
    {
      id: 1,
      school: "Engineering",
      title: "Machine Learning Approaches for Climate Change Prediction",
      pi: "Dr. A. Kumar, Dr. B. Singh",
      fundingAgency: "Department of Science & Technology (DST)",
      amount: "₹45.2 Lakhs",
      duration: "3 years (2022-2025)",
      status: "Completed",
      category: "Climate Research",
      description: "Development of machine learning models to predict climate change impacts on crop yields.",
    },
    {
      id: 2,
      school: "Biotechnology",
      title: "Quantum Computing Applications in Drug Discovery",
      pi: "Dr. P. Sharma, Dr. R. Gupta",
      fundingAgency: "Indian Council of Medical Research (ICMR)",
      amount: "₹38.7 Lakhs",
      duration: "4 years (2023-2027)",
      status: "Ongoing",
      category: "Biotechnology",
      description: "Leveraging quantum algorithms to accelerate the drug discovery process.",
    },
    {
      id: 3,
      school: "Energy Systems",
      title: "Smart Grid Integration with Renewable Energy Sources",
      pi: "Dr. Vikash Patel",
      fundingAgency: "Ministry of New and Renewable Energy (MNRE)",
      amount: "₹52.1 Lakhs",
      duration: "3 years (2023-2026)",
      status: "Final Phase",
      category: "Energy Systems",
      description: "Development of intelligent grid systems for optimal integration of solar and wind energy.",
    },
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(fundedProjects.length / itemsPerPage);

  const filteredProjects = fundedProjects.filter((project) => {
    return (
      (selectedSchool === "" || project.school === selectedSchool) &&
      (selectedCategory === "" || project.category === selectedCategory) &&
      (selectedStatus === "" || project.status === selectedStatus) &&
      (searchTerm === "" || project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const schools = [
    "Biotechnology",
    "Buddhist Studies & Civilization",
    "Engineering",
    "Humanities & Social Sciences",
    "Information & Communication Technology",
    "Law, Justice and Governance",
    "Management",
    "Vocational Studies & Applied Sciences",
  ];
  return (
    <div className="container mx-auto px-10 py-10"  >
       
       <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Funded Projects</h1>
        <p className="text-gray-600 text-lg">Driving Innovation through Sponsored Research </p>
      </div>
 <div className="py-12 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Total Publications */}
              <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-blue-600">
                <div className="text-4xl font-bold text-blue-700">60</div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  Total Projects
                </p>
              </div>

              {/* Patent Filed */}
              <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-green-600">
                <div className="text-4xl font-bold text-green-700">₹5 Cr</div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  Total Funding
                </p>
              </div>

              {/* Avg Impact Factor */}
              <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-cyan-600">
                <div className="text-4xl font-bold text-cyan-700">25</div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  Active projects
                </p>
              </div>

              {/* Total Citations */}
              <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-yellow-500">
                <div className="text-4xl font-bold text-yellow-600">12</div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  Funding agencies
                </p>
              </div>
            </div>
          </div>
        </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          <select
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
            className="w-full sm:w-48 px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Schools</option>
            {schools.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
           
          className="w-full sm:w-48 px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Climate Research">Climate Research</option>
          <option value="Biotechnology">Biotechnology</option>
          <option value="Energy Systems">Energy Systems</option>
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
      
          className="w-full sm:w-48 px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Final Phase">Final Phase</option>
        </select>

        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px',    flex: '1' }}
          className="w-full sm:w-48 px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {paginatedProjects.map((project) => (
          <div key={project.id} style={{ border: '1px solid gray', borderRadius: '10px', padding: '15px', position: 'relative' }}>
            <span style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#DBEAFE',
              color: '#1E40AF',
              padding: '5px 10px',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {project.school}
            </span>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1E40AF', marginBottom: '10px' }}>{project.title}</h2>
            <p style={{ color: '#4B5563', marginBottom: '10px' }}>{project.description}</p>
            <div><strong>Principal Investigator:</strong> {project.pi}</div>
            <div><strong>Funding Agency:</strong> {project.fundingAgency}</div>
            <div><strong>Amount:</strong> {project.amount}</div>
            <div><strong>Duration:</strong> {project.duration}</div>
            <div><strong>Status:</strong> {project.status}</div>
            <div><strong>Category:</strong> {project.category}</div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>No projects found.</p>
      )}

       <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    style={{
      padding: '8px 16px',
      borderRadius: '5px',
      border: '1px solid gray',
      backgroundColor: '#E5E7EB',
      cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
    }}
  >
    Previous
  </button>

  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      style={{
        padding: '8px 16px',
        borderRadius: '5px',
        border: '1px solid gray',
        backgroundColor: currentPage === index + 1 ? '#2563EB' : '#E5E7EB',
        color: currentPage === index + 1 ? '#ffffff' : '#000000',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    style={{
      padding: '8px 16px',
      borderRadius: '5px',
      border: '1px solid gray',
      backgroundColor: '#E5E7EB',
      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
    }}
  >
    Next
  </button>
</div>

    </div>
  );
};

export default FundedProjects;
