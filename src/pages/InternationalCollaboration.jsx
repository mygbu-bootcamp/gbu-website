
import React from 'react';

import { Link } from 'react-router-dom';
import { Globe, Users, BookOpen, Award, MapPin, ArrowRight, Plane, GraduationCap } from 'lucide-react';

const InternationalCollaboration = () => {
  const partnerships = [
    {
      id: 1,
      university: 'Stanford University',
      country: 'United States',
      type: 'Research Collaboration',
      areas: ['Artificial Intelligence', 'Computer Science', 'Innovation'],
      since: '2019',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
      description: 'Joint research programs in AI and technology innovation with faculty exchange opportunities.'
    },
    {
      id: 2,
      university: 'University of Cambridge',
      country: 'United Kingdom',
      type: 'Academic Exchange',
      areas: ['Engineering', 'Research Methodology', 'Science'],
      since: '2020',
      flag: '🇬🇧',
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=600&h=400&fit=crop',
      description: 'Student and faculty exchange programs with joint degree opportunities in engineering.'
    },
    {
      id: 3,
      university: 'Technical University of Munich',
      country: 'Germany',
      type: 'Dual Degree Program',
      areas: ['Mechanical Engineering', 'Automotive', 'Sustainability'],
      since: '2021',
      flag: '🇩🇪',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop',
      description: 'Dual degree programs in engineering with emphasis on sustainable technology.'
    },
    {
      id: 4,
      university: 'University of Tokyo',
      country: 'Japan',
      type: 'Technology Transfer',
      areas: ['Robotics', 'AI', 'Innovation'],
      since: '2022',
      flag: '🇯🇵',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop',
      description: 'Collaborative research in robotics and artificial intelligence with technology transfer.'
    }
  ];

  const programs = [
    {
      title: 'Student Exchange Program',
      description: 'Semester abroad opportunities for undergraduate and graduate students.',
      duration: '1-2 Semesters',
      participants: '50+ students annually',
      icon: Users,
      benefits: ['Cultural immersion', 'International exposure', 'Credit transfer', 'Language learning']
    },
    {
      title: 'Faculty Exchange Program',
      description: 'Research and teaching opportunities for faculty members abroad.',
      duration: '3-12 Months',
      participants: '20+ faculty annually',
      icon: GraduationCap,
      benefits: ['Research collaboration', 'Teaching experience', 'Professional development', 'Network building']
    },
    {
      title: 'Joint Research Projects',
      description: 'Collaborative research initiatives with international partners.',
      duration: '2-5 Years',
      participants: 'Multiple teams',
      icon: BookOpen,
      benefits: ['Funding opportunities', 'Publication potential', 'Technology transfer', 'Innovation']
    },
    {
      title: 'Dual Degree Programs',
      description: 'Earn degrees from both GBU and partner international universities.',
      duration: '4-6 Years',
      participants: '100+ students',
      icon: Award,
      benefits: ['Two degrees', 'International recognition', 'Enhanced career prospects', 'Global network']
    }
  ];

  const achievements = [
    { metric: '25+', label: 'International Partners', icon: Globe },
    { metric: '500+', label: 'Students Exchanged', icon: Users },
    { metric: '15', label: 'Countries', icon: MapPin },
    { metric: '100+', label: 'Joint Research Papers', icon: BookOpen }
  ];

  const upcomingOpportunities = [
    {
      title: 'Summer Research Program at MIT',
      deadline: '2024-04-30',
      duration: '3 months',
      eligibility: 'Graduate students in Engineering/Science',
      benefits: 'Stipend + Accommodation'
    },
    {
      title: 'Exchange Program to University of Melbourne',
      deadline: '2024-05-15',
      duration: '1 semester',
      eligibility: 'Undergraduate students (CGPA > 8.0)',
      benefits: 'Full tuition waiver'
    },
    {
      title: 'Joint PhD Program with ETH Zurich',
      deadline: '2024-06-01',
      duration: '4 years',
      eligibility: 'Masters degree holders',
      benefits: 'Full funding + research support'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">International Collaboration</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto animate-fade-in">
            Building bridges across continents through academic partnerships, research collaboration,
            and student exchange programs that foster global learning and innovation.
          </p>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{achievement.metric}</h3>
                  <p className="text-gray-600">{achievement.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Global Partners</h2>
            <p className="text-xl text-gray-600">Prestigious international universities and institutions we collaborate with</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.university}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <span className="text-2xl">{partner.flag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    Since {partner.since}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{partner.university}</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {partner.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{partner.country}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{partner.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Collaboration Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.areas.map((area, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/collaborations/${partner.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">International Programs</h2>
            <p className="text-xl text-gray-600">Diverse opportunities for global academic and research experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border border-blue-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-4">{program.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Duration:</span>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Participants:</span>
                      <p className="text-gray-600">{program.participants}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Opportunities</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting international opportunities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Plane className="w-6 h-6 text-blue-600" />
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-3">{opportunity.title}</h3>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Duration:</span>
                    <span className="text-gray-600">{opportunity.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Benefits:</span>
                    <span className="text-gray-600">{opportunity.benefits}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-medium text-gray-700 text-sm">Eligibility:</span>
                  <p className="text-gray-600 text-sm mt-1">{opportunity.eligibility}</p>
                </div>

                <Link
                  to="/apply-international"
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Go Global with GBU</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Expand your horizons through our international collaboration programs.
            Gain global perspective, build international networks, and enhance your career prospects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/international-applications"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Apply for Programs
            </Link>
            <Link
              to="/contact/international"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact International Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalCollaboration;
