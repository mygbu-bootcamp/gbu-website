import React, { useState } from 'react';
// Minimal Card components
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow ${className || ''}`}>{children}</div>
);
const CardHeader = ({ children, className }) => (
  <div className={`p-4 border-b border-gray-200 ${className || ''}`}>{children}</div>
);
const CardTitle = ({ children, className }) => (
  <h3 className={`font-semibold text-lg ${className || ''}`}>{children}</h3>
);
const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className || ''}`}>{children}</div>
);

// Minimal Button component
const Button = ({ children, className, variant = 'default', size = 'md', ...props }) => {
  const base =
    'inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Minimal Badge component
const Badge = ({ children, className, variant }) => {
  const base = 'inline-block px-2 py-0.5 rounded text-xs font-semibold';
  const variants = {
    outline: 'border border-gray-300 text-gray-700 bg-white',
    default: 'bg-gray-100 text-gray-800',
  };
  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className || ''}`}>
      {children}
    </span>
  );
};
import { Camera, Filter, Calendar, Eye, Download } from 'lucide-react';
// Minimal Select component
const Select = ({ value, onValueChange, children }) => (
  <div className="relative">{React.Children.map(children, child => React.cloneElement(child, { value, onValueChange }))}</div>
);
const SelectTrigger = ({ children, className }) => (
  <button className={`border rounded px-3 py-2 bg-white text-left w-full ${className || ''}`} type="button">
    {children}
  </button>
);
const SelectValue = ({ placeholder }) => (
  <span className="text-gray-700">{placeholder}</span>
);
const SelectContent = ({ children }) => (
  <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow">{children}</div>
);
const SelectItem = ({ value, children, onValueChange }) => (
  <div
    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
    onClick={() => onValueChange && onValueChange(value)}
    tabIndex={0}
    role="option"
  >
    {children}
  </div>
);

// Minimal Dialog component
const Dialog = ({ children }) => {
  const [open, setOpen] = useState(false);
  return React.Children.map(children, child =>
    child.type.displayName === 'DialogTrigger'
      ? React.cloneElement(child, { onClick: () => setOpen(true) })
      : child.type.displayName === 'DialogContent' && open
      ? React.cloneElement(child, { onClose: () => setOpen(false) })
      : null
  );
};
const DialogTrigger = ({ children, onClick }) => (
  <div onClick={onClick} style={{ display: 'inline-block' }}>{children}</div>
);
DialogTrigger.displayName = 'DialogTrigger';

const DialogContent = ({ children, onClose, className }) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${className || ''}`}
    onClick={onClose}
  >
    <div
      className="bg-white rounded-lg p-6 max-w-full w-[90vw] md:w-auto"
      onClick={e => e.stopPropagation()}
    >
      {children}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  </div>
);
DialogContent.displayName = 'DialogContent';

const NSSGallery = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Blood Donation Camp 2024',
      category: 'Health',
      event: 'Blood Donation Camp',
      year: '2024',
      date: '2024-01-15',
      images: [
        { url: '/placeholder.svg', caption: 'Volunteers registering donors' },
        { url: '/placeholder.svg', caption: 'Medical team conducting checkups' },
        { url: '/placeholder.svg', caption: 'Blood collection in progress' },
        { url: '/placeholder.svg', caption: 'Volunteers with certificates' }
      ]
    },
    {
      id: 2,
      title: 'Tree Plantation Drive',
      category: 'Environment',
      event: 'Environmental Drive',
      year: '2024',
      date: '2024-02-05',
      images: [
        { url: '/placeholder.svg', caption: 'Volunteers planting saplings' },
        { url: '/placeholder.svg', caption: 'Community participation' },
        { url: '/placeholder.svg', caption: 'Before and after comparison' }
      ]
    },
    {
      id: 3,
      title: 'Digital Literacy Program',
      category: 'Education',
      event: 'Digital Literacy',
      year: '2024',
      date: '2024-01-22',
      images: [
        { url: '/placeholder.svg', caption: 'Teaching computer basics' },
        { url: '/placeholder.svg', caption: 'Children learning digital skills' },
        { url: '/placeholder.svg', caption: 'Volunteer instructors' },
        { url: '/placeholder.svg', caption: 'Certificate distribution' }
      ]
    },
    {
      id: 4,
      title: 'Community Health Camp',
      category: 'Health',
      event: 'Health Camp',
      year: '2023',
      date: '2023-12-10',
      images: [
        { url: '/placeholder.svg', caption: 'Free health checkups' },
        { url: '/placeholder.svg', caption: 'Medicine distribution' },
        { url: '/placeholder.svg', caption: 'Health awareness session' }
      ]
    },
    {
      id: 5,
      title: 'Rural Development Project',
      category: 'Community',
      event: 'Rural Development',
      year: '2023',
      date: '2023-11-15',
      images: [
        { url: '/placeholder.svg', caption: 'Infrastructure development work' },
        { url: '/placeholder.svg', caption: 'Community interaction' },
        { url: '/placeholder.svg', caption: 'Project completion ceremony' }
      ]
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const yearMatch = selectedYear === 'all' || item.year === selectedYear;
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const eventMatch = selectedEvent === 'all' || item.event === selectedEvent;
    return yearMatch && categoryMatch && eventMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Health': 'bg-red-100 text-red-800',
      'Education': 'bg-purple-100 text-purple-800',
      'Environment': 'bg-green-100 text-green-800',
      'Community': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">NSS Gallery</h2>
        <p className="text-lg text-gray-600">
          Capturing moments of service, impact, and community engagement
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Environment">Environment</SelectItem>
                <SelectItem value="Community">Community</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedEvent} onValueChange={setSelectedEvent}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Event" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="Blood Donation Camp">Blood Donation</SelectItem>
                <SelectItem value="Environmental Drive">Environment</SelectItem>
                <SelectItem value="Digital Literacy">Digital Literacy</SelectItem>
                <SelectItem value="Health Camp">Health Camp</SelectItem>
                <SelectItem value="Rural Development">Rural Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Gallery Grid */}
      <div className="space-y-8">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                  <p className="text-gray-600 mt-1">
                    {new Date(item.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <Badge variant="outline">{item.year}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {item.images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative group cursor-pointer">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                          <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="space-y-4">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="flex justify-between items-center">
                          <p className="text-gray-700">{image.caption}</p>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">
                  {item.images.length} photos
                </span>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Gallery Statistics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Total Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Events Documented</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Video Records</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Views & Downloads</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Section (Admin) */}
      <Card className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Camera className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Add New Photos</h3>
          <p className="text-gray-500 text-center mb-4">
            Upload event photos and videos to the gallery
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Camera className="h-4 w-4 mr-2" />
            Upload Media
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NSSGallery;
