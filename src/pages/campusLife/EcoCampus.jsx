import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
import { Leaf, ArrowUp } from 'lucide-react';

const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-lg border bg-white text-black shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);



const EcoCampus = () => {
  const initiatives = [
    {
      title: 'Solar Panel Installations',
      description: 'Campus-wide solar energy system powering academic buildings and hostels',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop',
      stats: '80% Renewable Energy',
      icon: '☀️'
    },
    {
      title: 'Rainwater Harvesting',
      description: 'Comprehensive water conservation system collecting and storing rainwater',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
      stats: '50,000L Daily Collection',
      icon: '💧'
    },
    {
      title: 'Green Waste Recycling',
      description: 'Advanced waste management with composting and recycling facilities',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop',
      stats: '90% Waste Recycled',
      icon: '♻️'
    },
    {
      title: 'Birdwatching Trail',
      description: 'Dedicated nature trails promoting biodiversity and wildlife conservation',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
      stats: '50+ Bird Species',
      icon: '🦅'
    }
  ];

  const stats = [
    { value: '500+', label: 'Trees Planted', icon: '🌳' },
    { value: '80%', label: 'Green Coverage', icon: '🌿' },
    { value: '40%', label: 'Energy Saved', icon: '⚡' },
    { value: '60%', label: 'Water Conserved', icon: '💧' }
  ];

  return (
    <section id="eco-campus" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Eco</span>-Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in sustainable education with innovative green initiatives and environmental conservation.
          </p>
        </div>

        {/* Environmental Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl">
                        {initiative.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                    <p className="text-gray-600 mb-6">{initiative.description}</p>
                    <div className="bg-green-100 rounded-lg p-4">
                      <div className="text-green-800 font-bold text-lg">{initiative.stats}</div>
                      <div className="text-green-600 text-sm">Impact Measurement</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infographic Style Visuals */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Environmental Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  ☀️
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  80%
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Solar Energy</h4>
              <p className="text-sm text-gray-600">Renewable energy powers most campus operations</p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  💧
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  60%
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Water Conservation</h4>
              <p className="text-sm text-gray-600">Advanced systems reduce water consumption</p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  ♻️
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  90%
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Waste Recycling</h4>
              <p className="text-sm text-gray-600">Comprehensive waste management program</p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  🌳
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  500+
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tree Plantation</h4>
              <p className="text-sm text-gray-600">Expanding green cover across campus</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-6 py-3">
              <Leaf className="text-green-600" size={24} />
              <span className="text-green-800 font-semibold">Carbon Neutral Campus by 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoCampus;
