import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { GraduationCap, BookOpen, Users, Clock } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "B.Tech Computer Science & Engineering",
      duration: "4 Years",
      intake: "120 Students",
      description: "Comprehensive undergraduate program covering fundamental and advanced topics in computer science with hands-on laboratory experience.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      gradient: "from-blue-500 to-blue-600",
      highlights: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning",
        "Web Development",
        "Mobile App Development"
      ]
    },
    {
      title: "M.Tech Computer Science & Engineering",
      duration: "2 Years",
      intake: "60 Students",
      description: "Advanced postgraduate program with specializations in emerging technologies and research opportunities.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      gradient: "from-purple-500 to-purple-600",
      highlights: [
        "Artificial Intelligence",
        "Data Science & Analytics",
        "Cybersecurity",
        "Cloud Computing",
        "Distributed Systems",
        "Advanced Algorithms",
        "Research Methodology",
        "Thesis Project"
      ]
    },
    {
      title: "PhD Computer Science",
      duration: "3-5 Years",
      intake: "15 Students",
      description: "Doctoral program focused on advanced research in computer science with opportunities for publication and innovation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      gradient: "from-green-500 to-green-600",
      highlights: [
        "Independent Research",
        "Advanced Coursework",
        "Conference Publications",
        "Industry Collaborations",
        "Teaching Assistantship",
        "International Exposure",
        "Patent Filing",
        "Thesis Defense"
      ]
    }
  ];

  return (
    <section id="programs" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Choose from our diverse range of programs designed to meet your academic and career goals in computer science.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-80`}></div>
                  <div className="absolute bottom-4 left-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{program.intake}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Key Areas
                    </h4>
                    <div className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                      {program.highlights.slice(0, 6).map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 px-2 py-1 rounded">• {highlight}</span>
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
  );
};

export default Programs;
