 import React from 'react'
 
 function VirtualTour() {
   return (
     <div>
       <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80')",
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div className="bg-black/50 p-6 rounded-lg max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-6">Experience GBU in 360°</h2>
        <p className="text-lg mb-8 leading-relaxed">
          Take an immersive 360-degree tour of our state-of-the-art facilities, beautiful campus grounds, 
          and modern infrastructure. Explore every corner of our world-class university from anywhere in the world.
        </p>
        <button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full"
        >
          Start 360° Virtual Tour
        </button>
      </div>
    </section>
     </div>
   )
 }
 
 export default VirtualTour
 