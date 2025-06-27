
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SearchFilter from '../../components/announcement/SearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import Pagination from '../../components/announcement/Pagination';
// Card components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg border border-gray-200 border-solid${className}`}>{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="p-4 border-b border-gray-100 border-solid">{children}</div>
);
const CardTitle = ({ children, className = '' }) => (
  <h2 className={`text-xl font-bold text-gray-800 ${className}`}>{children}</h2>
);
const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

// Badge component
const Badge = ({ children, className = '' }) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${className}`}>{children}</span>
);

// Button component
const Button = ({ children, size = 'md', variant = 'default', className = '', ...props }) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50'
  };
  return (
    <button
      className={`rounded transition ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { Download, FileText } from 'lucide-react';
// Mock data for notices
const mockNotices = [
  {
    id: 1,
    title: "Semester Exam Schedule Released",
    content: "The schedule for the upcoming semester exams has been released. Please check the exam portal for details.",
    date: "2024-05-10",
    type: "Exam",
    pdfUrl: "https://example.com/exam-schedule.pdf"
  },
  {
    id: 2,
    title: "Fee Payment Deadline Extended",
    content: "The last date for fee payment has been extended to 20th May 2024. Kindly pay your fees before the deadline.",
    date: "2024-05-05",
    type: "Fee",
    pdfUrl: ""
  },
  {
    id: 3,
    title: "Annual Sports Meet Announcement",
    content: "The Annual Sports Meet will be held from 15th to 18th June. All students are encouraged to participate.",
    date: "2024-04-28",
    type: "Event",
    pdfUrl: "https://example.com/sports-meet.pdf"
  },
  {
    id: 4,
    title: "Academic Calendar 2024-25 Published",
    content: "The academic calendar for the session 2024-25 is now available. Download the PDF for important dates.",
    date: "2024-04-15",
    type: "Academic",
    pdfUrl: "https://example.com/academic-calendar.pdf"
  },
  {
    id: 5,
    title: "General Notice: Campus Cleanliness Drive",
    content: "A campus-wide cleanliness drive will be conducted on 22nd May. All students and staff are requested to participate.",
    date: "2024-05-01",
    type: "General",
    pdfUrl: ""
  },
  {
    id: 6,
    title: "Mid-Semester Exam Guidelines",
    content: "Please read the guidelines for the upcoming mid-semester exams carefully.",
    date: "2023-11-10",
    type: "Exam",
    pdfUrl: "https://example.com/midsem-guidelines.pdf"
  },
  {
    id: 7,
    title: "Scholarship Application Notice",
    content: "Applications for scholarships are open till 30th June. Submit your documents to the admin office.",
    date: "2023-06-01",
    type: "General",
    pdfUrl: ""
  },
  {
    id: 8,
    title: "Workshop on AI and ML",
    content: "A workshop on Artificial Intelligence and Machine Learning will be held on 10th July. Register soon.",
    date: "2023-07-01",
    type: "Event",
    pdfUrl: "https://example.com/ai-ml-workshop.pdf"
  },
  {
    id: 9,
    title: "Fee Payment Notice for New Session",
    content: "Fee payment for the new academic session is open. Please pay before 10th August.",
    date: "2023-07-20",
    type: "Fee",
    pdfUrl: ""
  },
  {
    id: 10,
    title: "Holiday Notice: Independence Day",
    content: "The university will remain closed on 15th August on account of Independence Day.",
    date: "2023-08-10",
    type: "General",
    pdfUrl: ""
  }
];

// Simple date formatting function (similar to date-fns format)
function format(date, formatStr) {
  const d = new Date(date);
  const pad = (n) => n.toString().padStart(2, '0');
  const map = {
    'MMMM': d.toLocaleString('default', { month: 'long' }),
    'MMM': d.toLocaleString('default', { month: 'short' }),
    'MM': pad(d.getMonth() + 1),
    'dd': pad(d.getDate()),
    'yyyy': d.getFullYear(),
    'yy': d.getFullYear().toString().slice(-2)
  };
  return formatStr.replace(/MMMM|MMM|MM|dd|yyyy|yy/g, (match) => map[match]);
}

const Notice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allTypes = Array.from(new Set(mockNotices.map(notice => notice.type)));
  const allYears = Array.from(new Set(mockNotices.map(notice => new Date(notice.date).getFullYear().toString())));

  const filteredNotices = useMemo(() => {
    return mockNotices.filter(notice => {
      const matchesSearch = !searchQuery ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.content.toLowerCase().includes(searchQuery.toLowerCase());

      const noticeDate = new Date(notice.date);
      const matchesDateRange = (!startDate || noticeDate >= startDate) &&
        (!endDate || noticeDate <= endDate);

      const matchesType = selectedType === 'all' || notice.type === selectedType;
      const matchesYear = selectedYear === 'all' || new Date(notice.date).getFullYear().toString() === selectedYear;

      return matchesSearch && matchesDateRange && matchesType && matchesYear;
    });
  }, [searchQuery, startDate, endDate, selectedType, selectedYear]);

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const currentNotices = filteredNotices.slice(
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

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const getTypeColor = (type) => {
    const colors = {
      'Exam': 'bg-red-100 text-red-800',
      'Fee': 'bg-blue-100 text-blue-800',
      'Event': 'bg-green-100 text-green-800',
      'Academic': 'bg-purple-100 text-purple-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[type] || colors['General'];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Notices & Circulars</h1>
          <p className="text-gray-600 text-lg">Important notices and official circulars</p>
        </div>

        <SearchFilter
          onSearch={handleSearch}
          onDateFilter={handleDateFilter}
          onTypeFilter={handleTypeFilter}
          onYearFilter={handleYearFilter}
          types={allTypes}
          years={allYears}
          placeholder="Search notices..."
        />

        <div className="space-y-4">
          {currentNotices.map((notice) => (
            <Card key={notice.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(notice.type)}>
                        {notice.type}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {format(new Date(notice.date), 'MMMM dd, yyyy')}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {notice.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {notice.content.substring(0, 150)}...
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                    {notice.pdfUrl && (
                      <Button size="sm" variant="outline">
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                    )}
                    <Link to={`/notices/${notice.id}`}>
                      <Button size="sm">
                        <FileText size={16} className="mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <SocialShare
                      url={`${window.location.origin}/notices/${notice.id}`}
                      title={notice.title}
                    />
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No notices found matching your criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Notice;
