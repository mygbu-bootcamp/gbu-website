import React from "react";

const Card = ({ image, title, icon, description }) => (
  <div className="bg-white rounded-2xl shadow-md  overflow-hidden w-80 sm:w-[24rem]">
    <img src={image} alt={title} className="w-full h-46 object-cover" />
    <div className="flex justify-center -mt-6">
      <div className="bg-pink-600 rounded-full p-4 shadow-lg">
        <span className="text-white text-2xl">{icon}</span>
      </div>
    </div>
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Focus = () => {
  const cards = [
    {
      image: "https://www.gburif.org/Screenshot%202024-06-11%20at%204.14.25%E2%80%AFAM.png",
      title: "Focus Areas",
      icon: "🚀",
      description:"The functional areas are not limited to IOT, AI, Robotics, Microsystems, Date Analytics, High Frequency Applications, Integrated Circuits, PCB based Solutions, Sensor Network, Neural Computing, IT/ ITES, Telecom, Mobile VAS, Gaming and Animation, Reliability, Internet/Web, Media and Entertainment."
    },
    {
      image: "https://www.gburif.org/noida-08november2010-gautam-htphoto-university-noida-greater_a63589a4-2b9a-11e8-8732-87a46da2a8cc.jpg",
      title: "Objective",
      icon: "📋",
      description:"To provide mentors for skill up ideas. Example can be an AI based Electromagnetic Shielding device problem. One mentor from Electronics Circuits, One from HF Electronics, one from Mechanical and one from Computer Science knowledge tank will be potential mentors."
    }
     
  ];

  return (
    <div className="min-h-86w bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">FOCUS AND OBJECTIVE</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default  Focus;
