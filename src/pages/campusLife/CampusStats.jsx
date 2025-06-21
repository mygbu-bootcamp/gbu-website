import React from 'react';

const CampusStats = () => {
  const stats = [
    {
      number: '8000+',
      label: 'Students',
      icon: '👨‍🎓'
    },
    {
      number: '8',
      label: 'Hostels',
      icon: '🏠'
    },
    {
      number: '150+',
      label: 'Clubs',
      icon: '🎯'
    },
    {
      number: '25+',
      label: 'Sports Facilities',
      icon: '⚽'
    },
    {
      number: '100+',
      label: 'Eco-Initiatives',
      icon: '🌱'
    }
  ];

  return (
    <div className="mt-16 mb-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Life Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white text-center rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusStats;
