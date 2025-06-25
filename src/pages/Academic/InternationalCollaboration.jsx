import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, Users, BookOpen, Award, MapPin, ArrowRight, Plane
} from 'lucide-react';

const iconMap = {
  globe: Globe,
  users: Users,
  book: BookOpen,
  award: Award,
};

const Collaboration = () => {
  const [hero, setHero] = useState(null);
  const [partners, setPartners] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [cta, setCta] = useState(null);

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          heroRes,
          partnersRes,
          programsRes,
          opportunitiesRes,
          ctaRes
        ] = await Promise.all([
          fetch(`${BASE}/academic/mou/hero/`),
          fetch(`${BASE}/academic/mou/partners/`),
          fetch(`${BASE}/academic/mou/programs/`),
          fetch(`${BASE}/academic/mou/opportunities/`),
          fetch(`${BASE}/academic/mou/collaborations/`)
        ]);

        const heroData = await heroRes.json();
        const partnersData = await partnersRes.json();
        const programsData = await programsRes.json();
        const opportunitiesData = await opportunitiesRes.json();
        const ctaData = await ctaRes.json();

        setHero(heroData[0]);
        setPartners(partnersData);
        setPrograms(programsData);
        setOpportunities(opportunitiesData);
        setCta(ctaData[0]);
      } catch (error) {
        console.error('Failed to fetch collaboration data:', error);
      }
    };

    fetchData();
  }, [BASE]);

  if (!hero || !cta) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">{hero.title}</h1>
          <p className="text-base sm:text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">{hero.description}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { label: 'Active MOUs', metric: hero.activemou_count, icon: Globe },
              { label: 'Participants', metric: hero.participants_counts, icon: Users },
              { label: 'Countries', metric: hero.countries_count, icon: MapPin },
              { label: 'Publications', metric: hero.publications_count, icon: BookOpen },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.metric}</h3>
                  <p className="text-gray-600 text-xs md:text-base">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOUs/Partners */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{hero.title}</h2>
            <p className="text-lg text-gray-600">{hero.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((mou, index) => (
              <div
                key={mou.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col"
              >
                <div className="mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">{mou.card_title}</h3>
                  <span className="text-xs text-blue-800 bg-blue-100 px-2 py-1 rounded">{mou.types}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">{mou.card_desc}</p>
                <p className="text-xs text-gray-500 mb-1">Country: {mou.country}</p>
                <p className="text-xs text-gray-500 mb-2">Since {mou.since_year}</p>
                <a href={mou.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline mt-auto">
                  Watch Video
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Programs */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{programs[0]?.title}</h2>
            <p className="text-lg text-gray-600">{programs[0]?.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={program.id} className="bg-gray-50 p-5 rounded-2xl border border-blue-100 flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{program.card_title}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">{program.card_desc}</p>
                <p className="text-xs text-gray-500 mb-1">Duration: {program.duration}</p>
                <p className="text-xs text-gray-500 mb-2">Participants: {program.participants}</p>
                <ul className="text-xs text-gray-600 list-disc pl-4">
                  {program.benefits.split('\r\n').map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Collaboration Opportunities */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{opportunities[0]?.title}</h2>
            <p className="text-lg text-gray-600">{opportunities[0]?.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {opportunities.map((op, index) => (
              <div key={op.id} className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <Plane className="text-blue-600 w-5 h-5" />
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded">Deadline: {new Date(op.deadline).toLocaleDateString()}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">{op.card_title}</h3>
                <p className="text-xs text-gray-600 mb-1">Duration: {op.duration}</p>
                <p className="text-xs text-gray-600 mb-1">Benefits: {op.benefits}</p>
                <p className="text-xs text-gray-600 mb-2">Eligibility: {op.elegibility}</p>
                <a href={op.url} className="bg-blue-600 text-white text-xs py-2 px-4 rounded-lg hover:bg-blue-700 text-center mt-auto">
                  {op.button_text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-16" style={{ backgroundColor: cta.background_color }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{cta.title}</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">{cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={cta.url1} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">{cta.button1_text}</a>
            <a href={cta.url2} className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">{cta.button2_text}</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaboration;
