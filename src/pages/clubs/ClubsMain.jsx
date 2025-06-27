
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Trophy, ExternalLink } from 'lucide-react';
// Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-4 ${className}`}>{children}</div>
);

// Button component
const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
    secondary:
      "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  };
  const sizes = {
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${
        sizes[size] || ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge component
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);
 const clubsData = [
  {
    id: 'tech-innovators',
    name: 'Tech Innovators Club',
    tagline: "Building Tomorrow's Technology Today",
    category: 'Technical',
    logo: '/placeholder.svg',
    banner: '/placeholder.svg',
    memberCount: 156,
    description: 'A vibrant community of tech enthusiasts dedicated to exploring cutting-edge technologies, fostering innovation, and building solutions that matter. We bridge the gap between academic learning and real-world application.',
    objectives: [
      'Foster innovation and creativity in technology',
      'Provide hands-on experience with latest tech stacks',
      'Create networking opportunities with industry professionals',
      'Develop leadership and project management skills'
    ],
    history: 'Founded in 2019, Tech Innovators Club has grown from a small group of coding enthusiasts to one of the most active technical communities on campus. Our journey began with weekly coding sessions and has evolved into organizing hackathons, tech talks, and industry collaborations.',
    achievements: [
      'Winner of Inter-University Hackathon 2023',
      'Organized 15+ workshops with industry experts',
      '3 startup ideas incubated through club initiatives',
      'Placed 50+ members in tech internships'
    ],
    policies: {
      codeOfConduct: [
        'Respect all members regardless of skill level',
        'Contribute positively to club activities',
        'Maintain confidentiality of sensitive project information',
        'Follow ethical coding and development practices'
      ],
      eligibility: [
        'Open to all students regardless of branch',
        'Basic programming knowledge preferred',
        'Enthusiasm to learn and collaborate',
        'Commitment to attend regular meetings'
      ],
      responsibilities: [
        'President: Overall club leadership and strategic planning',
        'Vice-President: Event coordination and member engagement',
        'Secretary: Documentation and communication management',
        'Treasurer: Budget management and financial planning'
      ],
      meetingFrequency: 'Weekly meetings every Friday at 5:00 PM in Tech Lab'
    },
    team: {
      facultyCoordinator: {
        id: 'fc1',
        name: 'Dr. Priya Sharma',
        role: 'Faculty Coordinator',
        photo: '/placeholder.svg',
        department: 'Computer Science & Engineering'
      },
      president: {
        id: 'p1',
        name: 'Rahul Kumar',
        role: 'President',
        photo: '/placeholder.svg',
        department: 'CSE, 4th Year'
      },
      vicePresident: {
        id: 'vp1',
        name: 'Ananya Singh',
        role: 'Vice President',
        photo: '/placeholder.svg',
        department: 'IT, 3rd Year'
      },
      secretary: {
        id: 's1',
        name: 'Arjun Patel',
        role: 'Secretary',
        photo: '/placeholder.svg',
        department: 'CSE, 3rd Year'
      },
      treasurer: {
        id: 't1',
        name: 'Sneha Gupta',
        role: 'Treasurer',
        photo: '/placeholder.svg',
        department: 'IT, 2nd Year'
      },
      members: [
        {
          id: 'm1',
          name: 'Vikash Yadav',
          role: 'Technical Lead',
          photo: '/placeholder.svg',
          department: 'CSE, 4th Year'
        },
        {
          id: 'm2',
          name: 'Priyanka Joshi',
          role: 'Event Coordinator',
          photo: '/placeholder.svg',
          department: 'IT, 3rd Year'
        }
      ]
    },
    events: [
      {
        id: 'e1',
        title: 'AI/ML Workshop Series',
        date: '2024-01-15',
        description: 'Comprehensive workshop covering machine learning fundamentals and practical applications',
        image: '/placeholder.svg',
        type: 'workshop',
        registrationLink: '#'
      },
      {
        id: 'e2',
        title: 'CodeFest 2024',
        date: '2024-02-20',
        description: 'Annual coding competition with prizes worth ₹50,000',
        image: '/placeholder.svg',
        type: 'competition',
        registrationLink: '#'
      }
    ],
    socialMedia: {
      instagram: 'https://instagram.com/techinnovators_gbu',
      linkedin: 'https://linkedin.com/company/techinnovators-gbu',
      youtube: 'https://youtube.com/techinnovatorsgbu'
    },
    reports: [
      {
        id: 'r1',
        title: 'Annual Report 2023-24',
        year: '2023-24',
        downloadUrl: '#',
        summary: 'Comprehensive overview of club activities, achievements, and financial summary for the academic year 2023-24'
      },
      {
        id: 'r2',
        title: 'Annual Report 2022-23',
        year: '2022-23',
        downloadUrl: '#',
        summary: 'Complete documentation of club initiatives and member achievements for 2022-23'
      }
    ],
    joinFormUrl: 'https://forms.google.com/techinnovators'
  },
  {
    id: 'cultural-society',
    name: 'Cultural Society',
    tagline: 'Celebrating Art, Music, and Heritage',
    category: 'Cultural',
    logo: '/placeholder.svg',
    banner: '/placeholder.svg',
    memberCount: 203,
    description: 'A vibrant platform for artistic expression, cultural preservation, and creative collaboration. We celebrate diversity through music, dance, drama, literature, and visual arts.',
    objectives: [
      'Promote cultural awareness and appreciation',
      'Provide platform for artistic expression',
      'Organize cultural events and festivals',
      'Preserve and showcase traditional arts'
    ],
    history: 'Established in 2018, Cultural Society has been the heartbeat of artistic activities on campus. From humble poetry readings to grand cultural festivals, we have created countless memories and nurtured artistic talents.',
    achievements: [
      'Organized the largest cultural fest in university history',
      'Won Best Cultural Club award for 3 consecutive years',
      'Collaborated with renowned artists and performers',
      'Raised ₹2,00,000 for charity through cultural programs'
    ],
    policies: {
      codeOfConduct: [
        'Respect all forms of artistic expression',
        'Maintain punctuality for rehearsals and events',
        'Support fellow artists and performers',
        'Uphold the cultural values of the institution'
      ],
      eligibility: [
        'Open to students from all academic programs',
        'Passion for arts and culture required',
        'No prior experience necessary',
        'Willingness to participate in events'
      ],
      responsibilities: [
        'President: Overall leadership and event planning',
        'Vice-President: Artist coordination and performance management',
        'Secretary: Documentation and member communication',
        'Treasurer: Budget allocation and expense management'
      ],
      meetingFrequency: 'Bi-weekly meetings every alternate Tuesday at 4:00 PM in Arts Hall'
    },
    team: {
      facultyCoordinator: {
        id: 'fc2',
        name: 'Prof. Kavita Mehta',
        role: 'Faculty Coordinator',
        photo: '/placeholder.svg',
        department: 'Fine Arts & Literature'
      },
      president: {
        id: 'p2',
        name: 'Aditya Raj',
        role: 'President',
        photo: '/placeholder.svg',
        department: 'English, 4th Year'
      },
      vicePresident: {
        id: 'vp2',
        name: 'Meera Kapoor',
        role: 'Vice President',
        photo: '/placeholder.svg',
        department: 'Music, 3rd Year'
      },
      secretary: {
        id: 's2',
        name: 'Rohan Verma',
        role: 'Secretary',
        photo: '/placeholder.svg',
        department: 'Drama, 2nd Year'
      },
      treasurer: {
        id: 't2',
        name: 'Ishita Sharma',
        role: 'Treasurer',
        photo: '/placeholder.svg',
        department: 'Fine Arts, 3rd Year'
      },
      members: [
        {
          id: 'm3',
          name: 'Karan Singh',
          role: 'Music Director',
          photo: '/placeholder.svg',
          department: 'Music, 4th Year'
        },
        {
          id: 'm4',
          name: 'Nisha Patel',
          role: 'Dance Coordinator',
          photo: '/placeholder.svg',
          department: 'Dance, 2nd Year'
        }
      ]
    },
    events: [
      {
        id: 'e3',
        title: 'Spring Cultural Festival',
        date: '2024-03-15',
        description: 'Annual cultural extravaganza featuring music, dance, drama, and art exhibitions',
        image: '/placeholder.svg',
        type: 'cultural',
        registrationLink: '#'
      },
      {
        id: 'e4',
        title: 'Poetry Evening',
        date: '2024-01-30',
        description: 'An intimate evening of poetry recitation and spoken word performances',
        image: '/placeholder.svg',
        type: 'cultural'
      }
    ],
    socialMedia: {
      instagram: 'https://instagram.com/cultural_society_gbu',
      youtube: 'https://youtube.com/culturalsocietygbu'
    },
    reports: [
      {
        id: 'r3',
        title: 'Cultural Activities Report 2023-24',
        year: '2023-24',
        downloadUrl: '#',
        summary: 'Detailed account of all cultural programs, artist collaborations, and community engagement activities'
      }
    ],
    joinFormUrl: 'https://forms.google.com/culturalsociety'
  }
];

const ClubsMain = () => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technical': return 'bg-blue-500 hover:bg-blue-600';
      case 'Cultural': return 'bg-purple-500 hover:bg-purple-600';
      case 'Sports': return 'bg-green-500 hover:bg-green-600';
      case 'Social': return 'bg-orange-500 hover:bg-orange-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
     

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Passion</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore vibrant student clubs and societies at GBU. From technical innovation to cultural expression, 
            find your community and make lasting connections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Users className="w-5 h-5" />
              Explore Clubs
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Events
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Active Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Student Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">100+</div>
              <div className="text-gray-600">Events This Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">25+</div>
              <div className="text-gray-600">Achievements</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Clubs */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Clubs & Societies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubsData.map((club) => (
              <Card key={club.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={club.banner} 
                    alt={club.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(club.category)} text-white`}>
                      {club.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <img 
                        src={club.logo} 
                        alt={`${club.name} logo`}
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {club.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{club.tagline}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {club.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{club.memberCount} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      <span>{club.achievements.length} achievements</span>
                    </div>
                  </div>

                  <Link to={`/club/${club.id}`}>
                    <Button className="w-full gap-2 group-hover:bg-blue-600 transition-colors">
                      Explore Club
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Mark?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join a community of passionate students and start your journey of growth, learning, and leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Users className="w-5 h-5" />
              Find Your Club
            </Button>
            <Button size="lg" variant="secondary"  >
              <ExternalLink className="w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default ClubsMain;
