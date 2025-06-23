import { useState, useEffect } from 'react';
import { Card, CardContent } from '../..//components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Badge } from '../../components/ui/badge';

const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none';
  const variants = {
    default: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};



const ProgramsShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const programs = [
    {
      name: 'Computer Science Engineering',
      code: 'CSE',
      duration: '4 Years',
      specializations: ['AI & ML', 'Data Science', 'Cybersecurity', 'Full Stack Development'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      description: 'Comprehensive program covering algorithms, programming, and emerging technologies'
    },
    {
      name: 'Electronics & Communication',
      code: 'ECE',
      duration: '4 Years',
      specializations: ['VLSI Design', 'Embedded Systems', 'Signal Processing', 'IoT'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      description: 'Focus on electronic circuits, communication systems, and modern technologies'
    },
    {
      name: 'Information Technology',
      code: 'IT',
      duration: '4 Years',
      specializations: ['Web Development', 'Mobile Apps', 'Cloud Computing', 'Database Systems'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      description: 'Comprehensive IT education with focus on software and system development'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [programs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600">Cutting-edge engineering education</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-96">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-indigo-50">
                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge className="bg-blue-600 text-white text-lg px-3 py-1">{program.code}</Badge>
                        <Badge className="bg-gray-100 text-gray-800">{program.duration}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{program.name}</h3>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.specializations.map((spec, specIndex) => (
                            <Badge
                              key={specIndex}
                              variant="outline"
                              className="border-blue-400 text-blue-800"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full z-10"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full z-10"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center py-6 space-x-2 bg-gray-50">
              {programs.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600 shadow-lg scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgramsShowcase;
