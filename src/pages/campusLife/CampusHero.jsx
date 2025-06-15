
import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';

const CampusHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Campus Life
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Experience a vibrant community where learning extends beyond classrooms, 
          friendships flourish, and memories are made to last a lifetime.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Users className="w-6 h-6" />
            <span className="text-lg font-semibold">15,000+ Students</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Calendar className="w-6 h-6" />
            <span className="text-lg font-semibold">200+ Events/Year</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Award className="w-6 h-6" />
            <span className="text-lg font-semibold">50+ Clubs</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CampusHero;
