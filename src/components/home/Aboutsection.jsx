import { useEffect, useState } from "react";

const ABOUT_API = import.meta.env.VITE_ABOUT_API;

export default function AboutSection() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch(ABOUT_API)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setAboutData(data);
      })
      .catch((error) => console.error("Error fetching about data:", error));
  }, []);

  if (!aboutData) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // Extract base URL for media
  const mediaBaseUrl = ABOUT_API.replace("/landing/aboutus/", "");

  return (
    <div className="bg-white py-12 px-6 sm:py-16 sm:px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-red-500 mb-6">
            {aboutData.title || "About Us"}
          </h2>

          {aboutData.description &&
            aboutData.description.split(/\r?\n\r?\n/).map((para, index) => (
              <p key={index} className="text-gray-700 text-base sm:text-lg mb-4">
                {para}
              </p>
            ))}

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            {aboutData.button1_url && aboutData.button1_text && (
              <a
                href={aboutData.button1_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition w-full sm:w-auto">
                  {aboutData.button1_text}
                </button>
              </a>
            )}
            {aboutData.button2_text && (
              <button className="border border-blue-700 text-blue-700 px-5 py-3 rounded-md hover:bg-blue-50 transition w-full sm:w-auto">
                {aboutData.button2_text}
              </button>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative flex justify-center">
          <img
            src={
              aboutData.image
                ? `${mediaBaseUrl}/media/${aboutData.image}`
                : "https://via.placeholder.com/600x400?text=No+Image"
            }
            alt={aboutData.title || "About Section"}
            className="rounded-xl shadow-xl w-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-orange-600 text-white text-center px-5 py-3 rounded-lg shadow-lg text-sm sm:text-base">
            <div className="text-xl sm:text-2xl font-bold">15+</div>
            <div>Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  );
}
