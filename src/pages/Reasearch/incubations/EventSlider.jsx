import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: "GBU STUDENTS VISIT WORKSHOPS",
    date: "March 15, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "Students from various departments visited industry workshops to explore practical applications and innovations."
  },
  {
    title: "TECH INNOVATION FAIR",
    date: "April 2, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "A showcase of student-led innovations with live prototypes and demos."
  },
  {
    title: "WOMEN IN TECH SEMINAR",
    date: "April 28, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "Celebrating women innovators and leaders through talks, networking, and mentorship sessions."
  },
  {
    title: "AI & ROBOTICS WORKSHOP",
    date: "May 10, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "Hands-on experience with real robots and AI models designed by students."
  },
  {
    title: "CAMPUS HACKATHON 2024",
    date: "June 5, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "24-hour coding competition attracting teams from across India."
  },
  {
    title: "STARTUP PITCH DAY",
    date: "June 20, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "Incubated startups presented their business ideas to angel investors and mentors."
  },
  {
    title: "GREEN TECH CONFERENCE",
    date: "July 3, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "Focused on sustainability, recycling innovation, and green energy."
  },
  {
    title: "INTERNATIONAL GUEST TALK",
    date: "July 18, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "Dr. Emily Tan from Stanford spoke on global research opportunities for students."
  },
  {
    title: "OPEN MIC & IDEATHON",
    date: "August 1, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "Students pitched raw ideas and received feedback from peers and faculty."
  },
  {
    title: "EXHIBITION DAY",
    date: "August 25, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "All departments displayed their annual project work in a public showcase."
  }
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
  >
    <ChevronRight size={20} />
  </button>
);

export default function EventSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 rounded-xl">
            <h1 className="text-3xl font-bold text-center mb-8">EVENTS GALLERY</h1>
      <Slider {...settings}>
        {events.map((event, idx) => (
          <div key={idx} className="px-3">
            <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
