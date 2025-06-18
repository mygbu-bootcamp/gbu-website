import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, BookOpen, Award, MapPin, ArrowRight, Plane, GraduationCap } from 'lucide-react';

const Collaboration = () => {
  const mous = [
    // ...same as before
    {
      id: 1,
      organization: 'Massachusetts Institute of Technology',
      country: 'United States',
      type: 'Research MOU',
      focusAreas: ['Quantum Computing', 'AI', 'Robotics'],
      since: '2018',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      description: 'Joint research in quantum computing and robotics, including faculty and student exchange.'
    },
    {
      id: 2,
      organization: 'National University of Singapore',
      country: 'Singapore',
      type: 'Academic MOU',
      focusAreas: ['Biotechnology', 'Data Science', 'Sustainability'],
      since: '2020',
      flag: '🇸🇬',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop',
      description: 'Collaborative academic programs and summer schools in biotechnology and sustainability.'
    },
    {
      id: 3,
      organization: 'ETH Zurich',
      country: 'Switzerland',
      type: 'Dual Degree MOU',
      focusAreas: ['Civil Engineering', 'Environmental Science'],
      since: '2019',
      flag: '🇨🇭',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
      description: 'Dual degree and research collaboration in civil engineering and environmental science.'
    },
    {
      id: 4,
      organization: 'Seoul National University',
      country: 'South Korea',
      type: 'Technology Transfer MOU',
      focusAreas: ['Semiconductors', 'Nanotechnology'],
      since: '2021',
      flag: '🇰🇷',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&h=400&fit=crop',
      description: 'Technology transfer and innovation in semiconductors and nanotechnology.'
    },
    {
      id: 5,
      organization: 'University of Toronto',
      country: 'Canada',
      type: 'Research MOU',
      focusAreas: ['Healthcare Innovation', 'AI', 'Public Policy'],
      since: '2022',
      flag: '🇨🇦',
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?w=600&h=400&fit=crop',
      description: 'Collaborative research in healthcare innovation and AI-driven public policy.'
    },
    {
      id: 6,
      organization: 'Indian Institute of Science',
      country: 'India',
      type: 'Academic MOU',
      focusAreas: ['Material Science', 'Physics', 'Mathematics'],
      since: '2017',
      flag: '🇮🇳',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
      description: 'Academic exchange and joint workshops in material science and mathematics.'
    },
    {
      id: 7,
      organization: 'University of Melbourne',
      country: 'Australia',
      type: 'Student Exchange MOU',
      focusAreas: ['Business', 'Economics', 'Law'],
      since: '2023',
      flag: '🇦🇺',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop',
      description: 'Student exchange and joint seminars in business, economics, and law.'
    },
    {
      id: 8,
      organization: 'Tsinghua University',
      country: 'China',
      type: 'Research MOU',
      focusAreas: ['Renewable Energy', 'Smart Grids'],
      since: '2021',
      flag: '🇨🇳',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&h=400&fit=crop',
      description: 'Joint research and innovation in renewable energy and smart grid technologies.'
    }
  ];

  const collaborationPrograms = [
    // ...same as before
    {
      title: 'Student Exchange (MOU)',
      description: 'Semester exchange opportunities for students under signed MOUs.',
      duration: '1-2 Semesters',
      participants: '100+ students annually',
      icon: Users,
      benefits: ['Cultural immersion', 'Exposure to new curricula', 'Credit transfer', 'Language learning']
    },
    {
      title: 'Faculty Exchange (MOU)',
      description: 'Research and teaching opportunities for faculty under collaboration agreements.',
      duration: '3-12 Months',
      participants: '30+ faculty annually',
      icon: GraduationCap,
      benefits: ['Research collaboration', 'Teaching experience', 'Professional development', 'Network building']
    },
    {
      title: 'Joint Research (MOU)',
      description: 'Collaborative research initiatives with partner organizations.',
      duration: '2-5 Years',
      participants: 'Multiple teams',
      icon: BookOpen,
      benefits: ['Funding opportunities', 'Publication potential', 'Technology transfer', 'Innovation']
    },
    {
      title: 'Dual Degree (MOU)',
      description: 'Earn degrees from both GBU and partner organizations under MOU.',
      duration: '4-6 Years',
      participants: '150+ students',
      icon: Award,
      benefits: ['Two degrees', 'International recognition', 'Enhanced career prospects', 'Global network']
    },
    {
      title: 'Summer Research Internships',
      description: 'Short-term research internships at partner universities.',
      duration: '2-3 Months',
      participants: '50+ students',
      icon: Plane,
      benefits: ['Hands-on research', 'Mentorship', 'Stipend', 'International exposure']
    },
    {
      title: 'Innovation Bootcamps',
      description: 'Collaborative bootcamps for innovation and entrepreneurship.',
      duration: '1 Month',
      participants: 'Open to all students',
      icon: Globe,
      benefits: ['Startup mentorship', 'Pitch competitions', 'Networking', 'Seed funding']
    }
  ];

  const stats = [
    { metric: '35+', label: 'Active MOUs', icon: Globe },
    { metric: '800+', label: 'Participants', icon: Users },
    { metric: '18', label: 'Countries', icon: MapPin },
    { metric: '200+', label: 'Joint Publications', icon: BookOpen }
  ];

  const upcomingCollaborations = [
    // ...same as before
    {
      title: 'AI & Ethics Summer School with Oxford',
      deadline: '2024-07-10',
      duration: '2 weeks',
      eligibility: 'All UG/PG students',
      benefits: 'Certificate + Networking'
    },
    {
      title: 'Green Energy Research MOU with TU Delft',
      deadline: '2024-08-01',
      duration: '6 months',
      eligibility: 'PhD students in Engineering',
      benefits: 'Research grant + Accommodation'
    },
    {
      title: 'Healthcare Innovation Exchange with Johns Hopkins',
      deadline: '2024-09-15',
      duration: '1 semester',
      eligibility: 'Medical/Health Science students',
      benefits: 'Full tuition waiver + Internship'
    },
    {
      title: 'Entrepreneurship Bootcamp with Tel Aviv University',
      deadline: '2024-07-25',
      duration: '1 month',
      eligibility: 'All students (selection based)',
      benefits: 'Mentorship + Seed funding'
    },
    {
      title: 'Joint PhD MOU with University of Edinburgh',
      deadline: '2024-10-01',
      duration: '4 years',
      eligibility: 'Masters degree holders',
      benefits: 'Full funding + research support'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">MOUs & Collaborations</h1>
          <p className="text-base sm:text-lg md:text-xl text-teal-100 max-w-3xl mx-auto animate-fade-in">
            Advancing academic excellence and research through strategic MOUs and collaborations with leading institutions worldwide.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.metric}</h3>
                  <p className="text-gray-600 text-xs md:text-base">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOUs/Collaborations */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">Our MOUs & Partners</h2>
            <p className="text-base md:text-xl text-gray-600">Leading organizations and universities we have signed MOUs with</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-14">
            {mous.map((mou, index) => (
              <div
                key={mou.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in flex flex-col"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  aspectRatio: '1/1',
                  minHeight: '320px'
                }}
              >
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img
                    src={mou.image}
                    alt={mou.organization}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-lg">
                    <span className="text-lg sm:text-xl">{mou.flag}</span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs">
                    Since {mou.since}
                  </div>
                </div>

                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">{mou.organization}</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">
                      {mou.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-xs sm:text-sm">{mou.country}</span>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-3">{mou.description}</p>

                  <div className="mb-2 sm:mb-3">
                    <h4 className="text-xs font-semibold text-gray-700 mb-1">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {mou.focusAreas.map((area, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link
                      to={`/collaborations/${mou.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 text-xs sm:text-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Programs */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">Collaboration Programs</h2>
            <p className="text-base md:text-xl text-gray-600">Opportunities enabled by our MOUs and partnerships</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collaborationPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border border-blue-100 flex flex-col"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    aspectRatio: '1/1',
                    minHeight: '320px'
                  }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">{program.title}</h3>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{program.description}</p>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-3 text-xs">
                    <div>
                      <span className="font-semibold text-gray-700">Duration:</span>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Participants:</span>
                      <p className="text-gray-600">{program.participants}</p>
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-3">
                    <h4 className="font-semibold text-gray-700 mb-1 text-xs">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
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

      {/* Upcoming Collaboration Opportunities */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">Upcoming Collaboration Opportunities</h2>
            <p className="text-base md:text-xl text-gray-600">Explore new programs and research under our MOUs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {upcomingCollaborations.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in flex flex-col"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  aspectRatio: '1/1',
                  minHeight: '300px'
                }}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">
                    Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">{opportunity.title}</h3>

                <div className="space-y-1 mb-2 sm:mb-3 text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Duration:</span>
                    <span className="text-gray-600">{opportunity.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Benefits:</span>
                    <span className="text-gray-600">{opportunity.benefits}</span>
                  </div>
                </div>

                <div className="mb-2 sm:mb-3">
                  <span className="font-medium text-gray-700 text-xs">Eligibility:</span>
                  <p className="text-gray-600 text-xs mt-1">{opportunity.eligibility}</p>
                </div>

                <div className="mt-auto">
                  <Link
                    to="/apply-collaboration"
                    className="w-full bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-xs sm:text-sm"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Collaborate with GBU</h2>
          <p className="text-base md:text-xl text-teal-100 mb-6 md:mb-8 max-w-3xl mx-auto">
            Join our network of partners and benefit from our MOUs and collaboration programs. Expand your academic and research horizons with GBU.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/collaboration-applications"
              className="bg-white text-teal-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Apply for Collaboration
            </Link>
            <Link
              to="/contact/collaboration"
              className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact Collaboration Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaboration;
