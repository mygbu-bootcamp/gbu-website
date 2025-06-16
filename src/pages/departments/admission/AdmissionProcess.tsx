import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Download,
  Users,
  GraduationCap,
  Upload
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill out the online application form with personal and academic details",
      duration: "15-20 minutes",
      status: "active",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Upload",
      description: "Upload required documents including certificates, transcripts, and ID proof",
      duration: "10-15 minutes",
      status: "pending",
      icon: Upload
    },
    {
      step: 3,
      title: "Application Review",
      description: "Our admission committee reviews your application and documents",
      duration: "3-5 business days",
      status: "pending",
      icon: Users
    },
    {
      step: 4,
      title: "Merit List Publication",
      description: "Merit lists are published based on academic performance and entrance scores",
      duration: "1-2 business days",
      status: "pending",
      icon: GraduationCap
    },
    {
      step: 5,
      title: "Counseling & Seat Allocation",
      description: "Attend counseling session and select your preferred course and specialization",
      duration: "1 day",
      status: "pending",
      icon: Users
    },
    {
      step: 6,
      title: "Fee Payment & Confirmation",
      description: "Pay admission fees and confirm your seat to complete the process",
      duration: "Same day",
      status: "pending",
      icon: CheckCircle
    }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "March 15, 2024", status: "completed" },
    { event: "Application End Date", date: "May 30, 2024", status: "upcoming" },
    { event: "Document Verification", date: "June 5-10, 2024", status: "upcoming" },
    { event: "Merit List Publication", date: "June 15, 2024", status: "upcoming" },
    { event: "Counseling Sessions", date: "June 20-25, 2024", status: "upcoming" },
    { event: "Classes Begin", date: "July 1, 2024", status: "upcoming" }
  ];

  const requirements = [
    "Completed application form",
    "Academic transcripts and certificates",
    "Valid ID proof (Passport/Driving License/Aadhaar)",
    "Entrance exam scores (if applicable)",
    "Character certificate from previous institution",
    "Medical fitness certificate",
    "Passport size photographs",
    "Category certificate (if applicable)"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h1>
          <p className="text-xl text-gray-600">Your complete guide to joining our university</p>
        </div>

        {/* Process Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Step-by-Step Process</h2>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Step {step.step}: {step.title}
                        </h3>
                        <Badge variant={step.status === 'active' ? 'default' : 'secondary'}>
                          {step.status === 'active' ? 'Current' : 'Upcoming'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {step.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Important Dates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Important Dates</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{item.event}</p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                    <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                      {item.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-green-600" />
                <span>Required Documents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/student-login">Start Application</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
