
import React from 'react';

import { Link } from 'react-router-dom';
import { Shield, Brain, Zap, ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const CentersOfExcellence = () => {
  const centers = [
    {
      id: 'cybersecurity',
      name: 'Center for Cyber Security',
      description: 'Leading research and training in cybersecurity, protecting digital infrastructure and data.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      focus: ['Network Security', 'Cryptography', 'Digital Forensics', 'Ethical Hacking'],
      director: 'Dr. Amit Kumar Singh',
      faculty: 15,
      students: 120,
      projects: 25
    },
    {
      id: 'artificial-intelligence',
      name: 'Center for Artificial Intelligence',
      description: 'Advancing AI research and applications across various domains for societal benefit.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      focus: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
      director: 'Dr. Priya Sharma',
      faculty: 18,
      students: 150,
      projects: 32
    },
    {
      id: 'drone-technology',
      name: 'Center for Drone Technology',
      description: 'Pioneering unmanned aerial vehicle research and applications in various industries.',
      icon: Zap,
      color: 'from-green-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      focus: ['UAV Design', 'Autonomous Navigation', 'Aerial Surveillance', 'Agricultural Applications'],
      director: 'Dr. Rajesh Kumar',
      faculty: 12,
      students: 90,
      projects: 18
    }
  ];

  return (
<>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Centers of Excellence</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in">
            Driving innovation and research across cutting-edge technologies to address
            global challenges and create solutions for tomorrow.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
              <p className="text-gray-600">Centers of Excellence</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">360+</h3>
              <p className="text-gray-600">Researchers & Students</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">75+</h3>
              <p className="text-gray-600">Research Projects</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">45</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Centers</h2>
            <p className="text-xl text-gray-600">Specialized research centers leading innovation in emerging technologies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {centers.map((center, index) => {
              const IconComponent = center.icon;
              return (
                <div
                  key={center.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${center.color} relative overflow-hidden`}
                    style={{
                      backgroundImage: `url(${center.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay'
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${center.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{center.name}</h3>
                    <p className="text-gray-600 mb-4">{center.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Research Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.focus.map((area, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">{center.faculty}</div>
                        <div className="text-xs text-gray-600">Faculty</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{center.students}</div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">{center.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Director:</span> {center.director}
                      </p>
                    </div>

                    <Link
                      to={`/academics/centers/${center.id}`}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group"
                    >
                      <span>Explore Center</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Research Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of groundbreaking research that shapes the future. Explore collaboration
            opportunities and contribute to cutting-edge innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/research/collaboration"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105"
            >
              Research Collaboration
            </Link>
            <Link
              to="/admissions/research"
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Apply for Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CentersOfExcellence;
