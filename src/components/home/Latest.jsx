import React, { useState, useEffect } from 'react';

export default function LatestUpdates() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const notices = [
    {
      title: "डिजिटल अरेस्ट स्कैम: एक साइबर अपराध की चेतावनी",
      date: "15 Dec 2024",
      type: "Important",
      isHindi: true,
      priority: "high"
    },
    {
      title: "Cyber Volunteer Ambassador Program - Cyber Sanskar",
      date: "12 Dec 2024",
      type: "Notice",
      isHindi: false,
      priority: "medium"
    },
    {
      title: "Summer Volunteering Program: Make a Difference",
      date: "8 Dec 2024",
      type: "Info",
      isHindi: false,
      priority: "low"
    }
  ];

  const events = [
    {
      title: "Cyber Crime Awareness Online Training Mega Campaign",
      date: "20 Dec 2024",
      type: "Training",
      isHindi: false,
      priority: "high"
    },
    {
      title: "GBU Launches New AI Research Center",
      date: "18 Dec 2024",
      type: "Cultural",
      isHindi: false,
      priority: "medium"
    },
    {
      title: "International Collaboration with Oxford University",
      date: "16 Dec 2024",
      type: "Meeting",
      isHindi: false,
      priority: "high"
    }
  ];

  const announcements = [
    {
      title: "New Academic Session Registration Open",
      date: "22 Dec 2024",
      type: "Important",
      isHindi: false,
      priority: "high"
    },
    {
      title: "Library Timing Changes for Winter Break",
      date: "19 Dec 2024",
      type: "Info",
      isHindi: false,
      priority: "medium"
    },
    {
      title: "Student Council Elections 2025",
      date: "17 Dec 2024",
      type: "Notice",
      isHindi: false,
      priority: "high"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      "Important": "bg-red-100 text-red-600 border-red-200",
      "Notice": "bg-blue-100 text-blue-600 border-blue-200",
      "Info": "bg-green-100 text-green-600 border-green-200",
      "Training": "bg-orange-100 text-orange-600 border-orange-200",
      "Cultural": "bg-purple-100 text-purple-600 border-purple-200",
      "Meeting": "bg-gray-100 text-gray-600 border-gray-200"
    };
    return colors[type] || "bg-gray-100 text-gray-600 border-gray-200";
  };

  const getPriorityIndicator = (priority) => {
    if (priority === 'high') return 'bg-red-500 animate-pulse';
    if (priority === 'medium') return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const NoticeCard = ({ item, index }) => (
    <div 
      className={`group relative flex items-start gap-3 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-blue-100 ${
        isVisible ? 'animate-slide-in' : 'opacity-0 translate-y-4'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`w-1.5 h-16 ${getPriorityIndicator(item.priority)} rounded-full flex-shrink-0 mt-1 shadow-sm`}></div>
      <div className="flex-1 min-w-0">
        <h4 className={`font-semibold text-gray-800 leading-snug mb-2 group-hover:text-blue-700 transition-colors duration-200 ${
          item.isHindi ? 'text-sm' : 'text-sm'
        }`}>
          {item.title}
        </h4>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {item.date}
        </p>
      </div>
      <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex-shrink-0 border transition-all duration-200 group-hover:scale-105 ${getTypeColor(item.type)}`}>
        {item.type}
      </span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300"></div>
    </div>
  );

  const AnnouncementCard = ({ item, index }) => (
    <div 
      className={`group relative flex items-start gap-3 p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-purple-100 ${
        isVisible ? 'animate-slide-in' : 'opacity-0 translate-y-4'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`w-1.5 h-16 ${getPriorityIndicator(item.priority)} rounded-full flex-shrink-0 mt-1 shadow-sm`}></div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 text-sm leading-snug mb-2 group-hover:text-purple-700 transition-colors duration-200">
          {item.title}
        </h4>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {item.date}
        </p>
      </div>
      <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex-shrink-0 border transition-all duration-200 group-hover:scale-105 ${getTypeColor(item.type)}`}>
        {item.type}
      </span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-300"></div>
    </div>
  );

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 min-h-screen">
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
      `}</style>
      
      {/* Section Header */}
      <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Latest Updates & Announcements
        </h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Stay informed with the latest news, events, and important announcements from our institution
        </p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-lg"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Notices */}
          <div className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`} style={{ animationDelay: '400ms' }}>
            <div className="p-6 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Latest Notices</h2>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-2">
                {notices.map((notice, index) => (
                  <NoticeCard key={index} item={notice} index={index} />
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-100/50 bg-gray-50/50">
              <button className="group flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-all duration-200 hover:gap-3">
                View All Notices
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Latest Events */}
          <div className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`} style={{ animationDelay: '600ms' }}>
            <div className="p-6 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Latest Events</h2>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-2">
                {events.map((event, index) => (
                  <AnnouncementCard key={index} item={event} index={index} />
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-100/50 bg-gray-50/50">
              <button className="group flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-700 transition-all duration-200 hover:gap-3">
                View All Events
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Latest Announcements */}
          <div className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`} style={{ animationDelay: '800ms' }}>
            <div className="p-6 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Latest Announcements</h2>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-2">
                {announcements.map((announcement, index) => (
                  <AnnouncementCard key={index} item={announcement} index={index} />
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-100/50 bg-gray-50/50">
              <button className="group flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 transition-all duration-200 hover:gap-3">
                View All Announcements
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}