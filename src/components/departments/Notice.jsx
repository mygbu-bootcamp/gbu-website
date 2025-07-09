import { Calendar } from "lucide-react";
import { useState } from "react";

// Reusable Card components
export const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "", ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// Reusable Badge
export const Badge = ({ children, className = "", ...props }) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// ✅ Fully prop-based NoticeEvents
const NoticeEvents = ({
  notices = [],
  events = [],
  initialNoticeCount = 5,
  sectionTitle = "Notices and Events",
  sectionSubtitle = "Stay updated with latest notices and events",
}) => {
  const [showAllNotices, setShowAllNotices] = useState(false);

  const displayedNotices = showAllNotices
    ? notices
    : notices.slice(0, initialNoticeCount);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-3">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-600">{sectionSubtitle}</p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-10 gap-10">
          {/* Notice Board */}
          <div className="lg:col-span-3">
            <div className="rounded-xl shadow-lg border border-gray-200 bg-white p-6 h-[37.5rem] flex flex-col">
              <div className="text-blue-800 text-lg font-bold flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  Notice Board
                </div>
              </div>

              <div
                className={`space-y-4 flex-grow ${
                  showAllNotices ? "overflow-y-auto pr-2 custom-scrollbar" : ""
                }`}
                style={{ maxHeight: "calc(100% - 110px)" }}
              >
                {displayedNotices.map((notice, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-sm text-blue-900">
                        {notice.title}
                      </h4>
                      <Badge className="text-xs px-2 py-0.5 capitalize bg-blue-100 text-blue-800 whitespace-nowrap ml-2">
                        {notice.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">{notice.date}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 flex-shrink-0">
                <button
                  onClick={() => setShowAllNotices(!showAllNotices)}
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {showAllNotices ? "Show Less" : "View More"}
                </button>
              </div>
            </div>
          </div>

          {/* Event Gallery */}
          <div className="lg:col-span-7">
            <div className="rounded-xl shadow-lg border border-gray-200 bg-white p-6 h-[37.5rem]">
              <h3 className="text-blue-800 text-lg font-bold mb-4">
                Event Gallery
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-[calc(100%-30px)] pr-2 custom-scrollbar">
                {events.map((event, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="font-semibold text-blue-900 text-sm mb-1">
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1">
                      {event.description}
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      {event.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeEvents;
