import React from 'react';
import { Link } from 'react-router-dom';

const GlobalStyles = () => (
  <style>{`
    .perspective {
      perspective: 1000px;
    }

    .card-3d {
      transform-style: preserve-3d;
      transition: transform 0.4s ease;
    }

    .card-3d:hover {
      transform: translateZ(50px) scale(1.03);
    }
  `}</style>
);

const Card = ({ imageUrl, label, path }) => {
  return (
    <Link to={path} className="group cursor-pointer relative flex flex-col items-center no-underline">
      <div className="relative w-full h-64 sm:h-72 perspective z-10">
        <div className="card-3d w-full h-full overflow-hidden rounded-xl shadow-xl relative">
          <img src={imageUrl} alt="card" className="object-cover w-full h-full" />
        </div>
      </div>

      <div
        className={`
          w-full py-5 h-20 bg-white backdrop-blur-md text-black text-lg font-semibold flex items-center justify-center
          rounded-b-xl shadow transition-all duration-500
          -mt-20 group-hover:mt-6
          group-hover:rounded-xl group-hover:pl-20 group-hover:pr-20
          z-20
          text-center
        `}
        style={{ willChange: 'margin-top, border-radius, padding-left, padding-right' }}
      >
        <span className="w-full text-center">{label}</span>
      </div>
    </Link>
  );
};

const HoverCards = () => {
  const cards = [
    {
      imageUrl: "https://www.gbu.ac.in/USICT/media/img/slider/1.jpg",
      label: "School Of Information and Communication Technology",
      path: "/schools/ict"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoLwvVWxxxBLWiAC0R019yjKPhFJzb5TuFg&s",
      label: "School Of Biotechnology",
      path: "/schools/biotech"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU89cU4dCM-KXWNc_7tD7_VrF45IcfZGDgFQ&s",
      label: "School Of Engineering",
      path: "/schools/engineering"
    },
    {
      imageUrl: "https://raw.githubusercontent.com/vishal-pandey/content-gbusite/master/slider/5.jpg",
      label: "School Of Buddhist Studies & Civilization",
      path: "/schools/buddhist"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk75RFQPIldQiGk1kAwU7bEURFQV0ORVlqyg&s",
      label: "School Of Law, Justice and Governance",
      path: "/schools/law"
    },
    {
      imageUrl: "https://allegiance-educare.in/storage/uploads/colleges/14974330541497431571kjhldf.jpg",
      label: "School Of Management",
      path: "/schools/management"
    },
    {
      imageUrl: "https://www.psychologs.com/wp-content/uploads/2023/03/GBU-final.jpg",
      label: "School Of Humanities and Social Sciences",
      path: "/schools/humanities"
    },
    {
      imageUrl: "https://images.shiksha.com/mediadata/images/1742534877phpTHlfCW.jpeg",
      label: "School Of Vocational Studies",
      path: "/schools/vocational"
    }
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center text-black bg-white">
      <GlobalStyles />
      <h1 className="text-5xl font-bold mb-6 text-center relative">
        Schools
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-max bg-black/10" />
      </h1>

      <p className="max-w-3xl text-center mb-12 text-lg text-gray-700">
        Gautam Buddha University is home to 8 distinguished schools, each dedicated to a specialized academic field.
        These schools foster interdisciplinary learning and research excellence across technology, science, humanities, law, management, and more.
        Explore each to learn about their unique offerings and opportunities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full px-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            label={card.label}
            path={card.path}
          />
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
