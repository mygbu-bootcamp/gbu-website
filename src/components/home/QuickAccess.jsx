import React from 'react';
import { Card, CardContent } from './card';
import {
  Landmark, BookOpenCheck, Briefcase, Users, Building, University
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickAccessItems = [
  { title: "Schools", icon: <University className="h-6 w-6" />, description: "Explore our academic schools", color: "bg-green-600", href: "/academics/schools", external: false },
  { title: "Courses Offered", icon: <BookOpenCheck className="h-6 w-6" />, description: "Academic programs", color: "bg-green-600", href: "https://buddha-university-portal.lovable.app/academics/courses", external: true },
  { title: "Placements", icon: <Briefcase className="h-6 w-6" />, description: "Career opportunities", color: "bg-orange-600", href: "https://buddha-university-portal.lovable.app/placements", external: true },
  { title: "Faculty", icon: <Users className="h-6 w-6" />, description: "Meet our faculty", color: "bg-green-600", href: "https://buddha-university-portal.lovable.app/academics/faculty", external: true },
  { title: "NSS/NCC", icon: <Building className="h-6 w-6" />, description: "Student organizations", color: "bg-blue-600", href: "https://buddha-university-portal.lovable.app/nss-ncc", external: true },
  { title: "Campus Infrastructure", icon: <Landmark className="h-6 w-6" />, description: "Explore our campus", color: "bg-green-600", href: "https://buddha-university-portal.lovable.app/campus/infrastructure", external: true },
];

const QuickAccess = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {quickAccessItems.map((item, index) => {
            const card = (
              <Card className="h-full group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            );

            return item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" key={index} className="block h-full">
                {card}
              </a>
            ) : (
              <Link to={item.href} key={index} className="block h-full">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
