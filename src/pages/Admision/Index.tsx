import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AdmissionProcess } from '@/components/admission/AdmissionProcess';
import { CoursesOffered } from '@/components/admission/CoursesOffered';
import { EligibilityReservation } from '@/components/admission/EligibilityReservation';
import { FeeStructure } from '../../components/admission/FeeStructure';
import { InternationalAdmissions } from '../../components/admission/InternationalAdmissions';
import { Hero3D } from '@/components/ui/Hero3D';
import { FloatingElements } from '../../components/ui/FloatingElements';
import { Link } from 'react-router-dom';
import { Bell, Calendar, Star, Download, ExternalLink, X, CheckCircle, Clock } from 'lucide-react';
const Index = () => {
  const [activeTab, setActiveTab] = useState("admission-process");
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false);

  // Show admission popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdmissionPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const scrollToTimeline = () => {
    setActiveTab("admission-process");
    setTimeout(() => {
      const timelineElement = document.querySelector('[data-timeline]');
      if (timelineElement) {
        timelineElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  const notices = [{
    title: "Admission Portal Open for Academic Year 2024-25",
    date: "December 15, 2024",
    type: "Important",
    link: "#"
  }, {
    title: "UG Merit List Released - First Round",
    date: "December 10, 2024",
    type: "Merit List",
    link: "#"
  }, {
    title: "Document Verification Schedule",
    date: "December 8, 2024",
    type: "Schedule",
    link: "#"
  }, {
    title: "Fee Payment Deadline Extended",
    date: "December 5, 2024",
    type: "Update",
    link: "#"
  }];
  const events = [{
    title: "Online Counseling Session",
    date: "December 20, 2024",
    time: "10:00 AM",
    venue: "Virtual Platform",
    description: "Interactive session for admission queries"
  }, {
    title: "Document Verification Drive",
    date: "December 22, 2024",
    time: "9:00 AM - 5:00 PM",
    venue: "University Campus",
    description: "Physical verification of original documents"
  }, {
    title: "Orientation Program",
    date: "January 5, 2025",
    time: "11:00 AM",
    venue: "Main Auditorium",
    description: "Welcome session for new students"
  }];
  const highlights = [{
    title: "95% Placement Rate",
    description: "Our students secure positions in top companies",
    icon: Star,
    color: "from-emerald-500 to-teal-600"
  }, {
    title: "100+ Industry Partners",
    description: "Strong network with leading organizations",
    icon: Star,
    color: "from-blue-500 to-indigo-600"
  }, {
    title: "Award-Winning Faculty",
    description: "Learn from renowned experts and researchers",
    icon: Star,
    color: "from-purple-500 to-violet-600"
  }, {
    title: "World-Class Infrastructure",
    description: "Modern facilities and cutting-edge technology",
    icon: Star,
    color: "from-orange-500 to-red-600"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Admission Status Popup */}
      <Dialog open={showAdmissionPopup} onOpenChange={setShowAdmissionPopup}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-green-800">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Admission Status
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 font-semibold">ADMISSIONS OPEN</span>
              </div>
              <p className="text-gray-700">
                Admissions for Academic Year 2024-25 are now open. Apply before the deadline!
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Deadline: March 31, 2025</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/register" className="flex-1">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all">
                  Apply Now
                </button>
              </Link>
              <button onClick={() => setShowAdmissionPopup(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                Later
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <FloatingElements />

      {/* Enhanced Hero Section inspired by UT Austin */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/cf6445bc-71b6-4fda-957e-f2dffd4cbaee.png')`
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

        {/* University Logo/Emblem */}
        <div className="absolute top-8 left-8 z-30">
          <img alt="University Logo" className="h-20 w-20 object-contain filter " src="/lovable-uploads/2b324e88-1e9b-407d-89a9-7508a2518784.png" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            {/* University Name */}
            <h2 className="text-2xl md:text-3xl font-light text-orange-300 mb-4 tracking-wide">
              GAUTAM BUDDHA UNIVERSITY
            </h2>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-scale-in">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
                ADMISSIONS
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                PORTAL
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full mx-4"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-300 font-light leading-relaxed">
            Embark on a transformative educational journey at one of India's premier universities.
            <span className="text-orange-300 font-medium"> Excellence in Education, Innovation in Research.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
            <Link to="/register">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 border border-orange-400/20 min-w-[200px]">
                Start Application
              </button>
            </Link>
            <Link to="/login">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl border border-white/20 min-w-[200px] hover:bg-white/20">
                Student Login
              </button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in animation-delay-900">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">50+</div>
              <div className="text-gray-300 text-sm">Academic Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">15000+</div>
              <div className="text-gray-300 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">95%</div>
              <div className="text-gray-300 text-sm">Placement Rate</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice/Circular Section */}
      <section className="relative z-10 bg-gradient-to-r from-slate-800/90 to-blue-800/90 backdrop-blur-lg py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-400 mb-4 flex items-center justify-center gap-3">
              <Bell className="h-8 w-8" />
              Notice & Circulars
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notices.map((notice, index) => <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${notice.type === 'Important' ? 'bg-red-500/20 text-red-300' : notice.type === 'Merit List' ? 'bg-green-500/20 text-green-300' : notice.type === 'Schedule' ? 'bg-blue-500/20 text-blue-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                      {notice.type}
                    </span>
                    <ExternalLink className="h-4 w-4 text-amber-400" />
                  </div>
                  <CardTitle className="text-white text-lg">{notice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{notice.date}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative z-10 bg-gradient-to-r from-indigo-800/90 to-purple-800/90 backdrop-blur-lg py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-400 mb-4 flex items-center justify-center gap-3">
              <Calendar className="h-8 w-8" />
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {events.map((event, index) => <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <p><strong>Time:</strong> {event.time}</p>
                    <p><strong>Venue:</strong> {event.venue}</p>
                  </div>
                  <p className="text-gray-300 text-sm">{event.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative z-10 bg-gradient-to-r from-purple-800/90 to-pink-800/90 backdrop-blur-lg py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-400 mb-4 flex items-center justify-center gap-3">
              <Star className="h-8 w-8" />
              University Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 bg-white/90 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-lg rounded-xl mb-8 p-2">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 gap-2 bg-transparent">
                <TabsTrigger value="admission-process" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105">
                  Admission Process
                </TabsTrigger>
                <TabsTrigger value="courses" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105">
                  Courses Offered
                </TabsTrigger>
                <TabsTrigger value="eligibility" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105">
                  Eligibility & Reservation
                </TabsTrigger>
                <TabsTrigger value="fee-structure" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105">
                  Fee Structure
                </TabsTrigger>
                <TabsTrigger value="international" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105">
                  International
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="animate-fade-in">
              <TabsContent value="admission-process" className="mt-0">
                <AdmissionProcess onScrollToTimeline={scrollToTimeline} />
              </TabsContent>

              <TabsContent value="courses" className="mt-0">
                <CoursesOffered />
              </TabsContent>

              <TabsContent value="eligibility" className="mt-0">
                <EligibilityReservation />
              </TabsContent>

              <TabsContent value="fee-structure" className="mt-0">
                <FeeStructure />
              </TabsContent>

              <TabsContent value="international" className="mt-0">
                <InternationalAdmissions />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </div>;
};
export default Index;
