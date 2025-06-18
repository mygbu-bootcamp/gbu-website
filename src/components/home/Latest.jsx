import React from 'react';

export default function LatestUpdates() {
  const updates = [
    {
      title: "डिजिटल अरेस्ट स्कैम: एक साइबर अपराध की चेतावनी",
      category: "Cyber Security Alert",
      date: "June 15, 2025",
      isHindi: true
    },
    {
      title: "Cyber Volunteer Ambassador Program - Cyber Sanskar",
      category: "Volunteer Program",
      date: "June 12, 2025",
      isHindi: false
    },
    {
      title: "Cyber Crime Awareness Online Training Mega Campaign",
      category: "Training Program",
      date: "June 10, 2025",
      isHindi: false
    },
    {
      title: "Summer Volunteering Program: Make a Difference",
      category: "Community Service",
      date: "June 8, 2025",
      isHindi: false
    },
    {
      title: "GBU Launches New AI Research Center",
      category: "Latest News",
      date: "June 1, 2025",
      isHindi: false
    },
    {
      title: "International Collaboration with Oxford University",
      category: "Partnership",
      date: "May 25, 2025",
      isHindi: false
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Cyber Security Alert": "bg-red-100 text-red-700 border-red-200",
      "Volunteer Program": "bg-blue-100 text-blue-700 border-blue-200",
      "Training Program": "bg-green-100 text-green-700 border-green-200",
      "Community Service": "bg-purple-100 text-purple-700 border-purple-200",
      "Latest News": "bg-orange-100 text-orange-700 border-orange-200",
      "Partnership": "bg-indigo-100 text-indigo-700 border-indigo-200"
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 bg-gray-50 min-h-screen">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Latest Updates & Announcements
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Quick Links - Moved Here */}
      <div className="max-w-4xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {['All Notices', 'Academic Events', 'Press Releases'].map((link, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors duration-300">
            <button className="w-full text-left text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span>{link}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Updates Grid */}
      <div className="max-w-4xl mx-auto space-y-4">
        {updates.map((update, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden"
          >
            <div className="border-l-4 border-blue-600 p-6 hover:border-l-blue-700 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(update.category)}`}>
                      {update.category}
                    </span>
                  </div>

                  <h3 className={`font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 leading-relaxed ${
                    update.isHindi ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                  }`}>
                    {update.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {update.date}
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                  <button 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => alert(`Opening: ${update.title}`)}
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Section */}
      <div className="text-center mt-10">
        <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Load More Updates
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
