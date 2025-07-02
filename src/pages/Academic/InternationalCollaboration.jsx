import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Globe, Users, BookOpen, MapPin, Plane
} from 'lucide-react';

const BASE_URL = import.meta.env.VITE_HOST;

const Collaboration = () => {
  const [hero, setHero] = useState(null);
  const [partners, setPartners] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [cta, setCta] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, partnersRes, programsRes, opportunitiesRes, ctaRes] = await Promise.all([
          axios.get(`${BASE_URL}/academic/mou/hero/`),
          axios.get(`${BASE_URL}/academic/mou/partners/`),
          axios.get(`${BASE_URL}/academic/mou/programs/`),
          axios.get(`${BASE_URL}/academic/mou/opportunities/`),
          axios.get(`${BASE_URL}/academic/mou/collaborations/`)
        ]);

        setHero(heroRes.data[0]);
        setPartners(partnersRes.data);
        setPrograms(programsRes.data);
        setOpportunities(opportunitiesRes.data);
        setCta(ctaRes.data[0]);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!hero || !cta) return <div className="text-center py-20">Loading...</div>;

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">{hero.title}</h1>
          <p className="text-lg">{hero.description}</p>
        </div>
      </section>

      <section className="py-10 bg-white text-center grid grid-cols-2 sm:grid-cols-4 gap-6 px-4">
        {[
          { label: 'Active MOUs', metric: hero.activemou_count, icon: Globe },
          { label: 'Participants', metric: hero.participants_counts, icon: Users },
          { label: 'Countries', metric: hero.countries_count, icon: MapPin },
          { label: 'Publications', metric: hero.publications_count, icon: BookOpen }
        ].map((stat, i) => (
          <div key={i}>
            <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-2">
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">{stat.metric}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="py-10 bg-gray-50 px-5">
        <h2 className="text-center text-4xl font-bold mb-6">Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div key={p.id} className="bg-white rounded-xl p-4 shadow-2xl leading-relaxed">
              <h3 className="text-lg font-bold">{p.card_title}</h3>
              <p className="text-sm text-gray-600">{p.card_desc}</p>
              <p className="text-sm text-gray-950">Country: {p.country}</p>
              <p className="text-xs text-gray-500">Since {p.since_year}</p>
              <a href={p.url} target="_blank" rel="noreferrer" className="text-blue-600 text-xs">View MoU</a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-white px-4">
        <h2 className="text-center text-3xl font-bold mb-6">{programs[0]?.title}</h2>
        <p className="text-center text-gray-600 mb-6">{programs[0]?.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.id} className="border border-blue-100 p-4 rounded-lg">
              <h3 className="font-bold">{p.card_title}</h3>
              <p className="text-sm text-gray-600">{p.card_desc}</p>
              <p className="text-sm text-gray-900 py-2">Duration: {p.duration}</p>
              <p className="text-xs text-gray-800">Participants: {p.participants}</p>
              <ul className="text-xs list-disc pl-4 py-1">
                {p.benefits.split('\r\n').map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-gray-50 px-4">
        <h2 className="text-center text-3xl font-bold mb-6">{opportunities[0]?.title}</h2>
        <p className="text-center text-gray-600 mb-6">{opportunities[0]?.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((o) => (
            <div key={o.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <div className="flex justify-between mb-2">
                <Plane className="text-blue-600 w-5 h-5" />
                <span className="text-sm text-red-600">Deadline: {new Date(o.deadline).toLocaleDateString()}</span>
              </div>
              <h3 className="text-sm font-bold">{o.card_title}</h3>
              <p className="text-xs pt-1">Duration: {o.duration}</p>
              <p className="text-xs pt-1">Benefits: {o.benefits}</p>
              <p className="text-xs pt-1">Eligibility: {o.elegibility}</p>
              <a href={o.url} target="_blank" rel="noreferrer" className="mt-2 bg-blue-600 text-white text-xs px-4 py-2 rounded-md text-center hover:bg-blue-700">
                {o.button_text}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 text-center" style={{ backgroundColor: cta.background_color }}>
        <h2 className="text-3xl font-bold mb-2">{cta.title}</h2>
        <p className="text-gray-600 mb-4">{cta.description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={cta.url1} className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">{cta.button1_text}</a>
          <a href={cta.url2} className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50">{cta.button2_text}</a>
        </div>
      </section>
    </div>
  );
};

export default Collaboration;
