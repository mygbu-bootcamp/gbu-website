import React from "react";
import yogi from "../../assets/Yogiji.jpg"
const Chancellor = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.7)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhcmNoIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNMCAwaDUwdjUwSDB6IiBmaWxsPSIjOGI0NTEzIi8+CiAgICAgIDxwYXRoIGQ9Ik0yNSA1MGEyNSAyNSAwIDAgMCAwLTUwIiBzdHJva2U9IiM2ZjM0MDkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2FyY2gpIi8+Cjwvc3ZnPg==')"
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Chancellor's Message</h1>
          <p className="text-lg opacity-90">Leadership Vision for Academic Excellence</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
         {/* Chancellor Card */}
          <div className="lg:w-1/3">
            <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
              <div className="bg-gray-300 h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={yogi} // 🔁 Make sure the path is correct relative to /public
                  alt="Yogi Adityanath"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Yogi Adityanath</h3>
                <p className="text-sm text-gray-600 mb-1">Hon'ble Chancellor</p>
                <p className="text-xs text-gray-500">Chief Minister, Uttar Pradesh</p>
              </div>
            </div>
          </div>


          {/* Content Section */}
          <div className="lg:w-2/3">
            {/* Quote Icon */}
            <div className="text-6xl text-orange-500 font-serif mb-4">"</div>
            
            {/* Quote Text */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                "Education is the most powerful weapon which can change the world and transform society. 
                At Gautam Buddha University, we are committed to providing world-class education that 
                nurtures both intellectual growth and moral values."
              </p>
              
              <p className="text-lg">
                "Our vision extends beyond traditional education. We aim to create an ecosystem where 
                innovation thrives, research flourishes, and students emerge as global leaders equipped with 
                knowledge, skills, and ethical foundations."
              </p>
              
              <p className="text-lg">
                "The university stands as a beacon of hope and progress, fostering an environment where 
                diverse minds collaborate to address contemporary challenges and build a sustainable future 
                for our nation and the world."
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 text-right">
              <p className="text-xl font-semibold text-orange-600">Yogi Adityanath</p>
              <p className="text-sm text-gray-600">Hon'ble Chancellor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chancellor;