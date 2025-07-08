import React, { useState } from "react";
import { Eye, Download, Filter } from "lucide-react";

import SearchableWrapper from '../../../components/Searchbar/SearchableWrapper';

const Publications = () => {
  const [activeTab, setActiveTab] = useState("publications");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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

  const types = [
    "Article",
    "Thesis",
    "Conference Paper",
    "Book Chapter",
    "Review",
    "Book",
    "Book Review",
    "Letter",
    "News Clippings",
    "Editorial",
  ];
  const statuses = ["Granted", "Filed", "Under Review", "Published"];

  const publications = [
    {
      id: 1,
      title: "Machine Learning Approaches for Climate Change Prediction",
      authors: "Dr. A. Kumar, Dr. B. Singh",
      journal: "Nature Climate Change",
      year: "2024",
      impact: "15.3",
      citations: 145,
      type: "Article",
      category: "Environmental Science",
      school: "Engineering",
      scopusId: "SC123456",
      doi: "10.1038/nclimate1234",
      issn: "1758-678X",
      indexing: "Scopus, Web of Science",
      quartile: "Q1",
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Drug Discovery",
      authors: "Dr. P. Sharma, Dr. R. Gupta",
      journal: "Science",
      year: "2024",
      impact: "47.7",
      citations: 203,
      type: "Thesis",
      category: "Biotechnology",
      school: "Biotechnology",
      scopusId: "SC654321",
      doi: "10.1126/science.abcd123",
      issn: "0036-8075",
      indexing: "Scopus",
      quartile: "Q1",
    },
    {
      id: 3,
      title: "Blockchain for Secure Academic Records",
      authors: "Dr. V. Rao, Dr. T. Kapoor",
      journal: "IEEE Transactions on Education",
      year: "2023",
      impact: "5.2",
      citations: 76,
      type: "Article",
      category: "Cybersecurity",
      school: "Information & Communication Technology",
      scopusId: "SC109823",
      doi: "10.1109/TE.2023.3211234",
      issn: "0018-9359",
      indexing: "IEEE Xplore, Scopus",
      quartile: "Q2",
    },
    {
      id: 4,
      title: "Gender and Legal Reforms in South Asia",
      authors: "Dr. N. Kaur",
      journal: "Journal of Law and Society",
      year: "2022",
      impact: "3.9",
      citations: 41,
      type: "Review",
      category: "Human Rights",
      school: "Law, Justice and Governance",
      scopusId: "SC212345",
      doi: "10.1111/jols.2022.34.1.89",
      issn: "0263-323X",
      indexing: "Scopus",
      quartile: "Q3",
    },
    {
      id: 5,
      title: "AI Ethics in Autonomous Vehicles",
      authors: "Dr. I. Mehta, Dr. S. Pillai",
      journal: "Journal of Artificial Intelligence Research",
      year: "2024",
      impact: "10.5",
      citations: 112,
      type: "Conference Paper",
      category: "Ethics",
      school: "Engineering",
      scopusId: "SC778812",
      doi: "10.1007/s13218-024-0100",
      issn: "1076-9757",
      indexing: "Scopus, Springer",
      quartile: "Q1",
    },
    {
      id: 6,
      title: "Role of Mindfulness in Academic Performance",
      authors: "Dr. R. Dey",
      journal: "Psychological Reports",
      year: "2021",
      impact: "2.7",
      citations: 54,
      type: "Article",
      category: "Psychology",
      school: "Humanities & Social Sciences",
      scopusId: "SC443322",
      doi: "10.1177/00332941211008977",
      issn: "0033-2941",
      indexing: "PubMed, Scopus",
      quartile: "Q4",
    },
    // Add more entries as needed
  ];

  const patents = [
    {
      id: 1,
      title: "Smart Irrigation Using IoT",
      inventors: "Dr. A. Patel",
      patentNo: "IN202411001234",
      filingDate: "2024-03-15",
      status: "Granted",
      category: "AgriTech",
      school: "Engineering",
    },
    {
      id: 2,
      title: "AI Medical Imaging",
      inventors: "Dr. P. Sharma",
      patentNo: "IN202311009876",
      filingDate: "2023-11-10",
      status: "Under Review",
      category: "Healthcare",
      school: "ICT",
    },
    {
      id: 3,
      title: "Wearable Device for Real-Time Glucose Monitoring",
      inventors: "Dr. A. Khan, Ms. P. Sharma",
      patentNo: "IN202411007001",
      filingDate: "2024-04-02",
      status: "Filed",
      category: "Healthcare",
      school: "Biotechnology",
    },
    {
      id: 4,
      title: "Decentralized Voting System Using Blockchain",
      inventors: "Dr. R. Singh, Mr. T. Yadav",
      patentNo: "IN202311004567",
      filingDate: "2023-09-15",
      status: "Published",
      category: "E-Governance",
      school: "Information & Communication Technology",
    },
    {
      id: 5,
      title: "Solar-Powered Cold Storage for Rural Areas",
      inventors: "Dr. L. Sinha",
      patentNo: "IN202311002345",
      filingDate: "2023-07-10",
      status: "Granted",
      category: "Renewable Energy",
      school: "Vocational Studies & Applied Sciences",
    },
    {
      id: 6,
      title: "AI-Based Legal Document Summarizer",
      inventors: "Dr. M. Chawla, Dr. J. Roy",
      patentNo: "IN202411005432",
      filingDate: "2024-02-20",
      status: "Under Review",
      category: "LegalTech",
      school: "Law, Justice and Governance",
    },

    // Add more entries as needed
  ];

  const filteredPublications = publications.filter((pub) => {
    return (
      (!selectedSchool || pub.school === selectedSchool) &&
      (!selectedCategory || pub.category === selectedCategory) &&
      (!selectedYear || pub.year === selectedYear) &&
      (!selectedType || pub.type === selectedType) &&
      (!searchTerm ||
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const filteredPatents = patents.filter((p) => {
    return (
      (!selectedSchool || p.school === selectedSchool) &&
      (!selectedStatus || p.status === selectedStatus)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    activeTab === "publications"
      ? filteredPublications.slice(indexOfFirstItem, indexOfLastItem)
      : filteredPatents.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages =
    activeTab === "publications"
      ? Math.ceil(filteredPublications.length / itemsPerPage)
      : Math.ceil(filteredPatents.length / itemsPerPage);

  return (
    <SearchableWrapper>
    <div className="container mx-auto px-10 py-20">
      <div className="bg-gradient-to-b from-white to-blue-50">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">
            Publications & Patents
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our research and innovation footprint
          </p>
        </div>
        <div className="py-12 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Total Publications */}
              <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-blue-600">
                <div className="text-4xl font-bold text-blue-700">500+</div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  Total Publications
                </p>
              </div>

              {/* Patent Filed */}
              <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-green-600">
                <div className="text-4xl font-bold text-green-700">75+</div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  Patents Filed
                </p>
              </div>

              {/* Avg Impact Factor */}
              <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-cyan-600">
                <div className="text-4xl font-bold text-cyan-700">25.5</div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  Avg Impact Factor
                </p>
              </div>

              {/* Total Citations */}
              <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-yellow-500">
                <div className="text-4xl font-bold text-yellow-600">1000+</div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  Total Citations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 gap-0 mb-8 border border-gray-300 rounded-md overflow-hidden">
        {/* Research Publications Tab */}
        <button
          onClick={() => {
            setActiveTab("publications");
            setCurrentPage(1);
          }}
          className={`w-full py-3 text-sm sm:text-base font-semibold transition ${
            activeTab === "publications"
              ? "bg-blue-700 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Research Publications
        </button>

        {/* Patents Tab */}
        <button
          onClick={() => {
            setActiveTab("patents");
            setCurrentPage(1);
          }}
          className={`w-full py-3 text-sm sm:text-base font-semibold transition ${
            activeTab === "patents"
              ? "bg-blue-700 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Patents
        </button>
      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-4 items-center justify-start">
        {/* School Filter */}
        <div className="w-full sm:w-auto">
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
        </div>

        {activeTab === "publications" && (
          <>
            {/* Year Input */}
            <div className="w-full sm:w-auto">
              <input
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                placeholder="e.g. 2024"
                className="w-full sm:w-32 px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Type Filter */}
            <div className="w-full sm:w-auto">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full sm:w-44 px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Types</option>
                {types.map((t, i) => (
                  <option key={i} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="flex-1 min-w-[200px]">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Title, Author, Journal..."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {activeTab === "patents" && (
          <>
            {/* Status Filter */}
            <div className="w-full sm:w-auto">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full sm:w-44 px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Statuses</option>
                {statuses.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Search by Name or Title */}
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title/inventor"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
      </div>

      {/* Publication Cards */}
      {activeTab === "publications" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems.length > 0 ? (
            currentItems.map((pub) => (
              <div
                key={pub.id}
                className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
              >
                {/* School badge on top-right */}
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {pub.school}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-blue-900 mb-1">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-gray-600 text-sm mb-1">
                  <b>Authors:</b> {pub.authors}
                </p>

                {/* Journal, Year */}
                <p className="text-sm text-gray-700">
                  <b>Journal:</b> {pub.journal}
                </p>
                <p className="text-sm text-gray-700">
                  <b>Year:</b> {pub.year} | <b>Type:</b> {pub.type}
                </p>

                {/* Impact/Citations */}
                <p className="text-sm text-gray-700">
                  <b>Impact Factor:</b> {pub.impact} | <b>Citations:</b>{" "}
                  {pub.citations}
                </p>

                {/* IDs */}
                <p className="text-sm text-gray-700">
                  <b>Scopus ID:</b> {pub.scopusId} | <b>DOI:</b> {pub.doi}
                </p>
                <p className="text-sm text-gray-700">
                  <b>ISSN/ISBN:</b> {pub.issn}
                </p>

                {/* Indexing & Quartile */}
                <p className="text-sm text-gray-700">
                  <b>Indexing:</b> {pub.indexing} | <b>Quartile:</b>{" "}
                  {pub.quartile}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4">
                  <button className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
                    <Eye size={16} />
                    View
                  </button>
                  <button className="flex items-center gap-1 text-green-600 hover:underline text-sm">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center col-span-full">
              No publications found.
            </div>
          )}
        </div>
      )}

      {/* Patent Cards */}
      {activeTab === "patents" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems.length > 0 ? (
            currentItems.map((p) => (
              <div
                key={p.id}
                className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
              >
                {/* School Badge */}
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {p.school}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-blue-800 mb-1">
                  {p.title}
                </h3>

                {/* Inventors */}
                <p className="text-gray-700 text-sm mb-1">
                  <b>Inventors:</b> {p.inventors}
                </p>

                {/* Patent No and Date */}
                <p className="text-sm text-gray-700">
                  <b>Patent No:</b> {p.patentNo}
                </p>
                <p className="text-sm text-gray-700">
                  <b>Filing Date:</b> {p.filingDate}
                </p>

                {/* Status */}
                <p className="text-sm text-gray-700">
                  <b>Status:</b>{" "}
                  <span
                    className={`font-semibold ${
                      p.status === "Granted"
                        ? "text-green-600"
                        : p.status === "Filed"
                        ? "text-yellow-600"
                        : p.status === "Under Review"
                        ? "text-orange-500"
                        : "text-blue-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </p>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <button className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
                    <Eye size={16} />
                    View
                  </button>
                  <button className="flex items-center gap-1 text-green-600 hover:underline text-sm">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center col-span-full">
              No patents found.
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-700 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
    </SearchableWrapper>
  );
};

export default Publications;
