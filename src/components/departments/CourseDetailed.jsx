import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import CourseDetailedLayout from './courseDetailedLayout.jsx';
import { getCourseData, getAllSchools, getSchoolCourses } from '../../Data/coursesData.js';

const CourseDetails = () => {
  const { school, course } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get course data from URL params or search params
  useEffect(() => {
    setLoading(true);
    setError(null);

    let schoolParam = school;
    let courseParam = course;

    // If no URL params, try search params
    if (!schoolParam) {
      schoolParam = searchParams.get('school');
    }
    if (!courseParam) {
      courseParam = searchParams.get('course');
    }

    // Default to engineering/computer-science if no params provided (for backward compatibility)
    if (!schoolParam || !courseParam) {
      schoolParam = schoolParam || 'engineering';
      courseParam = courseParam || 'computer-science';
    }

    const data = getCourseData(schoolParam, courseParam);
    
    if (data) {
      setCourseData(data);
    } else {
      setError(`Course not found: ${schoolParam}/${courseParam}`);
    }
    
    setLoading(false);
  }, [school, course, searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The requested course could not be found.'}</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Available Schools:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {getAllSchools().map(schoolName => (
                  <button
                    key={schoolName}
                    onClick={() => navigate(`/schools/departments/courseDetailed?school=${schoolName}&course=${Object.keys(getSchoolCourses(schoolName))[0]}`)}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
                  >
                    {schoolName.charAt(0).toUpperCase() + schoolName.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleApplyClick = (courseId) => {
    console.log('Apply clicked for course:', courseId);
  };

  const handleDownloadBrochure = (courseId) => {
    console.log('Download brochure for course:', courseId);
  };

  const handleScheduleCall = (courseId) => {
    console.log('Schedule call for course:', courseId);
  };

  return (
    <CourseDetailedLayout
      courseData={courseData}
      onApplyClick={handleApplyClick}
      onDownloadBrochure={handleDownloadBrochure}
      onScheduleCall={handleScheduleCall}
    />
  );
};

export default CourseDetails;
