 
import React from "react";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import mentor1 from "../../../assets/mentor1.png"
import mentor2 from "../../../assets/mentor2.png"
import mentor3 from "../../../assets/mentor3.png"
import mentor4 from "../../../assets/mentor4.png"
import mentor5 from "../../../assets/mentor5.png"
import mentor6 from "../../../assets/mentor6.png"
import mentor7 from "../../../assets/mentor7.png"
import mentor8 from "../../../assets/mentor8.png"
import mentor9 from "../../../assets/mentor9.png"
import mentor10 from "../../../assets/mentor10.png"
import mentor11 from "../../../assets/mentor11.png"
 const mentors = [
  {
    type: "GBU",
    image: "http://meow.tilchattaas.com/media/leadership/Screenshot_2025-06-24_at_10.41.43AM.png",
    name: "Prof. Rana Pratap Singh",
    role: "Honorable Vice Chancellor, GBU",
    qualifications: "Ph.D. in Environmental Science",
    expertise: "Leadership, Research Management, Academic Planning, Innovation in Higher Education",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor1,
    name: "Dr. Rajesh Mishra",
    role: "Chairperson - CEDT",
    qualifications: "Ph.D. (IIT Kharagpur), M.Tech. (IIT Kharagpur), B.E. (Electronics Engineering)",
    expertise: "Networks, Signal Processing, Communication Systems, RAMS",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor2,
    name: "Dr. O. V. Singh",
    role: "Member - CEDT",
    qualifications: "Ph.D. (Jamia Milia Islamia, New Delhi)",
    expertise: "Power Systems, Renewable Energy Sources, Electric Vehicles, Artificial Intelligence",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor3,
    name: "Dr. Navaid Zafar Rizvi",
    role: "Coordinator & Convener - CEDT",
    qualifications: "Ph.D., MS (TU Darmstadt, Germany), MS (HFU, Germany)",
    expertise: "ML for ICs, VLSI Design, HF Electronics and Communication, Microsystems",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor4,
    name: "Prof. Sanjay Kumar Sharma",
    role: "Dean, USICT",
    qualifications: "Ph.D. in Computer Science",
    expertise: "Information Technology, Artificial Intelligence, Nanotechnology, Research Methodology, Research & Publication Ethics",
    linkedin: "#",
  },
  {
    type: "GBU",
    image:  mentor5,
    name: "Dr. Manmohan Singh Shishodia",
    role: "Member - CEDT",
    qualifications: "Ph.D. (IIT Delhi)",
    expertise: "Plasmonics, Nanoplasmonics, Semiconductor Optoelectronics, Theoretical and Computational Physics",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor6,
    name: "Dr. Navin Kumar",
    role: "Member - CEDT",
    qualifications: "Ph.D. (JNU)",
    expertise: "Animal Biotechnology, Regenerative Medicine, Immunology, Host-Pathogen Interaction, Human Physiology, Medical Lab Technology, Molecular Medicine",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor7,
    name: "Dr. Vimlesh Kumar Ray",
    role: "Co-coordinator - CEDT",
    qualifications: "Ph.D. (GBU)",
    expertise: "Adhoc and Sensor Networks, Wireless Communications, UAV Communications, Control Systems",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image:  mentor8,
    name: "Mr. Aakash Sinha",
    role: "Founder & CEO Omnipresent Robo Tech",
    qualifications: "MS (Robotics) – Carnegie Mellon University, USA",
    about: "Professor of Practice at Shiv Nadar University. Has rich drone-making experience with Lockheed-Martin and iRobot Corp. Founder of India's leading drone-based services company.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: mentor9,
    name: "Mr. Souraj S R",
    role: "R&D Lead, Omnipresent Robo Tech",
    qualifications: "Mechatronics Engineering (Nehru Institute of Engineering and Technology)",
    about: "Expertise in assemblies, hardware integration, PCB design, piloting, RPA design, and manufacturing of drones. Successfully developed India's longest 50km-range drone and led major Survey of India mapping projects.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: mentor10,
    name: "Ms. Jyoti Vashishtha",
    role: "CTO, Omnipresent Robo Tech",
    qualifications: "MS (University of California, US), MS (TU Munich, Germany)",
    about: "Expert in wireless communications, robotics, and AI. Winner of the Top 20 Women in Comp Sc award from US NSF and Dept. of Science and Technology, Gold Medalist.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: mentor11,
    name: "Mr. Shravan Yadav",
    role: "Drone Expert, Omnipresent Robo Tech",
    qualifications: "B.Tech. in Aeronautical Engineering",
    about: "Specialist in drone piloting and operations with experience in developing advanced UAV platforms and training programs.",
    linkedin: "#",
  },
];


const Mentors = () => {
  return (
    <section className="pt-4 pb-16 bg-gray-50 mx-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-black mb-10 sm:mb-12"
        >
          <span className="text-blue-800">Meet Our Mentors</span>
          <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{mentor.role}</p>

                  {mentor.qualifications && (
                    <div className="bg-gray-50 rounded-lg p-3 w-full mb-3">
                      <p className="text-sm font-semibold text-gray-600 mb-1">Qualifications</p>
                      <p className="text-sm text-gray-800">{mentor.qualifications}</p>
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-lg p-3 w-full mb-3">
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      {mentor.type === "GBU" ? "Expertise" : "About"}
                    </p>
                    <p className="text-sm text-gray-800">
                      {mentor.type === "GBU" ? mentor.expertise : mentor.about}
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mt-2">
                    <Linkedin className="w-4 h-4" />
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
