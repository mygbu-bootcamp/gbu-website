
import { ArrowLeft, BookOpen, Users, TrendingUp, Award, Calendar, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

const TrainingCareerServices = () => {
  const trainingPrograms = [
    {
      title: "Resume Writing Workshops",
      description: "Learn to craft compelling resumes that stand out to recruiters",
      duration: "2 hours",
      frequency: "Weekly",
      icon: "📝",
      color: "from-blue-400 to-blue-600",
      topics: ["ATS-friendly formatting", "Skill highlighting", "Industry-specific templates"]
    },
    {
      title: "Aptitude Test Training",
      description: "Comprehensive preparation for quantitative and logical reasoning",
      duration: "4 weeks",
      frequency: "3x per week",
      icon: "🧮",
      color: "from-green-400 to-green-600",
      topics: ["Quantitative aptitude", "Logical reasoning", "Verbal ability"]
    },
    {
      title: "Soft Skills & Communication",
      description: "Develop essential interpersonal and communication skills",
      duration: "3 weeks",
      frequency: "2x per week",
      icon: "💬",
      color: "from-purple-400 to-purple-600",
      topics: ["Public speaking", "Team collaboration", "Leadership skills"]
    },
    {
      title: "Technical Bootcamps",
      description: "Intensive training in cutting-edge technologies",
      duration: "6 weeks",
      frequency: "5x per week",
      icon: "💻",
      color: "from-orange-400 to-orange-600",
      topics: ["Web development", "Data science", "Machine learning"]
    },
    {
      title: "Mock Interviews",
      description: "Practice with industry professionals for real interview experience",
      duration: "1 hour",
      frequency: "On-demand",
      icon: "🎯",
      color: "from-red-400 to-red-600",
      topics: ["HR interviews", "Technical rounds", "Group discussions"]
    }
  ];

  const careerServices = [
    {
      title: "Personalized Career Counseling",
      description: "One-on-one guidance tailored to your career goals and interests",
      icon: "🎯",
      features: ["Career path mapping", "Skill gap analysis", "Goal setting"]
    },
    {
      title: "Interview Scheduling Support",
      description: "Seamless coordination between students and recruiters",
      icon: "📅",
      features: ["Automated scheduling", "Reminder notifications", "Conflict resolution"]
    },
    {
      title: "Industry Mentorship Programs",
      description: "Connect with professionals from your field of interest",
      icon: "👥",
      features: ["Industry insights", "Networking opportunities", "Career guidance"]
    },
    {
      title: "Career Fairs & Campus Drives",
      description: "Direct interaction with potential employers",
      icon: "🏢",
      features: ["Multiple companies", "On-spot interviews", "Job offers"]
    }
  ];

  const upcomingWorkshops = [
    {
      title: "Advanced Python for Data Science",
      date: "December 15, 2024",
      time: "10:00 AM - 4:00 PM",
      instructor: "Dr. Rajesh Kumar",
      seats: "Available",
      level: "Intermediate"
    },
    {
      title: "Digital Marketing Essentials",
      date: "December 18, 2024",
      time: "2:00 PM - 5:00 PM",
      instructor: "Ms. Priya Sharma",
      seats: "Limited",
      level: "Beginner"
    },
    {
      title: "Mock Interview Marathon",
      date: "December 20, 2024",
      time: "9:00 AM - 6:00 PM",
      instructor: "Industry Panel",
      seats: "Available",
      level: "All Levels"
    }
  ];

  const successMetrics = [
    { metric: "95%", description: "Students improved interview performance" },
    { metric: "80%", description: "Resume acceptance rate increase" },
    { metric: "1000+", description: "Students trained annually" },
    { metric: "50+", description: "Industry mentors" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Training & Career Support
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering students for career readiness through comprehensive training programs and personalized support services
            </p>
          </div>

          {/* Training Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Training Programs Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{program.icon}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{program.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 text-center">{program.description}</p>

                    <div className="flex justify-between items-center mb-4 text-sm">
                      <div className="flex items-center text-blue-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-green-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{program.frequency}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Career Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerServices.map((service, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{service.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Workshops */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Upcoming Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{workshop.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        workshop.seats === 'Available' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {workshop.seats}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-green-600" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-purple-600" />
                        <span>{workshop.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2 text-orange-600" />
                        <span>{workshop.level}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-16">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {successMetrics.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">{item.metric}</div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Registration CTA */}
          <div className="text-center">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl inline-block">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Enhance Your Skills?</h2>
                <p className="text-gray-600 mb-6">Join our training programs and career services to accelerate your professional growth</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                    Register for Upcoming Workshop
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg rounded-xl">
                    Schedule Career Counseling
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingCareerServices;
