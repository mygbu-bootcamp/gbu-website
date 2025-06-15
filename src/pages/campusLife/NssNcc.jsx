
import React from 'react';
import { Shield, Heart, Users, Award } from 'lucide-react';

const NssNcc = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            NSS and NCC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            National Service Scheme and National Cadet Corps - Building character, leadership, and social responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">NSS</h2>
                <p className="text-gray-600">National Service Scheme</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              NSS aims to develop social consciousness and civic responsibility among students through community service and social work.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Community Development Programs</li>
              <li>• Environmental Conservation</li>
              <li>• Health Awareness Campaigns</li>
              <li>• Adult Literacy Programs</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">NCC</h2>
                <p className="text-gray-600">National Cadet Corps</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              NCC develops discipline, leadership qualities, and patriotism while providing basic military training to students.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Military Training & Drill</li>
              <li>• Adventure Activities</li>
              <li>• Social Service & Community Work</li>
              <li>• Disaster Management</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join NSS & NCC</h2>
          <p className="text-xl mb-6">Be part of something bigger than yourself. Serve the nation, develop leadership skills, and make a difference.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Join NSS
            </button>
            <button className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Join NCC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NssNcc;
