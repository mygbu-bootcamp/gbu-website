
import React from 'react';
import { Home, Utensils, Wifi, Car } from 'lucide-react';

const HostelDining = () => {
  const amenities = [
    { name: 'Free WiFi', icon: Wifi, description: 'High-speed internet in all rooms' },
    { name: 'Parking', icon: Car, description: 'Secure parking facilities' },
    { name: 'Mess Hall', icon: Utensils, description: 'Nutritious meals three times a day' },
    { name: 'Common Room', icon: Home, description: 'Recreation and study areas' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hostel, Mess, and Dining
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comfortable accommodation and nutritious dining options that make our campus feel like home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Modern Hostel Facilities</h2>
                <p className="text-gray-600 mb-6">
                  Our hostels provide a safe, comfortable, and conducive environment for students to live and study. 
                  Each room is well-furnished with modern amenities and proper ventilation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <amenity.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{amenity.name}</p>
                        <p className="text-sm text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mess Timings</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Breakfast</span>
                  <span className="text-gray-600">7:00 - 9:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Lunch</span>
                  <span className="text-gray-600">12:00 - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dinner</span>
                  <span className="text-gray-600">7:00 - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Room Types</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">Single Occupancy</p>
                  <p className="text-sm text-gray-600">Private room with attached bathroom</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-medium">Double Occupancy</p>
                  <p className="text-sm text-gray-600">Shared room with common facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply for Hostel?</h2>
          <p className="text-gray-600 mb-6">Secure your accommodation for the upcoming academic year</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Apply for Hostel
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostelDining;
