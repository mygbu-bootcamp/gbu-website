
import React from 'react';
import { Users, Trophy, Music, Palette } from 'lucide-react';

const ClubsCouncils = () => {
  const clubs = [
    { 
      name: 'Student Council', 
      members: '50+', 
      category: 'Governance', 
      icon: Users, 
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Drama Club', 
      members: '120+', 
      category: 'Arts', 
      icon: Palette, 
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Music Society', 
      members: '85+', 
      category: 'Arts', 
      icon: Music, 
      color: 'green',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Debate Club', 
      members: '60+', 
      category: 'Academic', 
      icon: Trophy, 
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student Clubs & Councils
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our vibrant community of student organizations. Discover clubs that match your interests and develop leadership skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clubs.map((club, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={club.image} 
                  alt={club.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 bg-${club.color}-100 rounded-full flex items-center justify-center`}>
                  <club.icon className={`w-6 h-6 text-${club.color}-600`} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{club.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{club.category}</p>
                <p className="text-sm font-medium text-blue-600">{club.members} members</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Explore Clubs</h3>
              <p className="text-gray-600 text-sm">Browse through our diverse range of student organizations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Fill out the membership application form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Involved</h3>
              <p className="text-gray-600 text-sm">Start participating in activities and events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubsCouncils;
