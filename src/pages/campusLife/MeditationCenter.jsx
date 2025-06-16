
import React from 'react';
import { Heart, Leaf, Sun, Moon } from 'lucide-react';

const MeditationCenter = () => {
  const programs = [
    {
      name: 'Morning Meditation',
      time: '6:00 - 7:00 AM',
      icon: Sun,
      description: 'Start your day with mindfulness and inner peace'
    },
    {
      name: 'Yoga Sessions',
      time: '5:00 - 6:00 PM',
      icon: Leaf,
      description: 'Physical and mental wellness through yoga practice'
    },
    {
      name: 'Evening Reflection',
      time: '7:00 - 8:00 PM',
      icon: Moon,
      description: 'End your day with gratitude and reflection'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meditation Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your inner peace and balance through our comprehensive meditation and wellness programs designed for student well-being.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-lg p-8 text-white text-center mb-12">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Wellness for Mind, Body & Soul</h2>
          <p className="text-xl">
            Our meditation center offers a peaceful sanctuary where students can find relief from academic stress and develop mindfulness skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <program.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{program.time}</p>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Meditation</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Stress Reduction</h4>
                  <p className="text-gray-600 text-sm">Manage academic pressure and anxiety effectively</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Improved Focus</h4>
                  <p className="text-gray-600 text-sm">Enhance concentration and academic performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Better Sleep</h4>
                  <p className="text-gray-600 text-sm">Improve sleep quality and overall well-being</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Meditation Techniques</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Mindfulness Meditation</h4>
                <p className="text-gray-600 text-sm">Focus on present moment awareness</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Breathing Exercises</h4>
                <p className="text-gray-600 text-sm">Control breath to calm the mind</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Guided Visualization</h4>
                <p className="text-gray-600 text-sm">Use imagination for deep relaxation</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">Body Scan</h4>
                <p className="text-gray-600 text-sm">Progressive muscle relaxation technique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationCenter;
