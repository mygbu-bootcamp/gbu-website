 import React, { useState, useEffect } from 'react';
import { Dialog } from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
import { Bell, X, Calendar, AlertCircle } from 'lucide-react';

// Sample Notice Modal Component
const NoticeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  const notices = [
    {
      id: 1,
      title: 'Application Deadline Extension',
      content: 'The last date for submitting online applications has been extended to March 15, 2024. All candidates are advised to complete their applications before the deadline.',
      date: '2024-03-01',
      type: 'urgent',
      isNew: true
    },
    {
      id: 2,
      title: 'Document Verification Schedule',
      content: 'Document verification will be conducted from March 20-25, 2024. Candidates must bring original documents along with photocopies.',
      date: '2024-02-28',
      type: 'important',
      isNew: true
    },
    {
      id: 3,
      title: 'New Scholarship Program Launched',
      content: 'Merit-based scholarships are now available for undergraduate programs. Apply before March 10, 2024.',
      date: '2024-02-25',
      type: 'general',
      isNew: false
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (notices.some(notice => notice.isNew)) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getNoticeTypeColor = (type) => {
    switch (type) {
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200';
      case 'important': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'general': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getNoticeIcon = (type) => {
    switch (type) {
      case 'urgent': return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'important': return <Bell className="w-5 h-5 text-orange-600" />;
      case 'general': return <Bell className="w-5 h-5 text-blue-600" />;
      default: return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const nextNotice = () => {
    setCurrentNoticeIndex((prevIndex) => (prevIndex + 1) % notices.length);
  };

  const prevNotice = () => {
    setCurrentNoticeIndex((prevIndex) => (prevIndex - 1 + notices.length) % notices.length);
  };

  const currentNotice = notices[currentNoticeIndex];

  return (
    <>
      {/* Floating Bell Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <Bell className="w-6 h-6" />
        {notices.some(notice => notice.isNew) && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>

      {/* Notice Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {getNoticeIcon(currentNotice.type)}
                <span className="font-semibold text-lg">Important Notice</span>
              </div>
              <span className="text-sm text-gray-500">{currentNoticeIndex + 1} of {notices.length}</span>
            </div>

            <div className={`p-3 rounded-lg border ${getNoticeTypeColor(currentNotice.type)}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{currentNotice.title}</h3>
                {currentNotice.isNew && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">NEW</span>
                )}
              </div>
              <p className="text-sm text-gray-700 mb-2">{currentNotice.content}</p>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{new Date(currentNotice.date).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevNotice}
                disabled={notices.length <= 1}
              >
                Previous
              </Button>

              <div className="flex space-x-1">
                {notices.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentNoticeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextNotice}
                disabled={notices.length <= 1}
              >
                Next
              </Button>
            </div>

            <Button
              onClick={() => setIsOpen(false)}
              className="w-full mt-4"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticeModal;