
import React, {useState } from 'react';

import { Calendar, MapPin, Users, Clock, Camera, Plus, Heart, Star } from 'lucide-react';
import { toast } from '../../hooks/use-toast';
// Minimal Select component implementation for usage in this file
// Minimal Dialog component implementation for usage in this file
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-full"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const DialogTitle = ({ children }) => (
  <h2 className="text-xl font-bold text-gray-900">{children}</h2>
);


const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (val) => {
    onValueChange(val);
    setOpen(false);
  };
  // Find SelectTrigger and SelectContent children and clone with props
  let trigger = null;
  let content = null;
  React.Children.forEach(children, (child) => {
    if (child && child.type === SelectTrigger) {
      trigger = React.cloneElement(child, {
        onClick: () => setOpen((o) => !o),
        value,
        open,
      });
    } else if (child && child.type === SelectContent) {
      content = open
        ? React.cloneElement(child, { onSelect: handleSelect, value })
        : null;
    }
  });
  return (
    <div className="relative">
      {trigger}
      {content}
    </div>
  );
};

const SelectTrigger = ({ children, onClick, value, open }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-white flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      open ? "ring-2 ring-blue-500" : ""
    }`}
  >
    {children}
    <span className="ml-2 text-gray-400">{open ? "▲" : "▼"}</span>
  </button>
);

const SelectContent = ({ children, onSelect }) => (
  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
    {React.Children.map(children, (child) =>
      child && child.type === SelectItem
        ? React.cloneElement(child, { onSelect })
        : child
    )}
  </div>
);

const SelectItem = ({ value, children, onSelect }) => (
  <div
    className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm"
    onClick={() => onSelect(value)}
    tabIndex={0}
    role="option"
    aria-selected="false"
  >
    {children}
  </div>
);

const SelectValue = ({ placeholder }) => (
  <span className="text-gray-700">{placeholder}</span>
);
 // Tabs components (minimal implementation)
const Tabs = ({ defaultValue, children, className }) => {
  const [value, setValue] = useState(defaultValue);
  // Find all TabsTrigger and TabsContent children and clone them with props
  const triggers = [];
  const contents = [];
  React.Children.forEach(children, child => {
    if (child && child.type === TabsList) {
      triggers.push(React.cloneElement(child, { value, setValue }));
    } else if (child && child.type === TabsContent) {
      contents.push(React.cloneElement(child, { value }));
    }
  });
  return <div className={className}>{triggers}{contents}</div>;
};

const TabsList = ({ children, value, setValue, className }) => (
  <div className={className}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { value, setValue })
    )}
  </div>
);

const TabsTrigger = ({ value: tabValue, setValue, value, children, className }) => (
  <button
    type="button"
    className={`${className} ${tabValue === value ? 'bg-blue-100 font-bold' : ''}`}
    onClick={() => setValue(tabValue)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children, value: tabValue, className }) => {
  // tabValue is the value prop on TabsContent, value is the current selected
  if (tabValue !== value) return null;
  return <div className={className}>{children}</div>;
};
// Sample events data

  const Input = ({ id, ...props }) => (
    <input
      id={id}
      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );

  const Textarea = ({ id, ...props }) => (
    <textarea
      id={id}
      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );

  const Button = ({ children, className = '', ...props }) => (
    <button
      className={`rounded-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>
  );

  const Badge = ({ children, className = '' }) => (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );

  const Card = ({ children, className = '' }) => (
    <div className={`rounded-lg bg-white shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

  const CardTitle = ({ children }) => <h3 className="text-lg font-semibold">{children}</h3>;

  const CardContent = ({ children }) => <div className="space-y-4">{children}</div>;


const EventsReunions = () => {
  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    graduationYear: '',
    phone: '',
    dietaryRestrictions: ''
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventData, setNewEventData] = useState({
    title: '',
    description: '',
    preferredDate: '',
    location: '',
    eventType: '',
    expectedAttendees: '',
    contactEmail: '',
    additionalNotes: ''
  });
  const [showEventForm, setShowEventForm] = useState(false);

  const handleRSVP = (event) => {
    setSelectedEvent(event);
  };

  const submitRSVP = () => {
    if (!rsvpData.name || !rsvpData.email || !rsvpData.graduationYear) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "RSVP Confirmed!",
      description: `You're registered for "${selectedEvent.title}". Details will be sent to your email.`,
    });

    setSelectedEvent(null);
    setRsvpData({ name: '', email: '', graduationYear: '', phone: '', dietaryRestrictions: '' });
  };

  const submitEventProposal = () => {
    if (!newEventData.title || !newEventData.description || !newEventData.contactEmail) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Event proposal submitted!",
      description: "Your event proposal has been sent to the alumni team for review. You'll hear back within 3-5 business days.",
    });

    setShowEventForm(false);
    setNewEventData({
      title: '',
      description: '',
      preferredDate: '',
      location: '',
      eventType: '',
      expectedAttendees: '',
      contactEmail: '',
      additionalNotes: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Reunions</h1>
          <p className="text-xl md:text-2xl mb-8">
            Reconnect with classmates, build new relationships, and celebrate our shared Smart Campus journey.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              Year-round Events
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              All Batches Welcome
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-8">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              Past Events
            </TabsTrigger>
            <TabsTrigger value="propose" className="flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Propose Event
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
              <p className="text-gray-600">Join us for these exciting upcoming alumni gatherings</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white">
                        {event.attendees}/{event.maxCapacity}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {event.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">Organized by {event.organizer}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700 text-sm">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-green-500" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-purple-500" />
                          {event.attendees} attending
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-gray-700">Price: {event.price}</p>
                      </div>

                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleRSVP(event)}
                      >
                        RSVP Now
                      </Button>

                      {event.attendees >= event.maxCapacity * 0.9 && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                          <p className="text-red-800 text-xs font-medium text-center">
                            🔥 Almost full! Register soon
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Past Event Gallery</h2>
              <p className="text-gray-600">Relive the memories from our previous gatherings</p>
            </div>

            {pastEvents.map((event) => (
              <Card key={event.id} className="border border-gray-200 overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendees} attendees
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Completed
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {/* Event Highlights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="h-4 w-4 mr-2 text-yellow-500" />
                        Event Highlights
                      </h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <Heart className="h-4 w-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Photo Gallery */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Camera className="h-4 w-4 mr-2 text-blue-500" />
                        Photo Gallery
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {event.images.map((image, index) => (
                          <div 
                            key={index} 
                            className="relative group cursor-pointer overflow-hidden rounded-lg"
                          >
                            <img
                              src={image}
                              alt={`${event.title} - Photo ${index + 1}`}
                              className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Click on photos to view in full size
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="propose" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Propose a New Event</h2>
              <p className="text-gray-600">Have an idea for an alumni gathering? We'd love to hear it!</p>
            </div>

            <Card className="max-w-2xl mx-auto border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Event Proposal Form</CardTitle>
                <p className="text-gray-600">
                  Fill out this form to propose a new alumni event. Our team will review and get back to you.
                </p>
              </CardHeader>
              
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="eventTitle">Event Title *</Label>
                      <Input
                        id="eventTitle"
                        value={newEventData.title}
                        onChange={(e) => setNewEventData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g., Class of 2020 Beach Reunion"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select value={newEventData.eventType} onValueChange={(value) => setNewEventData(prev => ({ ...prev, eventType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reunion">Class Reunion</SelectItem>
                          <SelectItem value="networking">Networking Event</SelectItem>
                          <SelectItem value="sports">Sports/Recreation</SelectItem>
                          <SelectItem value="social">Social Gathering</SelectItem>
                          <SelectItem value="professional">Professional Development</SelectItem>
                          <SelectItem value="charity">Charity/Fundraising</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="eventDescription">Event Description *</Label>
                    <Textarea
                      id="eventDescription"
                      value={newEventData.description}
                      onChange={(e) => setNewEventData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your event idea, activities planned, and what makes it special..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={newEventData.preferredDate}
                        onChange={(e) => setNewEventData(prev => ({ ...prev, preferredDate: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="location">Preferred Location</Label>
                      <Input
                        id="location"
                        value={newEventData.location}
                        onChange={(e) => setNewEventData(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="e.g., Smart Campus, Downtown Hotel"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="expectedAttendees">Expected Attendees</Label>
                      <Input
                        id="expectedAttendees"
                        value={newEventData.expectedAttendees}
                        onChange={(e) => setNewEventData(prev => ({ ...prev, expectedAttendees: e.target.value }))}
                        placeholder="e.g., 50-75 people"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contactEmail">Your Email *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={newEventData.contactEmail}
                        onChange={(e) => setNewEventData(prev => ({ ...prev, contactEmail: e.target.value }))}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      value={newEventData.additionalNotes}
                      onChange={(e) => setNewEventData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                      placeholder="Any additional information, special requirements, or ideas you'd like to share..."
                      rows={3}
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Our alumni team will review your proposal within 3-5 business days</li>
                      <li>• We'll contact you to discuss logistics, budget, and planning details</li>
                      <li>• Once approved, we'll help you promote and organize the event</li>
                      <li>• Alumni Relations will provide support and resources as needed</li>
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={submitEventProposal}
                      className="bg-green-600 hover:bg-green-700 px-8"
                    >
                      Submit Proposal
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* RSVP Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              RSVP for "{selectedEvent?.title}"
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">{selectedEvent?.title}</p>
                <p className="text-sm text-gray-600">
                  {selectedEvent && new Date(selectedEvent.date).toLocaleDateString()} at {selectedEvent?.time}
                </p>
                <p className="text-xs text-blue-600">{selectedEvent?.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rsvpName">Full Name *</Label>
                <Input
                  id="rsvpName"
                  value={rsvpData.name}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="rsvpEmail">Email *</Label>
                <Input
                  id="rsvpEmail"
                  type="email"
                  value={rsvpData.email}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="graduationYear">Graduation Year *</Label>
                <Input
                  id="graduationYear"
                  value={rsvpData.graduationYear}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, graduationYear: e.target.value }))}
                  placeholder="e.g., 2019"
                />
              </div>
              <div>
                <Label htmlFor="rsvpPhone">Phone Number</Label>
                <Input
                  id="rsvpPhone"
                  value={rsvpData.phone}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="dietaryRestrictions">Dietary Restrictions/Preferences</Label>
              <Textarea
                id="dietaryRestrictions"
                value={rsvpData.dietaryRestrictions}
                onChange={(e) => setRsvpData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                placeholder="Please mention any dietary restrictions or food allergies..."
                rows={2}
              />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 text-sm">
                📅 Event details and any updates will be sent to your email. Please mark your calendar!
              </p>
            </div>

            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setSelectedEvent(null)}
              >
                Cancel
              </Button>
              <Button 
                onClick={submitRSVP}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Confirm RSVP
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventsReunions;

const upcomingEvents = [
  {
    id: 1,
    title: "Class of 2019 - 5 Year Reunion",
    date: "2024-07-15",
    time: "18:00",
    location: "Grand Ballroom, Smart Campus",
    description: "Join your classmates for an evening of networking, memories, and celebration. Dinner included.",
    organizer: "Alumni Relations Team",
    attendees: 45,
    maxCapacity: 100,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop",
    tags: ["Reunion", "Networking", "Dinner"],
    price: "Free for alumni"
  },
  {
    id: 2,
    title: "Tech Alumni Networking Meetup",
    date: "2024-06-30",
    time: "19:00",
    location: "Tech Hub, Downtown",
    description: "Connect with fellow tech alumni working in the industry. Presentations on latest tech trends.",
    organizer: "Sarah Johnson (CS '18)",
    attendees: 28,
    maxCapacity: 50,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
    tags: ["Networking", "Tech", "Career"],
    price: "$15 (includes refreshments)"
  },
  {
    id: 3,
    title: "Alumni Golf Tournament",
    date: "2024-08-10",
    time: "09:00",
    location: "Riverside Golf Club",
    description: "Annual alumni golf tournament followed by lunch and prizes. All skill levels welcome.",
    organizer: "Michael Chen (ME '19)",
    attendees: 32,
    maxCapacity: 64,
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=200&fit=crop",
    tags: ["Sports", "Tournament", "Lunch"],
    price: "$50 (includes green fees & lunch)"
  }
];

const pastEvents = [
  {
    id: 4,
    title: "Annual Alumni Gala 2024",
    date: "2024-03-20",
    location: "Smart Campus Auditorium",
    attendees: 150,
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop"
    ],
    highlights: [
      "Outstanding Alumni Awards ceremony",
      "Networking sessions with 5 different industries",
      "Fundraising for student scholarships raised $50,000"
    ]
  }
];