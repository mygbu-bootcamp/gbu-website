import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SearchFilter from '../../components/announcement/SearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';

// Card, CardContent, CardDescription, CardHeader, CardTitle
const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-white rounded-2xl shadow-xl border border-gray-100 border-solid hover:shadow-2xl transition-all duration-300${className}`}
    {...props}
  >
    {children}
  </div>
);
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-5 border-b border-gray-100 border-solid bg-gradient-to-r from-blue-50/60 to-white${className}`} {...props}>
    {children}
  </div>
);
const CardTitle = ({ children, className = '', ...props }) => (
  <h2 className={`font-bold text-xl text-blue-900 leading-tight ${className}`} {...props}>
    {children}
  </h2>
);
const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-gray-500 ${className}`} {...props}>
    {children}
  </p>
);
const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-5 ${className}`}>{children}</div>
);

// Badge
const Badge = ({ children, variant = 'secondary', className = '', ...props }) => {
  const base = 'inline-block px-2 py-1 rounded-full font-medium shadow-sm';
  const variants = {
    secondary: 'bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700',
    primary: 'bg-gradient-to-r from-blue-500 to-blue-400 text-white',
  };
  return (
    <span className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </span>
  );
};

// Button
const Button = ({ children, size = 'md', className = '', ...props }) => {
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-7 py-3 text-lg',
  };
  return (
    <button
      className={`bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full shadow-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// mockNews (minimal mock data for demonstration)
export const mockNews = [
  {
    id: 1,
    title: 'GBU Launches New Research Center',
    excerpt: 'The university inaugurated a new research center for sustainable technologies and smart systems.',
    date: '2024-05-10',
    author: 'Admin',
    tags: ['Research', 'Campus'],
    image: 'https://images.unsplash.com/photo-1581091215369-7f72b8f34054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Annual Sports Meet Announced',
    excerpt: 'Students are gearing up for the annual sports meet with exciting games and prizes.',
    date: '2024-04-22',
    author: 'Sports Dept',
    tags: ['Sports', 'Events'],
    image: 'https://images.unsplash.com/photo-1530878955558-bafcdd9282c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'International Conference on AI',
    excerpt: 'Researchers worldwide attended the International Conference on AI and Robotics hosted by GBU.',
    date: '2024-06-15',
    author: 'Admin',
    tags: ['Conference', 'AI'],
    image: 'https://images.unsplash.com/photo-1581092580495-4c4a45c16d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Successful Placement Drive 2024',
    excerpt: 'Top companies offered roles in IT, management, and research to graduating students.',
    date: '2024-03-12',
    author: 'Placement Cell',
    tags: ['Placements', 'Careers'],
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'New Digital Library Block Opens',
    excerpt: 'Students can now access state-of-the-art digital resources and collaborative spaces.',
    date: '2024-02-28',
    author: 'Library Committee',
    tags: ['Library', 'Campus'],
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'GBU Team Wins National Hackathon',
    excerpt: 'CSE students won first prize for an innovative smart city solution at a national hackathon.',
    date: '2024-05-05',
    author: 'Innovation Club',
    tags: ['Hackathon', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee9819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Environment Week Drives Awareness',
    excerpt: 'Tree plantation drives and workshops promoted sustainability on campus.',
    date: '2024-04-18',
    author: 'Eco Club',
    tags: ['Environment', 'Campus Life'],
    image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'MoU Signed with Global University',
    excerpt: 'GBU partnered with a leading international university for student exchange and research.',
    date: '2024-06-01',
    author: 'Admin',
    tags: ['International', 'Research'],
    image: 'https://images.unsplash.com/photo-1600195077070-03c0c8e36f18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Cultural Fest Abhivyakti Concludes',
    excerpt: 'The annual cultural fest saw vibrant performances, art showcases, and celebrity night.',
    date: '2024-03-25',
    author: 'Cultural Committee',
    tags: ['Cultural', 'Events'],
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    title: 'Alumni Meet 2024',
    excerpt: 'GBU hosted its alumni meet with networking sessions and future collaborations.',
    date: '2024-05-20',
    author: 'Alumni Association',
    tags: ['Alumni', 'Networking'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    title: 'New Hostel Facilities Inaugurated',
    excerpt: 'New hostels with modern amenities and green architecture were opened.',
    date: '2024-04-12',
    author: 'Admin',
    tags: ['Campus', 'Facilities'],
    image: 'https://images.unsplash.com/photo-1613931803086-c5d1df8b6cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    title: 'Annual Science Exhibition Held',
    excerpt: 'Students showcased innovative projects and prototypes at the annual science fair.',
    date: '2024-03-30',
    author: 'Science Club',
    tags: ['Science', 'Exhibition'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 13,
    title: 'Seminar on Mental Health Awareness',
    excerpt: 'Experts conducted sessions to promote mental well-being among students.',
    date: '2024-05-18',
    author: 'Health Club',
    tags: ['Wellness', 'Awareness'],
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 14,
    title: 'GBU Students Visit Parliament',
    excerpt: 'Political science students visited Parliament House for an educational tour.',
    date: '2024-04-05',
    author: 'Dept. of Political Science',
    tags: ['Educational Tour', 'Politics'],
    image: 'https://images.unsplash.com/photo-1603052875149-56b8e6e4b0f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 15,
    title: 'Art & Photography Workshop',
    excerpt: 'Renowned artists held a two-day workshop for budding photographers and painters.',
    date: '2024-04-28',
    author: 'Arts Club',
    tags: ['Workshop', 'Arts'],
    image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 16,
    title: 'Guest Lecture by Industry Leader',
    excerpt: 'An industry veteran shared insights on the future of tech and careers.',
    date: '2024-05-12',
    author: 'Career Cell',
    tags: ['Lecture', 'Careers'],
    image: 'https://images.unsplash.com/photo-1581094278514-55f9857f6372?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 17,
    title: 'Coding Bootcamp Concludes',
    excerpt: 'The week-long coding bootcamp helped students enhance practical programming skills.',
    date: '2024-03-22',
    author: 'CSE Dept',
    tags: ['Bootcamp', 'Coding'],
    image: 'https://images.unsplash.com/photo-1581090700227-3e6a994d40c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 18,
    title: 'GBU Students Win Debate Competition',
    excerpt: 'The debate team secured first place at an inter-university competition.',
    date: '2024-04-02',
    author: 'Literary Club',
    tags: ['Debate', 'Achievements'],
    image: 'https://images.unsplash.com/photo-1532105956626-95675db236c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 19,
    title: 'Blood Donation Camp Organized',
    excerpt: 'Students and faculty participated in a campus-wide blood donation drive.',
    date: '2024-03-18',
    author: 'Health Club',
    tags: ['Social', 'Health'],
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 20,
    title: 'Yoga and Meditation Retreat',
    excerpt: 'A special retreat for stress relief and wellness was held at the campus center.',
    date: '2024-05-25',
    author: 'Wellness Club',
    tags: ['Wellness', 'Yoga'],
    image: 'https://images.unsplash.com/photo-1600986602534-771b5014a4f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];


import { format } from 'date-fns';

const NewsNotifications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState('newest');
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = Array.from(new Set(mockNews.flatMap(news => news.tags)));
  const allYears = Array.from(new Set(mockNews.map(news => new Date(news.date).getFullYear().toString())));

  const filteredAndSortedNews = useMemo(() => {
    let filtered = mockNews.filter(news => {
      const matchesSearch = !searchQuery ||
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const newsDate = new Date(news.date);
      const matchesDateRange = (!startDate || newsDate >= startDate) &&
        (!endDate || newsDate <= endDate);

      const matchesYear = selectedYear === 'all' || new Date(news.date).getFullYear().toString() === selectedYear;
      const matchesSelectedTags = selectedTags.length === 0 || selectedTags.some(tag => news.tags.includes(tag));

      return matchesSearch && matchesDateRange && matchesYear && matchesSelectedTags;
    });
    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [searchQuery, startDate, endDate, selectedYear, selectedTags, sortOrder]);
  const currentNews = filteredAndSortedNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredAndSortedNews.length / itemsPerPage);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleDateFilter = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    setCurrentPage(1);
  };

  const handleTagFilter = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setCurrentPage(1);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortOrder(sort);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <div className="container mx-auto pb-5">
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-3 drop-shadow-lg tracking-tight">
            Latest News
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings at <span className="font-semibold text-white">GBU</span>
          </p>
          </div>
        </section>
      

        <div className="mb-1">
          <SearchFilter
            onSearch={handleSearch}
            onDateFilter={handleDateFilter}
            onTypeFilter={handleTagFilter}
            onYearFilter={handleYearFilter}
            onSortChange={handleSortChange}
            types={allTags}
            years={allYears}
            placeholder="Search news..."
            currentSort={sortOrder}
            tags={allTags}
            onTagFilter={handleTagFilter}
            selectedTags={selectedTags}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentNews.map((news) => (
            <Card key={news.id} className="group relative overflow-hidden">
              {news.image && (
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-200 opacity-70" />
                </div>
              )}
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {news.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {news.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full" />
                  {format(new Date(news.date), 'MMMM dd, yyyy')} • By {news.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex justify-between items-center">
                   <Link to={`/announcements/news-notifications/${news.id}`}>
          <Button size="sm" className="shadow hover:scale-105">
            Read More
          </Button>
        </Link>
                  <SocialShare
                    url={`${window.location.origin}/news/${news.id}`}
                    title={news.title}
                  />
                </div>
              </CardContent>
              <div className="absolute inset-0 pointer-events-none group-hover:bg-blue-50/40 transition-all duration-300 rounded-2xl" />
            </Card>
          ))}
        </div>

        {filteredAndSortedNews.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-lg border border-blue-100">
              <svg className="mx-auto mb-3 text-blue-400" width="48" height="48" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" />
              </svg>
              <p className="text-gray-500 text-lg font-medium">No news found matching your criteria.</p>
            </div>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12">
            <EnhancedPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredAndSortedNews.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsNotifications;
