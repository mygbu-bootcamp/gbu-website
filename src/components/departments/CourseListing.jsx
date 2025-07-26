import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllSchools, getSchoolCourses, searchCourses } from '../../Data/coursesData.js';
import { Search, Users, Clock, Star, ChevronRight } from 'lucide-react';

const CourseListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('all');
  
  const schools = getAllSchools();
  
  // Get courses based on selected school and search term
  const getFilteredCourses = () => {
    if (searchTerm) {
      return searchCourses(searchTerm);
    }
    
    if (selectedSchool === 'all') {
      const allCourses = [];
      schools.forEach(school => {
        const schoolCourses = getSchoolCourses(school);
        Object.entries(schoolCourses).forEach(([courseKey, courseData]) => {
          allCourses.push({
            school,
            courseKey,
            ...courseData
          });
        });
      });
      return allCourses;
    } else {
      const schoolCourses = getSchoolCourses(selectedSchool);
      return Object.entries(schoolCourses).map(([courseKey, courseData]) => ({
        school: selectedSchool,
        courseKey,
        ...courseData
      }));
    }
  };

  const filteredCourses = getFilteredCourses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect program for your academic and career goals across our different schools.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* School Filter */}
            <div className="md:w-64">
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Schools</option>
                {schools.map(school => (
                  <option key={school} value={school}>
                    {school.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {selectedSchool !== 'all' && ` in ${selectedSchool.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard 
              key={`${course.school}-${course.courseKey}-${index}`} 
              course={course} 
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all courses.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Course Image */}
      <div className="relative">
        <img
          src={course.image || course.gallery?.[0] || 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&auto=format&fit=crop'}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-t-2xl" />
        
        {/* School Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {course.school.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>

        {/* Level Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {course.intake}
          </div>
          {course.rating && (
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
              {course.rating}
            </div>
          )}
        </div>

        {/* Fee */}
        <div className="mb-4">
          <span className="text-lg font-bold text-blue-600">{course.fee}</span>
        </div>

        {/* View Details Button */}
        <Link
          to={`/schools/departments/courseDetailed?school=${course.school}&course=${course.courseKey}`}
          className="block w-full bg-blue-600 text-white text-center font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors group"
        >
          View Details
          <ChevronRight className="inline-block h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CourseListing;
