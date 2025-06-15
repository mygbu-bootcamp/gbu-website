
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowLeft, 
  Clock,
  Star,
  PartyPopper,
  Camera,
  Utensils,
  Briefcase
} from "lucide-react";

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2024",
      date: "2024-04-15",
      time: "10:00 AM - 8:00 PM",
      location: "University Campus, Main Auditorium",
      type: "reunion",
      status: "upcoming",
      attendees: 500,
      registered: 342,
      price: "Free",
      description: "Join us for our biggest alumni gathering of the year! Reconnect with old friends, meet new connections, and celebrate our shared university experience.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
      highlights: ["Networking Sessions", "Live Music", "Food & Drinks", "Awards Ceremony"],
      organizer: "Alumni Association"
    },
    {
      id: 2,
      title: "Tech Industry Networking Mixer",
      date: "2024-03-28",
      time: "6:00 PM - 9:00 PM",
      location: "Downtown Conference Center",
      type: "networking",
      status: "upcoming",
      attendees: 150,
      registered: 89,
      price: "$25",
      description: "Connect with alumni working in the tech industry. Perfect for professionals looking to expand their network and explore new opportunities.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      highlights: ["Industry Insights", "Job Opportunities", "Startup Pitches", "Panel Discussion"],
      organizer: "Tech Alumni Chapter"
    },
    {
      id: 3,
      title: "Homecoming Weekend Celebration",
      date: "2024-05-20",
      time: "All Day Event",
      location: "University Campus",
      type: "reunion",
      status: "upcoming",
      attendees: 800,
      registered: 456,
      price: "Free",
      description: "A weekend-long celebration featuring campus tours, sports events, cultural programs, and class reunions.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=400&fit=crop",
      highlights: ["Campus Tours", "Sports Events", "Cultural Programs", "Class Reunions"],
      organizer: "University Alumni Office"
    },
    {
      id: 4,
      title: "Career Development Workshop",
      date: "2024-03-25",
      time: "2:00 PM - 5:00 PM",
      location: "Online Event",
      type: "workshop",
      status: "upcoming",
      attendees: 200,
      registered: 156,
      price: "Free",
      description: "Enhance your career prospects with expert guidance on resume building, interview skills, and professional networking.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      highlights: ["Resume Review", "Mock Interviews", "Networking Tips", "Career Coaching"],
      organizer: "Career Services"
    },
    {
      id: 5,
      title: "New Year Gala 2024",
      date: "2024-01-15",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom Hotel",
      type: "social",
      status: "completed",
      attendees: 300,
      registered: 300,
      price: "$75",
      description: "A glamorous evening celebrating the new year with fellow alumni, featuring dinner, dancing, and entertainment.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop",
      highlights: ["Gala Dinner", "Live Entertainment", "Dancing", "Networking"],
      organizer: "Social Committee"
    },
    {
      id: 6,
      title: "Mentorship Program Launch",
      date: "2024-02-10",
      time: "11:00 AM - 3:00 PM",
      location: "University Conference Hall",
      type: "workshop",
      status: "completed",
      attendees: 120,
      registered: 120,
      price: "Free",
      description: "Launch of our new mentorship program connecting experienced alumni with recent graduates and current students.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
      highlights: ["Program Overview", "Mentor Matching", "Success Stories", "Registration"],
      organizer: "Mentorship Committee"
    }
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case "reunion":
        return PartyPopper;
      case "networking":
        return Users;
      case "workshop":
        return Briefcase;
      case "social":
        return Camera;
      default:
        return Calendar;
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case "reunion":
        return "bg-purple-500";
      case "networking":
        return "bg-blue-500";
      case "workshop":
        return "bg-green-500";
      case "social":
        return "bg-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredEvents = events.filter(event => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "upcoming") return event.status === "upcoming";
    if (selectedFilter === "completed") return event.status === "completed";
    return event.type === selectedFilter;
  });

  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const completedEvents = events.filter(event => event.status === "completed");

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
              <h1 className="text-xl font-bold text-gray-900">Events & Reunions</h1>
            </div>
            <Button className="bg-alumni-500 hover:bg-alumni-600">
              Organize Event
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-alumni-500 to-alumni-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Events & Reunions
          </h1>
          <p className="text-xl mb-8 text-alumni-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Stay connected through meaningful gatherings and professional development opportunities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold">{upcomingEvents.length}</div>
              <div className="text-alumni-100">Upcoming Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{completedEvents.length}</div>
              <div className="text-alumni-100">Past Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1,200+</div>
              <div className="text-alumni-100">Total Attendees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { value: "all", label: "All Events" },
              { value: "upcoming", label: "Upcoming" },
              { value: "completed", label: "Past Events" },
              { value: "reunion", label: "Reunions" },
              { value: "networking", label: "Networking" },
              { value: "workshop", label: "Workshops" },
              { value: "social", label: "Social" }
            ].map((filter) => (
              <Button
                key={filter.value}
                variant={selectedFilter === filter.value ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.value)}
                className={selectedFilter === filter.value ? "bg-alumni-500 hover:bg-alumni-600" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your filters or check back later for new events.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredEvents.map((event, index) => {
                const EventIcon = getEventIcon(event.type);
                return (
                  <Card 
                    key={event.id} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex space-x-2">
                          <Badge className={`${getEventColor(event.type)} text-white`}>
                            <EventIcon className="w-3 h-3 mr-1" />
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                          {event.status === "upcoming" && (
                            <Badge className="bg-green-500 text-white">
                              Upcoming
                            </Badge>
                          )}
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-800">
                            {event.price}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {event.registered}/{event.attendees} {event.status === "upcoming" ? "registered" : "attended"}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.highlights.map((highlight, highlightIndex) => (
                              <Badge key={highlightIndex} variant="secondary" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="text-sm text-gray-500">
                            by {event.organizer}
                          </div>
                          {event.status === "upcoming" ? (
                            <Button size="sm" className="bg-alumni-500 hover:bg-alumni-600">
                              {event.registered === event.attendees ? "Join Waitlist" : "Register Now"}
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              View Photos
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Organize an Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Help bring our alumni community together by organizing your own event or reunion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-alumni-500 hover:bg-alumni-600">
              <PartyPopper className="w-5 h-5 mr-2" />
              Organize Event
            </Button>
            <Button size="lg" variant="outline">
              Event Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
