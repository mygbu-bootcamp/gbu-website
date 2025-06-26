import React, { useState } from 'react';
import { useToast } from '../../hooks/use-toast';

// ====== UI COMPONENTS (INLINE) ======

// Button
export const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium focus:outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Badge
export const Badge = ({ children, className = '', ...props }) => (
  <span
    className={`inline-block text-sm font-semibold px-3 py-1 rounded-full text-white ${className}`}
    {...props}
  >
    {children}
  </span>
);

// Dialog Components
export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => onOpenChange(false)}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export const DialogContent = ({ children, className = '' }) => (
  <div className={`bg-white p-6 rounded-lg shadow-xl w-full ${className}`}>
    {children}
  </div>
);

export const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const DialogTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

// Input
export const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

// Label
export const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium mb-1">
    {children}
  </label>
);

// Textarea
export const Textarea = ({ className = '', ...props }) => (
  <textarea
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    rows={4}
    {...props}
  />
);

// Carousel Components (basic logic)
export const Carousel = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>{children}</div>
);

export const CarouselContent = ({ children, className = '' }) => (
  <div className={`flex gap-4 transition-transform duration-500 ${className}`}>
    {children}
  </div>
);

export const CarouselItem = ({ children, className = '' }) => (
  <div className={`shrink-0 ${className}`}>{children}</div>
);

export const CarouselPrevious = ({ onClick, className = '' }) => (
  <button onClick={onClick} className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${className}`}>
    ◀
  </button>
);

export const CarouselNext = ({ onClick, className = '' }) => (
  <button onClick={onClick} className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${className}`}>
    ▶
  </button>
);

// Card Components
export const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border bg-white text-black shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);



const ClubsCouncils = () => {
  const [selectedClub, setSelectedClub] = useState(null);
  const [joinClubOpen, setJoinClubOpen] = useState(false);
  const [selectedClubToJoin, setSelectedClubToJoin] = useState(null);
  const { toast } = useToast();

  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const handleJoinClub = (club) => {
    setSelectedClubToJoin(club);
    setJoinClubOpen(true);
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const joinData = {
      club: selectedClubToJoin.name,
      studentName: formData.get('studentName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      year: formData.get('year'),
      branch: formData.get('branch'),
      experience: formData.get('experience'),
      motivation: formData.get('motivation')
    };
    
    console.log('Join club request:', joinData);
    
    toast({
      title: "Club Join Request Submitted",
      description: `Your request to join ${selectedClubToJoin.name} has been submitted successfully. You will be contacted within 48 hours.`,
    });
    
    setJoinClubOpen(false);
    setSelectedClubToJoin(null);
    e.target.reset();
  };

  return (
    <section id="clubs-events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Student <span className="text-blue-600">Clubs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join vibrant communities and participate in exciting activities that shape your college experience.
          </p>
        </div>

        {/* Clubs Horizontal Carousel */}
        <div className="mb-16">
          <Carousel className="w-5/6 mx-auto">
            <CarouselContent className="ml-4">
              {featuredClubs.map((club, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card 
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-2xl h-full"
                    onClick={() => handleClubClick(club)}
                  >
                    <CardContent className="  p-0 h-full flex flex-col">
                      <div className="relative overflow-hidden rounded-t-2xl">
                        <img
                          src={club.image}
                          alt={club.name}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <Badge className="absolute top-3 right-3 bg-blue-600">{club.category}</Badge>
                        <div className="absolute bottom-3 left-3 text-white">
                          <h4 className="font-bold text-lg">{club.name}</h4>
                          <p className="text-sm opacity-90">{club.tagline}</p>
                          <p className="text-xs opacity-75">{club.members} members</p>
                        </div>
                      </div>
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <p className="text-gray-600 text-sm mb-4 flex-grow">{club.description}</p>
                        <Button 
                          size="sm" 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleJoinClub(club);
                          }}
                        >
                          Join Club
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Club Details Modal */}
        {selectedClub && (
          <Dialog open={!!selectedClub} onOpenChange={() => setSelectedClub(null)}>
            <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedClub.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedClub.image}
                  alt={selectedClub.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex items-center gap-4">
                  <Badge className="bg-blue-600">{selectedClub.category}</Badge>
                  <span className="text-gray-600">{selectedClub.members} members</span>
                  <span className="text-gray-600">President: {selectedClub.president}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">About this Club</h3>
                  <p className="text-gray-600">{selectedClub.fullDescription}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Activities</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedClub.activities.map((activity, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-blue-600">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Achievements</h3>
                  <ul className="space-y-2">
                    {selectedClub.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">🏆</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md"
                    onClick={() => {
                      setSelectedClub(null);
                      handleJoinClub(selectedClub);
                    }}
                  >
                    Join Club
                  </Button>
                  <Button variant="outline" className="px-4 py-2 rounded-lg shadow-md">
                    Contact: {selectedClub.email}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Join Club Modal */}
        <Dialog open={joinClubOpen} onOpenChange={setJoinClubOpen}>
          <DialogContent className="bg-white max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Join {selectedClubToJoin?.name}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleJoinSubmit} className="space-y-4">
              <div>
                <Label htmlFor="studentName">Full Name *</Label>
                <Input id="studentName" name="studentName" required placeholder="Enter your full name" />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <Label htmlFor="year">Year of Study *</Label>
                <select id="year" name="year" required className="w-full p-2 border rounded-md">
                  <option value="">Select year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                  <option value="pg">Post Graduate</option>
                </select>
              </div>
              <div>
                <Label htmlFor="branch">Branch/Department *</Label>
                <Input id="branch" name="branch" required placeholder="e.g., Computer Science, Mechanical" />
              </div>
              <div>
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea id="experience" name="experience" placeholder="Any relevant skills or experience..." />
              </div>
              <div>
                <Label htmlFor="motivation">Why do you want to join?</Label>
                <Textarea id="motivation" name="motivation" placeholder="Your motivation for joining this club..." />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Application
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ClubsCouncils;
