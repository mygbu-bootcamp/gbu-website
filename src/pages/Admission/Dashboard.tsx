
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import AdmissionStats from '@/components/AdmissionStats';
import AdmissionTimeline from '@/components/AdmissionTimeline';
import QuickLinks from '@/components/QuickLinks';
import NoticeModal from '@/components/NoticeModal';
import AdminStats from '@/components/AdminStats';
import CourseApplications from '@/components/CourseApplications';
import DocumentVerification from '@/components/DocumentVerification';
import AdminActions from '@/components/AdminActions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
