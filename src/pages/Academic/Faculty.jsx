
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Award, BookOpen, Users, Search, Filter, X } from 'lucide-react';

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedQualification, setSelectedQualification] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const facultyMembers = [
    {
      id: 'rajesh-kumar',
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head, Computer Science & Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      email: 'rajesh.kumar@gbu.ac.in',
      phone: '+91-120-2344200',
      specialization: 'Artificial Intelligence, Machine Learning',
      experience: '15 years',
      experienceYears: 15,
      education: 'PhD Computer Science, IIT Delhi',
      qualification: 'PhD',
      publications: 45,
      department: 'Computer Science & Engineering',
      researchAreas: ['Artificial Intelligence', 'Machine Learning', 'Data Science']
    },
    {
      id: 'priya-sharma',
      name: 'Dr. Priya Sharma',
      designation: 'Professor & Head, Information Technology',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b3dc?w=300&h=300&fit=crop&crop=face',
      email: 'priya.sharma@gbu.ac.in',
      phone: '+91-120-2344201',
      specialization: 'Database Systems, Web Technologies',
      experience: '12 years',
      experienceYears: 12,
      education: 'PhD Information Technology, IIT Bombay',
      qualification: 'PhD',
      publications: 38,
      department: 'Information Technology',
      researchAreas: ['Database Systems', 'Web Technologies', 'Cloud Computing']
    },
    {
      id: 'amit-singh',
      name: 'Dr. Amit Singh',
      designation: 'Professor & Head, Electronics & Communication',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      email: 'amit.singh@gbu.ac.in',
      phone: '+91-120-2344202',
      specialization: 'VLSI Design, Communication Systems',
      experience: '18 years',
      experienceYears: 18,
      education: 'PhD Electronics Engineering, IIT Kanpur',
      qualification: 'PhD',
      publications: 52,
      department: 'Electronics & Communication Engineering',
      researchAreas: ['VLSI Design', 'Communication Systems', 'Signal Processing']
    },
    {
      id: 'sneha-gupta',
      name: 'Dr. Sneha Gupta',
      designation: 'Associate Professor, Biotechnology',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      email: 'sneha.gupta@gbu.ac.in',
      phone: '+91-120-2344203',
      specialization: 'Molecular Biology, Bioinformatics',
      experience: '10 years',
      experienceYears: 10,
      education: 'PhD Biotechnology, JNU',
      qualification: 'PhD',
      publications: 32,
      department: 'Biotechnology',
      researchAreas: ['Molecular Biology', 'Bioinformatics', 'Genetic Engineering']
    },
    {
      id: 'rahul-verma',
      name: 'Dr. Rahul Verma',
      designation: 'Professor, Management Studies',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face',
      email: 'rahul.verma@gbu.ac.in',
      phone: '+91-120-2344204',
      specialization: 'Strategic Management, Finance',
      experience: '14 years',
      experienceYears: 14,
      education: 'PhD Management, IIM Ahmedabad',
      qualification: 'PhD',
      publications: 29,
      department: 'Management',
      researchAreas: ['Strategic Management', 'Finance', 'Organizational Behavior']
    },
    {
      id: 'meera-jain',
      name: 'Dr. Meera Jain',
      designation: 'Associate Professor, Law',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
      email: 'meera.jain@gbu.ac.in',
      phone: '+91-120-2344205',
      specialization: 'Constitutional Law, Human Rights',
      experience: '11 years',
      experienceYears: 11,
      education: 'PhD Law, National Law University',
      qualification: 'PhD',
      publications: 25,
      department: 'Law, Justice and Governance',
      researchAreas: ['Constitutional Law', 'Human Rights', 'Environmental Law']
    },
    {
      id: 'sarah-wilson',
      name: 'Dr. Sarah Wilson',
      designation: 'Associate Professor, English Literature',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      email: 'sarah.wilson@gbu.ac.in',
      phone: '+91-120-2344206',
      specialization: 'Comparative Literature, Modern Poetry',
      experience: '8 years',
      experienceYears: 8,
      education: 'PhD English Literature, Oxford University',
      qualification: 'PhD',
      publications: 22,
      department: 'English and Modern European Languages',
      researchAreas: ['Comparative Literature', 'Modern Poetry', 'Cultural Studies']
    },
    {
      id: 'vikram-saxena',
      name: 'Dr. Vikram Saxena',
      designation: 'Professor & Dean, Engineering',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      email: 'vikram.saxena@gbu.ac.in',
      phone: '+91-120-2344207',
      specialization: 'Structural Engineering, Smart Materials',
      experience: '20 years',
      experienceYears: 20,
      education: 'PhD Civil Engineering, IIT Delhi',
      qualification: 'PhD',
      publications: 65,
      department: 'Civil Engineering',
      researchAreas: ['Structural Engineering', 'Smart Materials', 'Earthquake Engineering']
    }
  ];

  const departments = [
    'All Departments',
    'Computer Science & Engineering',
    'Information Technology',
    'Electronics & Communication Engineering',
    'Biotechnology',
    'Management',
    'Law, Justice and Governance',
    'English and Modern European Languages',
    'Civil Engineering',
    'Buddhist Studies & Civilization',
    'Humanities & Social Sciences'
  ];

  const experienceRanges = [
    'All',
    '0-5 years',
    '6-10 years',
    '11-15 years',
    '16+ years'
  ];

  const qualifications = [
    'All',
    'PhD',
    'M.Tech',
    'MBA',
    'LLM'
  ];

  // Filter faculty based on search term and filters
  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.researchAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDepartment = selectedDepartment === 'All Departments' || faculty.department === selectedDepartment;

    const matchesExperience = selectedExperience === 'All' ||
      (selectedExperience === '0-5 years' && faculty.experienceYears <= 5) ||
      (selectedExperience === '6-10 years' && faculty.experienceYears >= 6 && faculty.experienceYears <= 10) ||
      (selectedExperience === '11-15 years' && faculty.experienceYears >= 11 && faculty.experienceYears <= 15) ||
      (selectedExperience === '16+ years' && faculty.experienceYears >= 16);

    const matchesQualification = selectedQualification === 'All' || faculty.qualification === selectedQualification;

    return matchesSearch && matchesDepartment && matchesExperience && matchesQualification;
  });

  const clearFilters = () => {
    setSelectedDepartment('All Departments');
    setSelectedExperience('All');
    setSelectedQualification('All');
    setSearchTerm('');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Faculty Directory</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Meet our distinguished faculty members who are leaders in their fields,
            committed to excellence in teaching, research, and innovation.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">85%</h3>
              <p className="text-gray-600">PhD Qualified</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">2000+</h3>
              <p className="text-gray-600">Research Publications</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">International Collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search faculty by name, department, specialization, or research area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle Button */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>

              {(selectedDepartment !== 'All Departments' || selectedExperience !== 'All' || selectedQualification !== 'All' || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Department Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experience Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {experienceRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Qualification Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                    <select
                      value={selectedQualification}
                      onChange={(e) => setSelectedQualification(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {qualifications.map((qual) => (
                        <option key={qual} value={qual}>{qual}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {filteredFaculty.length} of {facultyMembers.length} faculty members
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredFaculty.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFaculty.map((faculty, index) => (
                <Link
                  key={faculty.id}
                  to={`/academics/faculty/${faculty.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{faculty.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{faculty.designation}</p>

                      <div className="w-full space-y-3 mb-6">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-600 mb-1">Specialization</p>
                          <p className="text-gray-800">{faculty.specialization}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-blue-50 rounded-lg p-3 text-center">
                            <p className="text-lg font-bold text-blue-600">{faculty.experience}</p>
                            <p className="text-xs text-gray-600">Experience</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center">
                            <p className="text-lg font-bold text-green-600">{faculty.publications}</p>
                            <p className="text-xs text-gray-600">Publications</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-600 mb-1">Education</p>
                          <p className="text-sm text-gray-800">{faculty.education}</p>
                        </div>
                      </div>

                      <div className="w-full space-y-2">
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span>{faculty.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{faculty.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Academic Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Are you passionate about teaching and research? Explore career opportunities
            and become part of our distinguished faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              Faculty Positions
            </a>
            <a
              href="/research"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Research Opportunities
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
