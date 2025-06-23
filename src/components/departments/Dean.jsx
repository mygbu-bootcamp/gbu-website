import React from "react";

const LeadershipCard = () => {
  const leader = {
    name: "Dr. Rajesh Kumar",
    title: "Head of Department - CSE",
    description:
      "Dr. Kumar is a distinguished academician with extensive experience in Computer Science and Engineering. He leads the CSE department with a focus on innovative curriculum design, research excellence, and industry collaboration to prepare students for the evolving tech landscape.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10 sm:mb-12">
        Department <span className="text-blue-800">Leadership</span>
        <div className="w-20 sm:w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl border border-blue-200 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-60 h-56 sm:w-48 sm:h-64 md:w-[220px] md:h-[300px] object-cover rounded-xl shadow-md"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              {leader.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
              {leader.title}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              {leader.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCard;