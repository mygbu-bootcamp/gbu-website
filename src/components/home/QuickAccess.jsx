import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './card';
import {
  Landmark, BookOpenCheck, Briefcase, Users, Building, University
} from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Mapping backend icon strings to Lucide icons
const iconMap = {
  university: University,
  book: BookOpenCheck,
  briefcase: Briefcase,
  users: Users,
  building: Building,
  landmark: Landmark
};

const QUICK_ACCESS = import.meta.env.VITE_HOST;
const BASE = (QUICK_ACCESS || "").replace(/\/$/, "");

const QuickAccess = () => {
  const [items, setItems] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("Quick Access");

  useEffect(() => {
    const fetchQuickAccess = async () => {
      try {
        const res = await axios.get(`${BASE}/landing/quick-access`);
        const data = res.data;
        if (Array.isArray(data)) {
          setItems(data);
          if (data.length > 0 && data[0].title) {
            setSectionTitle(data[0].title);
          }
        }
      } catch (err) {
        console.error("Failed to fetch quick access data", err);
      }
    };

    fetchQuickAccess();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon?.toLowerCase()] || Landmark;
            const isExternal = item.url.startsWith("http");

            const card = (
              <Card className="h-full group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <div className={`bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-white`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800">{item.card_title}</h3>
                  <p className="text-xs text-gray-600">{item.card_description}</p>
                </CardContent>
              </Card>
            );

            return isExternal ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} className="block h-full">
                {card}
              </a>
            ) : (
              <Link to={item.url} key={index} className="block h-full">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
