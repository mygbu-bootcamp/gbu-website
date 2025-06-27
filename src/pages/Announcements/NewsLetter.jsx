import { useState, useMemo } from 'react';
import Header from '../../components/announcement/Header';
import SearchFilter from '../../components/announcement/SearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import Pagination from '../../components/announcement/Pagination';
import { Download, FileText, Mail, Sparkles } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '../../hooks/use-toast';

// Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 border-solid hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-5 border-b border-gray-100 border-solid bg-gradient-to-r from-blue-50/60 to-white">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-gray-800 tracking-tight ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 ${className}`}>{children}</p>
);

const CardContent = ({ children }) => (
  <div className="p-5">{children}</div>
);

// Button Component
const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition focus:outline-none focus:ring-2 focus:ring-blue-500";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 shadow",
    outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 shadow",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({
  className = "",
  ...props
}) => (
  <input
    className={`block w-full rounded-xl border border-gray-300 border-solid px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 shadow-inner ${className}`}
    {...props}
  />
);

// Badge Component
const Badge = ({ children, variant = "outline", className = "" }) => {
  const variants = {
    outline: "border border-blue-600 text-blue-600 bg-white",
    solid: "bg-blue-600 text-white",
    new: "bg-gradient-to-r from-green-400 to-green-600 text-white animate-pulse shadow-lg",
  };
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide ${variants[variant] || ""} ${className}`}
    >
      {children}
    </span>
  );
};

// Mock newsletter data
const mockNewsletters = [
  {
    id: 1,
    title: "Spring 2024 Edition",
    issueNumber: "Vol. 10, Issue 1",
    date: "2024-03-15",
    coverImage: "https://via.placeholder.com/400x600?text=Spring+2024",
    excerpt: "Highlights from the spring semester, including major events and achievements.",
  },
  {
    id: 2,
    title: "Winter 2023 Edition",
    issueNumber: "Vol. 9, Issue 4",
    date: "2023-12-10",
    coverImage: "https://via.placeholder.com/400x600?text=Winter+2023",
    excerpt: "A look back at the winter term and university milestones.",
  },
  {
    id: 3,
    title: "Autumn 2023 Edition",
    issueNumber: "Vol. 9, Issue 3",
    date: "2023-09-20",
    coverImage: "https://via.placeholder.com/400x600?text=Autumn+2023",
    excerpt: "Autumn activities, research highlights, and student stories.",
  },
  {
    id: 4,
    title: "Summer 2023 Edition",
    issueNumber: "Vol. 9, Issue 2",
    date: "2023-06-18",
    coverImage: "https://via.placeholder.com/400x600?text=Summer+2023",
    excerpt: "Summer programs, workshops, and campus news.",
  },
  {
    id: 5,
    title: "Spring 2023 Edition",
    issueNumber: "Vol. 9, Issue 1",
    date: "2023-03-12",
    coverImage: "https://via.placeholder.com/400x600?text=Spring+2023",
    excerpt: "Spring semester recap and upcoming events.",
  },
  {
    id: 6,
    title: "Winter 2022 Edition",
    issueNumber: "Vol. 8, Issue 4",
    date: "2022-12-08",
    coverImage: "https://via.placeholder.com/400x600?text=Winter+2022",
    excerpt: "End-of-year highlights and alumni achievements.",
  },
  {
    id: 7,
    title: "Autumn 2022 Edition",
    issueNumber: "Vol. 8, Issue 3",
    date: "2022-09-22",
    coverImage: "https://via.placeholder.com/400x600?text=Autumn+2022",
    excerpt: "Autumn events and research breakthroughs.",
  },
  {
    id: 8,
    title: "Summer 2022 Edition",
    issueNumber: "Vol. 8, Issue 2",
    date: "2022-06-15",
    coverImage: "https://via.placeholder.com/400x600?text=Summer+2022",
    excerpt: "Summer activities and student spotlights.",
  },
  {
    id: 9,
    title: "Spring 2022 Edition",
    issueNumber: "Vol. 8, Issue 1",
    date: "2022-03-10",
    coverImage: "https://via.placeholder.com/400x600?text=Spring+2022",
    excerpt: "Spring semester news and upcoming plans.",
  },
  {
    id: 10,
    title: "Winter 2021 Edition",
    issueNumber: "Vol. 7, Issue 4",
    date: "2021-12-05",
    coverImage: "https://via.placeholder.com/400x600?text=Winter+2021",
    excerpt: "Year-end review and university achievements.",
  },
];

const NewsLetter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [archiveOpen, setArchiveOpen] = useState(true);
  const itemsPerPage = 6;
  const { toast } = useToast();

  const allYears = Array.from(new Set(mockNewsletters.map(newsletter => new Date(newsletter.date).getFullYear().toString())));

  const filteredNewsletters = useMemo(() => {
    return mockNewsletters.filter(newsletter => {
      const matchesSearch = !searchQuery || 
        newsletter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        newsletter.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const newsletterDate = new Date(newsletter.date);
      const matchesDateRange = (!startDate || newsletterDate >= startDate) && 
        (!endDate || newsletterDate <= endDate);
      
      const matchesYear = selectedYear === 'all' || new Date(newsletter.date).getFullYear().toString() === selectedYear;
      
      return matchesSearch && matchesDateRange && matchesYear;
    });
  }, [searchQuery, startDate, endDate, selectedYear]);

  const totalPages = Math.ceil(filteredNewsletters.length / itemsPerPage);
  const currentNewsletters = filteredNewsletters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleDateFilter = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    setCurrentPage(1);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription Successful!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  const handleDownloadAll = () => {
    toast({
      title: "Download Started",
      description: "All newsletter issues are being prepared for download.",
    });
  };

  // Find latest newsletter for "New" badge
  const latestNewsletterId = mockNewsletters.reduce((latest, n) => {
    return new Date(n.date) > new Date(mockNewsletters.find(x => x.id === latest).date) ? n.id : latest;
  }, mockNewsletters[0].id);

  return (
  <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">
      {/* <Header /> */}
      

<section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">University Newsletter</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
           Stay informed with our quarterly publications
          </p>
        </div>
      </section>
        

        <div className="mb-8">
          <SearchFilter
            onSearch={handleSearch}
            onDateFilter={handleDateFilter}
            onYearFilter={handleYearFilter}
            years={allYears}
            placeholder="Search newsletters..."
          />
        </div>

        {/* Download All Button */}
        <div className="flex justify-end mb-8">
          <Button onClick={handleDownloadAll} variant="outline" className="shadow-md hover:shadow-xl">
            <Download size={18} className="mr-2" />
            Download All Issues
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentNewsletters.map((newsletter) => (
            <Card key={newsletter.id} className="relative h-[45rem] group">
              {/* "New" badge for latest */}
              {newsletter.id === latestNewsletterId && (
                <Badge variant="new" className="absolute top-4 right-4 z-10 shadow-xl">New</Badge>
              )}
              <div className="aspect-[2/4] w-full h-2/5  overflow-hidden rounded-t-3xl bg-gradient-to-br from-blue-100/60 to-blue-200/30">
                <img 
                  src={newsletter.coverImage} 
                  alt={newsletter.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{newsletter.issueNumber}</Badge>
                  <span className="text-sm text-gray-500 font-medium">
                    {format(new Date(newsletter.date), 'MMM yyyy')}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold line-clamp-2">
                  {newsletter.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Published on {format(new Date(newsletter.date), 'MMMM dd, yyyy')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-5 line-clamp-3 font-medium">
                  {newsletter.excerpt}
                </p>
                <div className="flex flex-col gap-2">
                  <Button size="sm" className="w-full shadow-lg hover:scale-[1.02]">
                    <FileText size={18} className="mr-2" />
                    Read Online
                  </Button>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 hover:border-blue-400">
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                    <SocialShare 
                      url={`${window.location.origin}/newsletter#${newsletter.id}`}
                      title={newsletter.title}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNewsletters.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl font-semibold">No newsletters found matching your criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* Archive Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 border-solid">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center flex-1 tracking-tight">Newsletter Archive</h2>
            <button
              className="md:hidden ml-4 text-blue-600 hover:underline font-semibold"
              onClick={() => setArchiveOpen((v) => !v)}
            >
              {archiveOpen ? "Hide" : "Show"}
            </button>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-300 ${archiveOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            {allYears.map((year) => {
              const yearCount = mockNewsletters.filter(n => new Date(n.date).getFullYear().toString() === year).length;
              return (
                <div
                  key={year}
                  className="text-center p-6 border rounded-2xl hover:bg-blue-50/70 cursor-pointer transition-all duration-200 shadow-md hover:shadow-xl group"
                >
                  <div className="text-3xl font-extrabold text-blue-600 group-hover:scale-110 transition-transform">{year}</div>
                  <div className="text-base text-gray-600 font-medium">{yearCount} Issues</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
        <div className="bg-gradient-to-r h-[20rem] from-blue-600 to-blue-400 text-white rounded-3xl p-10 mb-12 shadow-2xl animate-fade-in border-2 border-blue-200/30">
          <div className="max-w-2xl mx-auto text-center">
            {/* <Mail size={56} className="mx-auto mb-5 animate-bounce drop-shadow-lg" /> */}
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Subscribe to Our Newsletter</h2>
            <p className="mb-7 opacity-90 text-lg">
              Get the latest updates, achievements, and events delivered straight to your inbox
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-800 bg-white/90"
                required
              />
              <Button type="submit" variant="secondary" className="shadow-lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
  </>
    
  );
};

export default NewsLetter;
