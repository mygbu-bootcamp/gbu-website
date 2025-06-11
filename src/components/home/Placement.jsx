import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const companies = [
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Genpact", logo: "/logos/genpact.png" },
  { name: "Adani", logo: "/logos/adani.png" },
  { name: "DishTV", logo: "/logos/dishtv.png" },
  { name: "NIIT", logo: "/logos/niit.png" },
  { name: "ICICI", logo: "/logos/icici.png" },
  { name: "Pepsi", logo: "/logos/pepsi.png" },
  { name: "HCL", logo: "/logos/hcl.png" },
];

const StatItem = ({ icon, end, duration, suffix = "", separator = "", text, start }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="text-center" ref={ref}>
      <img src={icon} className="w-10 h-10 mx-auto mb-3" alt="icon" />
      <h3 className="text-3xl font-bold text-gray-900">
        {inView ? (
          <CountUp end={end} duration={duration} suffix={suffix} separator={separator} start={start ?? 0} />
        ) : (
          "0"
        )}
        +
      </h3>
      <p className="text-gray-600 text-sm mt-1">{text}</p>
    </div>
  );
};

const HiringSection = () => {
  const [containerWidth, setContainerWidth] = useState(1200);
  const [time, setTime] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    const updateSize = () => {
      setContainerWidth(window.innerWidth > 1280 ? 1200 : window.innerWidth - 40);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const animate = () => {
      setTime((prev) => prev + 0.0005);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const radius = containerWidth / 2.2;

  return (
    <section className="relative bg-[#f5f9ff] py-40 overflow-hidden">
      {/* Heading */}
      <div className="absolute top-2 left-0 w-full text-center px-4 z-10">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Companies Hiring</h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Prestigious companies regularly hire students from Sharda University.
        </p>
      </div>

      {/* Animated Semicircle */}
      <div
        className="relative mx-auto mt-32"
        style={{
          width: containerWidth,
          height: radius / 2.5,
          marginBottom: `-${radius / 3.5}px`,
        }}
      >
        {companies.map((company, i) => {
          const total = companies.length;
          const offset = (time + i / total) % 1;
          const angle = Math.PI * offset;

          const x = radius * Math.cos(angle);
          const y = -radius * Math.sin(angle);

          return (
            <div
              key={company.name}
              className="absolute transition-transform duration-75"
              style={{
                left: `${containerWidth / 2 + x - 30}px`,
                top: `${radius / 1.3 + y - 30}px`,
              }}
            >
              <div className="w-[60px] h-[60px] bg-white rounded-full shadow-md flex items-center justify-center">
                <img src={company.logo} alt={company.name} className="w-10 h-10 object-contain" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Section with Shadow Box */}
      <div className="w-full max-w-3xl mx-auto mt-24 bg-white shadow-lg rounded-xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <StatItem icon="/icons/hiring.png" end={600} duration={2} text="Companies hiring worldwide" />
          <StatItem icon="/icons/alumni.png" end={30000} duration={3} separator="," text="Successful Alumni worldwide" />
          <StatItem icon="/icons/placement.png" end={100} start={65} duration={2.5} suffix="%" text="Placement program wise" />
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
