import React, { useEffect, useState } from "react";

const stats = [
  { label: "Students", value: 400 },
  { label: "Programs", value: 6 },
  { label: "Faculty Members", value: 20 },
  { label: "Acres Campus", value: 25 },
  { label: "Placement Rate", value: 4, isPercentage: true },
];

const Glance = () => {
  const [counts, setCounts] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      const end = stat.value;
      const isPercentage = stat.isPercentage;
      const duration = 1000; // total duration per stat
      const steps = 30;
      const increment = end / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = current >= end ? end : Math.floor(current);
          return updated;
        });
        if (current >= end) clearInterval(intervals[i]);
      }, duration / steps);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      aria-label="GBU statistics overview"
      className="relative py-16 text-white bg-gradient-to-r from-green-800 via-blue-800 to-orange-800"
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">GBU at a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              tabIndex={0}
              className="rounded-xl p-6 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-300"
            >
              <p className="text-3xl font-bold text-white">
                {counts[index]}
                {stat.isPercentage ? "%" : "+"}
              </p>
              <p className="mt-2 text-sm text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glance;
