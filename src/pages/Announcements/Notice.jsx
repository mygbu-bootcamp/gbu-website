import React, { useState } from "react";
import {
  Bell,
  CalendarDays,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
} from "lucide-react";

const mockNotices = [
  {
    id: 1,
    title: "Mid-Semester Examination Schedule Released",
    description:
      "The mid-semester examination timetable for all undergraduate and postgraduate courses is now available. Please check the Examination section for details.",
    date: "2024-06-10",
    category: "Examination",
  },
  {
    id: 2,
    title: "Campus Placement Drive by Infosys",
    description:
      "Infosys will be conducting a placement drive for final year students. Register by June 15th to participate.",
    date: "2024-06-09",
    category: "Placement",
  },
  {
    id: 3,
    title: "Annual Sports Meet Announcement",
    description:
      "The university's annual sports meet will be held from July 5th to July 10th. All students are encouraged to participate.",
    date: "2024-06-08",
    category: "Event",
  },
  {
    id: 4,
    title: "Holiday Notice: Eid-ul-Adha",
    description:
      "The university will remain closed on June 17th on account of Eid-ul-Adha.",
    date: "2024-06-07",
    category: "Holiday",
  },
  {
    id: 5,
    title: "Guest Lecture on Artificial Intelligence",
    description:
      "Join us for a guest lecture by Dr. A. Sharma on the future of AI in education. June 20th, Main Auditorium.",
    date: "2024-06-06",
    category: "Event",
  },
  {
    id: 6,
    title: "Result Declaration: Semester 1",
    description:
      "Results for Semester 1 have been published. Students can check their results on the university portal.",
    date: "2024-06-05",
    category: "Examination",
  },
  {
    id: 7,
    title: "TCS Placement Registration Open",
    description:
      "TCS is inviting applications for campus placements. Deadline: June 18th.",
    date: "2024-06-04",
    category: "Placement",
  },
  {
    id: 8,
    title: "Workshop: Resume Building Skills",
    description:
      "A workshop on resume building will be held on June 22nd. Limited seats available.",
    date: "2024-06-03",
    category: "Event",
  },
  {
    id: 9,
    title: "Holiday Notice: University Foundation Day",
    description:
      "University will remain closed on June 25th for Foundation Day celebrations.",
    date: "2024-06-02",
    category: "Holiday",
  },
  {
    id: 10,
    title: "Mock Test for GATE Aspirants",
    description:
      "A mock test for GATE aspirants will be conducted on June 28th. Register online.",
    date: "2024-06-01",
    category: "Examination",
  },
  {
    id: 11,
    title: "Capgemini Placement Drive",
    description:
      "Capgemini will conduct a placement drive for B.Tech and MCA students. Apply by June 19th.",
    date: "2024-05-31",
    category: "Placement",
  },
  {
    id: 12,
    title: "Blood Donation Camp",
    description:
      "A blood donation camp will be organized on June 21st in collaboration with Red Cross.",
    date: "2024-05-30",
    category: "Event",
  },
  {
    id: 13,
    title: "Holiday Notice: Independence Day",
    description:
      "University will remain closed on August 15th for Independence Day.",
    date: "2024-05-29",
    category: "Holiday",
  },
  {
    id: 14,
    title: "End-Semester Exam Admit Cards",
    description:
      "Admit cards for end-semester exams are now available for download.",
    date: "2024-05-28",
    category: "Examination",
  },
  {
    id: 15,
    title: "Wipro Placement Test",
    description:
      "Wipro will conduct an online placement test for eligible students on June 24th.",
    date: "2024-05-27",
    category: "Placement",
  },
  {
    id: 16,
    title: "Photography Competition",
    description:
      "Participate in the university-wide photography competition. Submit entries by July 1st.",
    date: "2024-05-26",
    category: "Event",
  },
  {
    id: 17,
    title: "Holiday Notice: Raksha Bandhan",
    description:
      "University will remain closed on August 19th for Raksha Bandhan.",
    date: "2024-05-25",
    category: "Holiday",
  },
  {
    id: 18,
    title: "Quiz Competition: Science & Tech",
    description:
      "A quiz competition on Science & Technology will be held on June 29th.",
    date: "2024-05-24",
    category: "Event",
  },
  {
    id: 19,
    title: "Supplementary Exam Registration",
    description:
      "Registration for supplementary exams is open till June 27th.",
    date: "2024-05-23",
    category: "Examination",
  },
  {
    id: 20,
    title: "Amazon Placement Interviews",
    description:
      "Amazon will conduct interviews for shortlisted candidates on July 2nd.",
    date: "2024-05-22",
    category: "Placement",
  },
  ...Array.from({ length: 30 }, (_, i) => ({
    id: 21 + i,
    title: `Sample Notice Title ${i + 1}`,
    description: `This is a sample description for notice number ${i + 1}. Please check the details for more information.`,
    date: `2024-05-${21 - i > 9 ? 21 - i : "0" + (21 - i)}`,
    category: ["Examination", "Event", "Holiday", "Placement"][(i + 1) % 4],
  })),
];

const categories = ["All", "Examination", "Event", "Holiday", "Placement"];

