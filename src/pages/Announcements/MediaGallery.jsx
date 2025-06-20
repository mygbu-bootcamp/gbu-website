import React, { useState } from 'react';
import { Play, Calendar, ExternalLink, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [hoveredCard, setHoveredCard] = useState(null);

  const mediaData = {
    news: [
      {
        title: "GBU Ranks Among Top Universities in India",
        source: "Times of India",
        date: "2024-01-15",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3",
        excerpt: "Gautam Buddha University achieves significant ranking improvement in the latest national university rankings..."
      },
      {
        title: "Revolutionary Research in Renewable Energy",
        source: "The Hindu",
        date: "2024-01-10",
        image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3",
        excerpt: "University's engineering department makes breakthrough in solar energy efficiency..."
      },
      {
        title: "International Collaboration Agreement Signed",
        source: "Economic Times",
        date: "2024-01-05",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3",
        excerpt: "Partnership with leading international universities for student exchange programs..."
      },
      {
        title: "Digital Innovation Hub Launched",
        source: "Indian Express",
        date: "2023-12-20",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3",
        excerpt: "State-of-the-art facility to foster startup ecosystem and technological innovation..."
      },
      {
        title: "GBU Hosts National Science Fair",
        source: "Hindustan Times",
        date: "2023-12-10",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3",
        excerpt: "Students from across the country participate in the annual science fair at GBU..."
      },
      {
        title: "Sports Meet 2023: GBU Wins Gold",
        source: "Sports Today",
        date: "2023-11-25",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3",
        excerpt: "GBU's athletics team secures gold in inter-university sports meet..."
      },
      {
        title: "GBU Launches New MBA Program",
        source: "Business Standard",
        date: "2023-11-10",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
        excerpt: "A new MBA program with international faculty and industry tie-ups..."
      },
      {
        title: "GBU Students Win Hackathon",
        source: "TechCrunch",
        date: "2023-10-30",
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?ixlib=rb-4.0.3",
        excerpt: "Team GBU wins first prize at the national level hackathon event..."
      },
      {
        title: "GBU Organizes Art Exhibition",
        source: "Art Daily",
        date: "2023-10-15",
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3",
        excerpt: "A showcase of student and faculty artworks at the annual exhibition..."
      },
      {
        title: "GBU Receives Green Campus Award",
        source: "Eco News",
        date: "2023-09-25",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3",
        excerpt: "Recognized for sustainable practices and green initiatives..."
      },
      {
        title: "GBU Hosts International Yoga Day",
        source: "Yoga Journal",
        date: "2023-06-21",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
        excerpt: "Hundreds participate in the International Yoga Day celebrations at GBU..."
      },
      {
        title: "GBU's Robotics Team Shines",
        source: "Robotics Weekly",
        date: "2023-05-18",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3",
        excerpt: "Robotics team wins accolades at the national robotics championship..."
      }
    ],
    events: [
      {
        title: "Annual Convocation 2024",
        type: "Graduation Ceremony",
        date: "2024-02-15",
        image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3",
        excerpt: "Grand celebration of academic achievements with distinguished chief guest..."
      },
      {
        title: "International Conference on AI",
        type: "Academic Conference",
        date: "2024-02-10",
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3",
        excerpt: "Three-day conference bringing together AI researchers from around the world..."
      },
      {
        title: "Cultural Festival - Anubhuti 2024",
        type: "Cultural Event",
        date: "2024-02-01",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3",
        excerpt: "Vibrant celebration of arts, culture, and student talents..."
      },
      {
        title: "Startup Pitch Day",
        type: "Entrepreneurship Event",
        date: "2024-01-20",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3",
        excerpt: "Student startups pitch their ideas to investors and mentors..."
      },
      {
        title: "GBU Marathon 2024",
        type: "Sports Event",
        date: "2024-01-10",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3",
        excerpt: "Annual marathon event with participants from all over the city..."
      },
      {
        title: "Literary Fest",
        type: "Literary Event",
        date: "2023-12-15",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
        excerpt: "Celebrating literature, poetry, and creative writing..."
      },
      {
        title: "Tech Symposium",
        type: "Technology Event",
        date: "2023-11-25",
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?ixlib=rb-4.0.3",
        excerpt: "Latest trends and innovations in technology discussed by experts..."
      },
      {
        title: "Alumni Meet 2023",
        type: "Alumni Event",
        date: "2023-11-10",
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3",
        excerpt: "Reunion of alumni from various batches and departments..."
      }
    ],
    tv: [
      {
        title: "Vice-Chancellor's Interview on Education Reforms",
        channel: "DD National",
        date: "2024-01-20",
        duration: "15:30",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3",
        excerpt: "Discussing the future of higher education and university initiatives..."
      },
      {
        title: "Campus Tour - Modern Facilities Showcase",
        channel: "News18",
        date: "2024-01-18",
        duration: "12:45",
        image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3",
        excerpt: "Documentary highlighting university's infrastructure and academic programs..."
      },
      {
        title: "Student Success Stories",
        channel: "NDTV",
        date: "2024-01-12",
        duration: "20:15",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3",
        excerpt: "Feature on alumni achievements and career success stories..."
      },
      {
        title: "GBU Research on Renewable Energy",
        channel: "CNBC",
        date: "2023-12-28",
        duration: "18:00",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3",
        excerpt: "Showcasing GBU's latest research in renewable energy..."
      },
      {
        title: "GBU Sports Achievements",
        channel: "Star Sports",
        date: "2023-12-15",
        duration: "10:30",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3",
        excerpt: "Coverage of GBU's performance in inter-university sports..."
      },
      {
        title: "GBU Cultural Fest Highlights",
        channel: "Zee TV",
        date: "2023-11-30",
        duration: "14:20",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
        excerpt: "Highlights from the annual cultural festival at GBU..."
      },
      {
        title: "GBU Alumni on Career Success",
        channel: "ET Now",
        date: "2023-11-10",
        duration: "16:45",
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?ixlib=rb-4.0.3",
        excerpt: "Alumni share their career journeys and experiences..."
      }
    ]
  };

  const tabs = [
    { key: 'news', label: 'News', count: mediaData.news.length },
    { key: 'events', label: 'Events', count: mediaData.events.length },
    { key: 'tv', label: 'TV Coverage', count: mediaData.tv.length }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Archive data (example, extended)
  const archiveData = [
    {
      title: "GBU Alumni Meet 2022",
      date: "2022-11-10",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3",
      excerpt: "A memorable gathering of alumni from various batches...",
      source: "Alumni Office"
    },
    {
      title: "Research Symposium 2021",
      date: "2021-09-15",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3",
      excerpt: "Showcasing groundbreaking research by faculty and students...",
      source: "Research Cell"
    },
    {
      title: "Cultural Fest 2020",
      date: "2020-02-20",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3",
      excerpt: "A vibrant celebration of culture and talent...",
      source: "Cultural Committee"
    },
    {
      title: "Science Expo 2019",
      date: "2019-11-05",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3",
      excerpt: "Annual science expo with innovative student projects...",
      source: "Science Club"
    },
    {
      title: "GBU Sports Day 2018",
      date: "2018-12-10",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3",
      excerpt: "A day of sportsmanship and athletic excellence...",
      source: "Sports Committee"
    },
    {
      title: "Literary Meet 2017",
      date: "2017-10-15",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
      excerpt: "Celebrating literature and creative writing...",
      source: "Literary Club"
    },
    {
      title: "Tech Fest 2016",
      date: "2016-09-20",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?ixlib=rb-4.0.3",
      excerpt: "Technology and innovation at its best...",
      source: "Tech Society"
    },
    {
      title: "GBU Foundation Day 2015",
      date: "2015-08-01",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3",
      excerpt: "Marking the foundation of GBU with celebrations...",
      source: "Administration"
    }
  ];

  // Add Archive tab
  const allTabs = [
    ...tabs,
    { key: 'archive', label: 'Archive', count: archiveData.length }
  ];

  // Determine which data to show
  const currentData = activeTab === 'archive' ? archiveData : mediaData[activeTab];

  // Pagination logic
  const totalPages = Math.ceil(currentData.length / cardsPerPage);
  const paginatedData = currentData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  // Reset to page 1 when tab changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  return (
     <>
      {/* Hero Section */}
      <section className="relative h-[28rem] bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 blur-sm opacity-40"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight">
            Media Gallery
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium drop-shadow-sm">
            University in the Spotlight
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 rounded-2xl shadow-2xl p-6 border border-gray-100 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="flex-1 w-full relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search media coverage..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 placeholder-gray-400 transition"
                />
              </div>
              <div className="w-full md:w-56 relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5 pointer-events-none" />
                <select className="w-full pl-12 pr-4  rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 appearance-none transition">
                  <option>All Time</option>
                  <option>This Month</option>
                  <option>Last 3 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Tab Navigation */}
      <section className="pt-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20 flex flex-wrap gap-2">
              {allTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.key 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-purple-100'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.key ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid with Arrows */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`p-3 rounded-full shadow-md bg-white/80 hover:bg-purple-100 transition border border-white/30 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>
            <div className="text-lg font-semibold text-purple-700">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full shadow-md bg-white/80 hover:bg-purple-100 transition border border-white/30 ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next Page"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedData.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Overlay for TV Coverage */}
                  {activeTab === 'tv' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {activeTab === 'news' && item.source}
                    {activeTab === 'events' && item.type}
                    {activeTab === 'tv' && `${item.channel} • ${item.duration}`}
                    {activeTab === 'archive' && item.source}
                  </div>
                  
                  {/* Enhanced Page Text Area */}
                  <div
                    className="relative group"
                  >
                    <p
                      className="text-gray-600 mb-4 line-clamp-3 px-4 py-3 rounded-xl bg-gradient-to-br from-purple-50 via-white to-blue-50 shadow-inner border border-purple-100 transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-lg group-hover:scale-[1.03] group-hover:border-purple-200 focus-within:ring-2 focus-within:ring-purple-300"
                      style={{
                        fontSize: '1.05rem',
                        letterSpacing: '0.01em',
                        minHeight: '3.5rem',
                        backdropFilter: 'blur(2px)',
                        boxShadow: '0 2px 16px 0 rgba(80, 60, 180, 0.06)'
                      }}
                    >
                      {item.excerpt}
                    </p>
                    {/* Animated underline effect */}
                    <span className="absolute left-6 bottom-2 w-10 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300"></span>
                  </div>
                  
                  {hoveredCard === index && (
                    <div className="animate-fade-in">
                      <button className="flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                        {activeTab === 'tv' ? 'Watch Now' : 'Read More'}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2 items-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    currentPage === i + 1
                      ? 'bg-purple-600 text-white shadow'
                      : 'text-purple-600 hover:bg-purple-100'
                  } transition`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
   </>
  );
};

export default MediaGallery;
