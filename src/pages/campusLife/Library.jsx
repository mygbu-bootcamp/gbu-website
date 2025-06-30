
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
import { Clock, Wifi, Globe, BookOpen, Book } from 'lucide-react';
// Dialog components defined locally for modal functionality and responsiveness
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onOpenChange}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-2xl mx-4 sm:mx-auto"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ className = "", children, ...props }) => (
  <div
    className={`bg-white rounded-lg shadow-lg p-6 sm:p-8 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const DialogTitle = ({ className = "", children, ...props }) => (
  <h2 className={`text-xl sm:text-2xl font-bold ${className}`} {...props}>
    {children}
  </h2>
);

const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-lg border bg-white text-black shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Library = () => {
  const [selectedSpace, setSelectedSpace] = useState(null);

  const features = [
    {
      icon: Clock,
      title: '24x7 Access',
      description: 'Round-the-clock access to study spaces'
    },
    {
      icon: BookOpen,
      title: '1.5+ Lakh Books',
      description: 'Extensive collection of academic resources'
    },
    {
      icon: Globe,
      title: 'Digital Library',
      description: 'Access to digital books and resources'
    },
    {
      icon: Book,
      title: 'E-Journals',
      description: 'Online academic journals and publications'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Enabled Study Zones',
      description: 'High-speed internet throughout the library'
    }
  ];

  const libraryImages = [
    {
      url: 'https://library.gbu.ac.in/img/Artboard%201library1.jpg?w=800&h=600&fit=crop',
      title: 'Main Reading Hall',
      description: 'Spacious reading area with natural lighting',
      capacity: '200 seats',
      availability: 'Available 24/7',
      features: ['Silent study zone', 'Individual reading desks', 'Natural lighting', 'Air conditioning'],
      rules: ['Maintain silence', 'No food or drinks', 'Mobile phones on silent', 'Keep belongings secure']
    },
    {
      url: 'https://cdn.universitykart.com//Content/upload/admin/l2zuaqtx.jh3.jpg?w=800&h=600&fit=crop',
      title: 'Digital Study Zone',
      description: 'Computer lab with high-speed internet',
      capacity: '50 computers',
      availability: '6 AM - 12 AM',
      features: ['High-speed internet', 'Latest software', 'Printing facilities', 'Technical support'],
      rules: ['Valid student ID required', 'Time limit: 2 hours', 'No downloads allowed', 'Report technical issues']
    },
    {
      url: 'https://www.gbu.ac.in/Content/img/library.jpg?w=800&h=600&fit=crop',
      title: 'Group Study Rooms',
      description: 'Collaborative spaces for team projects',
      capacity: '6-8 people per room',
      availability: 'Bookable 24/7',
      features: ['Whiteboard', 'Projector', 'Audio-visual equipment', 'Comfortable seating'],
      rules: ['Advance booking required', 'Max 3 hours per session', 'Clean after use', 'Report damages']
    }
  ];

  const handleSpaceClick = (space) => {
    setSelectedSpace(space);
  };

  return (
    <section id="library" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            GBU <span className="text-purple-600">Library</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your gateway to knowledge with extensive collections, modern facilities, and digital resources.
          </p>
        </div>

        {/* Library Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Library Spaces */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Library Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {libraryImages.map((image, index) => (
              <Card
                key={index}
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => handleSpaceClick(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <h4 className="font-bold text-sm">{image.title}</h4>
                      <p className="text-xs opacity-90">{image.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Library Stats */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">2M+</div>
                <div className="text-sm opacity-90">Books & Resources</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Study Seats</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Digital Access</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">Computer Terminals</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Space Details Modal */}
        {selectedSpace && (
          <Dialog open={!!selectedSpace} onOpenChange={() => setSelectedSpace(null)}>
            <DialogContent className="max-w-2xl bg-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedSpace.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedSpace.url}
                  alt={selectedSpace.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Capacity</h4>
                    <p className="text-gray-600">{selectedSpace.capacity}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Availability</h4>
                    <p className="text-gray-600">{selectedSpace.availability}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedSpace.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-purple-600">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rules & Guidelines</h4>
                  <ul className="space-y-1">
                    {selectedSpace.rules.map((rule, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Library;
