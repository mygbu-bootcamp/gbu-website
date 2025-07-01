import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Award, Users, CheckCircle, GraduationCap, Star } from 'lucide-react';

const CBCSFramework = () => {
  const [heroData, setHeroData] = useState(null);
  const [whatData, setWhatData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [grading, setGrading] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [explore, setExplore] = useState(null);

  useEffect(() => {
    // Simulated API fetch (with realistic data from GBU)
    setHeroData({
      title: 'Choice Based Credit System (CBCS)',
      description:
        'Implemented across all programs at Gautam Buddha University, CBCS enhances academic flexibility, allowing students to pursue interdisciplinary learning at their own pace.',
      background_color: '#4B0082',
      credits_coount: 24,
      elective_courses: 6,
      grading_scale: '10-point',
      flexebility: 'High'
    });

    setWhatData([
      {
        title: 'What is CBCS?',
        description: 'CBCS allows students to choose inter-disciplinary, intra-disciplinary, and skill-based courses. It promotes learner-centric education.',
        card_title: 'Interdisciplinary Courses',
        card_desc: 'Enables students to take courses across various schools like Management, IT, Biotechnology, and Buddhist Studies.'
      },
      {
        card_title: 'Flexible Curriculum',
        card_desc: 'Students can progress at their own pace through electives and core courses offered across semesters.'
      },
      {
        card_title: 'Skill Enhancement',
        card_desc: 'Mandatory skill-based and value-added courses help build employability and soft skills.'
      },
      {
        card_title: 'Academic Autonomy',
        card_desc: 'Students can design part of their curriculum through elective and open courses offered across programs.'
      }
    ]);

    setCourses([
      {
        card_title: 'Core Courses (CC)',
        card_desc: 'Compulsory subjects providing foundational knowledge within the student’s discipline.',
        credit_range: '4–6',
        examples: 'Data Structures, Microeconomics, Sanskrit Grammar'
      },
      {
        card_title: 'Elective Courses (EC)',
        card_desc: 'Courses selected by students from a prescribed list based on interest or specialization.',
        credit_range: '2–4',
        examples: 'Machine Learning, Gender Studies, Digital Marketing'
      },
      {
        card_title: 'Ability Enhancement Courses (AEC)',
        card_desc: 'Focus on communication, environmental studies, and analytical skills.',
        credit_range: '2–3',
        examples: 'Environmental Studies, English Communication'
      },
      {
        card_title: 'Skill Enhancement Courses (SEC)',
        card_desc: 'Hands-on/practical courses to boost professional competencies.',
        credit_range: '2–3',
        examples: 'Web Design, Bioinformatics Lab, Media Production'
      }
    ]);

    setGrading([
      { grade: 'O', points: 10, percentage_range: '90–100%', description: 'Outstanding', status: 'Pass' },
      { grade: 'A+', points: 9, percentage_range: '80–89%', description: 'Excellent', status: 'Pass' },
      { grade: 'A', points: 8, percentage_range: '70–79%', description: 'Very Good', status: 'Pass' },
      { grade: 'B+', points: 7, percentage_range: '60–69%', description: 'Good', status: 'Pass' },
      { grade: 'B', points: 6, percentage_range: '50–59%', description: 'Average', status: 'Pass' },
      { grade: 'C', points: 5, percentage_range: '40–49%', description: 'Pass', status: 'Pass' },
      { grade: 'F', points: 0, percentage_range: '< 40%', description: 'Fail', status: 'Fail' }
    ]);

    setBenefits([
      { card_desc: 'Promotes student mobility across disciplines and institutions.' },
      { card_desc: 'Encourages continuous learning with flexibility in course selection.' },
      { card_desc: 'Enhances employability through skill-based and industry-oriented electives.' },
      { card_desc: 'Facilitates credit transfer and academic benchmarking across universities.' },
      { card_desc: 'Supports lifelong learning and knowledge expansion.' },
      { card_desc: 'Reduces academic stress with self-paced learning.' }
    ]);

    setExplore({
      title: 'Explore CBCS at GBU',
      description: 'Discover how CBCS empowers students at Gautam Buddha University with the freedom to shape their own academic journey.',
      background_color: '#1E3A8A',
      button_text: 'Learn More',
      url: 'https://www.gbu.ac.in/AcademicStructure.aspx'
    });
  }, []);

  if (!heroData) return <div className="text-center py-20">Loading CBCS Information...</div>;

  return (
    <>
      {/* Hero Section */}
      <section className="text-white py-20" style={{ backgroundColor: heroData.background_color }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{heroData.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{heroData.description}</p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Credit Points per Semester", value: heroData.credits_coount, icon: GraduationCap, color: "bg-blue-100", iconColor: "text-blue-600" },
              { label: "Elective Courses", value: heroData.elective_courses, icon: BookOpen, color: "bg-green-100", iconColor: "text-green-600" },
              { label: "Point Grading Scale", value: heroData.grading_scale, icon: Star, color: "bg-purple-100", iconColor: "text-purple-600" },
              { label: "Choice Flexibility", value: heroData.flexebility, icon: Target, color: "bg-orange-100", iconColor: "text-orange-600" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is CBCS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{whatData[0]?.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{whatData[0]?.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition-shadow animate-fade-in">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.card_title}</h3>
                <p className="text-gray-600">{item.card_desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Categories</h2>
            <p className="text-xl text-gray-600">Understanding different types of courses in CBCS framework</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="rounded-xl p-6 border-l-4 border-blue-500 bg-white hover:shadow-lg transition-all animate-fade-in">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{course.card_title}</h3>
                <p className="text-gray-600 mb-4">{course.card_desc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Credit Range:</span>
                    <span className="text-blue-600 font-semibold">{course.credit_range}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-medium text-gray-700">Examples:</span>
                    <span className="text-gray-600 text-right">{course.examples}</span>
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
                <div>Points</div>
                <div>Percentage</div>
                <div>Description</div>
                <div>Status</div>
              </div>
              {grading.map((grade, index) => (
                <div key={index} className={`grid grid-cols-5 text-center py-3 border-b border-gray-200 ${grade.status === 'Fail' ? 'bg-red-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="font-bold text-lg">{grade.grade}</div>
                  <div className="font-semibold text-blue-600">{grade.points}</div>
                  <div>{grade.percentage_range}</div>
                  <div className="font-medium">{grade.description}</div>
                  <div>
                    <span className={`font-semibold ${grade.status === 'Fail' ? 'text-red-600' : 'text-green-600'}`}>
                      {grade.status}
                    </span>
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
            {benefits.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all animate-fade-in">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{item.card_desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {explore && (
        <section className="py-16 text-white" style={{ backgroundColor: explore.background_color }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{explore.title}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">{explore.description}</p>
            <a
              href={explore.url}
              className="border border-white border-solid text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {explore.button_text}
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default CBCSFramework;
