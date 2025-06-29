import { useParams, Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SocialShare from '../../components/announcement/SocialShare';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';

// Button component
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "bg-transparent border border-blue-200 text-blue-700 hover:bg-blue-50 focus:ring-blue-500",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge component
const Badge = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-200 text-gray-700",
    accent: "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow",
  };
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// Mock news data
export const mockNews = [
  {
    id: 1,
    title: "GBU Launches New Research Center",
    date: "2024-05-10",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581091215369-7f72b8f34054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Research", "Innovation"],
    content: "Gautam Buddha University has inaugurated a state-of-the-art interdisciplinary research center aimed at fostering innovation and sustainable technology development. The center will collaborate with leading institutions and industries to tackle real-world challenges.",
  },
  {
    id: 2,
    title: "Annual Sports Meet Concludes Successfully",
    date: "2024-04-22",
    author: "Sports Desk",
    image: "https://images.unsplash.com/photo-1530878955558-bafcdd9282c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Sports", "Events"],
    content: "GBU's annual sports meet concluded with enthusiastic participation from students and faculty alike. Various athletic events, cricket, football, and relay races were held, promoting sportsmanship and healthy competition across departments.",
  },
  {
    id: 3,
    title: "International Conference on AI and Robotics",
    date: "2024-06-15",
    author: "Faculty",
    image: "https://images.unsplash.com/photo-1581092580495-4c4a45c16d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "Conference"],
    content: "Leading researchers, students, and industry experts gathered at GBU for the International Conference on Artificial Intelligence and Robotics. The event featured keynote speeches, paper presentations, and panel discussions on emerging trends and ethical AI practices.",
  },
  {
    id: 4,
    title: "Successful Placement Drive 2024",
    date: "2024-03-12",
    author: "Placement Cell",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Placements", "Careers"],
    content: "The 2024 placement drive at GBU saw top recruiters offering diverse roles in engineering, management, and research. Many students received multiple offers from reputed companies, highlighting the university's strong industry connections and student talent pool.",
  },
  {
    id: 5,
    title: "New Digital Library Block Opens",
    date: "2024-02-28",
    author: "Library Committee",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Library", "Campus"],
    content: "Students now have access to a new digital library equipped with modern study spaces, high-speed internet, and thousands of e-resources. The facility aims to foster collaborative learning and provide a conducive environment for research and self-study.",
  },
  {
    id: 6,
    title: "GBU Students Win National Hackathon",
    date: "2024-05-05",
    author: "Innovation Club",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee9819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Hackathon", "Innovation"],
    content: "A team of CSE students from GBU clinched first place at a prestigious national hackathon. Their project, a smart city solution integrating IoT and AI, impressed the judges with its practical applications and innovative approach.",
  },
  {
    id: 7,
    title: "Environment Awareness Week Celebrated",
    date: "2024-04-18",
    author: "Eco Club",
    image: "https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Environment", "Sustainability"],
    content: "GBU celebrated Environment Awareness Week with a series of activities including tree plantation drives, sustainability workshops, and waste management campaigns. The initiative aimed to instill eco-friendly practices among students and staff.",
  },
  {
    id: 8,
    title: "MoU Signed with Global University",
    date: "2024-06-01",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1600195077070-03c0c8e36f18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["International", "Collaboration"],
    content: "GBU signed a Memorandum of Understanding with a reputed foreign university to promote joint research, student exchange programs, and faculty collaboration. This partnership will enhance the global exposure and academic excellence of GBU students.",
  },
  {
    id: 9,
    title: "Cultural Fest Abhivyakti a Grand Success",
    date: "2024-03-25",
    author: "Cultural Committee",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Culture", "Events"],
    content: "Abhivyakti, GBU’s annual cultural fest, brought together vibrant performances, art exhibitions, dance competitions, and a star-studded celebrity night. Students from various disciplines showcased their talents and creativity.",
  },
  {
    id: 10,
    title: "Annual Alumni Meet 2024",
    date: "2024-05-20",
    author: "Alumni Association",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Alumni", "Networking"],
    content: "GBU hosted its annual alumni meet, reconnecting graduates with their alma mater. The event included networking sessions, experience sharing, and discussions on how alumni can contribute to the university’s growth.",
  },
  {
    id: 11,
    title: "Modern Hostel Facilities Opened",
    date: "2024-04-12",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1613931803086-c5d1df8b6cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Campus", "Facilities"],
    content: "New hostel blocks with modern amenities, green architecture, and recreational spaces have been inaugurated. The upgraded facilities aim to provide students with a comfortable and secure living experience.",
  },
  {
    id: 12,
    title: "Annual Science Exhibition Showcases Talent",
    date: "2024-03-30",
    author: "Science Club",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Science", "Innovation"],
    content: "Students displayed their projects and prototypes at the annual science exhibition, demonstrating creativity and practical problem-solving skills. The event drew visitors from schools and colleges across the region.",
  },
  {
    id: 13,
    title: "Mental Health Awareness Seminar",
    date: "2024-05-18",
    author: "Health Club",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Health", "Awareness"],
    content: "GBU organized a seminar focused on mental health awareness, featuring psychologists and counselors who spoke about stress management, coping strategies, and the importance of seeking help when needed.",
  },
  {
    id: 14,
    title: "Students Visit Parliament House",
    date: "2024-04-05",
    author: "Political Science Dept",
    image: "https://images.unsplash.com/photo-1603052875149-56b8e6e4b0f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Educational Tour", "Politics"],
    content: "Political Science students visited the Parliament House to gain practical insights into legislative proceedings. The trip included interactive sessions with Members of Parliament and an overview of parliamentary practices.",
  },
  {
    id: 15,
    title: "Art and Photography Workshop",
    date: "2024-04-28",
    author: "Arts Club",
    image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Arts", "Workshop"],
    content: "Renowned artists and photographers conducted a two-day workshop for budding artists, covering photography basics, painting techniques, and portfolio building tips.",
  },
  {
    id: 16,
    title: "Industry Leader Delivers Guest Lecture",
    date: "2024-05-12",
    author: "Career Cell",
    image: "https://images.unsplash.com/photo-1581094278514-55f9857f6372?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Lecture", "Careers"],
    content: "An industry veteran delivered a guest lecture highlighting the latest trends in technology and skills required for future jobs. Students gained valuable insights into industry expectations and career planning.",
  },
  {
    id: 17,
    title: "Coding Bootcamp Concludes",
    date: "2024-03-22",
    author: "CSE Dept",
    image: "https://images.unsplash.com/photo-1581090700227-3e6a994d40c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Bootcamp", "Coding"],
    content: "GBU’s week-long coding bootcamp helped students strengthen their programming fundamentals through hands-on projects and peer collaboration. Industry experts mentored students throughout the intensive sessions.",
  },
  {
    id: 18,
    title: "GBU Debate Team Wins Competition",
    date: "2024-04-02",
    author: "Literary Club",
    image: "https://images.unsplash.com/photo-1532105956626-95675db236c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Debate", "Achievements"],
    content: "The debate team brought laurels to GBU by winning the inter-university debate competition, outshining top contenders with their articulate arguments and confident presentation.",
  },
  {
    id: 19,
    title: "Blood Donation Camp Sees Huge Turnout",
    date: "2024-03-18",
    author: "Health Club",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Health", "Social Work"],
    content: "A blood donation camp organized on campus saw participation from hundreds of students and staff. The collected blood units were donated to nearby hospitals to support patients in need.",
  },
  {
    id: 20,
    title: "Yoga and Meditation Retreat Held",
    date: "2024-05-25",
    author: "Wellness Club",
    image: "https://images.unsplash.com/photo-1600986602534-771b5014a4f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Wellness", "Yoga"],
    content: "A three-day yoga and meditation retreat was organized on campus to help students and faculty manage stress and improve mental well-being through guided sessions and group activities.",
  },
];



