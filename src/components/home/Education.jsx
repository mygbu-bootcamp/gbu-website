import React, { useState, useEffect } from 'react';

export default function ExcellenceSection() {
  const [activeTab, setActiveTab] = useState('Centers of Excellence');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = ['Centers of Excellence', 'Research Labs', 'Infrastructure'];

  const content = {
    'Centers of Excellence': [
      {
        title: 'Artificial Intelligence Center',
        description: 'Cutting-edge research in machine learning, deep learning, and AI applications across various domains.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZOVOqFN0zWMXadrJa3W4Mbd6aHWmKRX6XA&s',
        gradient: 'from-purple-600 to-blue-600',
        icon: '🤖'
      },
      {
        title: 'Drone Technology Hub',
        description: 'Advanced drone research facility focusing on autonomous systems and aerial robotics.',
        image: 'https://images.forbesindia.com/media/images/2022/Apr/img_182733_drone.jpg',
        gradient: 'from-cyan-500 to-teal-600',
        icon: '🚁'
      },
      {
        title: 'Cybersecurity Institute',
        description: 'State-of-the-art cybersecurity research and training center for digital security solutions.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3And16FqajXrJoUP94YtPYoXy9i6786IyUQ&s',
        gradient: 'from-red-500 to-pink-600',
        icon: '🔒'
      },
    ],
    'Research Labs': [
      {
        title: 'Bioinformatics Lab',
        description: 'Pioneering research at the intersection of biology and computational science.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo96Izc69wFLw4mhNDxwlZMjOHtvSaPcgphA&s',
        gradient: 'from-green-500 to-emerald-600',
        icon: '🧬'
      },
      {
        title: 'Materials Research Facility',
        description: 'Innovative lab exploring new materials and nanotechnology applications.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m_qWplwUNFaOixBPbZUsFoR5WfWjd4owaw&s',
        gradient: 'from-orange-500 to-amber-600',
        icon: '⚗️'
      },
    ],
    'Infrastructure': [
      {
        title: 'High Performance Computing Center',
        description: 'Robust computational infrastructure supporting large-scale data processing.',
        image: 'https://www.purestorage.com/content/dam/purestorage/knowledge/what-is-high-performance-computing.jpg.imgo.jpg',
        gradient: 'from-indigo-600 to-purple-700',
        icon: '💻'
      },
      {
        title: 'Smart Campus Network',
        description: 'IoT-enabled infrastructure for real-time campus monitoring and management.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
        gradient: 'from-blue-600 to-cyan-600',
        icon: '🌐'
      },
    ],
  };

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-6 md:px-20 py-10">
        {/* Header with Staggered Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-600 bg-clip-text text-transparent mb-4 tracking-tight">
              Excellence in Education
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <p className={`text-gray-600 text-lg mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Discover our world-class facilities and cutting-edge research infrastructure
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 border border-gray-200 shadow-lg">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold text-sm rounded-xl transition-all duration-300 relative overflow-hidden group ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{tab}</span>
                  {activeTab !== tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {content[activeTab].map((item, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="group relative bg-white backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              style={{ 
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Image Container with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {item.icon}
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200/50 rounded-t-3xl transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  {item.description}
                </p>

                {/* Animated Bottom Bar */}
                <div className={`h-1 bg-gradient-to-r ${item.gradient} mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}