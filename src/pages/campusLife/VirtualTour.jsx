
// import React from 'react';
// import { Camera, MapPin, Play } from 'lucide-react';

// const VirtualTour = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Virtual Tour
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our beautiful campus from anywhere in the world. Take a virtual journey through our facilities, classrooms, and recreational areas.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="relative h-64">
//               <img 
//                 src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                 alt="360° Campus Tour"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center">
//                 <Play className="w-16 h-16 text-white" />
//               </div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-3">360° Campus Tour</h3>
//               <p className="text-gray-600 mb-4">Experience our campus in full 360-degree view with interactive hotspots.</p>
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
//                 Start Tour
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="relative h-64">
//               <img 
//                 src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                 alt="Interactive Map"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-green-600 bg-opacity-60 flex items-center justify-center">
//                 <MapPin className="w-16 h-16 text-white" />
//               </div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-3">Interactive Map</h3>
//               <p className="text-gray-600 mb-4">Navigate through our campus with our detailed interactive map.</p>
//               <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
//                 View Map
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { 
//               title: 'Academic Buildings', 
//               icon: Camera, 
//               color: 'blue',
//               image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//             },
//             { 
//               title: 'Student Facilities', 
//               icon: Camera, 
//               color: 'purple',
//               image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//             },
//             { 
//               title: 'Recreation Areas', 
//               icon: Camera, 
//               color: 'green',
//               image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//             }
//           ].map((item, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <div className="relative h-48">
//                 <img 
//                   src={item.image} 
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//                 <div className={`absolute top-4 left-4 w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
//                   <item.icon className={`w-6 h-6 text-${item.color}-600`} />
//                 </div>
//               </div>
//               <div className="p-6 text-center">
//                 <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
//                 <p className="text-sm text-gray-600">Explore our {item.title.toLowerCase()} in detail</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VirtualTour;


import React, { useState } from 'react';
import { Button } from '../../components/ui/button.jsx';
import { Play, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input.jsx';
import { Label } from '../../components/ui/label.jsx';

const VirtualTour = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const tourHighlights = [
    { title: 'Academic Excellence', description: 'State-of-the-art classrooms and laboratories' },
    { title: 'Modern Infrastructure', description: 'Contemporary buildings with cutting-edge facilities' },
    { title: 'Green Campus', description: 'Eco-friendly environment with beautiful landscapes' },
    { title: 'Student Life', description: 'Vibrant hostel life and recreational facilities' }
  ];

  return (
    <section id="campus-tour" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Virtual Campus <span className="text-blue-600">Tour</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take an immersive virtual tour of our beautiful campus and discover all the amazing facilities we offer.
          </p>
        </div>

        {/* Virtual Tour Video Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="overflow-hidden shadow-2xl rounded-xl bg-white">
            <div className="p-0">
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 h-96 lg:h-[500px]">
                {!isVideoPlaying ? (
                  <>
                    {/* Video Thumbnail */}
                    <img
                      src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&h=800&fit=crop"
                      alt="Campus Virtual Tour"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button
                        onClick={() => setIsVideoPlaying(true)}
                        size="lg"
                        className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/50 px-8 py-6 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Play className="mr-3" size={24} />
                        Start Virtual Tour
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                      🎥 360° Virtual Experience
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="GBU Campus Virtual Tour"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tourHighlights.map((highlight, index) => (
            <div key={index} className="text-center rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            onClick={() => setIsVideoPlaying(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Play className="mr-2" size={20} />
            Watch Full Tour
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2" size={20} />
                Schedule Physical Visit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md bg-white">
              <DialogHeader>
                <DialogTitle>Schedule Campus Visit</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="visitors">Number of Visitors</Label>
                  <Input id="visitors" type="number" min="1" max="10" defaultValue="1" />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Campus Tour
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;

