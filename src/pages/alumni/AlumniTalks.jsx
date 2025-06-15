
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Calendar, Play, Clock, Users, ArrowLeft, Video, MapPin } from "lucide-react";

const AlumniTalks = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingTalks = [
    {
      id: 1,
      title: "Building Scalable Systems at Google",
      speaker: "Sarah Johnson",
      batch: "2018",
      designation: "Senior Software Engineer at Google",
      date: "2024-03-20",
      time: "6:00 PM IST",
      duration: "60 minutes",
      attendees: 150,
      description: "Learn about designing and implementing scalable distributed systems that handle millions of requests per day.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      topics: ["System Design", "Distributed Systems", "Scalability"],
      registrationLink: "#",
      isLive: false
    },
    {
      id: 2,
      title: "AI in Healthcare: Transforming Patient Care",
      speaker: "Dr. Michael Chen",
      batch: "2016",
      designation: "AI Research Scientist at Microsoft",
      date: "2024-03-25",
      time: "7:00 PM IST",
      duration: "45 minutes",
      attendees: 200,
      description: "Exploring how artificial intelligence is revolutionizing healthcare delivery and patient outcomes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      topics: ["AI", "Healthcare", "Machine Learning"],
      registrationLink: "#",
      isLive: false
    },
    {
      id: 3,
      title: "Entrepreneurship Journey: From Idea to IPO",
      speaker: "Alex Thompson",
      batch: "2015",
      designation: "CTO & Co-founder at TechCorp",
      date: "2024-04-02",
      time: "8:00 PM IST",
      duration: "90 minutes",
      attendees: 300,
      description: "A candid discussion about the entrepreneurial journey, challenges faced, and lessons learned.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      topics: ["Entrepreneurship", "Startups", "Leadership"],
      registrationLink: "#",
      isLive: true
    }
  ];

  const pastTalks = [
    {
      id: 4,
      title: "Data Science in Finance",
      speaker: "Emily Rodriguez",
      batch: "2019",
      designation: "Data Scientist at Netflix",
      date: "2024-02-15",
      time: "6:00 PM IST",
      duration: "60 minutes",
      attendees: 180,
      description: "How data science is transforming financial services and investment decisions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      topics: ["Data Science", "Finance", "Analytics"],
      videoLink: "https://youtube.com/watch?v=example",
      isLive: false
    },
    {
      id: 5,
      title: "Sustainable Engineering Solutions",
      speaker: "David Park",
      batch: "2017",
      designation: "Engineering Manager at Tesla",
      date: "2024-01-28",
      time: "7:00 PM IST",
      duration: "75 minutes",
      attendees: 250,
      description: "Exploring sustainable engineering practices and green technology innovations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      topics: ["Sustainability", "Engineering", "Green Tech"],
      videoLink: "https://youtube.com/watch?v=example",
      isLive: false
    },
    {
      id: 6,
      title: "Digital Marketing Trends 2024",
      speaker: "Jessica Kim",
      batch: "2020",
      designation: "Marketing Director at Spotify",
      date: "2024-01-10",
      time: "6:30 PM IST",
      duration: "50 minutes",
      attendees: 120,
      description: "Latest trends in digital marketing and brand building strategies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6cb?w=400&h=400&fit=crop&crop=face",
      topics: ["Marketing", "Digital Strategy", "Branding"],
      videoLink: "https://youtube.com/watch?v=example",
      isLive: false
    }
  ];

  const currentTalks = activeTab === "upcoming" ? upcomingTalks : pastTalks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-alumni-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-alumni-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">Alumni Talks</h1>
            </div>
            <Button className="bg-alumni-500 hover:bg-alumni-600">
              Propose a Talk
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-alumni-500 to-alumni-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Learn from the Best
          </h1>
          <p className="text-xl mb-8 text-alumni-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Exclusive talks by our accomplished alumni sharing their expertise and insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="outline" 
              className="bg-white text-alumni-600 hover:bg-alumni-50 border-white"
              onClick={() => setActiveTab("upcoming")}
            >
              View Upcoming Talks
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10"
              onClick={() => setActiveTab("past")}
            >
              Watch Past Sessions
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-8 mb-8">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`pb-2 border-b-2 font-semibold transition-colors ${
                activeTab === "upcoming"
                  ? "border-alumni-500 text-alumni-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Upcoming Talks ({upcomingTalks.length})
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`pb-2 border-b-2 font-semibold transition-colors ${
                activeTab === "past"
                  ? "border-alumni-500 text-alumni-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Past Sessions ({pastTalks.length})
            </button>
          </div>
        </div>
      </section>

      {/* Talks Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTalks.map((talk, index) => (
              <Card 
                key={talk.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={talk.image} 
                      alt={talk.speaker}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge className="bg-alumni-500 text-white">{talk.batch}</Badge>
                      {talk.isLive && (
                        <Badge className="bg-red-500 text-white animate-pulse">
                          LIVE
                        </Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {activeTab === "upcoming" ? (
                        <Button size="sm" variant="secondary">
                          Register Now
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary">
                          <Play className="w-4 h-4 mr-2" />
                          Watch Now
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {talk.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      by <span className="font-medium">{talk.speaker}</span>
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {talk.designation}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {talk.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {talk.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {talk.date} at {talk.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {talk.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {talk.attendees} {activeTab === "upcoming" ? "registered" : "attended"}
                      </div>
                    </div>

                    {activeTab === "upcoming" ? (
                      <Button 
                        className="w-full bg-alumni-500 hover:bg-alumni-600"
                        onClick={() => window.open(talk.registrationLink, '_blank')}
                      >
                        Register for Talk
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open(talk.videoLink, '_blank')}
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Watch Recording
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Share Your Expertise?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our speaker community and inspire the next generation of graduates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-alumni-500 hover:bg-alumni-600">
              Propose a Talk
            </Button>
            <Button size="lg" variant="outline">
              View Speaker Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniTalks;
