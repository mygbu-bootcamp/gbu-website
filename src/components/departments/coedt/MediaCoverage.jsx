 import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import project1 from "../../../assets/project1.png"
const MediaCoverage = () => {
  const mediaItems = [
  {
    title: "Drone Pilot Course at Gautam Buddha University",
    date: "2022-04-23",
    image: "https://static.wixstatic.com/media/bc6a73_ed122f7cc89e48619d459f4272eba491~mv2.jpg/v1/fill/w_815,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpg",  
    description: "Gautam Buddha University to launch drone pilot training courses with short-term modules for aspiring drone operators.",
    link: "https://www.navodayatimes.in/news/khabre/drone-pilot-will-also-now-have-a-course-in-gautam-buddha-university/197826/"
  },
  {
    title: "Drone Excellence Centre to be Set Up in Uttar Pradesh",
    date: "2022-08-04",
    image: "https://static.wixstatic.com/media/bc6a73_3a580ea9fffa4ccda74d33dc382573c9~mv2.jpg/v1/fill/w_815,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpg",
    description: "Omnipresent Robot Technologies in partnership with GBU and Skill Council of India will establish a drone excellence centre in Uttar Pradesh.",
    link: "https://economictimes.indiatimes.com/industry/transportation/airlines-/-aviation/drone-excellence-centre-to-be-set-up-in-uttar-pradesh/articleshow/91593956.cms?from=mdr"
  },
  {
    title: "Drone Courses to Boost Youth Employment at GBU",
    date: "2022-05-01",
    image: "https://static.wixstatic.com/media/bc6a73_009334d175304d4485f3f7eabe50dad5~mv2.jpeg/v1/fill/w_815,h_358,al_c,lg_1,q_80,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpeg",
    description: "Three new drone technology programs launching at GBU to support youth employment and skilling in drone manufacturing, piloting, and technology.",
    link: "https://www.patrika.com/noida-news/gautam-buddha-university-will-conduct-3-type-short-term-drone-course-7470045"
  },
  {
    title: "GBU to Become Smart Campus with Drone Manufacturing & Training",
    date: "2022-06-01",
    image: "https://static.wixstatic.com/media/bc6a73_d4a5adff6b184bd39773f481faab5635~mv2.jpg/v1/fill/w_815,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpg",
    description: "New developments at GBU to open employment avenues through drone manufacturing and pilot training initiatives.",
    link: ""
  },
  {
    title: "GBU at Bharat Drone Mahotsav 2022",
    date: "2022-05-27",
    image: "https://static.wixstatic.com/media/bc6a73_39c8b7fad71449f4814235f25c45bf6f~mv2.jpg/v1/fill/w_792,h_347,al_c,lg_1,q_80,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpg",
    description: "Gautam Buddha University showcased its drone technology centre at the Bharat Drone Mahotsav 2022 with student participation.",
    link: "https://www.grenonews.com/?p=57408"
  },
  {
    title: "Students at GBU Building Delivery Drones",
    date: "2022-07-01",
    image: "https://static.wixstatic.com/media/bc6a73_c395997f244f43d5bccd5310bd8deae2~mv2.jpeg/v1/fill/w_749,h_329,al_c,q_80,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpeg",
    description: "GBU students actively engaged in drone manufacturing projects including delivery drones for smart solutions.",
    link: "https://www.amarujala.com/delhi-ncr/noida/gbu-students-are-making-delivery-drones-noida-news-noi6522566115"
  },
  {
    title: "GBU to Make History with First Drone Course in UP",
    date: "2022-05-20",
    image:project1 ,
    description: "Gautam Buddha University to launch UP’s first-ever drone certification course, marking a significant milestone.",
    link: ""
  },
  {
    title: "Centre for Drone Studies Established at GBU",
    date: "2022-06-15",
    image: "https://static.wixstatic.com/media/bc6a73_069991b6d1a843e8a6867111d103a6ab~mv2.jpeg/v1/fill/w_815,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpeg",
    description: "Gautam Buddha University sets up a dedicated Centre for Drone Studies focusing on research, training, and development.",
    link: "https://www.shiksha.com/news/college-gautam-buddha-university-establishes-centre-for-drone-studies-blogId-86279"
  }
];


  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Media Coverage
          </h2>
          <p className="text-lg text-gray-600">
            Explore how our work is making headlines
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl shadow-lg border border-gray-200 bg-white p-6 h-[600px]"
        >
          <h3 className="text-blue-800 text-lg font-bold mb-4">News & Articles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-[calc(100%-80px)] pr-2 custom-scrollbar">
            {mediaItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-semibold text-blue-900 text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 mb-1">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-blue-600 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCoverage;
