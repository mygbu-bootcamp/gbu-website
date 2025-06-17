export default function HostelIntro() {
  return (
    <section className="bg-orange-50 py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to Hostels at GBU
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Gautam Buddha University provides state-of-the-art hostel facilities
          designed to create a comfortable and conducive environment for
          academic excellence. Our hostels are equipped with modern amenities
          and maintained with the highest standards of safety and cleanliness.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Feature
            icon="🛡️"
            title="24/7 Security"
            desc="CCTV surveillance and biometric access"
          />
          <Feature
            icon="📶"
            title="High-Speed WiFi"
            desc="Free internet in all rooms"
          />
          <Feature
            icon="🍽️"
            title="Mess Facility"
            desc="Nutritious meals with varied menu"
          />
          <Feature
            icon="🚗"
            title="Parking Space"
            desc="Secure parking facilities"
          />
        </div>

        {/* Spotlight */}
        <div className="bg-purple-600 text-white p-4 rounded-md shadow-lg">
          <h3 className="font-semibold text-lg">Spotlights</h3>
          <p className="text-sm mt-1">
            Admission Open (June 25–Jul–2023) | Fee Detail Download (June
            28–Jul–2023)
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 max-w-2xl h-[28rem] shadow-2xl rounded-xl overflow-hidden">
        <img
          src="https://imgs.search.brave.com/m0jceLSkQO4Gc--AJZgzO6fKr_OlusvtuNWPtoCc_uU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzQ1LzU5Lzg1/LzM2MF9GXzg0NTU5/ODUxNF91dDJmbmZ6/RVRQRXNWeENOekhK/TTlxRHVkOE9hT0JC/dC5qcGc"
          alt="Hostel Room"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white hover:shadow-xl transition p-4 rounded-lg border border-gray-200">
      <div className="text-3xl">{icon}</div>
      <h4 className="font-semibold mt-2 text-lg">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
