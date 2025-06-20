import React, { useState } from "react";
import {
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
    image:
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    views: "2.5K",
    archived: false,
  },
  {
    title: "Breakthrough in Renewable Energy",
    publication: "Science Daily",
    description:
      "Faculty's solar technology increases efficiency by 40% using advanced materials.",
    date: "Jan 5, 2024",
    image:
      "https://images.unsplash.com/photo-1653728842107-f7d205e00ee0?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    views: "4.1K",
    archived: false,
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
    archived: false,
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
    archived: false,
  },
  {
    title: "International Conference Hosted",
    publication: "Global News",
    description:
      "The university hosted an international conference on AI and Robotics with 500+ delegates.",
    date: "Nov 12, 2023",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?w=500",
    featured: false,
    views: "2.1K",
    archived: false,
  },
  {
    title: "Student Wins Coding Olympiad",
    publication: "Tech Chronicle",
    description:
      "Computer science student wins gold at the National Coding Olympiad 2023.",
    date: "Oct 30, 2023",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500",
    featured: false,
    views: "1.5K",
    archived: false,
  },
  {
    title: "Campus Hosts Art Festival",
    publication: "Culture Beat",
    description:
      "Annual art festival attracts artists and students from across the country.",
    date: "Sep 18, 2023",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500",
    featured: false,
    views: "1.1K",
    archived: false,
  },
  {
    title: "Faculty Publishes in Nature",
    publication: "Nature",
    description:
      "Research on quantum computing published in the prestigious Nature journal.",
    date: "Aug 2, 2023",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=500",
    featured: false,
    views: "2.7K",
    archived: false,
  },
  {
    title: "Sports Team Qualifies for Nationals",
    publication: "Sports Daily",
    description:
      "University football team qualifies for the national championship.",
    date: "Jul 25, 2023",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
    featured: false,
    views: "1.9K",
    archived: false,
  },
  {
    title: "Alumni Startup Acquired",
    publication: "Business Insider",
    description:
      "Alumni-founded fintech startup acquired by a leading multinational.",
    date: "Jun 10, 2023",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500",
    featured: false,
    views: "3.8K",
    archived: false,
  },
  // Mock archived data
  {
    title: "Mock Archived News 1",
    publication: "Mock Times",
    description: "This is a mock archived media item.",
    date: "Feb 1, 2023",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
    featured: false,
    views: "500",
    archived: true,
  },
  {
    title: "Old Research Highlighted",
    publication: "Old Science",
    description: "Research from 2022 gets international recognition.",
    date: "Nov 15, 2022",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500",
    featured: false,
    views: "1.2K",
    archived: true,
  },
  {
    title: "Alumni Meet 2021",
    publication: "Alumni Journal",
    description: "Annual alumni meet covered by local press.",
    date: "Dec 10, 2021",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500",
    featured: false,
    views: "900",
    archived: true,
  },
  {
    title: "Historic Sports Win",
    publication: "Sports Weekly",
    description: "University team wins inter-college championship.",
    date: "Oct 5, 2020",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=500",
    featured: false,
    views: "2K",
    archived: true,
  },
  {
    title: "Archived Science Symposium",
    publication: "Science Archive",
    description: "Symposium on nanotechnology held in 2020.",
    date: "Sep 12, 2020",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?w=500",
    featured: false,
    views: "800",
    archived: true,
  },
  {
    title: "Historic Alumni Award",
    publication: "Legacy News",
    description: "Alumnus receives lifetime achievement award.",
    date: "Aug 8, 2021",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500",
    featured: false,
    views: "1.1K",
    archived: true,
  },
];

const PAGE_SIZE = 6;

const MediaCoverage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [showArchive, setShowArchive] = useState(false);
  const [page, setPage] = useState(1);

  // Filter logic
  const filtered = mediaData.filter((item) => {
    if (item.archived !== showArchive) return false;
    const [month, , year] = item.date.split(" ");
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = yearFilter ? year === yearFilter : true;
    const matchesMonth = monthFilter ? month === monthFilter : true;
    return matchesSearch && matchesYear && matchesMonth;
  });

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginatedData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset page on filter change
  React.useEffect(() => {
    setPage(1);
  }, [searchTerm, yearFilter, monthFilter, showArchive]);

  return (
    <div className="bg-gradient-to-br from-[#fdfbfb] via-[#ebedff] to-[#ffe8e8] pb-4 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 bg-gradient-to-r from-pink-900 via-purple-800 to-indigo-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3")',
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 sm:mb-4 tracking-tight drop-shadow-lg">
              Media Coverage
            </h1>
            <p className="text-lg sm:text-xl opacity-90 font-medium">
              News features and recognition of our institution
            </p>
          </div>
        </div>
      </section>

      {/* Media Statistics */}
      <section className="pb-10 sm:pb-16 bg-gradient-to-br from-purple-50 to-white w-full">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-12 border border-white/20 border-solid">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-1 sm:mb-2">
                    150+
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    News Articles
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Published this year
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-1 sm:mb-2">
                    25+
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    TV Interviews
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Leadership coverage
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-pink-600 mb-1 sm:mb-2">
                    50+
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Events Covered
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Academic & cultural
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-1 sm:mb-2">
                    5M+
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Media Reach
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Audience reached
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {!showArchive && (
        <section className="max-w-7xl mx-auto mb-10 sm:mb-12 px-2 pt-6 sm:px-0">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 pl-1">
            🌟 Featured Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {mediaData
              .filter((item) => item.featured && !item.archived)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-xl border border-white/30 border-solid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 sm:h-56 object-cover"
                  />
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-xs sm:text-sm text-pink-600 font-semibold">
                        {item.publication}
                      </span>
                      <Award size={18} className="text-yellow-500" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500 mt-auto">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {item.views} views
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* All Coverage with Filters */}
      <section className="max-w-7xl mx-auto py-6 px-2 sm:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
            {showArchive ? (
              <>
                <Archive size={20} className="text-gray-600" />
                Archived Coverage
              </>
            ) : (
              <>
                <Newspaper size={20} className="text-gray-600" />
                All Coverage
              </>
            )}
          </h2>
          <button
            onClick={() => setShowArchive((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-400 to-pink-400 text-white font-medium hover:from-indigo-500 hover:to-pink-500 transition-all text-sm"
          >
            {showArchive ? (
              <>
                <ArchiveRestore size={16} />
                Back to All
              </>
            ) : (
              <>
                <Archive size={16} />
                View Archive
              </>
            )}
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <input
              type="text"
              placeholder="🔍 Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 w-56 sm:w-64 rounded-lg border border-gray-300 border-solid shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm placeholder-gray-400"
            />
            <select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 border-solid bg-white shadow-sm text-sm focus:ring-2 focus:ring-orange-300"
            >
              <option value="">📅 Month</option>
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 border-solid bg-white shadow-sm text-sm focus:ring-2 focus:ring-green-300"
            >
              <option value="">📆 Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-md border border-white/20 border-solid rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <p className="text-xs sm:text-sm text-pink-600 mb-1">
                    {item.publication}
                  </p>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-pink-600 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 mb-2 sm:mb-3 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 mt-auto">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {item.views}
                    </span>
                  </div>
                  <button className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-pink-400 to-orange-300 text-white font-medium hover:from-pink-500 hover:to-orange-400 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    Read More <ExternalLink size={14} />
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 transition ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded-lg border border-gray-300 font-medium ${
                  page === i + 1
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 transition ${
                page === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default MediaCoverage;
