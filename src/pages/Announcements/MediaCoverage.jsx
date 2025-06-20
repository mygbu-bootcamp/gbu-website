
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Eye,
  Award,
  Newspaper,
  ArchiveRestore,
  Archive,
} from "lucide-react";

const mediaData = [
  {
    title: "Institution Wins National Excellence Award",
    publication: "Education Today Magazine",
    description:
      "Recognized for academic innovation and student-centric development programs.",
    date: "Jan 10, 2024",
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    views: "2.5K",
  },
  {
    title: "Breakthrough in Renewable Energy",
    publication: "Science Daily",
    description:
      "Faculty's solar technology increases efficiency by 40% using advanced materials.",
    date: "Jan 5, 2024",
    image: "https://images.unsplash.com/photo-1653728842107-f7d205e00ee0?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    views: "4.1K",
  },
  {
    title: "Startup by Students Featured in Tech Weekly",
    publication: "Tech Weekly",
    description:
      "Alumni-founded ed-tech firm secures $2M Series A funding for global expansion.",
    date: "Dec 28, 2023",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500",
    featured: false,
    views: "1.8K",
  },
  {
    title: "Green Campus Initiative",
    publication: "Environmental Journal",
    description:
      "Carbon-neutral initiative cuts emissions by 60% through student-led programs.",
    date: "Dec 20, 2023",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
    featured: false,
    views: "3.2K",
  },
  {
        title: "Mock Archived News",
        publication: "Mock Times",
        description: "This is a mock archived media item.",
        date: "Feb 1, 2023",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
        featured: false,
        views: "500",
        },
];
const MediaCoverage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [archivedItems, setArchivedItems] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const handleArchiveToggle = (title) => {
    setArchivedItems((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const filterMediaData = mediaData.filter((item) => {
    const [month, , year] = item.date.split(" ");
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = yearFilter ? year === yearFilter : true;
    const matchesMonth = monthFilter ? month === monthFilter : true;
    return matchesSearch && matchesYear && matchesMonth;
  });

  const displayData = filterMediaData.filter((item) =>
    showArchived ? archivedItems.includes(item.title) : !archivedItems.includes(item.title)
  );

  return (
    <div className=" bg-gradient-to-br from-[#fdfbfb] via-[#ebedff] to-[#ffe8e8] pb-4">    
  {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-pink-900 via-purple-800 to-indigo-800">
      <div className="absolute inset-0 bg-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3")'
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Media Coverage</h1>
        <p className="text-xl opacity-90"> News features and recognition of our institution</p>
        </div>
      </div>
      </section>

     
      {/* Media Statistics */}
      <section className="pb-16 bg-gradient-to-br from-purple-50 to-white w-full">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Media Reach</h2> */}
        
        <div className=" mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
            <h3 className="text-lg font-semibold text-gray-800">News Articles</h3>
            <p className="text-gray-600">Published this year</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">25+</div>
            <h3 className="text-lg font-semibold text-gray-800">TV Interviews</h3>
            <p className="text-gray-600">Leadership coverage</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
            <h3 className="text-lg font-semibold text-gray-800">Events Covered</h3>
            <p className="text-gray-600">Academic & cultural</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">5M+</div>
            <h3 className="text-lg font-semibold text-gray-800">Media Reach</h3>
            <p className="text-gray-600">Audience reached</p>
          </div>
          </div>
        </div>
        </div>
      </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto mb-12">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        🌟 Featured Highlights
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {mediaData
        .filter((item) => item.featured)
        .map((item, index) => (
          <div
          key={index}
          className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-pink-600 font-semibold">
              {item.publication}
            </span>
            <Award size={18} className="text-yellow-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
            {item.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
            {item.description}
            </p>
            <div className="flex justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {item.date}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={12} />
              {item.views} views
            </span>
            </div>
            <button
            onClick={() => handleArchiveToggle(item.title)}
            className="mt-4 w-full py-2 rounded-lg border text-sm font-medium hover:bg-gray-100 flex items-center justify-center gap-2"
            >
            {archivedItems.includes(item.title) ? (
              <>
              <ArchiveRestore size={14} />
              Unarchive
              </>
            ) : (
              <>
              <Archive size={14} />
              Archive
              </>
            )}
            </button>
          </div>
          </div>
        ))}
      </div>
      </section>

      {/* All Coverage with Filters */}

      <section className="max-w-7xl mx-auto">
      {/* Tabs */}
      {/* Archive Button on Top */}
      <div className="max-w-7xl mx-auto pt-6 flex justify-end">
      <button
        onClick={() => setShowArchived(!showArchived)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-medium transition-all border border-purple-200"
      >
        <Archive size={18} />
        {showArchived ? "View All Media" : "View Archived Media"}
      </button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
        {showArchived ? "📦 Archived Media" : "📰 All Coverage"}
        </h2>
        <button
        onClick={() => setShowArchived(!showArchived)}
        className="px-4 py-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 text-sm font-medium transition-all"
        >
        {showArchived ? "🔙 View All" : "📦 View Archived"}
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="🔍 Search by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-64 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm placeholder-gray-400"
        />
        <select
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm text-sm focus:ring-2 focus:ring-orange-300"
        >
          <option value="">📅 Month</option>
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
          <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm text-sm focus:ring-2 focus:ring-green-300"
        >
          <option value="">📆 Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayData.length > 0 ? (
        displayData.map((item, index) => (
          <div
          key={index}
          className="group bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all"
          >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="p-5">
            <p className="text-sm text-pink-600 mb-1">{item.publication}</p>
            <h4 className="text-md font-semibold text-gray-800 group-hover:text-pink-600">
            {item.title}
            </h4>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {item.description}
            </p>
            <div className="flex justify-between text-xs text-gray-500 mt-4">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {item.date}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={12} />
              {item.views}
            </span>
            </div>
            <button className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-pink-400 to-orange-300 text-white font-medium hover:from-pink-500 hover:to-orange-400 transition-all flex items-center justify-center gap-2">
            Read More <ExternalLink size={14} />
            </button>
            <button
            onClick={() => handleArchiveToggle(item.title)}
            className="mt-2 w-full py-1.5 rounded-lg border text-sm font-medium hover:bg-gray-100 flex items-center justify-center gap-2"
            >
            {archivedItems.includes(item.title) ? (
              <>
              <ArchiveRestore size={14} />
              Unarchive
              </>
            ) : (
              <>
              <Archive size={14} />
              Archive
              </>
            )}
            </button>
          </div>
          </div>
        ))
        ) : (
        <p className="text-center text-gray-500 col-span-full">
          No media found matching your criteria.
        </p>
        )}
      </div>
      </section>
    </div>
    );
};

export default MediaCoverage;
