
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/home/Navbar';
import AdmissionStats from '../../components/Admission/AdmissionStats';
import AdmissionTimeline from '../../components/Admission/AdmissionTimeline';
import QuickLinks from '../../components/Admission/QuickLinks';
import NoticeModal from '../../components/Admission/NoticeModal';
import AdminStats from '../../components/Admission/AdminStats';
import CourseApplications from '../../components/Admission/CourseApplications';
import DocumentVerification from '../../components/Admission/DocumentVerification';
import AdminActions from '../../components/Admission/AdminActions';
// Simple Tabs implementation for this Dashboard page

const Tabs = ({ defaultValue, children, className }) => {
  const [active, setActive] = useState(defaultValue);
  // Filter children for triggers and content
  const triggers = React.Children.toArray(children).filter(
    child => child.type && child.type.displayName === 'TabsTrigger'
  );
  const contents = React.Children.toArray(children).filter(
    child => child.type && child.type.displayName === 'TabsContent'
  );
  const list = React.Children.toArray(children).find(
    child => child.type && child.type.displayName === 'TabsList'
  );

  // Clone triggers to inject active state and onClick
  const triggersWithProps = triggers.map(trigger =>
    React.cloneElement(trigger, {
      active: trigger.props.value === active,
      onClick: () => setActive(trigger.props.value),
      key: trigger.props.value,
    })
  );

  // Only render the content for the active tab
  const activeContent = contents.find(
    content => content.props.value === active
  );

  return (
    <div className={className}>
      {list
        ? React.cloneElement(list, {}, triggersWithProps)
        : <div className="flex space-x-2 mb-4">{triggersWithProps}</div>}
      {activeContent}
    </div>
  );
};

const TabsList = ({ children, className }) => (
  <div className={className + " bg-gray-100 rounded-lg p-1 flex"}>{children}</div>
);
TabsList.displayName = 'TabsList';

const TabsTrigger = ({ value, children, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={
      `px-4 py-2 rounded-lg font-medium transition-colors duration-150
      ${active
        ? 'bg-white shadow text-blue-600'
        : 'bg-transparent text-gray-700 hover:bg-white hover:text-blue-500'}`
    }
    aria-selected={active}
    aria-controls={`tab-content-${value}`}
    tabIndex={active ? 0 : -1}
  >
    {children}
  </button>
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = ({ value, children, className }) => (
  <div
    id={`tab-content-${value}`}
    className={className}
    role="tabpanel"
    tabIndex={0}
  >
    {children}
  </div>
);
TabsContent.displayName = 'TabsContent';

const Dashboard = () => {
  const [userType, setUserType] = useState<'student' | 'admin'>('student');

  useEffect(() => {
    // Check user type from localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      setUserType(user.type || 'student');
    }
  }, []);

  const StudentDashboard = () => (
    <div className="space-y-8">
      {/* Admission Statistics */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Admission Statistics</h2>
        <AdmissionStats />
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Process Timeline</h2>
          <AdmissionTimeline />
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Access</h2>
          <QuickLinks />
        </div>
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="space-y-8">
      {/* Admin Statistics */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Admin Overview</h2>
        <AdminStats />
      </section>
      
      {/* Admin Tabs */}
      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="applications">Course Applications</TabsTrigger>
          <TabsTrigger value="documents">Document Verification</TabsTrigger>
          <TabsTrigger value="actions">Admin Actions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications" className="space-y-6">
          <CourseApplications />
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-6">
          <DocumentVerification />
        </TabsContent>
        
        <TabsContent value="actions" className="space-y-6">
          <AdminActions />
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <NoticeModal />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {userType === 'admin' ? 'Admin Dashboard' : 'Admission Dashboard'}
          </h1>
          <p className="text-gray-600 mt-2">
            {userType === 'admin' 
              ? 'Manage admissions, verify documents, and oversee the admission process' 
              : 'Real-time admission statistics and process timeline'
            }
          </p>
        </div>
        
        {userType === 'admin' ? <AdminDashboard /> : <StudentDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
