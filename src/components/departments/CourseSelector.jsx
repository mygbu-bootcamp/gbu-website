import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronDown, GraduationCap } from 'lucide-react';
import { getAllSchools, getSchoolCourses } from '../../Data/coursesData.js';

const CourseSelector = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentSchool = searchParams.get('school') || 'engineering';
  const currentCourse = searchParams.get('course') || 'computer-science';

  const schools = getAllSchools();

  const handleCourseSelect = (school, courseSlug) => {
    navigate(`/schools/departments/courseDetailed?school=${school}&course=${courseSlug}`);
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Browse Courses</h3>
      </div>

      {/* Current Selection */}
      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <div className="text-sm text-blue-600 font-medium">Current Course</div>
        <div className="text-gray-900 font-semibold">
          {currentSchool.charAt(0).toUpperCase() + currentSchool.slice(1)}
        </div>
        <div className="text-sm text-gray-600">
          {currentCourse.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </div>
      </div>

      {/* Course Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
        >
          <span className="text-gray-700">Explore Other Courses</span>
          <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
            {schools.map(school => {
              const courses = getSchoolCourses(school);
              return (
                <div key={school} className="border-b border-gray-100 last:border-b-0">
                  <div className="p-3 bg-gray-50 font-semibold text-gray-900">
                    {school.charAt(0).toUpperCase() + school.slice(1)}
                  </div>
                  <div className="p-2">
                    {Object.entries(courses).map(([courseSlug, courseData]) => (
                      <button
                        key={courseSlug}
                        onClick={() => handleCourseSelect(school, courseSlug)}
                        className={`w-full text-left p-2 rounded hover:bg-blue-50 transition-colors ${
                          currentSchool === school && currentCourse === courseSlug
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700'
                        }`}
                      >
                        <div className="font-medium">{courseData.title}</div>
                        <div className="text-sm text-gray-500">{courseData.duration}</div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Quick Access</h4>
        <div className="space-y-2">
          <button
            onClick={() => navigate('/courses')}
            className="w-full text-left text-blue-600 hover:text-blue-800 text-sm"
          >
            → Browse All Courses
          </button>
          <button
            onClick={() => handleCourseSelect('engineering', 'computer-science')}
            className="w-full text-left text-blue-600 hover:text-blue-800 text-sm"
          >
            → Computer Science Engineering
          </button>
          <button
            onClick={() => handleCourseSelect('management', 'mba')}
            className="w-full text-left text-blue-600 hover:text-blue-800 text-sm"
          >
            → MBA Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseSelector;
