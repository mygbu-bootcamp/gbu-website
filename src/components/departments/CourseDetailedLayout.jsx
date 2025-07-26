import { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Award, 
  Book, 
  Download, 
  Phone, 
  Play,
  Clock,
  DollarSign,
  MapPin,
  GraduationCap
} from 'lucide-react';
import CourseSelector from './CourseSelector.jsx';

const CourseDetailedLayout = ({ 
  courseData, 
  onApplyClick, 
  onDownloadBrochure, 
  onScheduleCall 
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!courseData) {
    return <div>No course data available</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'career', label: 'Career Prospects' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 mr-3" />
              <span className="text-blue-200">{courseData.school}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {courseData.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {courseData.description}
            </p>
            
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-6 w-6 mb-2" />
                <div className="text-sm text-blue-200">Duration</div>
                <div className="font-semibold">{courseData.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-6 w-6 mb-2" />
                <div className="text-sm text-blue-200">Intake</div>
                <div className="font-semibold">{courseData.intake}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <DollarSign className="h-6 w-6 mb-2" />
                <div className="text-sm text-blue-200">Fee</div>
                <div className="font-semibold">{courseData.fee}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="h-6 w-6 mb-2" />
                <div className="text-sm text-blue-200">Location</div>
                <div className="font-semibold">{courseData.location}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onApplyClick(courseData.id)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Apply Now
              </button>
              <button
                onClick={() => onDownloadBrochure(courseData.id)}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </button>
              <button
                onClick={() => onScheduleCall(courseData.id)}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSelector />
            
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-blue-600 hover:text-blue-800">Admission Process</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">Fee Structure</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">Scholarship</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">Campus Tour</a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="border-b">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Course Overview</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {courseData.overview || courseData.description}
                      </p>
                    </div>

                    {courseData.highlights && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {courseData.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start">
                              <Award className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {courseData.specializations && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Specializations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {courseData.specializations.map((spec, index) => (
                            <div key={index} className="bg-blue-50 p-3 rounded-lg">
                              <span className="font-medium text-blue-900">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Curriculum Structure</h3>
                    <p className="text-gray-600 mb-6">
                      Our comprehensive curriculum is designed to provide both theoretical knowledge and practical skills.
                    </p>
                    {/* Add curriculum content here */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600">Detailed curriculum information will be available soon.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'faculty' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Faculty</h3>
                    <p className="text-gray-600 mb-6">
                      Learn from industry experts and experienced academicians.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600">Faculty information will be available soon.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'admissions' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Admission Requirements</h3>
                    {courseData.eligibility && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Eligibility Criteria:</h4>
                        <p className="text-gray-600">{courseData.eligibility}</p>
                      </div>
                    )}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Application Process:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-600">
                        <li>Submit online application</li>
                        <li>Upload required documents</li>
                        <li>Pay application fee</li>
                        <li>Appear for entrance exam (if applicable)</li>
                        <li>Attend counseling session</li>
                      </ol>
                    </div>
                  </div>
                )}

                {activeTab === 'career' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Career Prospects</h3>
                    <p className="text-gray-600 mb-6">
                      Our graduates are well-prepared for diverse career opportunities in the industry.
                    </p>
                    {courseData.careerOpportunities && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {courseData.careerOpportunities.map((career, index) => (
                          <div key={index} className="bg-green-50 p-4 rounded-lg">
                            <span className="font-medium text-green-900">{career}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailedLayout;
