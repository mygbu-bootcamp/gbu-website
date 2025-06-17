import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Brain, Shield, Database, Cloud, Smartphone, Globe } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Deep learning, natural language processing, computer vision, and intelligent systems research with real-world applications.",
      projects: ["Smart Healthcare Systems", "Autonomous Vehicle Navigation", "Predictive Analytics"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Network Security",
      description: "Advanced security protocols, encryption techniques, threat detection, and secure system design for modern digital infrastructure.",
      projects: ["Blockchain Security", "IoT Security Framework", "Malware Detection Systems"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data Science & Big Data",
      description: "Large-scale data processing, analytics, visualization, and knowledge discovery from complex datasets.",
      projects: ["Social Media Analytics", "Financial Data Mining", "Healthcare Data Analysis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud Computing & Distributed Systems",
      description: "Scalable architectures, distributed algorithms, edge computing, and cloud-native application development.",
      projects: ["Edge AI Systems", "Serverless Computing", "Distributed Databases"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Computing & IoT",
      description: "Mobile application development, Internet of Things, sensor networks, and ubiquitous computing systems.",
      projects: ["Smart City Solutions", "Wearable Computing", "Industrial IoT"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Globe,
      title: "Web Technologies & HCI",
      description: "Modern web development, user experience design, human-computer interaction, and accessibility research.",
      projects: ["Progressive Web Apps", "AR/VR Interfaces", "Accessibility Tools"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="research" className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Research Excellence
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our cutting-edge research spans multiple domains of computer science, addressing real-world challenges and advancing the field.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${area.gradient} opacity-80`}></div>
                  <div className="absolute bottom-4 left-4">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-white">{area.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-300">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-white mb-2 text-sm">Current Projects:</h4>
                  <ul className="space-y-1">
                    {area.projects.map((project, idx) => (
                      <li key={idx} className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">
                        • {project}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-8">Research Impact</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-blue-500/20 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">120+</div>
                <div className="text-sm text-gray-300">Active Research Projects</div>
              </div>
              <div className="bg-green-500/20 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">₹15Cr+</div>
                <div className="text-sm text-gray-300">Research Funding</div>
              </div>
              <div className="bg-purple-500/20 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-gray-300">Publications</div>
              </div>
              <div className="bg-orange-500/20 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm text-gray-300">Patents Filed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