// Simple date formatting function (similar to date-fns format)
function format(date, formatStr) {
  const d = new Date(date);
  const options = {};
  if (formatStr.includes('MMMM')) options.month = 'long';
  if (formatStr.includes('MMM')) options.month = 'short';
  if (formatStr.includes('dd')) options.day = '2-digit';
  if (formatStr.includes('yyyy')) options.year = 'numeric';
  return d.toLocaleDateString(undefined, options);
}

const NewsDetail = () => {
  const { id } = useParams();
const news = mockNews.find(item => item.id === Number(id));




  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* <Header /> */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-extrabold text-blue-800 mb-4">News not found</h1>
          <Link to="/announcements/news-notifications">
            <Button size="lg" variant="primary" className="mt-4">
              <ArrowLeft size={18} className="mr-2" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

 
const currentIndex = mockNews.findIndex(item => item.id === Number(id));
const previousNews = currentIndex > 0 ? mockNews[currentIndex - 1] : null;
const nextNews = currentIndex < mockNews.length - 1 ? mockNews[currentIndex + 1] : null;


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* <Header />/ */}

      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="mb-8">
          <Link to="/announcements/news-notifications">
            <Button variant="outline" size="sm" className="group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition" />
              Back to News
            </Button>
          </Link>
        </div>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 transition hover:shadow-blue-200">
          {news.image && (
            <div className="relative aspect-video w-full overflow-hidden group">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
          )}

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-5">
              {news.tags.map((tag) => (
                <Badge key={tag} variant="accent">
                  #{tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow">
              {news.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 text-blue-700/80 gap-2">
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar size={16} className="text-blue-400" />
                  {format(new Date(news.date), 'MMMM dd, yyyy')}
                </span>
                <span className="hidden sm:inline-block h-4 w-px bg-blue-200 mx-2" />
                <span className="flex items-center gap-1">
                  <User size={16} className="text-blue-400" />
                  {news.author}
                </span>
              </div>
              <SocialShare
                url={window.location.href}
                title={news.title}
              />
            </div>

            <div className="prose max-w-none text-blue-900 prose-lg">
              <p className="text-lg leading-relaxed font-medium">
                {news.content}
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch mt-10 gap-4">
          {previousNews ? (
            <Link to={`/announcements/news-notifications/${previousNews.id}`} className='flex-1'>


              <Button
                variant="outline"
                className="w-full text-left flex items-center gap-3 border-blue-200 hover:border-blue-400 group"
              >
                <ArrowLeft size={18} className="mr-2 text-blue-400 group-hover:-translate-x-1 transition" />
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Previous</div>
                  <div className="line-clamp-1 font-medium text-blue-800">{previousNews.title}</div>
                </div>
              </Button>
            </Link>
          ) : <div className="flex-1" />}

          {nextNews ? (
            <Link to={`/announcements/news-notifications/${nextNews.id}`} className="flex-1">
              <Button
                variant="outline"
                className="w-full text-right flex items-center gap-3 justify-end border-blue-200 hover:border-blue-400 group"
              >
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Next</div>
                  <div className="line-clamp-1 font-medium text-blue-800">{nextNews.title}</div>
                </div>
                <ArrowRight size={18} className="ml-2 text-blue-400 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
