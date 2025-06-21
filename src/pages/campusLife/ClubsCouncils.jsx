import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';
import { useToast } from '../../hooks/use-toast';

const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-lg border bg-white text-black shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const ClubsCouncils = () => {
  const [selectedClub, setSelectedClub] = useState(null);
  const [joinClubOpen, setJoinClubOpen] = useState(false);
  const [selectedClubToJoin, setSelectedClubToJoin] = useState(null);
  const { toast } = useToast();

  const featuredClubs = [
    {
      id: 1,
      name: 'Robotics Club',
      category: 'Technical',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      members: 120,
      description: 'Building the future with cutting-edge robotics and AI',
      fullDescription: 'The Robotics Club is dedicated to exploring the fascinating world of robotics and artificial intelligence. Our members work on cutting-edge projects including autonomous robots, machine learning applications, and innovative automation solutions.',
      activities: ['Weekly workshops', 'Robot building competitions', 'AI/ML seminars', 'Industry visits'],
      achievements: ['Winner of Inter-University Robotics Competition 2023', 'Published 15+ research papers', 'Built campus delivery robot'],
      president: 'Arjun Sharma',
      email: 'robotics@gbu.ac.in',
      tagline: 'Code the Future'
    },
    {
      id: 2,
      name: 'Cultural Society',
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      members: 200,
      description: 'Celebrating arts, music, and diverse cultural heritage',
      fullDescription: 'Our Cultural Society brings together students from diverse backgrounds to celebrate art, music, dance, and cultural traditions. We organize major cultural events and provide a platform for artistic expression.',
      activities: ['Annual cultural fest', 'Music competitions', 'Dance workshops', 'Art exhibitions'],
      achievements: ['Best Cultural Event 2023', '50+ successful performances', 'Cultural exchange programs'],
      president: 'Priya Patel',
      email: 'cultural@gbu.ac.in',
      tagline: 'Celebrate Diversity'
    },
    {
      id: 3,
      name: 'Green Initiative',
      category: 'Social',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
      members: 85,
      description: 'Working towards a sustainable and eco-friendly campus',
      fullDescription: 'The Green Initiative focuses on environmental conservation and sustainability. We work on making our campus more eco-friendly through various green projects and awareness campaigns.',
      activities: ['Tree plantation drives', 'Waste management projects', 'Environmental seminars', 'Green energy initiatives'],
      achievements: ['Planted 1000+ trees', 'Reduced campus waste by 30%', 'Solar panel installation project'],
      president: 'Ankit Singh',
      email: 'green@gbu.ac.in',
      tagline: 'Green Tomorrow'
    },
    {
      id: 4,
      name: 'Sports Federation',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop',
      members: 150,
      description: 'Promoting fitness and competitive sports excellence',
      fullDescription: 'The Sports Federation manages all sporting activities on campus, from recreational sports to competitive tournaments. We aim to promote physical fitness and sporting excellence among students.',
      activities: ['Inter-hostel tournaments', 'Fitness training programs', 'Sports equipment management', 'Coach coordination'],
      achievements: ['Won 15 inter-university medals', 'State-level badminton champions', 'Best sports facility award'],
      president: 'Rahul Kumar',
      email: 'sports@gbu.ac.in',
      tagline: 'Play to Win'
    },
    {
      id: 5,
      name: 'Innovation Lab',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
      members: 95,
      description: 'Fostering entrepreneurship and innovative solutions',
      fullDescription: 'The Innovation Lab is a hub for entrepreneurship and creative problem-solving. We provide resources and mentorship for students to develop innovative solutions and start their own ventures.',
      activities: ['Startup incubation', 'Innovation challenges', 'Entrepreneur workshops', 'Pitch competitions'],
      achievements: ['5 successful startups launched', '₹2 crore in funding raised', 'Patent applications filed'],
      president: 'Sneha Gupta',
      email: 'innovation@gbu.ac.in',
      tagline: 'Innovate Today'
    },
    {
      id: 6,
      name: 'Photography Club',
      category: 'Creative',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop',
      members: 75,
      description: 'Capturing moments and telling stories through lens',
      fullDescription: 'The Photography Club is passionate about visual storytelling and artistic expression through photography. We organize photo walks, exhibitions, and workshops to help members develop their skills.',
      activities: ['Photo walks', 'Workshop sessions', 'Photo exhibitions', 'Campus documentation'],
      achievements: ['Campus photography archive', 'Award-winning photo exhibitions', 'Student magazine collaborations'],
      president: 'Karan Mehta',
      email: 'photography@gbu.ac.in',
      tagline: 'Frame the Moment'
    },
    {
      id: 7,
      name: 'Literary Society',
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop',
      members: 110,
      description: 'Exploring literature, creative writing, and public speaking',
      fullDescription: 'The Literary Society promotes reading, writing, and intellectual discourse. We organize debates, poetry sessions, book discussions, and writing workshops for literature enthusiasts.',
      activities: ['Poetry sessions', 'Debate competitions', 'Book clubs', 'Creative writing workshops'],
      achievements: ['Published student anthology', 'Inter-college debate winners', 'Monthly literary magazine'],
      president: 'Aisha Khan',
      email: 'literary@gbu.ac.in',
      tagline: 'Words that Inspire'
    },
    {
      id: 8,
      name: 'Music Society',
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      members: 130,
      description: 'Creating harmony through diverse musical expressions',
      fullDescription: 'The Music Society brings together musicians and music lovers to create, perform, and appreciate various forms of music. From classical to contemporary, we celebrate all genres.',
      activities: ['Music concerts', 'Jam sessions', 'Music lessons', 'Recording studio access'],
      achievements: ['Annual music festival', 'College anthem composition', 'Music video productions'],
      president: 'Ravi Sharma',
      email: 'music@gbu.ac.in',
      tagline: 'Music Unites'
    }
  ];

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
