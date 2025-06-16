
import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Calendar, Flag } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 15000,
    label: 'Students',
    suffix: '+',
    color: 'text-blue-600'
  },
  {
    icon: Award,
    value: 50,
    label: 'Clubs & Societies',
    suffix: '+',
    color: 'text-green-600'
  },
  {
    icon: Calendar,
    value: 200,
    label: 'Annual Events',
    suffix: '+',
    color: 'text-purple-600'
  },
  {
    icon: Flag,
    value: 25,
    label: 'Sports Teams',
    suffix: '+',
    color: 'text-orange-600'
  }
];

const CampusStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const stepValue = stat.value / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(Math.floor(stepValue * currentStep), stat.value);
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = currentValue;
            return newCounters;
          });

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Campus by Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our vibrant community is built on the foundation of active participation, 
            diverse opportunities, and endless possibilities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                
                <div className="space-y-2">
                  <div className={`text-5xl font-bold ${stat.color}`}>
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-xl text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CampusStats;
