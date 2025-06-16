
import React from 'react';

import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, Eye, Search, BookOpen, TrendingUp, Award } from 'lucide-react';

const ReportsPublications = () => {
  const reports = [
    {
      id: 1,
      title: 'Annual Report 2023-24',
      type: 'Annual Report',
      description: 'Comprehensive overview of university achievements, financial status, and strategic initiatives.',
      publishDate: '2024-03-15',
      pages: 120,
      downloads: 2450,
      format: 'PDF',
      size: '15.2 MB',
      category: 'Institutional'
    },
    {
      id: 2,
      title: 'Research Impact Assessment Report',
      type: 'Research Report',
      description: 'Analysis of research impact, citations, and contribution to knowledge advancement.',
      publishDate: '2024-02-28',
      pages: 85,
      downloads: 1820,
      format: 'PDF',
      size: '8.7 MB',
      category: 'Research'
    },
    {
      id: 3,
      title: 'NIRF Ranking Data 2024',
      type: 'Ranking Report',
      description: 'National Institutional Ranking Framework submission and performance metrics.',
      publishDate: '2024-01-20',
      pages: 65,
      downloads: 3200,
      format: 'PDF',
      size: '12.5 MB',
      category: 'Ranking'
    },
    {
      id: 4,
      title: 'Financial Audit Report 2023',
      type: 'Audit Report',
      description: 'Independent financial audit report with detailed financial statements and analysis.',
      publishDate: '2024-01-10',
      pages: 95,
      downloads: 1150,
      format: 'PDF',
      size: '10.3 MB',
      category: 'Financial'
    }
  ];

  const publications = [
    {
      id: 1,
      title: 'Journal of Advanced Computing and AI',
      type: 'Research Journal',
      issn: 'ISSN 2347-8950',
      frequency: 'Quarterly',
      impact: '2.45',
      description: 'Peer-reviewed journal publishing cutting-edge research in artificial intelligence and computing.',
      latestIssue: 'Vol. 15, Issue 2 (2024)',
      established: '2015'
    },
    {
      id: 2,
      title: 'GBU Engineering Review',
      type: 'Technical Journal',
      issn: 'ISSN 2231-5063',
      frequency: 'Bi-annual',
      impact: '1.85',
      description: 'Technical journal focusing on engineering innovations and applied research.',
      latestIssue: 'Vol. 9, Issue 1 (2024)',
      established: '2018'
    },
    {
      id: 3,
      title: 'Proceedings of GBU Conference Series',
      type: 'Conference Proceedings',
      issn: 'ISSN 2456-7890',
      frequency: 'Annual',
      impact: '1.20',
      description: 'Conference proceedings from international conferences hosted by GBU.',
      latestIssue: 'ICICT 2024 Proceedings',
      established: '2020'
    }
  ];

  const researchHighlights = [
    {
      metric: '450+',
      label: 'Research Papers Published',
      description: 'In peer-reviewed international journals',
      growth: '+15%'
    },
    {
      metric: '85',
      label: 'Patents Filed',
      description: 'Innovation and intellectual property',
      growth: '+25%'
    },
    {
      metric: '1200+',
      label: 'Citations Received',
      description: 'Academic impact and recognition',
      growth: '+30%'
    },
    {
      metric: '25',
      label: 'Research Awards',
      description: 'National and international recognition',
      growth: '+20%'
    }
  ];

  const categories = ['All', 'Institutional', 'Research', 'Financial', 'Academic', 'Ranking'];

const getCategoryColor = (category) => {
  switch (category.toLowerCase()) {
    case 'institutional':
      return 'bg-blue-100 text-blue-800';
    case 'research':
      return 'bg-green-100 text-green-800';
    case 'financial':
      return 'bg-purple-100 text-purple-800';
    case 'ranking':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};


  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Reports & Publications</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in">
            Access comprehensive reports, research publications, and institutional documents
            showcasing our academic excellence and research contributions.
          </p>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Research & Publication Highlights</h2>
            <p className="text-xl text-gray-600">Our contribution to knowledge and academic excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {researchHighlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{highlight.metric}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{highlight.label}</p>
                <p className="text-sm text-gray-600 mb-2">{highlight.description}</p>
                <span className="inline-flex items-center text-sm text-green-600 font-medium">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {highlight.growth} this year
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Reports */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Institutional Reports</h2>
            <p className="text-xl text-gray-600">Official reports and documentation</p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <div
                key={report.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{report.title}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(report.category)}`}>
                        {report.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{report.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {new Date(report.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{report.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{report.pages} pages</span>
                  </div>
                  <div className="text-gray-600">
                    {report.format} • {report.size}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/reports/${report.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View Details
                  </Link>
                  <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Publications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Academic Publications</h2>
            <p className="text-xl text-gray-600">Journals and research publications by GBU</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div
                key={publication.id}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border border-green-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">Impact Factor</div>
                    <div className="text-lg font-bold text-gray-800">{publication.impact}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{publication.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{publication.description}</p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">ISSN:</span>
                    <span className="text-gray-600">{publication.issn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Frequency:</span>
                    <span className="text-gray-600">{publication.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Latest Issue:</span>
                    <span className="text-gray-600">{publication.latestIssue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Established:</span>
                    <span className="text-gray-600">{publication.established}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link
                    to={`/publications/${publication.id}`}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center text-sm font-medium"
                  >
                    View Issues
                  </Link>
                  <button className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-12 h-12 text-yellow-300 mr-4" />
            <h2 className="text-4xl font-bold">Contribute to Knowledge</h2>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our research community and contribute to the advancement of knowledge.
            Submit your research, access our publications, and be part of academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/research/submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Submit Research
            </Link>
            <Link
              to="/research/guidelines"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Publication Guidelines
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportsPublications;
