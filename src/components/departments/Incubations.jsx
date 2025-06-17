import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

const IncubationCenter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const incubations = [
    {
      name: 'EcoTech Solutions',
      founder: 'Amit Verma (CSE)',
      description: 'Sustainable technology for waste management using AI and IoT sensors',
      funding: '₹5 Lakhs',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=500&fit=crop',
      year: '2023'
    },
    {
      name: 'HealthMonitor AI',
      founder: 'Kavya Reddy (IT)',
      description: 'AI-powered health monitoring system for elderly care',
      funding: '₹8 Lakhs',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop',
      year: '2023'
    },
    {
      name: 'AgriBot',
      founder: 'Ravi Kumar (ECE)',
      description: 'Automated farming solutions with precision agriculture',
      funding: '₹12 Lakhs',
      status: 'Funded',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
      year: '2022'
    },
    {
      name: 'EduTech Pro',
      founder: 'Priya Sharma (CSE)',
      description: 'Online learning platform with AR/VR integration',
      funding: '₹6 Lakhs',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
      year: '2023'
    },
    {
      name: 'SmartCity Hub',
      founder: 'Rahul Singh (IT)',
      description: 'IoT solutions for smart city infrastructure',
      funding: '₹10 Lakhs',
      status: 'Funded',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop',
      year: '2022'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % incubations.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [incubations.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % incubations.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + incubations.length) % incubations.length);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-900 to-indigo-600 bg-clip-text text-transparent">
            Incubation Center
          </h2>
          <p className="text-xl text-gray-600">Nurturing tomorrow's entrepreneurs</p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">

          <CardContent className="p-0 relative h-96">
            {incubations.map((startup, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-purple-50">
                    <div className="mb-4">
                      <Badge className={startup.status === 'Funded' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}>
                        {startup.status}
                      </Badge>
                      <Badge className="ml-2 bg-gray-100 text-gray-800">{startup.year}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-900 mb-3">{startup.name}</h3>
                    <p className="text-gray-600 mb-4">{startup.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-indigo-700">Founder: {startup.founder}</p>
                      <p className="text-lg font-bold text-green-600">Funding: {startup.funding}</p>
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

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full z-20"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full z-20"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </CardContent>

          {/* Indicators */}
          <div className="flex justify-center py-6 space-x-2 bg-gray-50">
            {incubations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-indigo-600 shadow-lg scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default IncubationCenter;
