
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
    id: 'rahul-mehta',
    name: 'Dr. Rahul Mehta',
    designation: 'Assistant Professor, Computer Science',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face',
    email: 'rahul.mehta@gbu.ac.in',
    phone: '+91-120-2344204',
    specialization: 'Artificial Intelligence, Data Mining',
    experience: '5 years',
    experienceYears: 5,
    education: 'PhD Computer Science, IIT Delhi',
    qualification: 'PhD',
    publications: 18,
    department: 'Computer Science',
    researchAreas: ['AI', 'Machine Learning', 'Data Mining']
  },
  {
    id: 'ananya-verma',
    name: 'Dr. Ananya Verma',
    designation: 'Assistant Professor, Psychology',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face',
    email: 'ananya.verma@gbu.ac.in',
    phone: '+91-120-2344205',
    specialization: 'Cognitive Psychology, Behavioral Neuroscience',
    experience: '4 years',
    experienceYears: 4,
    education: 'PhD Psychology, Delhi University',
    qualification: 'PhD',
    publications: 12,
    department: 'Psychology',
    researchAreas: ['Cognition', 'Behavioral Science', 'Mental Health']
  },
  {
    id: 'deepak-sharma',
    name: 'Dr. Deepak Sharma',
    designation: 'Assistant Professor, Mechanical Engineering',
    image: 'https://images.unsplash.com/photo-1613145993482-6ab8efed7b3e?w=300&h=300&fit=crop&crop=face',
    email: 'deepak.sharma@gbu.ac.in',
    phone: '+91-120-2344206',
    specialization: 'Robotics, CAD/CAM',
    experience: '6 years',
    experienceYears: 6,
    education: 'PhD Mechanical Engineering, IIT Kanpur',
    qualification: 'PhD',
    publications: 22,
    department: 'Mechanical Engineering',
    researchAreas: ['Automation', 'Robotics', 'Product Design']
  },
  {
    id: 'nikita-das',
    name: 'Dr. Nikita Das',
    designation: 'Assistant Professor, Environmental Science',
    image: 'https://images.unsplash.com/photo-1614284975992-0fba78b4fe05?w=300&h=300&fit=crop&crop=face',
    email: 'nikita.das@gbu.ac.in',
    phone: '+91-120-2344207',
    specialization: 'Climate Change, Waste Management',
    experience: '3 years',
    experienceYears: 3,
    education: 'PhD Environmental Science, BHU',
    qualification: 'PhD',
    publications: 10,
    department: 'Environmental Science',
    researchAreas: ['Climate Policy', 'Sustainability', 'Waste Management']
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


            
{/* Filter + Search Section */}
<section className="py-10 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name, department, specialization, or research area"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Department Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Experience Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
            >
              {experienceRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          {/* Qualification Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
            <select
              value={selectedQualification}
              onChange={(e) => setSelectedQualification(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
            >
              {qualifications.map((qual) => (
                <option key={qual} value={qual}>{qual}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        {(selectedDepartment !== 'All Departments' || selectedExperience !== 'All' || selectedQualification !== 'All' || searchTerm) && (
          <div className="flex justify-end mt-6">
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition"
            >
              <X className="w-4 h-4" />
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600 text-right">
        Showing <span className="font-semibold text-gray-800">{filteredFaculty.length}</span> of {facultyMembers.length} faculty members
      </div>
    </div>
  </div>
</section>


      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          {["Professor", "Associate Professor", "Assistant Professor"].map((role) => {
            const group = filteredFaculty.filter((f) => f.designation.toLowerCase().includes(role.toLowerCase()));
            if (group.length === 0) return null;

            return (
              <div key={role}>
                <div className="flex justify-center mb-8">
                  <h2 className="inline-block text-3xl font-extrabold text-black bg-clip-text bg-white tracking-tight shadow-lg px-8 py-2 rounded-xl border-b-4 border-blue-200 text-center transition-all duration-300">
                    {role}s
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {group.map((faculty, index) => (
                    <Link
                      key={faculty.id}
                      to={`/academics/faculty/${faculty.id}`}
                      className="group bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300"
                    >
                      <div className="p-8 flex flex-col items-center text-center">
                        <div className="relative mb-4">
                          <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                          />
                          <span className="absolute bottom-0 right-0 bg-gradient-to-tr from-blue-600 to-teal-400 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold">
                            {faculty.qualification}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition">{faculty.name}</h3>
                        <p className="text-base text-blue-500 font-medium mb-2">{faculty.designation}</p>

                        <div className="mt-4 w-full text-sm text-gray-700 space-y-4">
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-xl shadow-sm">
                            <strong className="text-gray-600 block text-xs mb-1">Specialization</strong>
                            <span className="font-medium">{faculty.specialization}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-100 p-3 rounded-xl text-center shadow">
                              <p className="text-blue-700 font-bold text-lg">{faculty.experience}</p>
                              <p className="text-xs text-gray-500">Experience</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-xl text-center shadow">
                              <p className="text-green-600 font-bold text-lg">{faculty.publications}</p>
                              <p className="text-xs text-gray-500">Publications</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-xl shadow-sm">
                            <strong className="text-gray-600 block text-xs mb-1">Education</strong>
                            <span className="font-medium">{faculty.education}</span>
                          </div>
                        </div>

                        <div className="mt-6 space-y-2 text-sm text-gray-600 w-full">
                          <div className="flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4 text-blue-500" />
                            <span className="truncate">{faculty.email}</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4 text-green-500" />
                            <span>{faculty.phone}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

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
