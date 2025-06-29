import React, { useState, useMemo, cloneElement } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SearchFilter from '../../components/announcement/SearchFilter';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';

// === Dialog ===
const Dialog = ({ open, children }) => (open ? <>{children}</> : null);
const DialogTrigger = ({ children }) => children;
const DialogContent = ({ className = '', children }) => (
  <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm ${className}`}>
    <div className="relative">{children}</div>
  </div>
);

// === Button ===
const Button = ({ children, onClick, variant = 'default', size = 'md', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
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
    <button type="button" className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

// === Badge ===
const Badge = ({ children, className = '' }) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold shadow-sm ${className}`}>{children}</span>
);

// === Format date ===
function format(date, formatStr) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const pad = (n) => (n < 10 ? '0' + n : n);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return formatStr.replace('MMMM', monthNames[d.getMonth()]).replace('dd', pad(d.getDate())).replace('yyyy', d.getFullYear());
}

// === Tabs ===
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
    {React.Children.map(children, (child) => cloneElement(child, { active, setActive }))}
  </div>
);
TabsList.displayName = 'TabsList';

const TabsTrigger = ({ value, children, active, setActive, className = '' }) => (
  <button
    type="button"
    className={`py-2 px-4 rounded-t font-medium transition-colors ${active === value ? 'bg-white shadow text-blue-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'} ${className}`}
    onClick={() => setActive(value)}
  >
    {children}
  </button>
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = ({ value, active, children }) => (active === value ? <div>{children}</div> : null);
TabsContent.displayName = 'TabsContent';

// === Mock Media ===
const mockMedia = [
  {
    id: 1,
    title: 'Convocation 2023 Highlights',
    category: 'Convocation',
    year: '2023',
    date: '2023-05-15',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 2,
    title: 'Annual Sports Meet',
    category: 'Sports',
    year: '2022',
    date: '2022-11-10',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=80',
    ],
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
    ],
  },
  {
    id: 4,
    title: 'Academic Seminar',
    category: 'Academic',
    year: '2021',
    date: '2021-09-05',
    images: [
      'https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 5,
    title: 'Campus Life Moments',
    category: 'Campus Life',
    year: '2022',
    date: '2022-03-18',
    images: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1504691342899-8d2d1a0d88d3?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 6,
    title: 'Tech Symposium',
    category: 'Events',
    year: '2023',
    date: '2023-07-12',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 7,
    title: 'Robotics Workshop',
    category: 'Academic',
    year: '2023',
    date: '2023-08-05',
    images: [
      'https://images.unsplash.com/photo-1581090700227-4c4c2a5d7a2b?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 8,
    title: 'Faculty Development Program',
    category: 'Academic',
    year: '2022',
    date: '2022-12-11',
    images: [
      'https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 9,
    title: 'Annual Science Fair',
    category: 'Academic',
    year: '2021',
    date: '2021-10-22',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f98968e4c6?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 10,
    title: 'Inter-College Football Tournament',
    category: 'Sports',
    year: '2023',
    date: '2023-04-03',
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 11,
    title: 'Winter Cultural Eve',
    category: 'Cultural',
    year: '2022',
    date: '2022-12-21',
    images: [
      'https://images.unsplash.com/photo-1515165562838-8d6f33ab9a3a?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 12,
    title: 'Open Mic Night',
    category: 'Cultural',
    year: '2021',
    date: '2021-11-02',
    images: [
      'https://images.unsplash.com/photo-1515705576963-95cad62945b6?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 13,
    title: 'Yoga & Wellness Camp',
    category: 'Campus Life',
    year: '2023',
    date: '2023-06-15',
    images: [
      'https://images.unsplash.com/photo-1554306274-f7c838fa9e38?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 14,
    title: 'Literary Fest',
    category: 'Cultural',
    year: '2022',
    date: '2022-09-12',
    images: [
      'https://images.unsplash.com/photo-1579546929155-97d9f43511d7?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 15,
    title: 'Marathon 2023',
    category: 'Sports',
    year: '2023',
    date: '2023-01-25',
    images: [
      'https://images.unsplash.com/photo-1504470695779-75300268aa44?auto=format&fit=crop&w=600&q=80',
    ],
  },
  // Add 15 more to ensure pagination:
  ...Array.from({ length: 15 }, (_, i) => ({
    id: 16 + i,
    title: `Extra Event ${i + 1}`,
    category: ['Convocation', 'Sports', 'Cultural', 'Academic', 'Campus Life', 'Events'][i % 6],
    year: ['2021', '2022', '2023'][i % 3],
    date: `2023-0${(i % 9) + 1}-15`,
    images: [
      `https://source.unsplash.com/random/600x400?sig=${i}`,
      `https://source.unsplash.com/random/601x400?sig=${i + 50}`,
    ],
  })),
];


// === Shimmer ===
const shimmer = 'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-shimmer';

// === Main ===
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
      const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || item.year === selectedYear;
      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const currentMedia = filteredMedia.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const openImageModal = (item) => {
    setSelectedMediaItem(item);
    setSelectedImageIndex(0);
  };

  const navigateImage = (dir) => {
    const total = selectedMediaItem.images.length;
    setSelectedImageIndex((prev) => (dir === 'next' ? (prev + 1) % total : (prev - 1 + total) % total));
  };

  const getCategoryColor = (cat) => ({
    Convocation: 'bg-purple-100 text-purple-800',
    Sports: 'bg-green-100 text-green-800',
    Cultural: 'bg-orange-100 text-orange-800',
  }[cat] || 'bg-gray-100 text-gray-800');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-2">Media Gallery</h1>
        <p className="text-lg">Explore vibrant moments from university events. Click to view details!</p>
      </section>

      <div className="container mx-auto py-12">
        <SearchFilter onSearch={setSearchQuery} onTypeFilter={setSelectedCategory} onYearFilter={setSelectedYear} types={allCategories} years={allYears} placeholder="Search..." />

        <Tabs value="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all"><span>All Media ({filteredMedia.length})</span></TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 gap-8">
              {currentMedia.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow border border-gray-100 border-solid overflow-hidden hover:shadow-lg transition-all duration-300" style={{ height: '26rem' }}>
                  <div className="h-[70%] cursor-pointer overflow-hidden" onClick={() => openImageModal(item)}>
                    <img src={item.images[0]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 h-[30%] flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                      <span className="text-sm text-gray-500">{item.year}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{format(item.date, 'MMMM dd, yyyy')}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {totalPages > 1 && (
          <div className="mt-10">
            <EnhancedPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} itemsPerPage={itemsPerPage} onItemsPerPageChange={setItemsPerPage} />
          </div>
        )}

        {selectedMediaItem && selectedImageIndex !== null && (
          <Dialog open>
            <DialogContent className=" w-full p-0 bg-black/90 rounded-2xl">
              <div className="relative">
                <img src={selectedMediaItem.images[selectedImageIndex]} alt="" className="w-full max-h-[80vh] object-contain rounded-xl" />
                <Button variant="glass" size="icon" className="absolute top-4 right-4" onClick={() => setSelectedImageIndex(null)}><X size={26} /></Button>
                {selectedMediaItem.images.length > 1 && (
                  <>
                    <Button variant="glass" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={() => navigateImage('prev')}><ChevronLeft size={28} /></Button>
                    <Button variant="glass" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => navigateImage('next')}><ChevronRight size={28} /></Button>
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white rounded-b-2xl">
                  <h3 className="text-2xl font-bold mb-2">{selectedMediaItem.title}</h3>
                  <div className="flex justify-between text-sm">{format(selectedMediaItem.date, 'MMMM dd, yyyy')} <span>{selectedImageIndex + 1} of {selectedMediaItem.images.length}</span></div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
