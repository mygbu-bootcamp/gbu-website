 import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement("#root");

const images = [
  "https://www.gburif.org/Photo%20Gallery/img/img-1.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-2.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-3.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-4.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-5.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-6.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-7.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-8.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-9.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-10.jpg"
];

const CustomPrev = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-100"
    onClick={onClick}
  >
    <ChevronLeft className="w-5 h-5" />
  </button>
);

const CustomNext = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-100"
    onClick={onClick}
  >
    <ChevronRight className="w-5 h-5" />
  </button>
);

export default function GallerySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (src) => {
    setActiveImage(src);
    setModalOpen(true);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    afterChange: (index) => setCurrentSlide(index),
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-gray-50 rounded-lg relative">
       <h1 className="text-3xl font-bold text-center mb-8">PHOTO GALLERY</h1>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div
              className="rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
              onClick={() => openModal(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                style={{ width: "330px", height: "220.833px", objectFit: "cover" }}
                className="mx-auto"
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="text-center mt-4 text-gray-600 text-sm">
    {currentSlide + 1}–{Math.min(currentSlide + 2, images.length)} of {images.length}
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Full Image View"
        className="flex items-center justify-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50"
      >
        <img src={activeImage} alt="Zoomed" className="max-w-full max-h-full rounded shadow-lg" />
      </Modal>
    </div>
  );
}
