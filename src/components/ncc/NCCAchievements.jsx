import React, { useState } from 'react';
// Card, CardHeader, CardTitle, CardContent, Badge, Button components defined locally

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`border-b px-6 py-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const Badge = ({ children, className = "", variant }) => {
  let base =
    "inline-block px-3 py-1 rounded-full font-semibold text-xs";
  let color =
    variant === "outline"
      ? "border border-current bg-transparent"
      : "bg-blue-100 text-blue-800";
  return (
    <span className={`${base} ${color} ${className}`}>{children}</span>
  );
};

const Button = ({ children, className = "", variant = "primary", ...props }) => {
  let base =
    "inline-flex items-center px-4 py-2 rounded font-semibold transition-colors focus:outline-none";
  let color =
    variant === "secondary"
      ? "bg-white text-blue-900 border border-blue-900 hover:bg-blue-50"
      : "bg-blue-900 text-white hover:bg-blue-800";
  return (
    <button className={`${base} ${color} ${className}`} {...props}>
      {children}
    </button>
  );
};
import { Award, Trophy, Medal, Star, Share2, Shield } from 'lucide-react';

const NCCAchievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const majorAchievements = [
    {
      id: 1,
      title: 'Best NCC Unit Award 2023',
      category: 'National',
      year: '2023',
      description: 'Recognized as the best NCC Army Wing unit in the state',
      image: '/placeholder.svg',
      awardedBy: 'Directorate General NCC',
      details: 'Awarded for excellence in training, discipline, and community service'
    },
    {
      id: 2,
      title: 'Republic Day Parade Participation',
      category: 'National',
      year: '2023',
      description: '3 cadets selected for prestigious Republic Day Parade in New Delhi',
      image: '/placeholder.svg',
      awardedBy: 'Ministry of Defence',
      details: 'Highest honor for NCC cadets representing the nation'
    },
    {
      id: 3,
      title: 'State Level Shooting Championship',
      category: 'State',
      year: '2023',
      description: 'Gold medal in state level NCC shooting competition',
      image: '/placeholder.svg',
      awardedBy: 'NCC State Directorate',
      details: 'Outstanding performance in .22 rifle shooting competition'
    }
  ];

  const rdcSelections = [
    {
      name: 'Cadet Vikram Singh',
      year: '2023',
      achievement: 'Republic Day Camp Participant',
      program: 'B.Tech Mechanical',
      image: '/placeholder.svg',
      details: 'Selected for RDC and participated in Republic Day Parade'
    },
    {
      name: 'Cadet Anita Sharma',
      year: '2023',
      achievement: 'Best Cadet at RDC',
      program: 'B.Sc Physics',
      image: '/placeholder.svg',
      details: 'Awarded best cadet trophy at Republic Day Camp'
    },
    {
      name: 'Cadet Rohit Patel',
      year: '2022',
      achievement: 'Cultural Team Leader',
      program: 'B.Com',
      image: '/placeholder.svg',
      details: 'Led cultural program at Republic Day Camp'
    }
  ];

  const alumniInArmedForces = [
    {
      name: 'Lt. Priya Gupta',
      service: 'Indian Army',
      rank: 'Lieutenant',
      year: '2020',
      unit: 'Corps of Engineers',
      image: '/placeholder.svg'
    },
    {
      name: 'Flying Officer Raj Kumar',
      service: 'Indian Air Force',
      rank: 'Flying Officer',
      year: '2019',
      unit: 'Fighter Squadron',
      image: '/placeholder.svg'
    },
    {
      name: 'Sub Lieutenant Neha Singh',
      service: 'Indian Navy',
      rank: 'Sub Lieutenant',
      year: '2021',
      unit: 'Naval Operations',
      image: '/placeholder.svg'
    }
  ];

  const competitions = [
    {
      title: 'Inter-State Shooting Competition',
      position: '1st Place',
      year: '2023',
      participants: 'Cadet Team',
      level: 'National'
    },
    {
      title: 'Best Drill Squad Competition',
      position: '2nd Place',
      year: '2023',
      participants: 'Alpha Platoon',
      level: 'State'
    },
    {
      title: 'Adventure Camp Excellence',
      position: '1st Place',
      year: '2022',
      participants: 'Adventure Team',
      level: 'Regional'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'National': return <Trophy className="h-6 w-6 text-yellow-600" />;
      case 'State': return <Medal className="h-6 w-6 text-blue-600" />;
      case 'Regional': return <Award className="h-6 w-6 text-green-600" />;
      default: return <Star className="h-6 w-6 text-purple-600" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'National': return 'bg-yellow-100 text-yellow-800';
      case 'State': return 'bg-blue-100 text-blue-800';
      case 'Regional': return 'bg-green-100 text-green-800';
      default: return 'bg-purple-100 text-purple-800';
    }
  };

  const getServiceColor = (service) => {
    switch (service) {
      case 'Indian Army': return 'bg-green-100 text-green-800';
      case 'Indian Navy': return 'bg-blue-100 text-blue-800';
      case 'Indian Air Force': return 'bg-sky-100 text-sky-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
        <p className="text-lg text-gray-600">
          Celebrating excellence in discipline, leadership, and national service
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-yellow-600" />
            <span>Major Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {majorAchievements.map((achievement) => (
                  <div key={achievement.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-6 p-6 bg-gradient-to-r from-blue-900 to-orange-600 text-white rounded-lg">
                      <div>
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-white text-blue-900">
                            {achievement.category} Level
                          </Badge>
                          <span className="text-2xl font-bold">{achievement.year}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                          <p className="mb-4">{achievement.description}</p>
                          <p className="text-sm mb-4">{achievement.details}</p>
                          <p className="font-semibold">Awarded by: {achievement.awardedBy}</p>
                        </div>
                        <Button variant="secondary" className="text-blue-900">
                          <Share2 className="h-3 w-3 mr-1" />
                          Share Achievement
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {majorAchievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Shield className="h-6 w-6 mr-2 text-orange-600" />
          Republic Day Camp Selections
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {rdcSelections.map((cadet, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <img
                  src={cadet.image}
                  alt={cadet.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-orange-200"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{cadet.name}</h4>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="h-4 w-4 text-yellow-600" />
                  <span className="text-orange-600 font-semibold">{cadet.achievement}</span>
                </div>
                <p className="text-gray-600 mb-2">{cadet.program}</p>
                <p className="text-sm text-gray-700 mb-4">{cadet.details}</p>
                <Badge variant="outline">{cadet.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Alumni in Armed Forces</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {alumniInArmedForces.map((officer, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-3 border-gray-200"
                />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{officer.name}</h4>
                <Badge className={getServiceColor(officer.service)}>{officer.service}</Badge>
                <p className="text-gray-600 mt-2 mb-1">{officer.rank}</p>
                <p className="text-sm text-gray-600 mb-2">{officer.unit}</p>
                <Badge variant="outline" className="text-xs">Commissioned {officer.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Competition Results</h3>
        <div className="space-y-4">
          {competitions.map((competition, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{competition.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Position: <strong>{competition.position}</strong></span>
                      <span>Year: <strong>{competition.year}</strong></span>
                      <span>Participants: <strong>{competition.participants}</strong></span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Badge className={getCategoryColor(competition.level)}>
                      {competition.level}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Legacy in Numbers</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Major Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">RDC Selections</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Alumni Officers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Competitions Won</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Hall of Fame</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Distinguished Alumni</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Brig. Rajesh Kumar - Brigadier, Indian Army (Batch 2005)</li>
                <li>• Wing Cdr. Priya Singh - Wing Commander, IAF (Batch 2008)</li>
                <li>• Cdr. Vikram Sharma - Commander, Indian Navy (Batch 2007)</li>
                <li>• Col. Anita Gupta - Colonel, Army Medical Corps (Batch 2006)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Recent Honors</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Best NCC Unit Award - State Level (2023)</li>
                <li>• Excellence in Training Award (2022)</li>
                <li>• Best Community Service Unit (2022)</li>
                <li>• Outstanding Leadership Development (2021)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NCCAchievements;
