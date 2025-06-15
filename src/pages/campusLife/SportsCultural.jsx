
import React from 'react';
import { Trophy, Music, Palette, Users } from 'lucide-react';

const SportsCultural = () => {
  const activities = [
    {
      category: 'Sports',
      icon: Trophy,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      items: ['Football', 'Basketball', 'Cricket', 'Badminton', 'Tennis', 'Swimming']
    },
    {
      category: 'Cultural',
      icon: Music,
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      items: ['Dance', 'Music', 'Drama', 'Poetry', 'Art', 'Photography']
    },
    {
      category: 'Competitions',
      icon: Palette,
      color: 'green',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      items: ['Inter-college Events', 'Annual Fest', 'Talent Shows', 'Quiz Competitions']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sports & Cultural Activities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your passion through our diverse range of sports and cultural activities. Excel in what you love while building lasting friendships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={activity.image} 
                  alt={activity.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 bg-${activity.color}-100 rounded-full flex items-center justify-center`}>
                  <activity.icon className={`w-6 h-6 text-${activity.color}-600`} />
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{activity.category}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Annual Sports & Cultural Fest</h2>
            <p className="text-xl mb-6">Join thousands of students in our biggest celebration of talent, competition, and creativity.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div>Participants</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div>Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">₹5L+</div>
                <div>Prize Money</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Sports Facilities"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sports Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• State-of-the-art gymnasium</li>
                <li>• Olympic-size swimming pool</li>
                <li>• Multi-purpose sports complex</li>
                <li>• Outdoor courts and fields</li>
                <li>• Professional coaching available</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Cultural Venues"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Venues</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 1000-seat auditorium</li>
                <li>• Music and dance studios</li>
                <li>• Art and craft workshops</li>
                <li>• Photography lab</li>
                <li>• Recording studio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCultural;
