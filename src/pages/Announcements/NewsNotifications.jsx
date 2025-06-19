import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Bell,
  AlertCircle,
  Filter,
  Search,
  ClipboardList,
  Info,
  Star,
  BookOpen,
  Users,
  FileText,
} from 'lucide-react';

const newsItems = [
  {
    title: "Academic Calendar Released",
    description: "The official academic calendar for 2024-25 is now available. Check important dates for admissions, holidays, and exams.",
    type: "Academic",
    date: "2024-06-10",
    priority: "high",
    time: "Today",
    author: "Registrar Office",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Convocation 2024 Announced",
    description: "The annual convocation ceremony will be held on July 15th. Graduating students must register by June 30th.",
    type: "Event",
    date: "2024-06-08",
    priority: "medium",
    time: "2 days ago",
    author: "Events Committee",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Research Grant Applications Open",
    description: "Faculty and students can now apply for the 2024 research grants. Deadline: July 1st.",
    type: "Research",
    date: "2024-06-05",
    priority: "medium",
    time: "5 days ago",
    author: "Research Cell",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Summer Internship Fair",
    description: "Top companies are participating in the internship fair on June 20th. Register to secure your slot.",
    type: "Career",
    date: "2024-06-03",
    priority: "low",
    time: "1 week ago",
    author: "Placement Cell",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Library Renovation Notice",
    description: "The central library will be closed for renovation from June 15th to July 5th. Use digital resources during this period.",
    type: "Service",
    date: "2024-06-01",
    priority: "low",
    time: "2 weeks ago",
    author: "Library",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "New Hostel Rules Implemented",
    description: "Revised hostel rules regarding visitors and quiet hours are now in effect. Please review the updated guidelines.",
    type: "Policy",
    date: "2024-05-28",
    priority: "medium",
    time: "2 weeks ago",
    author: "Hostel Administration",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Alumni Meet 2024",
    description: "Reconnect with your batchmates at the Alumni Meet on August 10th. Registrations are open.",
    type: "Event",
    date: "2024-05-25",
    priority: "low",
    time: "3 weeks ago",
    author: "Alumni Office",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Exam Results Published",
    description: "Semester exam results are now live on the student portal. Contact your department for queries.",
    type: "Academic",
    date: "2024-05-20",
    priority: "high",
    time: "3 weeks ago",
    author: "Examination Cell",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getMonthFromDate = (date) => {
  const d = new Date(date);
  return months[d.getMonth()];
};

const getYearFromDate = (date) => {
  return new Date(date).getFullYear().toString();
};

const uniqueYears = [...new Set(newsItems.map(item => getYearFromDate(item.date)))];
const uniqueTypes = [...new Set(newsItems.map(item => item.type))];

const typeIcons = {
  Academic: <BookOpen size={18} className="text-blue-500" />,
  Event: <Star size={18} className="text-yellow-500" />,
  Research: <FileText size={18} className="text-green-500" />,
  Career: <Users size={18} className="text-purple-500" />,
  Service: <Info size={18} className="text-cyan-500" />,
  Policy: <ClipboardList size={18} className="text-pink-500" />,
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high': return 'bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 shadow-lg shadow-red-100';
    case 'medium': return 'bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 shadow-lg shadow-blue-100';
    default: return 'bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 shadow-lg shadow-green-100';
  }
};

const NewsNotifications = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = newsItems.filter(item => {
    const itemYear = getYearFromDate(item.date);
    const itemMonth = getMonthFromDate(item.date);

    return (
      (selectedYear === 'All' || itemYear === selectedYear) &&
      (selectedMonth === 'All' || itemMonth === selectedMonth) &&
      (selectedType === 'All' || item.type === selectedType) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="sticky h-[12rem] top-0 z-30 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 backdrop-blur border-b border-purple-200/40 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-2 px-6 py-7 text-center">
          <h1 className="text-3xl pt-4 md:text-4xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm tracking-tight animate-fade-in">
            University News & Updates
          </h1>
          <p className="text-base md:text-lg text-gray-600 font-medium animate-fade-in-slow">
            Stay updated with the latest announcements, events, and notices.
          </p>
        </div>
      </header>
      <main className="mx-auto px-4 md:px-8 py-10">
        {/* Enhanced Filters + Search */}
        <section className="mb-12 rounded-3xl bg-white/95 backdrop-blur-lg p-6 md:p-8 shadow-xl border border-purple-100/60 transition-all duration-300">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 transition-colors duration-200 group-hover:text-purple-600" size={22} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search announcements, events, or authors..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 text-base shadow focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200 hover:border-purple-300 focus:border-purple-400"
              />
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 md:gap-6 justify-end w-full md:w-auto">
              {/* Year */}
              <div className="flex items-center gap-2 group">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 shadow transition-transform duration-200 group-hover:scale-110">
                  <Calendar size={18} className="text-purple-500" />
                </span>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-2 text-sm rounded-lg border border-purple-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200 hover:border-purple-300 cursor-pointer"
                >
                  <option value="All">All Years</option>
                  {uniqueYears.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
              </div>
              {/* Month */}
              <div className="flex items-center gap-2 group">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 shadow transition-transform duration-200 group-hover:scale-110">
                  <Filter size={18} className="text-pink-500" />
                </span>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-3 py-2 text-sm rounded-lg border border-purple-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-200 hover:border-pink-300 cursor-pointer"
                >
                  <option value="All">All Months</option>
                  {months.map((month, idx) => <option key={idx} value={month}>{month}</option>)}
                </select>
              </div>
              {/* Type */}
              <div className="flex items-center gap-2 group">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow transition-transform duration-200 group-hover:scale-110">
                  <ClipboardList size={18} className="text-blue-500" />
                </span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 text-sm rounded-lg border border-purple-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 hover:border-blue-300 cursor-pointer"
                >
                  <option value="All">All Types</option>
                  {uniqueTypes.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full z-0"></div>
            <div className="space-y-10 relative z-10">
              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg italic">No announcements match your filters.</p>
                </div>
              )}
              {filteredNews.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start gap-6 group transition-all duration-300"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-20 flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                    <div className={`absolute inset-0 rounded-full ${getPriorityColor(item.priority)} flex items-center justify-center scale-100 group-hover:scale-110 transition-transform duration-300`}>
                      {item.priority === 'high' ? (
                        <AlertCircle className="text-white drop-shadow-lg" size={32} />
                      ) : (
                        <Bell className="text-white drop-shadow-lg" size={28} />
                      )}
                    </div>
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-white/95 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group-hover:border-purple-200 relative z-10 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-48 w-full h-36 md:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-5 md:p-7">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="flex items-center gap-1 text-xs font-semibold text-purple-700 bg-purple-100/70 px-3 py-1 rounded-full">
                            {typeIcons[item.type] || <Info size={16} />} {item.type}
                          </span>
                          {item.priority === 'high' && (
                            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full animate-pulse">
                              Urgent
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={15} />
                            <span>{getMonthFromDate(item.date)} {new Date(item.date).getDate()}, {getYearFromDate(item.date)}</span>
                          </div>
                          <span className="text-xs text-gray-400">{item.time}</span>
                          <span className="flex items-center gap-1">
                            <Users size={14} className="text-gray-400" />
                            {item.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsNotifications;
