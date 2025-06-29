import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr. Arpit Bhardwaj",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/6735c61d170ee_WhatsApp%20Image%202024-11-14%20at%203.12.33%20PM.jpeg",
  },
  {
    name: "Dr. Arun Solanki",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/67c6a617c08be_cropped-arun.jpg",
  },
  {
    name: "Dr. Aarti Gautam Dinker",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/6605300c5c849_aarti.jpg",
  },
  {
    name: "Dr. Anika",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/672ee826e3b19_Anika.jpg",
  },
  {
    name: "Dr. Anurag Singh Baghel",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/66052f4f5757a_asb.jpg",
  },
  {
    name: "Dr. Gaurav Kumar",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/6721e9346dac1_Photo-removebg-preview.png",
  },
  {
    name: "Dr. Nitesh Singh Bhati",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/671b256dd035a_WhatsApp%20Image%202024-10-25%20at%2010.05.19%20AM.jpeg",
  },
  {
    name: "Dr. Pradeep Tomar",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/6603cfe3be87c_pradeep-tomar.jpg",
  },
  {
    name: "Dr. Rajendra Bahadur Singh",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/6613ce13d7538_RBS_PIC.jpeg",
  },
  {
    name: "Dr. Raju Pal",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/660a761667ced_CS%20Raju%20Pal.jpg",
  },
  {
    name: "Dr. Rakesh Kumar",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/67c6cc28b50d0_SML_8821.JPG",
  },
  {
    name: "Dr. Shiraz Khurana",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/672b4e0fd48e8_image%20(1).png",
  },
  {
    name: "Dr. Rakesh Kumar",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/674dcc857a182_photo2.jpg",
  },
  {
    name: "Dr. Vimlesh Kumar Ray",
    title: "Assistant Professor – ECE",
    image: "https://faculty.gbu.ac.in/uploads/photos/66052fd60f82d_vimlesh.jpg",
  },
  {
    name: "Mr. Kartikeya Tiwari",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/66475c0d84def_IMG-20240517-WA0009%20(1).jpg",
  },
  {
    name: "Dr. Vidushi Sharma",
    title: "Assistant Professor – ECE",
    image: "https://faculty.gbu.ac.in/uploads/photos/66052f0435179_vidushi.jpg",
  },
  {
    name: "Dr. Mangal Das",
    title: "Assistant Professor – ECE",
    image: "https://faculty.gbu.ac.in/uploads/photos/676049327abf5_Mangal_Das_2024-min.JPG",
  },
  {
    name: "Dr. Navaid Zafar Rizvi",
    title: "Assistant Professor – ECE",
    image: "https://faculty.gbu.ac.in/uploads/photos/66066a93789f0_navaid-rizvi.jpg",
  },
  {
    name: "Dr. Priyanka Goyal",
    title: "Assistant Professor – ECE",
    image: "https://faculty.gbu.ac.in/uploads/photos/66052fa591258_priyankag.jpg",
  },
  {
    name: "Dr. Rajesh Mishra",
    title: "Assistant Professor – ECE",
    image: "https://faculty.gbu.ac.in/uploads/photos/67c341c729a98_rajesh%20photo.jpg",
  },
  {
    name: "Dr. Vivek Chaudhary",
    title: "Assistant Professor – ECE",
    image: "https://faculty.gbu.ac.in/uploads/photos/67a9de3a1a667_PhotoGraph_Vivek.jpg",
  },
  {
    name: "Prof. Sanjay Kumar Sharma",
    title: "Professor – IT",
    image: "/assets/logo.svg",
  },
  {
    name: "Dr. Neeta Singh",
    title: "Assistant Professor – IT",
    image: "/assets/logo.svg",
  },
  {
    name: "Dr. Akash Kumar",
    title: "Assistant Professor – IT",
    image: "/assets/logo.svg",
  },
  {
    name: "Dr. Maneet Singh",
    title: "Assistant Professor – IT",
    image: "/assets/logo.svg",
  }
];

// Duplicate for infinite effect
const repeatedFaculty = [...faculty, ...faculty];

export default function FacultyResponsiveSlider() {
  const [x, setX] = useState(0);
  const cardWidth = 280;
  const gap = 38;
  const moveBy = cardWidth + gap;
  const totalCards = repeatedFaculty.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setX((prevX) => {
        const nextX = prevX - moveBy;
        const maxOffset = -moveBy * faculty.length;
        return nextX <= maxOffset ? 0 : nextX;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-white overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8">
        Faculty of ICT
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.div
          animate={{ x }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="flex"
          style={{
            width: `${(cardWidth + gap) * totalCards}px`,
            columnGap: `${gap}px`,
          }}
        >
          {repeatedFaculty.map((member, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md border border-blue-200 p-4 flex flex-col items-center text-center"
              style={{ width: `${cardWidth}px` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-44 object-cover rounded-xl shadow mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
