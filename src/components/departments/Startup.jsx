import { useState, useEffect } from 'react';
import { Badge } from './ui/Badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StudentStartup = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const startups = [
    {
      name: 'StudyMate AI',
      founder: 'Arjun Patel (3rd Year CSE)',
      description: 'AI-powered study companion that creates personalized learning paths and quizzes',
      funding: '₹3 Lakhs',
      status: 'Bootstrapped',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
      year: '2024',
    },
    {
      name: 'Campus Connect',
      founder: 'Sneha Agarwal (4th Year IT)',
      description: 'Social platform connecting students across universities for collaboration',
      funding: '₹2.5 Lakhs',
      status: 'Pre-Seed',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=500&fit=crop',
      year: '2024',
    },
    {
      name: 'EcoWaste Tracker',
      founder: 'Vikram Sharma (2nd Year ECE)',
      description: 'Mobile app to track and reduce campus waste with gamification elements',
      funding: '₹1.8 Lakhs',
      status: 'MVP Ready',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
      year: '2024',
    },
    {
      name: 'SkillSwap University',
      founder: 'Ananya Singh (3rd Year BBA)',
      description: 'Peer-to-peer skill exchange platform for students to teach and learn',
      funding: '₹4 Lakhs',
      status: 'Angel Funded',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      year: '2023',
    },
    {
      name: 'QuickTutor',
      founder: 'Rohit Kumar (4th Year CSE)',
      description: 'On-demand tutoring service connecting students with senior peers',
      funding: '₹6 Lakhs',
      status: 'Seed Funded',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
      year: '2023',
    },
    {
      name: 'FoodieShare',
      founder: 'Meera Joshi (2nd Year MBA)',
      description: 'Food sharing app to reduce waste in college hostels and cafeterias',
      funding: '₹2 Lakhs',
      status: 'Prototype',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=500&fit=crop',
      year: '2024',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % startups.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [startups.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % startups.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + startups.length) % startups.length);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Seed Funded':
        return 'bg-green-500 text-white';
      case 'Angel Funded':
        return 'bg-emerald-500 text-white';
      case 'Pre-Seed':
        return 'bg-blue-500 text-white';
      case 'MVP Ready':
        return 'bg-purple-500 text-white';
      case 'Prototype':
        return 'bg-orange-500 text-white';
      case 'Bootstrapped':
        return 'bg-indigo-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700 bg-clip-text text-transparent">
            Student Startups
          </h2>
          <p className="text-xl text-gray-600">Empowering the next generation of entrepreneurs</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative shadow-2xl border-0 bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden">
          <div className="relative h-96">
            {startups.map((startup, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50">
                    <div className="mb-4">
                      <Badge className={getStatusColor(startup.status)}>
                        {startup.status}
                      </Badge>
                      <Badge className="ml-2 bg-gray-100 text-gray-800">
                        {startup.year}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {startup.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{startup.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-indigo-700">
                        Founded by: {startup.founder}
                      </p>
                      <p className="text-lg font-bold text-green-600">
                        Funding: {startup.funding}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={startup.image}
                      alt={startup.name}
                      className="w-full h-full object-cover rounded-tr-xl rounded-br-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent rounded-tr-xl rounded-br-xl" />
                  </div>
                </div>
              </div>
            ))}


          </div>

          {/* Indicators */}
          <div className="flex justify-center py-6 space-x-2 bg-gradient-to-r from-gray-50 to-blue-50">
            {startups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 shadow-lg scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{startups.length}</div>
            <div className="text-gray-600">Active Student Startups</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">₹19.3L+</div>
            <div className="text-gray-600">Total Funding Raised</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
            <div className="text-gray-600">Departments Represented</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStartup;