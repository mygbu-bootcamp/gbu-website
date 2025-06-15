
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { 
  Users, 
  Calendar, 
  Award, 
  BookOpen, 
  Camera, 
  Phone, 
  Search,
  Star,
  MapPin,
  Briefcase,
  Microscope,
  Brain,
  Cog,
  GraduationCap,
  Monitor,
  Scale,
  Building,
  Wrench
} from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const quickStats = [
    { label: "Active Alumni", value: "2,500+", icon: Users, color: "bg-blue-500" },
    { label: "Events This Year", value: "48", icon: Calendar, color: "bg-green-500" },
    { label: "Success Stories", value: "156", icon: Award, color: "bg-purple-500" },
    { label: "Talks Delivered", value: "89", icon: BookOpen, color: "bg-orange-500" },
  ];

  const universitySchools = [
    {
      name: "Biotechnology",
      icon: Microscope,
      color: "bg-green-500",
      description: "Innovation in life sciences"
    },
    {
      name: "Buddhist Studies & Civilization",
      icon: Brain,
      color: "bg-purple-500",
      description: "Ancient wisdom & culture"
    },
    {
      name: "Engineering",
      icon: Cog,
      color: "bg-blue-500",
      description: "Technology & innovation"
    },
    {
      name: "Humanities & Social Sciences",
      icon: GraduationCap,
      color: "bg-orange-500",
      description: "Human society & culture"
    },
    {
      name: "Information & Communication Technology",
      icon: Monitor,
      color: "bg-cyan-500",
      description: "Digital transformation"
    },
    {
      name: "Law, Justice and Governance",
      icon: Scale,
      color: "bg-red-500",
      description: "Legal excellence"
    },
    {
      name: "Management",
      icon: Building,
      color: "bg-indigo-500",
      description: "Business leadership"
    },
    {
      name: "Vocational Studies & Applied Sciences",
      icon: Wrench,
      color: "bg-yellow-500",
      description: "Practical skills & applications"
    }
  ];

  const featuredAlumni = [
    {
      name: "Sarah Johnson",
      batch: "2018",
      designation: "Senior Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      batch: "2016",
      designation: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      batch: "2019",
      designation: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Tech Summit 2024",
      date: "March 15, 2024",
      location: "University Auditorium",
      attendees: 150
    },
    {
      title: "Alumni Networking Dinner",
      date: "March 22, 2024",
      location: "Grand Hotel",
      attendees: 85
    },
    {
      title: "Career Mentorship Workshop",
      date: "April 5, 2024",
      location: "Online",
      attendees: 200
    }
  ];

  const handleExploreNetwork = () => {
    // Scroll to featured alumni section or navigate to network page
    const featuredSection = document.getElementById('featured-alumni');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If section not found, navigate to network page
      window.location.href = '/network';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-alumni-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-alumni-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-alumni-500 to-alumni-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Alumni Portal</h1>
                <p className="text-sm text-gray-500">University of Excellence</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/network" className="text-gray-600 hover:text-alumni-600 transition-colors">Network</Link>
              <Link to="/events" className="text-gray-600 hover:text-alumni-600 transition-colors">Events</Link>
              <Link to="/talks" className="text-gray-600 hover:text-alumni-600 transition-colors">Talks</Link>
              <Link to="/gallery" className="text-gray-600 hover:text-alumni-600 transition-colors">Gallery</Link>
              <Link to="/stories" className="text-gray-600 hover:text-alumni-600 transition-colors">Stories</Link>
              <Link to="/contact" className="text-gray-600 hover:text-alumni-600 transition-colors">Contact</Link>
            </nav>
            <Button asChild className="bg-alumni-500 hover:bg-alumni-600">
              <Link to="/register">Join Network</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Our
              <span className="bg-gradient-to-r from-alumni-500 to-alumni-600 bg-clip-text text-transparent"> Alumni Community</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with fellow graduates, share experiences, and build lasting professional relationships. 
              Your journey continues here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search alumni by name, company, or batch..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-alumni-200 focus:border-alumni-500 focus:ring-alumni-500"
                />
              </div>
              <Button size="lg" className="bg-alumni-500 hover:bg-alumni-600 h-12 px-8" onClick={handleExploreNetwork}>
                Explore Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Schools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">University Schools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover alumni from different schools and disciplines across our university
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {universitySchools.map((school, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden animate-scale-in cursor-pointer" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${school.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <school.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-alumni-600 transition-colors">
                    {school.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {school.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section id="featured-alumni" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Alumni</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet some of our outstanding graduates who are making a difference in their fields
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={alumni.image} 
                      alt={alumni.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-alumni-500 text-white">{alumni.batch}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{alumni.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="text-sm">{alumni.designation}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Star className="w-4 h-4 mr-2" />
                      <span className="text-sm">{alumni.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{alumni.location}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss out on exciting networking opportunities and knowledge sharing sessions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{event.title}</CardTitle>
                  <CardDescription className="flex items-center text-alumni-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.attendees} attending</span>
                  </div>
                  <Button size="sm" className="w-full bg-alumni-500 hover:bg-alumni-600">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-alumni-500 to-alumni-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/register" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-4 group-hover:animate-float" />
                  <h3 className="text-lg font-semibold mb-2">Join Network</h3>
                  <p className="text-sm text-white/80">Connect with alumni worldwide</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/events" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-4 group-hover:animate-float" />
                  <h3 className="text-lg font-semibold mb-2">Attend Events</h3>
                  <p className="text-sm text-white/80">Join reunions and networking</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/talks" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-4 group-hover:animate-float" />
                  <h3 className="text-lg font-semibold mb-2">Share Knowledge</h3>
                  <p className="text-sm text-white/80">Give talks and mentor others</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/contact" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 group-hover:animate-float" />
                  <h3 className="text-lg font-semibold mb-2">Get Support</h3>
                  <p className="text-sm text-white/80">Contact us for assistance</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-alumni-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold">Alumni Portal</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting graduates, fostering relationships, and building a stronger community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/network" className="text-gray-400 hover:text-white transition-colors">Alumni Network</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
                <li><Link to="/talks" className="text-gray-400 hover:text-white transition-colors">Talks</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Register</Link></li>
                <li><Link to="/stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest updates on alumni activities and events.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" aria-label="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button size="sm" className="bg-alumni-500 hover:bg-alumni-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 University of Excellence Alumni Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
