 import React from "react";
 
import Publications from "./Publications"
import FundedProjects from "./FundedProjects";
const Index = () => {
  return (
    <>
     
     
<section className="relative h-96 bg-gradient-to-r from-cyan-900 via-blue-800 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://www.gburif.org/Photo%20Gallery/img/img-12.jpg")',
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4"> Research & Innovation at GBU</h1>
            <p className="text-xl opacity-90">
            Driving groundbreaking research and fostering innovation across
        multiple disciplines. Explore our research excellence, cutting-edge
        laboratories, and startup ecosystem.
            </p>
          </div>
        </div>
      </section>
 

       <Publications/>
      
       <FundedProjects/>
    </>
  );
};

export default Index;
