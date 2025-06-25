import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Award, Users, CheckCircle, GraduationCap, Star } from 'lucide-react';

const iconMap = {
  Target, Award, BookOpen, Users, GraduationCap, Star
};

const CBCSFramework = () => {
  const [heroData, setHeroData] = useState(null);
  const [whatData, setWhatData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [grading, setGrading] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [explore, setExplore] = useState(null);

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          heroRes,
          whatRes,
          courseRes,
          gradingRes,
          benefitsRes,
          exploreRes
        ] = await Promise.all([
          fetch(`${BASE}/academic/cbcs/hero/`),
          fetch(`${BASE}/academic/cbcs/what/`),
          fetch(`${BASE}/academic/cbcs/courses/`),
          fetch(`${BASE}/academic/cbcs/grading/`),
          fetch(`${BASE}/academic/cbcs/benefits/`),
          fetch(`${BASE}/academic/cbcs/explore/`)
        ]);

        const [
          heroData,
          whatData,
          courseData,
          gradingData,
          benefitsData,
          exploreData
        ] = await Promise.all([
          heroRes.json(),
          whatRes.json(),
          courseRes.json(),
          gradingRes.json(),
          benefitsRes.json(),
          exploreRes.json()
        ]);

        setHeroData(heroData[0]);
        setWhatData(whatData);
        setCourses(courseData);
        setGrading(gradingData);
        setBenefits(benefitsData);
        setExplore(exploreData[0]);
      } catch (error) {
        console.error('Error fetching CBCS data:', error);
      }
    };

    fetchData();
  }, [BASE]);

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
              <div key={index} className={`rounded-xl p-6 border-l-4 border-blue-500 bg-white hover:shadow-lg transition-all animate-fade-in`}>
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
                <div key={index} className={`grid grid-cols-5 text-center py-3 border-b border-gray-200 border-solid${grade.status === 'Fail' ? 'bg-red-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
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
