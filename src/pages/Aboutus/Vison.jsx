import React from 'react';
import { Eye, Target, Heart, Lightbulb, Users, Globe } from 'lucide-react';

const AboutGBU = () => {
  const gradientColors = [
    "from-green-600 to-green-800",
    "from-green-800 to-green-900",
    "from-green-900 to-blue-800",
    "from-blue-800 to-purple-800"
  ];

  const words = ["About", "Gautam", "Buddha", "University"];

  const values = [
    { icon: Eye, title: "Excellence", description: "Striving for academic and research excellence" },
    { icon: Heart, title: "Integrity", description: "Upholding ethical standards and transparency" },
    { icon: Lightbulb, title: "Innovation", description: "Fostering creativity and innovative thinking" },
    { icon: Users, title: "Inclusivity", description: "Embracing diversity and equal opportunities" },
    { icon: Globe, title: "Global Outlook", description: "Preparing students for global challenges" },
    { icon: Target, title: "Impact", description: "Creating positive societal impact" }
  ];

  return (
    <div>
      

      <section className="relative h-[28rem] bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://architecture.live/wp-content/uploads/2022/09/7-2048x1448.jpg")'
          }}
        ></div>
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            {words.map((word, i) => (
              <span
                key={word}
                className={`bg-gradient-to-r ${gradientColors[i]} bg-clip-text text-transparent`}
              >
                {word + " "}
              </span>
            ))}
          </h2>
          <p className="text-gray-900 mt-6 text-lg px-20">
            Established in 2008, Gautam Buddha University stands as a beacon of academic excellence in the National Capital Region.
            Named after Lord Buddha, the university embodies the principles of knowledge, wisdom, and enlightenment.
          </p>
          <p className="text-gray-900 mt-4 text-lg px-20">
            With state-of-the-art infrastructure, world-class faculty, and innovative research programs, GBU is committed to nurturing
            global citizens who can contribute meaningfully to society and the nation.
          </p>

        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="pb-16 pt-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-white/70 rounded-3xl shadow-2xl p-12 border-2 border-gray">
            <div className="flex items-center mb-8">
              <Eye className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To emerge as a world-class university that fosters intellectual growth,
              innovation, and holistic development, preparing global citizens who contribute
              meaningfully to society through knowledge, wisdom, and ethical leadership.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              A globally acclaimed integrated academic and research institution that creates a vibrant community of intellectuals and entrepreneurs endowed with Character, Creativity, Competence and Commitment, who can inspire meaningful transformations to ensure holistic growth and development of the society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-white/70 rounded-3xl shadow-2xl p-12 border-2 border-gray">
            <div className="flex items-center mb-8">
              <Target className="w-12 h-12 text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Academic Excellence",
                  desc: "Provide world-class education through innovative curricula and research-driven learning."
                },
                {
                  title: "Research Innovation",
                  desc: "Promote cutting-edge research that addresses global challenges and societal needs."
                },
                {
                  title: "Holistic Development",
                  desc: "Foster comprehensive growth encompassing intellectual, emotional, and spiritual dimensions."
                },
                {
                  title: "Social Responsibility",
                  desc: "Cultivate responsible citizens committed to ethical practices and community service."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/50 p-6 rounded-xl border border-white/30">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white border-2 border-gray-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-100 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutGBU;
