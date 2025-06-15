
import React from 'react';
import { Card, CardContent } from "./card";
import {
  GraduationCap, CreditCard, Briefcase, University, Building,
  Users, Hotel, Trophy, Newspaper, PartyPopper, BookOpenCheck,
  Globe, CalendarDays, HelpCircle, Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickAccessItems = [
  { title: "Courses & Programs", icon: <University className="h-6 w-6" />, description: "Academic offerings", color: "bg-gbu-green", href: "https://admissionportal-07.lovable.app/courses-offered" },
  { title: "Faculty", icon: <Users className="h-6 w-6" />, description: "Our expert faculty", color: "bg-gbu-blue", href: "https://buddha-university-portal.lovable.app/academics/faculty" },
  { title: "Admissions", icon: <GraduationCap className="h-6 w-6" />, description: "UG | PG | PhD", color: "bg-gbu-orange", href: "https://admissionportal-07.lovable.app/" },
  { title: "Fee Payment", icon: <CreditCard className="h-6 w-6" />, description: "Pay & view fees", color: "bg-gbu-blue", href: "https://admissionportal-07.lovable.app/fee-structure" },
  { title: "Hostels", icon: <Hotel className="h-6 w-6" />, description: "Student housing", color: "bg-gbu-green", href: "https://buddha-university-portal.lovable.app/campus/hostels" },
  { title: "Achievements", icon: <Trophy className="h-6 w-6" />, description: "Our milestones", color: "bg-gbu-orange", href: "https://buddha-university-portal.lovable.app/achievements" },
  { title: "Clubs & Activities", icon: <PartyPopper className="h-6 w-6" />, description: "Student life", color: "bg-gbu-green", href: "https://buddha-university-portal.lovable.app/clubs" },
  { title: "Campus Tour", icon: <Globe className="h-6 w-6" />, description: "Virtual walkthrough", color: "bg-gbu-blue", href: "https://buddha-university-portal.lovable.app/campus-tour" },
  { title: "Sports Facilities", icon: <BookOpenCheck className="h-6 w-6" />, description: "Play & perform", color: "bg-gbu-orange", href: "https://buddha-university-portal.lovable.app/sports" },
  { title: "Booking", icon: <CalendarDays className="h-6 w-6" />, description: "Book rooms/events", color: "bg-gbu-green", href: "https://buddha-university-portal.lovable.app/booking" },
  { title: "Events & Gallery", icon: <Landmark className="h-6 w-6" />, description: "Photos & events", color: "bg-gbu-blue", href: "https://buddha-university-portal.lovable.app/academics/news" },
  { title: "FAQs", icon: <HelpCircle className="h-6 w-6" />, description: "Common queries", color: "bg-gbu-orange", href: "https://buddha-university-portal.lovable.app/faqs" }
];

const QuickAccess = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {quickAccessItems.map((item, index) => (
            <Link to={item.href} key={index}>
              <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 leading-tight">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
