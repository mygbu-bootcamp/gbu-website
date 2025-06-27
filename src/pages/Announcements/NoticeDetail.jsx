
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SocialShare from '../../components/announcement/SocialShare';
// Simple Button component
const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple Badge component
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide ${className}`}
  >
    {children}
  </span>
);
import { ArrowLeft, Download } from 'lucide-react';
// Mock data for notices
const mockNotices = [
  {
    id: "1",
    type: "Exam",
    title: "Midterm Exam Schedule Released",
    date: "2024-06-01",
    content: "The midterm exam schedule for all courses has been released. Please check the attached PDF for details.",
    pdfUrl: "/notices/midterm-schedule.pdf",
    attachments: ["midterm-schedule.pdf"]
  },
  {
    id: "2",
    type: "Event",
    title: "Annual Sports Meet Announcement",
    date: "2024-05-20",
    content: "We are excited to announce the Annual Sports Meet. All students are encouraged to participate.",
    pdfUrl: "",
    attachments: []
  },
  {
    id: "3",
    type: "Fee",
    title: "Fee Payment Deadline Extended",
    date: "2024-05-15",
    content: "The deadline for fee payment has been extended to June 10, 2024.",
    pdfUrl: "",
    attachments: []
  }
];

// Simple date formatting function (yyyy-mm-dd to 'Month dd, yyyy')
function format(date, formatStr) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  if (formatStr === "MMMM dd, yyyy") {
    const d = new Date(date);
    const month = months[d.getMonth()];
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  }
  return date.toString();
}

const NoticeDetail = () => {
  const { id } = useParams();
  const notice = mockNotices.find(item => item.id === id);

  if (!notice) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Notice not found</h1>
          <Link to="/notices">
            <Button>Back to Notices</Button>
          </Link>
        </div>
      </div>
    );
  }

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
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/notices">
            <Button variant="outline" size="sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Notices
            </Button>
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <Badge className={`${getTypeColor(notice.type)} mb-2`}>
                {notice.type}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {notice.title}
              </h1>
              <p className="text-gray-600">
                Published on {format(new Date(notice.date), 'MMMM dd, yyyy')}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {notice.pdfUrl && (
                <Button>
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>
              )}
              <SocialShare 
                url={window.location.href}
                title={notice.title}
              />
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              {notice.content}
            </p>
          </div>

          {notice.attachments && notice.attachments.length > 0 && (
            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Attachments</h3>
              <div className="space-y-2">
                {notice.attachments.map((attachment, index) => (
                  <Button key={index} variant="outline" className="mr-2">
                    <Download size={16} className="mr-2" />
                    {attachment}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default NoticeDetail;
