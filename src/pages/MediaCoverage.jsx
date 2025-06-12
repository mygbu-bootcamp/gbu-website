import React, { useState } from 'react';
 
import { Play, Calendar, ExternalLink, Search, Filter } from 'lucide-react';

const MediaCoverage = () => {
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
      }
    ]
  };

  const tabs = [
    { key: 'news', label: 'News', count: mediaData.news.length },
    { key: 'events', label: 'Events', count: mediaData.events.length },
    { key: 'tv', label: 'TV Coverage', count: mediaData.tv.length }
  ];

  return (
     <>
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
            <p className="text-xl opacity-90">University in the Spotlight</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search media coverage..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                    <option>All Time</option>
                    <option>This Month</option>
                    <option>Last 3 Months</option>
                    <option>This Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Tab Navigation */}
      <section className="py-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20 flex flex-wrap gap-2">
              {tabs.map((tab) => (
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

      {/* Media Grid */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaData[activeTab].map((item, index) => (
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
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  
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
        </div>
      </section>

      {/* Media Statistics */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Media Reach</h2>
          
          <div className="max-w-4xl mx-auto">
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
   </>
  );
};

export default MediaCoverage;
