import React, { useEffect, useState } from "react";
import axios from "axios";

const Glance = () => {
  const [counts, setCounts] = useState([]);
  const [heading, setHeading] = useState("GBU at a Glance");
  const [bgColor, setBgColor] = useState("bg-gradient-to-r from-green-800 via-blue-800 to-orange-800");

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
  const API_URL = `${BASE}/landing/glance-stat/`;

  const extractNumber = (str) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const isPercentage = (str) => str.includes("%");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(API_URL);
        const data = res.data;
        if (data.length === 0) return;

        const item = data[0];

        const extractedStats = [
          { label: "Students", value: extractNumber(item.student_count), suffix: item.student_count.includes('+') ? '+' : '' },
          { label: "Programs", value: extractNumber(item.programs_count), suffix: item.programs_count.includes('+') ? '+' : '' },
          { label: "Faculty Members", value: extractNumber(item.faculty_member), suffix: item.faculty_member.includes('+') ? '+' : '' },
          { label: "Acres Campus", value: extractNumber(item.acres_camus), suffix: item.acres_camus.includes('+') ? '+' : '' },
          { label: "Placement Rate", value: extractNumber(item.placement_rate), suffix: item.placement_rate.includes('%') ? '%' : '' },
        ];

        setCounts(Array(extractedStats.length).fill(0));
        setHeading(item.label || "GBU at a Glance");
        setBgColor(item.background_color || bgColor);

        // Animate counts
        extractedStats.forEach((stat, i) => {
          const end = stat.value;
          const duration = 1000;
          const steps = 30;
          const increment = end / steps;
          let current = 0;

          const interval = setInterval(() => {
            current += increment;
            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = current >= end ? end : Math.floor(current);
              return updated;
            });
            if (current >= end) clearInterval(interval);
          }, duration / steps);
        });

      } catch (error) {
        console.error("Failed to fetch glance stats:", error);
      }
    };

    fetchStats();
  }, []);

  const labels = ["Students", "Programs", "Faculty Members", "Acres Campus", "Placement Rate"];

  return (
    <section
      aria-label="GBU statistics overview"
      className={`relative py-16 text-white ${bgColor.startsWith('bg-') ? bgColor : ''}`}
      style={!bgColor.startsWith('bg-') ? { backgroundColor: bgColor } : {}}
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {counts.map((count, index) => (
            <div
              key={index}
              tabIndex={0}
              className="rounded-xl p-6 bg-white/10 backdrop-blur-2xl border border-white/20 border-solid shadow-lg hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-300"
            >
              <p className="text-3xl font-bold text-white">
                {count}
                {labels[index] === "Placement Rate" ? "%" : "+"}
              </p>
              <p className="mt-2 text-sm text-gray-200">{labels[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glance;