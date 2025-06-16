
import React, { useState } from 'react';
import { Book, Users, Calendar, Award, School, University } from 'lucide-react';

const categories = [
  {
    id: 'academics',
    title: 'Academics',
    description: 'World-class education with innovative teaching methods and cutting-edge research opportunities.',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'sports',
    title: 'Sports & Recreation',
    description: 'State-of-the-art facilities for various sports, fitness centers, and recreational activities.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'events',
    title: 'Events & Festivals',
    description: 'Year-round cultural events, festivals, competitions, and celebrations that bring the campus together.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'clubs',
    title: 'Clubs & Societies',
    description: 'Join diverse clubs and societies to pursue your interests and develop leadership skills.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'hostels',
    title: 'Hostels & Accommodation',
    description: 'Comfortable and secure hostel facilities with modern amenities and vibrant community life.',
    icon: School,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    id: 'facilities',
    title: 'Campus Facilities',
    description: 'Modern infrastructure including libraries, labs, cafeterias, and recreational spaces.',
    icon: University,
    image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-indigo-500 to-purple-600'
  }
];

const CampusCategories = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Campus Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the many facets of our vibrant campus community, from academic excellence 
            to exciting extracurricular activities and comfortable living spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <button className={`inline-flex items-center space-x-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105`}>
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CampusCategories;
