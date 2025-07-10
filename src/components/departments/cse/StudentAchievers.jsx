// StudentAchievers.jsx

import React from "react";
import {
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Cpu,
  Zap,
  Radio,
  Microchip,
  GraduationCap,
  Brain,
  Beaker,
  Trophy,
  Star,
  User,
  Medal,
  Target,
} from "lucide-react";

// Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg border ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-foreground ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-muted-foreground text-sm ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-lg transition duration-300";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700",
    outline: "border border-emerald-300 text-emerald-700 hover:bg-emerald-50",
    ghost: "text-emerald-700 hover:bg-emerald-100",
  };

  return (
    <button
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Sample Data
const topAchievers = [
  {
    name: "Ananya Patel",
    year: "B.Tech ECE 2024",
    achievement:
      "Intel Student Research Award, Internship at Qualcomm, Best Project Award",
    image:
      "https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=gIZZVJ3_oo9pxN0TtTaBCk7G8xBHO6vZWy9cJVt8jWA=",
    skills: ["VLSI Design", "MATLAB", "Verilog", "Circuit Analysis"],
  },
  {
    name: "Karan Mehta",
    year: "M.Tech ECE 2023",
    achievement: "IEEE Best Paper Award, Patent filed for 5G antenna design",
    image:
      "https://media.istockphoto.com/id/1342062117/photo/smart-arab-guy-student-with-backpack-and-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=QVDN4v9Qrkw1UqqRIAew4uU-HlxWjgsmm5LItr96Qoo=",
    skills: ["RF Design", "Antenna Theory", "5G Technology", "Research"],
  },
  {
    name: "Sneha Gupta",
    year: "B.Tech ECE 2024",
    achievement: "Winner National Innovation Contest, Founder of hardware startup",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    skills: ["Embedded Systems", "IoT", "Entrepreneurship", "Product Design"],
  },
];

const achievements = [
  {
    title: "IEEE Student Chapter",
    description: "Active student chapter with 200+ members",
    icon: Award,
    color: "text-blue-600",
  },
  {
    title: "Research Publications",
    description: "150+ papers in international journals",
    icon: BookOpen,
    color: "text-indigo-600",
  },
  {
    title: "Industry Partnerships",
    description: "Collaborations with leading tech companies",
    icon: Lightbulb,
    color: "text-purple-600",
  },
  {
    title: "Placement Record",
    description: "95% placement rate with top companies",
    icon: GraduationCap,
    color: "text-emerald-600",
  },
];

// Component
const StudentAchievers = () => {
  return (
    <>
      {/* Top Achievers */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Student Achievers
              </h2>
              <p className="text-xl text-muted-foreground">
                Celebrating our outstanding students who excel in academics,
                research, and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {topAchievers.map((student, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
                >
                  <CardHeader className="text-center pb-2">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {student.name}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      {student.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-start space-x-2 mb-2">
                        <Medal className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground leading-relaxed">
                          {student.achievement}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                          >
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
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground">
                Recognition and excellence in education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <achievement.icon
                    className={`h-12 w-12 ${achievement.color} mx-auto mb-4`}
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentAchievers;
