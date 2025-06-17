
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Users, Award, BookOpen, Lightbulb, Cpu, Zap, Radio, Microchip, GraduationCap, Brain, Beaker, Trophy, Star, User, Medal, Target } from "lucide-react";

const ECE = () => {
  const stats = [
    { icon: Users, label: "Students", value: "600+", color: "bg-blue-600" },
    { icon: GraduationCap, label: "Faculty", value: "35+", color: "bg-indigo-600" },
    { icon: Brain, label: "Research Projects", value: "80+", color: "bg-purple-600" },
    { icon: Trophy, label: "Patents Filed", value: "15+", color: "bg-emerald-600" },
  ];

  const programs = [
    {
      title: "B.Tech Electronics & Communication Engineering",
      duration: "4 Years",
      intake: "90 Students",
      description: "Comprehensive program covering analog/digital electronics, communication systems, and embedded systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      gradient: "from-blue-600 to-indigo-600",
      curriculum: [
        "Analog & Digital Electronics",
        "Communication Systems",
        "VLSI Design",
        "Embedded Systems",
        "Signal Processing",
        "Microprocessors",
        "Antenna Theory",
        "Control Systems"
      ]
    },
    {
      title: "M.Tech Electronics & Communication",
      duration: "2 Years",
      intake: "45 Students",
      description: "Advanced program with specializations in VLSI, Signal Processing, and Communication Networks.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
      gradient: "from-indigo-600 to-purple-600",
      curriculum: [
        "Advanced VLSI Design",
        "Digital Signal Processing",
        "Wireless Communication",
        "Network Analysis",
        "Semiconductor Devices",
        "RF Circuit Design",
        "Research Methodology",
        "Master's Thesis"
      ]
    }
  ];

  const researchAreas = [
    {
      title: "VLSI Design & Technology",
      description: "Advanced integrated circuit design, nanotechnology, and semiconductor device research for next-generation electronics.",
      icon: Microchip,
      projects: ["Low-Power VLSI Design", "Memory Circuit Optimization", "Analog IC Design"],
      color: "text-blue-600"
    },
    {
      title: "Wireless Communication",
      description: "5G/6G networks, satellite communication, and advanced modulation techniques for modern communication systems.",
      icon: Radio,
      projects: ["5G Network Optimization", "Satellite Communication", "Antenna Design"],
      color: "text-indigo-600"
    },
    {
      title: "Signal Processing",
      description: "Digital signal processing, image processing, and machine learning applications in signal analysis.",
      icon: Zap,
      projects: ["Medical Image Processing", "Speech Recognition", "Radar Signal Processing"],
      color: "text-purple-600"
    },
    {
      title: "Embedded Systems",
      description: "IoT devices, real-time systems, and smart sensor networks for industrial and consumer applications.",
      icon: Cpu,
      projects: ["Smart IoT Devices", "Industrial Automation", "Wearable Technology"],
      color: "text-emerald-600"
    }
  ];

  const topAchievers = [
    {
      name: "Ananya Patel",
      year: "B.Tech ECE 2024",
      achievement: "Intel Student Research Award, Internship at Qualcomm, Best Project Award",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8cc?auto=format&fit=crop&w=300&q=80",
      skills: ["VLSI Design", "MATLAB", "Verilog", "Circuit Analysis"]
    },
    {
      name: "Karan Mehta",
      year: "M.Tech ECE 2023",
      achievement: "IEEE Best Paper Award, Patent filed for 5G antenna design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      skills: ["RF Design", "Antenna Theory", "5G Technology", "Research"]
    },
    {
      name: "Sneha Gupta",
      year: "B.Tech ECE 2024",
      achievement: "Winner National Innovation Contest, Founder of hardware startup",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      skills: ["Embedded Systems", "IoT", "Entrepreneurship", "Product Design"]
    }
  ];

  const achievements = [
    {
      title: "IEEE Student Chapter",
      description: "Active student chapter with 200+ members",
      icon: Award,
      color: "text-blue-600"
    },
    {
      title: "Research Publications",
      description: "150+ papers in international journals",
      icon: BookOpen,
      color: "text-indigo-600"
    },
    {
      title: "Industry Partnerships",
      description: "Collaborations with leading tech companies",
      icon: Lightbulb,
      color: "text-purple-600"
    },
    {
      title: "Placement Record",
      description: "95% placement rate with top companies",
      icon: GraduationCap,
      color: "text-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
            alt="Electronics Circuit Board"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Department of
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Electronics & Communication Engineering
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering future engineers through excellence in electronics, communication systems, and cutting-edge research for a connected world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <BookOpen className="h-5 w-5 mr-2" />
                Explore Programs
              </Button>
              <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Beaker className="h-5 w-5 mr-2" />
                Research Areas
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
              <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl backdrop-blur-sm border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Microchip className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">VLSI Design</h3>
                <p className="text-muted-foreground text-center text-sm">Advanced integrated circuit design and fabrication</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl backdrop-blur-sm border border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-indigo-100 p-4 rounded-full mb-4">
                  <Radio className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Communication Systems</h3>
                <p className="text-muted-foreground text-center text-sm">Wireless networks and satellite communication</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl backdrop-blur-sm border border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Signal Processing</h3>
                <p className="text-muted-foreground text-center text-sm">Digital signal processing and image analysis</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl backdrop-blur-sm border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <Cpu className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Embedded Systems</h3>
                <p className="text-muted-foreground text-center text-sm">Microcontrollers and IoT device development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOD Message */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Academic Leadership
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-6 shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b8cc?auto=format&fit=crop&w=300&q=80"
                    alt="Dr. Priya Singh - Head of Department"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Dr. Priya Singh</h3>
                <p className="text-blue-600 font-semibold text-lg">Head of Department</p>
                <p className="text-sm text-muted-foreground">PhD Electronics Engineering, IIT Bombay</p>
                <p className="text-sm text-muted-foreground">25+ Years of Experience</p>
              </div>

              <div className="md:col-span-2 space-y-6 text-muted-foreground bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="text-6xl text-blue-200 font-serif">"</div>
                <p className="text-lg leading-relaxed -mt-4">
                  Welcome to the Department of Electronics & Communication Engineering. Our department stands as a beacon of
                  innovation in electronics and communication technology, preparing students for leadership roles in the
                  rapidly evolving technological landscape.
                </p>

                <p className="leading-relaxed">
                  We pride ourselves on offering cutting-edge education in VLSI design, embedded systems, wireless communication,
                  and digital signal processing. Our state-of-the-art laboratories, industry partnerships, and research
                  collaborations ensure that students gain both theoretical knowledge and practical experience.
                </p>

                <p className="leading-relaxed">
                  Our graduates excel in telecommunications, semiconductor industries, consumer electronics, and emerging
                  fields like IoT and 5G technology. Join us to be part of the next generation of innovators who will
                  shape the future of communication and electronics.
                </p>

                <div className="pt-6 border-t border-blue-200">
                  <p className="font-bold text-foreground text-lg">Dr. Priya Singh</p>
                  <p className="text-blue-600 font-medium">Head of Department - ECE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Department Statistics</h2>
              <p className="text-xl text-muted-foreground">Excellence in numbers</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-white rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Academic Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive engineering education designed to prepare students for successful careers in electronics and communication.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-0 shadow-xl bg-white">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-85`}></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <GraduationCap className="h-8 w-8" />
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                      <span className="font-semibold text-blue-700">{program.duration}</span>
                      <span className="font-semibold text-indigo-700">{program.intake}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Core Curriculum
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.curriculum.map((subject, idx) => (
                          <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-full border border-blue-200">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Research Excellence</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pioneering research in electronics and communication technologies, driving innovation for tomorrow's connected world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {researchAreas.map((area, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-500/20 p-3 rounded-full">
                        <area.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-xl text-white">{area.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-white mb-3">Current Projects:</h4>
                    <div className="space-y-2">
                      {area.projects.map((project, idx) => (
                        <div key={idx} className="text-sm text-gray-300 bg-white/10 px-3 py-2 rounded-lg">
                          • {project}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-8">Research Impact</h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-blue-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">80+</div>
                  <div className="text-sm text-gray-300">Research Projects</div>
                </div>
                <div className="bg-indigo-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">₹10Cr+</div>
                  <div className="text-sm text-gray-300">Research Funding</div>
                </div>
                <div className="bg-purple-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">250+</div>
                  <div className="text-sm text-gray-300">Publications</div>
                </div>
                <div className="bg-emerald-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm text-gray-300">Patents Filed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Achievers */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Student Achievers</h2>
              <p className="text-xl text-muted-foreground">
                Celebrating our outstanding students who excel in academics, research, and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {topAchievers.map((student, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <CardHeader className="text-center pb-2">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-foreground">{student.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">{student.year}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-start space-x-2 mb-2">
                        <Medal className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground leading-relaxed">{student.achievement}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
              <p className="text-xl text-muted-foreground">Recognition and excellence in education</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <achievement.icon className={`h-12 w-12 ${achievement.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ECE;
