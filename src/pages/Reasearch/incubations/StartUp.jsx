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
    <div className="max-w-7xl mx-auto mt-15 mb-12 px-4">
      {/* Header */}

      {/* Stats */}

    <div className="py-12 mb-10 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      
      {/* Startups Incubated */}
      <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-blue-600">
        <div className="text-4xl font-bold text-blue-700">50+</div>
        <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">Startups Incubated</p>
      </div>

      {/* Funding Raised */}
      <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-green-600">
        <div className="text-4xl font-bold text-green-700">₹25Cr+</div>
        <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">Funding Raised</p>
      </div>

      {/* Jobs Created */}
      <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-cyan-600">
        <div className="text-4xl font-bold text-cyan-700">200+</div>
        <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">Jobs Created</p>
      </div>

      {/* Success Rate */}
      <div className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-6 text-center border-t-4 border-yellow-500">
        <div className="text-4xl font-bold text-yellow-600">75%</div>
        <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">Success Rate</p>
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