const Notice = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5;

  const filtered = mockNotices.filter((notice) => {
    const matchCategory = activeTab === "All" || notice.category === activeTab;
    const matchSearch = notice.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / noticesPerPage);
  const start = (currentPage - 1) * noticesPerPage;
  const paginatedNotices = filtered.slice(start, start + noticesPerPage);

  return (
    <div className="w-full bg-gradient-to-br pb-10 from-blue-200 via-white to-blue-100 sm:px-4 font-[Inter] relative overflow-x-hidden">
      {/* Decorative Sparkles */}
      <Sparkles className="absolute top-8 left-8 text-blue-200 opacity-60 w-16 h-16 pointer-events-none animate-sparkle" />
      <Sparkles className="absolute bottom-10 right-10 text-blue-100 opacity-40 w-20 h-20 pointer-events-none animate-sparkle2" />

      {/* Hero Section */}
      <div className="relative h-[22rem] rounded-2xl overflow-hidden shadow-2xl mb-10  animate-fade-in border border-blue-100">
        {/* <img
          src="https://images.unsplash.com/photo-1741636174602-252cd7bb233c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMG5vdGljZSUyMGJvYXJkfGVufDB8fDB8fHww"
          alt="Notice Board"
          className="absolute w-full h-full object-cover object-center blur-xs opacity-100 transition-transform duration-700 group-hover:scale-110"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-800 z-0" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-gray-800">
          {/* <span className="relative inline-block">
            <Bell className="w-16 h-16 text-blue-700 mb-3 animate-bounce drop-shadow-xl" />
            <span className="absolute -top-6 -right-2 bg-blue-900 text-white text-xs px-2 py-0.5 rounded-full shadow animate-pulse">
              New
            </span>
          </span> */}
          <h1 className="text-6xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg bg-gradient-to-r from-white via-red-500 to-lime-500 bg-clip-text text-transparent animate-gradient">
            Notice Board
          </h1>
          <p className="mt-5 text-white text-3xl font-semibold animate-fade-in-slow">
            Stay informed with the latest announcements, academic alerts, and placement updates.
          </p>
        </div>
      </div>

      {/* Tabs and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-3/5 mx-auto mb-8 gap-4">
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition border duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm
                ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg scale-105 ring-2 ring-blue-200"
                    : "bg-white text-gray-700 border-gray-200 border-[1px] border-solid hover:bg-blue-50 hover:scale-105"
                }`}
              style={{
                boxShadow: activeTab === cat ? "0 4px 24px 0 rgba(59,130,246,0.15)" : undefined,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center w-full sm:w-72 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 border-solid focus-within:ring-2 focus-within:ring-blue-200 transition">
          <Search className="w-5 h-5 text-blue-400 mr-2 animate-search" />
          <input
            type="text"
            placeholder="Search notices..."
            className="w-full outline-none text-sm text-gray-700 bg-transparent"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Notices Grid */}
      <div className="grid w-3/5 text-center mx-auto gap-8">
        {paginatedNotices.map((notice, idx) => (
          <div
            key={notice.id}
            className="relative bg-white/90 backdrop-blur-lg p-7 rounded-2xl border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden animate-fade-in-card"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            {/* Animated border highlight */}
            <span className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-200 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            {/* Glow effect on hover */}
            <span className="absolute inset-0 pointer-events-none group-hover:bg-blue-50/40 transition-all duration-300 rounded-2xl"></span>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-gray-950 transition shadow">
                {notice.category}
              </span>
              <span className="flex items-center gap-1 text-gray-900 text-sm">
                <CalendarDays className="w-4 h-4" />
                {notice.date}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition drop-shadow-sm">
              {notice.title}
            </h3>
            <p className="text-base text-gray-700 mt-2 leading-relaxed group-hover:text-gray-800 transition">
              {notice.description}
            </p>
            <span className="absolute bottom-3 right-6 flex items-center gap-1 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Info className="w-3 h-3" />
              Click for more info
            </span>
            {/* Subtle floating animation */}
            <span className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-30 transition-all duration-300">
              <Sparkles className="w-16 h-16 animate-sparkle2" />
            </span>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 italic animate-fade-in">
            No notices found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12 animate-fade-in">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-5 py-2 rounded-full text-sm bg-white border border-blue-100 hover:bg-blue-50 disabled:opacity-50 transition-all duration-200 shadow"
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </button>
          <span className="text-sm font-medium text-blue-700 bg-blue-100 px-4 py-1 rounded-full shadow">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-5 py-2 rounded-full text-sm bg-white border border-blue-100 hover:bg-blue-50 disabled:opacity-50 transition-all duration-200 shadow"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Animations (Tailwind CSS custom keyframes) */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fade-in-card {
          from { opacity: 0; transform: translateY(40px) scale(0.98);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }
        @keyframes fade-in-slow {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes sparkle {
          0%, 100% { transform: rotate(0deg) scale(1);}
          50% { transform: rotate(8deg) scale(1.08);}
        }
        @keyframes sparkle2 {
          0%, 100% { transform: rotate(0deg) scale(1);}
          50% { transform: rotate(-8deg) scale(1.12);}
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%;}
          100% { background-position: 100% 50%;}
        }
        @keyframes search-pulse {
          0%, 100% { color: #60a5fa;}
          50% { color: #2563eb;}
        }
        .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;}
        .animate-fade-in-card { animation: fade-in-card 0.8s cubic-bezier(.4,0,.2,1) both;}
        .animate-fade-in-slow { animation: fade-in-slow 1.2s cubic-bezier(.4,0,.2,1) both;}
        .animate-sparkle { animation: sparkle 2.5s infinite;}
        .animate-sparkle2 { animation: sparkle2 3.2s infinite;}
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-move 3s linear infinite alternate;
        }
        .animate-search { animation: search-pulse 1.5s infinite;}
      `}</style>
    </div>
  );
};

export default Notice;
