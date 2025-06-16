import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Users, GraduationCap, Award, Mail, Phone, MapPin, BookOpen, Star } from 'lucide-react';

const FacultyPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [expandedHierarchy, setExpandedHierarchy] = useState({});

  // Faculty data organized by department and hierarchy
  const facultyData = {
    cse: {
      name: "Computer Science & Engineering",
      shortName: "CSE",
      color: "from-blue-500 to-blue-600",
      lightColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      faculty: {
        professor: [
          {
            id: 1,
            name: "Prof. Sanjay Kumar Sharma",
            title: "Professor",
            department: "Department of Information Technology",
            image: "/api/placeholder/80/80",
            specialization: "Data Mining, Machine Learning",
            email: "sanjay.sharma@usit.ac.in",
            phone: "+91-11-25000000",
            experience: "15+ years",
            publications: "50+ papers"
          }
        ],
        associateProfessor: [
          {
            id: 2,
            name: "Dr. Arpit Bhardwaj",
            title: "Associate Professor and Dean(I/C)",
            department: "Department of Computer Science & Engineering",
            image: "/api/placeholder/80/80",
            specialization: "Software Engineering, AI",
            email: "arpit.bhardwaj@usit.ac.in",
            phone: "+91-11-25000001",
            experience: "12+ years",
            publications: "35+ papers"
          }
        ],
        assistantProfessor: [
          {
            id: 3,
            name: "Dr. Arun Solanki",
            title: "Assistant Professor and HoD",
            department: "Department of Computer Science & Engineering",
            image: "/api/placeholder/80/80",
            specialization: "IoT, Cloud Computing",
            email: "arun.solanki@usit.ac.in",
            phone: "+91-11-25000002",
            experience: "8+ years",
            publications: "25+ papers"
          },
          {
            id: 6,
            name: "Dr. Aarti Gautam Dinker",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "/api/placeholder/80/80",
            specialization: "Computer Networks, Cybersecurity",
            email: "aarti.dinker@usit.ac.in",
            phone: "+91-11-25000005",
            experience: "6+ years",
            publications: "20+ papers"
          }
        ]
      }
    },
    it: {
      name: "Information Technology",
      shortName: "IT",
      color: "from-emerald-500 to-emerald-600",
      lightColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      faculty: {
        professor: [],
        associateProfessor: [],
        assistantProfessor: [
          {
            id: 4,
            name: "Dr. Neeta Singh",
            title: "Assistant Professor and HoD",
            department: "Department of Information Technology",
            image: "/api/placeholder/80/80",
            specialization: "Database Systems, Web Technologies",
            email: "neeta.singh@usit.ac.in",
            phone: "+91-11-25000003",
            experience: "10+ years",
            publications: "30+ papers"
          }
        ]
      }
    },
    ece: {
      name: "Electronics & Communication Engineering",
      shortName: "ECE",
      color: "from-purple-500 to-purple-600",
      lightColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      faculty: {
        professor: [],
        associateProfessor: [],
        assistantProfessor: [
          {
            id: 5,
            name: "Dr. Vidushi Sharma",
            title: "Assistant Professor and HoD",
            department: "Department of Electronics and Communication Engineering",
            image: "/api/placeholder/80/80",
            specialization: "Signal Processing, Communication Systems",
            email: "vidushi.sharma@usit.ac.in",
            phone: "+91-11-25000004",
            experience: "9+ years",
            publications: "28+ papers"
          }
        ]
      }
    }
  };

  const hierarchyOrder = [
    { key: 'professor', label: 'Professors', icon: Award, color: 'text-amber-600' },
    { key: 'associateProfessor', label: 'Associate Professors', icon: GraduationCap, color: 'text-blue-600' },
    { key: 'assistantProfessor', label: 'Assistant Professors', icon: Users, color: 'text-green-600' }
  ];

  const toggleHierarchy = (deptKey, hierarchyKey) => {
    const key = `${deptKey}-${hierarchyKey}`;
    setExpandedHierarchy(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const FacultyCard = ({ faculty }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
      {/* Card Header with Gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400"></div>

      <div className="p-6">
        <div className="flex items-start space-x-4">
          {/* Profile Image with Ring */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 p-0.5">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
              {faculty.name}
            </h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {faculty.title}
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                <span className="truncate">{faculty.department}</span>
              </div>

              <div className="flex items-center text-blue-600">
                <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                <span className="truncate">{faculty.specialization}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-4 text-xs text-gray-500">
            <div className="flex items-center">
              <Star className="w-3 h-3 mr-1 text-yellow-400" />
              {faculty.experience}
            </div>
            <div className="flex items-center">
              <BookOpen className="w-3 h-3 mr-1 text-blue-400" />
              {faculty.publications}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
            <Mail className="w-4 h-4 mr-2 text-gray-400" />
            <span className="truncate">{faculty.email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
            <Phone className="w-4 h-4 mr-2 text-gray-400" />
            {faculty.phone}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-6 bg-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          View Full Profile
        </button>
      </div>
    </div>
  );

  const renderDepartmentFaculty = (deptKey, deptData) => {
    return (
      <div key={deptKey} className="mb-12">
        {/* Department Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-800 p-8 mb-8 shadow-xl">
          {/* Background Image with Opacity */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Technology Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{deptData.name}</h2>
                <p className="text-gray-300 text-lg">{deptData.shortName} Department</p>
              </div>
              <div className="text-6xl text-white/30 font-bold">
                {deptData.shortName}
              </div>
            </div>
          </div>
        </div>

        {/* Hierarchy Sections */}
        {hierarchyOrder.map(({ key: hierarchyKey, label, icon: Icon, color }) => {
          const facultyList = deptData.faculty[hierarchyKey] || [];
          if (facultyList.length === 0) return null;

          const expandKey = `${deptKey}-${hierarchyKey}`;
          const isExpanded = expandedHierarchy[expandKey] !== false;

          return (
            <div key={hierarchyKey} className="mb-8">
              <button
                onClick={() => toggleHierarchy(deptKey, hierarchyKey)}
                className="flex items-center w-full text-left p-4 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 mb-6 shadow-md hover:shadow-lg border border-gray-100"
              >
                <div className="flex items-center flex-1">
                  {isExpanded ?
                    <ChevronDown className="w-6 h-6 mr-3 text-gray-400 transition-transform duration-300" /> :
                    <ChevronRight className="w-6 h-6 mr-3 text-gray-400 transition-transform duration-300" />
                  }
                  <Icon className={`w-6 h-6 mr-3 ${color}`} />
                  <span className="text-xl font-bold text-gray-800">{label}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {facultyList.length} {facultyList.length === 1 ? 'Member' : 'Members'}
                  </span>
                </div>
              </button>

              {isExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in slide-in-from-top-4 duration-500">
                  {facultyList.map(faculty => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const getAllFaculty = () => {
    let allFaculty = [];
    Object.values(facultyData).forEach(dept => {
      Object.values(dept.faculty).forEach(hierarchyGroup => {
        allFaculty = [...allFaculty, ...hierarchyGroup];
      });
    });
    return allFaculty;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gray-900">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="University Campus"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Faculty Members
              <span className="block text-blues-400">
                USICT
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet our world-class faculty members who are dedicated to excellence in teaching, research, and innovation.
              Our accomplished professors bring years of industry and academic experience to shape the next generation of technology leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Department Filter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedDepartment('all')}
            className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              selectedDepartment === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-blue-500 text-white shadow-blue-500/25'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            <span className="flex items-center">
              All Departments
              <span className="ml-3 px-3 py-1 bg-white/20 rounded-full text-sm">
                {getAllFaculty().length}
              </span>
            </span>
          </button>

          {Object.entries(facultyData).map(([key, dept]) => {
            const totalFaculty = Object.values(dept.faculty).flat().length;
            return (
              <button
                key={key}
                onClick={() => setSelectedDepartment(key)}
                className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  selectedDepartment === key
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-500/25'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <span className="flex items-center">
                  {dept.shortName}
                  <span className="ml-3 px-3 py-1 bg-white/20 rounded-full text-sm">
                    {totalFaculty}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Faculty Content */}
        <div className="space-y-12">
          {selectedDepartment === 'all' ? (
            Object.entries(facultyData).map(([key, dept]) => renderDepartmentFaculty(key, dept))
          ) : (
            facultyData[selectedDepartment] && renderDepartmentFaculty(selectedDepartment, facultyData[selectedDepartment])
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
