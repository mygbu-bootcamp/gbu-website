import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Calendar, Eye, BookOpen, TrendingUp, Users } from 'lucide-react';

const ReportsPublications = () => {
  const reports = [
    {
      id: 1,
      title: 'Annual Institutional Report 2023-24',
      type: 'Institutional Report',
      description: 'Comprehensive overview of institutional achievements, initiatives, and progress.',
      publishDate: '2024-03-15',
      pages: 150,
      downloads: 1800,
      format: 'PDF',
      size: '18.5 MB',
      category: 'Institutional'
    },
    {
      id: 2,
      title: 'Accreditation & Rankings Report 2023',
      type: 'Accreditation Report',
      description: 'Details of accreditations, rankings, and quality benchmarks achieved.',
      publishDate: '2024-02-10',
      pages: 70,
      downloads: 950,
      format: 'PDF',
      size: '8.2 MB',
      category: 'Accreditation'
    },
    {
      id: 3,
      title: 'Annual Financial Statement 2023',
      type: 'Financial Report',
      description: 'Summary of financial performance and audited statements for the year.',
      publishDate: '2024-01-25',
      pages: 55,
      downloads: 1200,
      format: 'PDF',
      size: '6.7 MB',
      category: 'Finance'
    },
    {
      id: 4,
      title: 'Student Achievements & Activities 2023',
      type: 'Student Report',
      description: 'Highlights of student achievements, events, and extracurricular activities.',
      publishDate: '2024-01-10',
      pages: 100,
      downloads: 1050,
      format: 'PDF',
      size: '11.4 MB',
      category: 'Student'
    }
  ];

  const highlights = [
    {
      metric: '10+',
      label: 'Institutional Reports',
      description: 'Published annually for transparency and progress',
      icon: <TrendingUp className="w-10 h-10 text-blue-600" />
    },
    {
      metric: '5',
      label: 'National Accreditations',
      description: 'Recognized by top accreditation bodies',
      icon: <FileText className="w-10 h-10 text-green-600" />
    },
    {
      metric: '200+',
      label: 'Student Achievements',
      description: 'Awards and recognitions in various fields',
      icon: <Users className="w-10 h-10 text-purple-600" />
    }
  ];

  const categories = ['All', 'Institutional', 'Accreditation', 'Finance', 'Student'];

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'institutional':
        return 'bg-blue-100 text-blue-800';
      case 'accreditation':
        return 'bg-green-100 text-green-800';
      case 'finance':
        return 'bg-purple-100 text-purple-800';
      case 'student':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Modern: Add search and filter state (not fully functional, just UI)
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Institutional Reports</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in">
            Explore our institutional reports, accreditations, financial statements, and student achievements.
          </p>
        </div>
      </section>

      {/* Institutional Reports Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Institutional Reports at a Glance</h2>
            <p className="text-xl text-gray-600">Key statistics about our institutional progress</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{highlight.metric}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{highlight.label}</p>
                <p className="text-sm text-gray-600">{highlight.description}</p>
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
            <p className="text-xl text-gray-600">Official institutional reports, accreditations, and updates</p>
          </div>

          {/* Filter Categories & Search */}
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
            <input
              type="text"
              placeholder="Search reports..."
              className="ml-4 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
              style={{ minWidth: 200 }}
              disabled
            />
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
    </>
  );
};

export default ReportsPublications;
