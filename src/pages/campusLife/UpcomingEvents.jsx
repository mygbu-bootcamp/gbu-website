
import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Annual Tech Fest 2024",
    date: "March 15-17, 2024",
    time: "9:00 AM onwards",
    location: "Main Campus Ground",
    participants: "2000+ Expected",
    description: "Three days of innovation, competitions, and tech exhibitions featuring students from across the country.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Technology",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Inter-College Sports Meet",
    date: "March 22-24, 2024",
    time: "7:00 AM onwards",
    location: "Sports Complex",
    participants: "500+ Athletes",
    description: "Annual sports championship featuring athletics, cricket, football, basketball, and more competitive events.",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Sports",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Cultural Night Extravaganza",
    date: "April 5, 2024",
    time: "6:00 PM onwards",
    location: "Auditorium",
    participants: "1000+ Audience",
    description: "An evening of music, dance, drama, and cultural performances showcasing diverse talents of our students.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Cultural",
    color: "bg-purple-500"
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest events, competitions, and activities happening 
            across our vibrant campus community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`${event.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {event.category}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-3 text-green-500" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-3 text-purple-500" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
