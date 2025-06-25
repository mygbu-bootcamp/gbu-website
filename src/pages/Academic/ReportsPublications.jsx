import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  Calendar,
  Eye,
  BookOpen,
  TrendingUp,
  Users
} from 'lucide-react';

const ReportsPublications = () => {
  const [heroData, setHeroData] = useState(null);
  const [reports, setReports] = useState([]);

  const VITE_HOST = import.meta.env.VITE_HOST;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, reportsRes] = await Promise.all([
          fetch(`${VITE_HOST}/academic/reports/hero/`),
          fetch(`${VITE_HOST}/academic/reports/list/`)
        ]);
        const heroJson = await heroRes.json();
        const reportsJson = await reportsRes.json();

        if (heroJson.length > 0) setHeroData(heroJson[0]);

        const formattedReports = reportsJson.map((report) => ({
          id: report.id,
          title: report.card_title,
          type: 'Institutional Report',
          description: report.card_desc,
          publishDate: report.date,
          pages: report.pages,
          downloads: report.downloads,
          format: 'PDF',
          size: `${report.file_size_mb} MB`,
          category: report.category,
          file: report.file
        }));
        setReports(formattedReports);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchData();
  }, []);

  const highlights = heroData
    ? [
        {
          metric: heroData.icon_text,
          label: 'Institutional Reports',
          description: 'Published annually for transparency and progress',
          icon: <TrendingUp className="w-10 h-10 text-blue-600" />
        },
        {
          metric: heroData.accreditation_count.toString(),
          label: 'National Accreditations',
          description: 'Recognized by top accreditation bodies',
          icon: <FileText className="w-10 h-10 text-green-600" />
        },
        {
          metric: heroData.acheivements_counts + '+',
          label: 'Student Achievements',
          description: 'Awards and recognitions in various fields',
          icon: <Users className="w-10 h-10 text-purple-600" />
        }
      ]
    : [];

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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {heroData ? heroData.title : 'Institutional Reports'}
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in">
            {heroData
              ? heroData.description
              : 'Explore our institutional reports, accreditations, financial statements, and student achievements.'}
          </p>
        </div>
      </section>

      {/* Institutional Reports Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {heroData ? heroData.sub_title : 'Institutional Reports at a Glance'}
            </h2>
            <p className="text-xl text-gray-600">
              {heroData
                ? heroData.sub_description
                : 'Key statistics about our institutional progress'}
            </p>
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
                  <a
                    href={`${VITE_HOST}/${report.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
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
