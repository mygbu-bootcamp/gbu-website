import React from "react";
import {
  UserCog,
  HandCoins,
  Settings,
  Scale,
  Handshake,
  GraduationCap,
} from "lucide-react";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";
const StartUp = () => {
  
  const supportServices = [
    {
      title: "Mentorship Program",
      description:
        "One-on-one guidance from industry experts and successful entrepreneurs",
      icon: UserCog,
    },
    {
      title: "Funding Support",
      description:
        "Access to seed funding, angel investors, and venture capital networks",
      icon: HandCoins,
    },
    {
      title: "Technical Infrastructure",
      description: "State-of-the-art labs, equipment, and research facilities",
      icon: Settings,
    },
    {
      title: "Legal & IP Support",
      description:
        "Patent filing, trademark registration, and legal compliance assistance",
      icon: Scale,
    },
    {
      title: "Market Access",
      description:
        "Industry connections, customer introductions, and partnership opportunities",
      icon: Handshake,
    },
    {
      title: "Skill Development",
      description:
        "Workshops, training programs, and business development courses",
      icon: GraduationCap,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-24 mb-12 px-4">
      {/* Header */}

      {/* Stats */}

      <div className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Research Projects */}
            <div className="bg-blue-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="mt-2 text-sm">Startups Incubated</p>
            </div>

            {/* Research Centers */}
            <div className="bg-green-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold">₹25Cr+</h3>
              <p className="mt-2 text-sm">Funding Raised</p>
            </div>

            {/* Publications */}
            <div className="bg-cyan-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="mt-2 text-sm">Jobs Created</p>
            </div>

            {/* Patents Filed */}
            <div className="bg-yellow-500 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold">75%</h3>
              <p className="mt-2 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
      
      
      

      {/* Support Services */}
      <div className="text-center mb-10">
        <h3 className="text-2xl text-primary font-semibold">
          Startup Support Services
        </h3>
        <p className="text-gray-500">
          Comprehensive ecosystem to help your startup succeed
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {supportServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow transition text-center p-6"
            >
              <div className="w-20 h-20 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Icon className="text-primary w-8 h-8" />
              </div>
              <h5 className="text-primary font-semibold mb-2">
                {service.title}
              </h5>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>

      {/* Success Story */}
      <SuccessStoriesCarousel />

      {/* Application Process */}
      <div className="text-center mb-10">
        <h3 className="text-2xl text-primary font-semibold">
          Join Our Startup Ecosystem
        </h3>
        <p className="text-gray-500">Simple process to get started</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["Apply Online", "Evaluation", "Pitch Presentation", "Incubation"].map(
          (step, index) => {
            const colors = [
              "bg-primary",
              "bg-green-600",
              "bg-sky-500",
              "bg-yellow-500",
            ];
            const descriptions = [
              "Submit your startup idea and business plan",
              "Expert panel reviews your application",
              "Present your idea to our selection committee",
              "Begin your startup journey with our support",
            ];
            return (
              <div key={index}>
                <div
                  className={`text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-3 ${colors[index]}`}
                >
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h6 className="font-semibold">{step}</h6>
                <p className="text-sm text-gray-500">{descriptions[index]}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default StartUp;
