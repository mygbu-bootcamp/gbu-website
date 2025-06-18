
import React from 'react';

import { Link } from 'react-router-dom';
import { BookOpen, Target, Award, Users, CheckCircle, ArrowRight, GraduationCap, Star } from 'lucide-react';

const CBCSFramework = () => {
  const cbcsFeatures = [
    {
      title: 'Choice Based Learning',
      description: 'Students can choose subjects based on their interests and career goals.',
      icon: Target,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Credit System',
      description: 'Structured credit accumulation system ensuring comprehensive learning.',
      icon: Award,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Flexible Curriculum',
      description: 'Interdisciplinary approach allowing students to explore diverse fields.',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Student Mobility',
      description: 'Enhanced mobility between institutions and programs.',
      icon: Users,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const courseCategories = [
    {
      category: 'Core Courses (CC)',
      description: 'Compulsory courses that students must complete in their chosen discipline.',
      creditRange: '12-16 credits per semester',
      example: 'Programming Fundamentals, Database Systems',
      color: 'border-blue-500 bg-blue-50'
    },
    {
      category: 'Elective Courses (EC)',
      description: 'Optional courses within the discipline for specialization.',
      creditRange: '4-6 credits per semester',
      example: 'Machine Learning, Web Development',
      color: 'border-green-500 bg-green-50'
    },
    {
      category: 'Discipline Specific Elective (DSE)',
      description: 'Specialized courses offering in-depth knowledge in specific areas.',
      creditRange: '6 credits per semester',
      example: 'Advanced Algorithms, System Security',
      color: 'border-purple-500 bg-purple-50'
    },
    {
      category: 'Generic Elective (GE)',
      description: 'Courses from other disciplines to provide interdisciplinary exposure.',
      creditRange: '4-6 credits per semester',
      example: 'Environmental Science, Business Management',
      color: 'border-orange-500 bg-orange-50'
    },
    {
      category: 'Ability Enhancement Courses (AEC)',
      description: 'Courses to enhance communication and analytical skills.',
      creditRange: '2-4 credits per semester',
      example: 'English Communication, Logical Reasoning',
      color: 'border-pink-500 bg-pink-50'
    }
  ];

  const gradingSystem = [
    { grade: 'O', points: '10', percentage: '90-100%', description: 'Outstanding' },
    { grade: 'A+', points: '9', percentage: '80-89%', description: 'Excellent' },
    { grade: 'A', points: '8', percentage: '70-79%', description: 'Very Good' },
    { grade: 'B+', points: '7', percentage: '60-69%', description: 'Good' },
    { grade: 'B', points: '6', percentage: '50-59%', description: 'Above Average' },
    { grade: 'C', points: '5', percentage: '40-49%', description: 'Average' },
    { grade: 'P', points: '4', percentage: '35-39%', description: 'Pass' },
    { grade: 'F', points: '0', percentage: 'Below 35%', description: 'Fail' }
  ];

  const benefits = [
    'Enhanced learning outcomes through choice-based education',
    'Better preparation for global employment opportunities',
    'Increased student satisfaction and engagement',
    'Improved academic flexibility and mobility',
    'Standardized evaluation and grading system',
    'Integration of skill development with academic learning'
  ];

  return (
<>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">CBCS Curriculum Framework</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto animate-fade-in">
            Choice Based Credit System - A learner-centric approach providing flexibility
            and choice to students for a holistic educational experience.
          </p>
        </div>
      </section>

            {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">20+</h3>
              <p className="text-gray-600">Credit Points per Semester</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">200+</h3>
              <p className="text-gray-600">Elective Courses</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10</h3>
              <p className="text-gray-600">Point Grading Scale</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Choice Flexibility</p>
            </div>
          </div>
        </div>
      </section>


      {/* CBCS Overview */}
      <section className="pb-16 pt-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What is CBCS?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The Choice Based Credit System (CBCS) is a flexible system of learning that permits students
              to choose from a wide range of courses from the prescribed courses comprising core, elective/minor
              or skill-based courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cbcsFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center animate-fade-in transition-shadow duration-300 hover:shadow-2xl shadow-md"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Categories</h2>
            <p className="text-xl text-gray-600">Understanding different types of courses in CBCS framework</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseCategories.map((course, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border-l-4 ${course.color} hover:shadow-lg transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{course.category}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Credit Range:</span>
                    <span className="text-blue-600 font-semibold">{course.creditRange}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-medium text-gray-700">Examples:</span>
                    <span className="text-gray-600 text-right">{course.example}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grading System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Grading System</h2>
            <p className="text-xl text-gray-600">10-point grading scale ensuring fair and transparent evaluation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-5 bg-blue-600 text-white font-semibold text-center py-4">
                <div>Grade</div>
                <div>Grade Points</div>
                <div>Percentage</div>
                <div>Description</div>
                <div>Status</div>
              </div>
              {gradingSystem.map((grade, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-5 text-center py-3 border-b border-gray-200 animate-fade-in ${
                    grade.grade === 'F' ? 'bg-red-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="font-bold text-lg">{grade.grade}</div>
                  <div className="font-semibold text-blue-600">{grade.points}</div>
                  <div>{grade.percentage}</div>
                  <div className="font-medium">{grade.description}</div>
                  <div>
                    {grade.grade === 'F' ? (
                      <span className="text-red-600 font-semibold">Fail</span>
                    ) : (
                      <span className="text-green-600 font-semibold">Pass</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of CBCS</h2>
            <p className="text-xl text-gray-600">Advantages of the Choice Based Credit System</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore CBCS Programs</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Discover how CBCS framework empowers you to design your academic journey
            according to your interests and career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link
              to="/academics/schools"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link> */}
            <Link
              to="/admissions/process"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Admission Process
            </Link>
          </div>
        </div>
      </section>
</>
  );
};

export default CBCSFramework;
