import React, { useState } from "react";

const newsletters = [
    {
        id: 1,
        title: "Spring 2024 Edition",
        date: "March 15, 2024",
        description:
            "Explore the highlights of campus life, academic achievements, and upcoming events in our Spring 2024 newsletter. Dive into exclusive interviews, research spotlights, and student success stories.",
        link: "#",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "Winter 2023 Edition",
        date: "December 10, 2023",
        description:
            "Catch up on the latest research, student stories, and winter festivities at our university. This edition features a special on sustainability and innovation.",
        link: "#",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "Alumni Special",
        date: "September 5, 2023",
        description:
            "A special edition featuring inspiring journeys of our alumni and their contributions to society. Read about their achievements and how they are making a difference.",
        link: "#",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "Summer 2023 Recap",
        date: "July 20, 2023",
        description:
            "Relive the best moments of summer: workshops, internships, and community outreach programs. Includes a photo gallery and student testimonials.",
        link: "#",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
];

const archives = [
    {
        id: 5,
        title: "Spring 2023 Edition",
        date: "March 10, 2023",
        description:
            "Highlights from Spring 2023: academic milestones, campus events, and student spotlights.",
        link: "#",
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 6,
        title: "Winter 2022 Edition",
        date: "December 12, 2022",
        description:
            "A look back at winter celebrations, research updates, and alumni news from 2022.",
        link: "#",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Alumni Special 2022",
        date: "September 8, 2022",
        description:
            "Stories of alumni achievements and their impact on the community in 2022.",
        link: "#",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    },
];

const NewsLetter = () => {
    const [showArchive, setShowArchive] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 py-10 px-4 font-sans relative overflow-x-hidden">
            {/* Animated floating shapes */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-100 opacity-40 rounded-full blur-3xl animate-float1"></div>
                <div className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-200 opacity-30 rounded-full blur-2xl animate-float2"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-100 opacity-30 rounded-full blur-2xl animate-float3"></div>
            </div>
            {/* Header */}
            <header className="max-w-3xl mx-auto text-center mb-12 flex flex-col items-center gap-3 relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-400 drop-shadow-2xl bg-[length:200%_200%] animate-gradient-x tracking-tight">
                    University Newsletters
                </h1>
                <p className="mt-3 text-lg md:text-xl text-gray-700 font-medium max-w-2xl animate-fade-in">
                    Stay informed with the latest campus news, research breakthroughs, alumni achievements, and upcoming events. Our newsletters keep you connected to the vibrant university community.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <button className="px-7 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        Subscribe Now
                    </button>
                    <button
                        className="px-7 py-2.5 rounded-full border-2 border-indigo-500 text-indigo-700 font-semibold bg-white hover:bg-indigo-50 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onClick={() => setShowArchive((prev) => !prev)}
                    >
                        {showArchive ? "Hide Archive" : "View Archive"}
                    </button>
                </div>
            </header>

            {/* Newsletter Cards */}
            {!showArchive && (
                <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto z-10 relative">
                    {newsletters.map((nl, idx) => (
                        <article
                            key={nl.id}
                            className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden group transition-transform duration-300 hover:-translate-y-3 hover:shadow-3xl border border-blue-100 hover:border-indigo-300 ${
                                idx % 2 === 0
                                    ? "animate-fade-in-left"
                                    : "animate-fade-in-right"
                            }`}
                        >
                            <div className="h-48 w-full overflow-hidden relative">
                                <img
                                    src={nl.image}
                                    alt={nl.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="p-7 flex flex-col h-full">
                                <h2 className="text-2xl font-bold text-indigo-800 mb-1 group-hover:text-blue-600 transition-colors duration-200 drop-shadow">
                                    {nl.title}
                                </h2>
                                <span className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                                    <svg className="w-4 h-4 text-blue-400 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 4h8m-7-8v8m10-8v8" />
                                    </svg>
                                    {nl.date}
                                </span>
                                <p className="text-gray-700 mb-5 flex-1">{nl.description}</p>
                                <a
                                    href={nl.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow hover:from-indigo-600 hover:to-blue-500 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Read More
                                </a>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 opacity-40 rounded-full blur-2xl pointer-events-none group-hover:opacity-60 transition-opacity duration-300"></div>
                        </article>
                    ))}
                </section>
            )}

            {/* Archive Cards */}
            {showArchive && (
                <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto z-10 relative">
                    {archives.map((nl, idx) => (
                        <article
                            key={nl.id}
                            className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden group transition-transform duration-300 hover:-translate-y-3 hover:shadow-3xl border border-blue-100 hover:border-indigo-300 ${
                                idx % 2 === 0
                                    ? "animate-fade-in-left"
                                    : "animate-fade-in-right"
                            }`}
                        >
                            <div className="h-48 w-full overflow-hidden relative">
                                <img
                                    src={nl.image}
                                    alt={nl.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="p-7 flex flex-col h-full">
                                <h2 className="text-2xl font-bold text-indigo-800 mb-1 group-hover:text-blue-600 transition-colors duration-200 drop-shadow">
                                    {nl.title}
                                </h2>
                                <span className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                                    <svg className="w-4 h-4 text-blue-400 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 4h8m-7-8v8m10-8v8" />
                                    </svg>
                                    {nl.date}
                                </span>
                                <p className="text-gray-700 mb-5 flex-1">{nl.description}</p>
                                <a
                                    href={nl.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow hover:from-indigo-600 hover:to-blue-500 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Read More
                                </a>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 opacity-40 rounded-full blur-2xl pointer-events-none group-hover:opacity-60 transition-opacity duration-300"></div>
                        </article>
                    ))}
                </section>
            )}

            {/* Enhanced Animations */}
            <style>{`
                @keyframes fade-in-left {
                    0% { opacity: 0; transform: translateX(-40px);}
                    100% { opacity: 1; transform: translateX(0);}
                }
                @keyframes fade-in-right {
                    0% { opacity: 0; transform: translateX(40px);}
                    100% { opacity: 1; transform: translateX(0);}
                }
                @keyframes fade-in {
                    0% { opacity: 0;}
                    100% { opacity: 1;}
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%;}
                    50% { background-position: 100% 50%;}
                }
                @keyframes float1 {
                    0%, 100% { transform: translateY(0);}
                    50% { transform: translateY(-20px);}
                }
                @keyframes float2 {
                    0%, 100% { transform: translateY(0);}
                    50% { transform: translateY(30px);}
                }
                @keyframes float3 {
                    0%, 100% { transform: translateY(0);}
                    50% { transform: translateY(-15px);}
                }
                .animate-fade-in-left {
                    animation: fade-in-left 1s cubic-bezier(.4,0,.2,1) both;
                }
                .animate-fade-in-right {
                    animation: fade-in-right 1s cubic-bezier(.4,0,.2,1) both;
                }
                .animate-fade-in {
                    animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
                }
                .animate-gradient-x {
                    animation: gradient-x 4s ease-in-out infinite;
                }
                .animate-float1 {
                    animation: float1 7s ease-in-out infinite;
                }
                .animate-float2 {
                    animation: float2 9s ease-in-out infinite;
                }
                .animate-float3 {
                    animation: float3 6s ease-in-out infinite;
                }
                /* Custom shadow for cards */
                .shadow-3xl {
                    box-shadow: 0 10px 32px 0 rgba(60, 80, 180, 0.18), 0 2px 4px 0 rgba(60, 80, 180, 0.08);
                }
            `}</style>
        </div>
    );
};

export default NewsLetter;
