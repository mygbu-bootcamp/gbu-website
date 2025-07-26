import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSchools, getSchoolCourses } from '../../Data/coursesData.js';

const CourseSelector = ({ currentSchool, currentCourse, className = "" }) => {
  const navigate = useNavigate();
  const [selectedSchool, setSelectedSchool] = useState(currentSchool || 'engineering');
  
  const schools = getAllSchools();
  const schoolCourses = getSchoolCourses(selectedSchool);

  const handleSchoolChange = (school) => {
    setSelectedSchool(school);
    const firstCourse = Object.keys(getSchoolCourses(school))[0];
    if (firstCourse) {
      navigate(`/schools/departments/courseDetailed?school=${school}&course=${firstCourse}`);
    }
  };

  const handleCourseChange = (course) => {
    navigate(`/schools/departments/courseDetailed?school=${selectedSchool}&course=${course}`);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Other Courses</h3>
      
      {/* School Selector */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select School
          </label>
          <select
            value={selectedSchool}
            onChange={(e) => handleSchoolChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {schools.map(school => (
              <option key={school} value={school}>
                {school.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </option>
            ))}
          </select>
        </div>

        {/* Course Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Course
          </label>
          <select
            value={currentCourse}
            onChange={(e) => handleCourseChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {Object.entries(schoolCourses).map(([courseKey, courseData]) => (
              <option key={courseKey} value={courseKey}>
                {courseData.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Quick Access</h4>
        <div className="space-y-2">
          {Object.entries(schoolCourses).slice(0, 3).map(([courseKey, courseData]) => (
            <button
              key={courseKey}
              onClick={() => handleCourseChange(courseKey)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                currentCourse === courseKey
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              {courseData.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSelector;
