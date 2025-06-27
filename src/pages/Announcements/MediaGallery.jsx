import React, { useState, useMemo, cloneElement } from 'react';
import Header from '../../components/announcement/Header';
import SearchFilter from '../../components/announcement/SearchFilter';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Dialog, DialogContent, DialogTrigger
const Dialog = ({ open, onOpenChange, children }) => {
  return open !== undefined ? (open ? <>{children}</> : null) : <>{children}</>;
};
const DialogTrigger = ({ asChild, children }) => children;
const DialogContent = ({ className = '', children }) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm ${className}`}
    style={{ animation: 'fadeIn 0.2s' }}
  >
    <div className="relative">{children}</div>
  </div>
);

// Button
const Button = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md',
    ghost: 'bg-transparent hover:bg-gray-200',
    glass: 'bg-white/20 backdrop-blur text-white hover:bg-white/30',
  };
  const sizes = {
    md: 'h-10 px-4 text-base',
    icon: 'h-10 w-10 p-0',
  };
  return (
    <button
      type="button"
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge
const Badge = ({ children, className = '' }) => (
  <span
    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold shadow-sm ${className}`}
  >
    {children}
  </span>
);

// Tabs, TabsList, TabsTrigger, TabsContent
const Tabs = ({ value, children, className = '' }) => {
  const [active, setActive] = useState(value);
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        child.type.displayName === 'TabsList'
          ? cloneElement(child, { active, setActive })
          : cloneElement(child, { active })
      )}
    </div>
  );
};
const TabsList = ({ children, active, setActive, className = '' }) => (
  <div className={className}>
    {React.Children.map(children, (child) =>
      cloneElement(child, { active, setActive })
    )}
  </div>
);
TabsList.displayName = 'TabsList';

const TabsTrigger = ({
  value,
  children,
  active,
  setActive,
  className = '',
}) => (
  <button
    type="button"
    className={`py-2 px-4 rounded-t font-medium transition-colors ${
      active === value
        ? 'bg-white shadow text-blue-700'
        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
    } ${className}`}
    onClick={() => setActive(value)}
  >
    {children}
  </button>
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = ({ value, active, children }) =>
  active === value ? <div>{children}</div> : null;
TabsContent.displayName = 'TabsContent';

// Mock media data
const mockMedia = [
  {
    id: 1,
    title: 'Convocation 2023 Highlights',
    category: 'Convocation',
    year: '2023',
    date: '2023-05-15',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 2,
    title: 'Annual Sports Meet',
    category: 'Sports',
    year: '2022',
    date: '2022-11-10',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 3,
    title: 'Cultural Fest Night',
    category: 'Cultural',
    year: '2023',
    date: '2023-02-20',
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 4,
    title: 'Academic Seminar',
    category: 'Academic',
    year: '2021',
    date: '2021-09-05',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 5,
    title: 'Campus Life Moments',
    category: 'Campus Life',
    year: '2022',
    date: '2022-03-18',
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 6,
    title: 'Tech Symposium',
    category: 'Events',
    year: '2023',
    date: '2023-07-12',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

// Simple date formatting function (similar to date-fns/format)
function format(date, formatStr) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const pad = (n) => n < 10 ? '0' + n : n;
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return formatStr
    .replace('MMMM', monthNames[d.getMonth()])
    .replace('dd', pad(d.getDate()))
    .replace('yyyy', d.getFullYear());
}

const shimmer =
  'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:animate-shimmer';

const MediaGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedMediaItem, setSelectedMediaItem] = useState(null);

  const allCategories = Array.from(new Set(mockMedia.map(item => item.category)));
  const allYears = Array.from(new Set(mockMedia.map(item => item.year)));

  const filteredMedia = useMemo(() => {
    return mockMedia.filter(item => {
      const matchesSearch = !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || item.year === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const currentMedia = filteredMedia.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const openImageModal = (mediaItem, imageIndex) => {
    setSelectedMediaItem(mediaItem);
    setSelectedImageIndex(imageIndex);
  };

  const navigateImage = (direction) => {
    if (!selectedMediaItem || selectedImageIndex === null) return;

    const currentIndex = selectedImageIndex;
    const totalImages = selectedMediaItem.images.length;

    if (direction === 'next') {
      setSelectedImageIndex((currentIndex + 1) % totalImages);
    } else {
      setSelectedImageIndex((currentIndex - 1 + totalImages) % totalImages);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Convocation': 'bg-purple-100 text-purple-800',
      'Sports': 'bg-green-100 text-green-800',
      'Cultural': 'bg-orange-100 text-orange-800',
      'Academic': 'bg-blue-100 text-blue-800',
      'Campus Life': 'bg-pink-100 text-pink-800',
      'Events': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* <Header /> */}

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight drop-shadow-lg">
            Media Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Explore vibrant moments from university events. Click on any image to view in detail!
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <SearchFilter
            onSearch={handleSearch}
            onDateFilter={() => {}} // Not used for media gallery
            onTypeFilter={handleCategoryFilter}
            onYearFilter={handleYearFilter}
            types={allCategories}
            years={allYears}
            placeholder="Search media..."
          />
        </div>

        <Tabs value="all" className="w-full">
          <TabsList className="grid w-full grid-cols-1 mb-8">
            <TabsTrigger value="all" className="w-full">
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg font-semibold">All Media</span>
                <span className="bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs font-bold">
                  {filteredMedia.length}
                </span>
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentMedia.map((item) => (
                <div
                  key={item.id}
                  className="space-y-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 border-solid group"
                >
                  <div className="grid grid-cols-1 gap-2">
                    {item.images.map((image, imageIndex) => (
                      <Dialog key={imageIndex}>
                        <DialogTrigger asChild>
                          <div
                            className={`aspect-square overflow-hidden rounded-t-xl cursor-pointer group relative ${shimmer}`}
                            onClick={() => openImageModal(item, imageIndex)}
                          >
                            <img
                              src={image}
                              alt={`${item.title} - ${imageIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="absolute bottom-2 right-2 bg-white/80 text-gray-700 text-xs px-2 py-0.5 rounded shadow">
                              View
                            </span>
                          </div>
                        </DialogTrigger>
                      </Dialog>
                    ))}
                  </div>

                  <div className="space-y-2 px-4 pb-4">
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{item.year}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 line-clamp-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {format(new Date(item.date), 'MMMM dd, yyyy')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredMedia.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              <span role="img" aria-label="no results">😕</span> No media found matching your criteria.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10">
            <EnhancedPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredMedia.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={handleItemsPerPageChange}
              showItemsPerPage={true}
            />
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedMediaItem && selectedImageIndex !== null && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogContent className="max-w-4xl w-full p-0 bg-black/90 border-0 rounded-2xl shadow-2xl">
            <div className="relative">
              <img
                src={selectedMediaItem.images[selectedImageIndex]}
                alt={`${selectedMediaItem.title} - ${selectedImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
              />

              {/* Navigation Buttons */}
              {selectedMediaItem.images.length > 1 && (
                <>
                  <Button
                    variant="glass"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronLeft size={28} />
                  </Button>
                  <Button
                    variant="glass"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronRight size={28} />
                  </Button>
                </>
              )}

              {/* Close Button */}
              <Button
                variant="glass"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={26} />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white rounded-b-2xl">
                <h3 className="text-2xl font-bold mb-2 drop-shadow">{selectedMediaItem.title}</h3>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>{format(new Date(selectedMediaItem.date), 'MMMM dd, yyyy')}</span>
                  <span>
                    {selectedImageIndex + 1} of {selectedMediaItem.images.length}
                  </span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default MediaGallery;
