import { Users, Award, BookOpen, Lightbulb } from "lucide-react";

const AboutDepartment = () => {
  const stats = [
    { icon: Users, label: "Students", value: "800+" },
    { icon: BookOpen, label: "Faculty", value: "45+" },
    { icon: Award, label: "Research Projects", value: "120+" },
    { icon: Lightbulb, label: "Patents Filed", value: "25+" },
  ];

  return (
    <section id="about" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            About the Department
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Established in 1995, our department has been at the forefront of computer science education and research for over two decades.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg border">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Excellence in Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our department offers comprehensive undergraduate and postgraduate programs designed to
                meet the evolving needs of the technology industry. We emphasize both theoretical
                foundations and practical applications, ensuring our graduates are industry-ready.
              </p>

              <h3 className="text-2xl font-bold text-foreground">Research & Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are actively engaged in cutting-edge research in artificial intelligence, machine
                learning, cybersecurity, software engineering, and data science. Our faculty and
                students regularly publish in top-tier conferences and journals.
              </p>

              <h3 className="text-2xl font-bold text-foreground">Industry Partnerships</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strong collaborations with leading technology companies provide our students with
                internship opportunities, industry projects, and placement assistance. We maintain
                partnerships with Google, Microsoft, Amazon, TCS, Infosys, and many more.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-bold text-foreground mb-6">Vision & Mission</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vision</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To be a globally recognized center of excellence in computer science education,
                    research, and innovation that contributes to societal development.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mission</h4>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Provide quality education in computer science and engineering</li>
                    <li>• Conduct cutting-edge research in emerging technologies</li>
                    <li>• Foster innovation and entrepreneurship among students</li>
                    <li>• Collaborate with industry and academic institutions globally</li>
                    <li>• Contribute to societal development through technology solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;
