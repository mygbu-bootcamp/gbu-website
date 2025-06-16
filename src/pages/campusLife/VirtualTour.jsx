
import React from 'react';
import { Camera, MapPin, Play } from 'lucide-react';

const VirtualTour = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Virtual Tour
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our beautiful campus from anywhere in the world. Take a virtual journey through our facilities, classrooms, and recreational areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="360° Campus Tour"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">360° Campus Tour</h3>
              <p className="text-gray-600 mb-4">Experience our campus in full 360-degree view with interactive hotspots.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Start Tour
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interactive Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-60 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Interactive Map</h3>
              <p className="text-gray-600 mb-4">Navigate through our campus with our detailed interactive map.</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                View Map
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: 'Academic Buildings', 
              icon: Camera, 
              color: 'blue',
              image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            { 
              title: 'Student Facilities', 
              icon: Camera, 
              color: 'purple',
              image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            },
            { 
              title: 'Recreation Areas', 
              icon: Camera, 
              color: 'green',
              image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">Explore our {item.title.toLowerCase()} in detail</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
