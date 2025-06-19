 import React from "react";

import { Link } from "react-router-dom";
import Publications from "./Publications"
const Index = () => {
  return (
    <>
     
      <section className="relative bg-blue-50 py-16">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-40"
    style={{
      backgroundImage:
        "url(https://www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg)",
      zIndex: 1,
      backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            position: "absolute",
            top: 0,
            left: 0,
          
           
    }}
  ></div>

  {/* Content */}
  <div className="container mx-auto relative z-10 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8">
    {/* Text Content */}
    <div className="md:w-2/3">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Research & Innovation at GBU
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Driving groundbreaking research and fostering innovation across
        multiple disciplines. Explore our research excellence, cutting-edge
        laboratories, and startup ecosystem.
      </p>
      <div className="flex gap-4 flex-wrap">
        <Link
          to="/research/publications"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded shadow transition"
        >
          View Publications
        </Link>
        <Link
          to="/research/centers"
          className="border border-blue-600 text-blue-600 hover:bg-blue-100 py-3 px-5 rounded shadow transition"
        >
          Research Centers
        </Link>
      </div>
    </div>

    {/* Image */}
    <div className="md:w-1/3">
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
        alt="Research at GBU"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

 

       <Publications/>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700">
              Explore Our Research Ecosystem
            </h2>
            <p className=" lead text-muted mt-2">
              Discover the various facets of research and innovation at our
              university
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Research Centers & Labs */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-flask text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-green-700 font-semibold text-lg mb-2">
                Research Centers & Labs
              </h3>
              <p className="text-gray-600 mb-4">
                State-of-the-art research facilities and specialized
                laboratories.
              </p>
              <Link
                to="/research/centers"
                className="text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
              >
                Visit Centers
              </Link>
            </div>

            {/* Innovations & Incubation */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-yellow-600 font-semibold text-lg mb-2">
                Innovations & Incubation
              </h3>
              <p className="text-gray-600 mb-4">
                Cutting-edge innovations and our technology incubation programs.
              </p>
              <Link
                to="/research/innovations"
                className="text-yellow-600 border border-yellow-600 px-4 py-2 rounded hover:bg-yellow-600 hover:text-white transition"
              >
                Explore Innovations
              </Link>
            </div>

            {/* StartUp Ecosystem */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-rocket text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-red-600 font-semibold text-lg mb-2">
                StartUp Ecosystem
              </h3>
              <p className="text-gray-600 mb-4">
                Meet the startups born from our research and innovation
                programs.
              </p>
              <Link
                to="/research/startup"
                className="text-red-600 border border-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition"
              >
                Meet Startups
              </Link>
            </div>

            {/* Funded Projects & IPR */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-cyan-600 text-2xl"></i>
              </div>
              <h3 className="text-cyan-600 font-semibold text-lg mb-2">
                Funded Projects & IPR
              </h3>
              <p className="text-gray-600 mb-4">
                Research funding information and intellectual property
                resources.
              </p>
              <Link
                to="/research/funded-projects"
                className="text-cyan-600 border border-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 hover:text-white transition"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
