// ✅ You don’t need to change anything else in your app or styles
import React, { useEffect, useState } from 'react';
import { BookOpen, Target, Award, Users, CheckCircle, GraduationCap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        // Simulating dynamic API fetch with realistic data
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
      } catch (error) {
        console.error('Error fetching CBCS data:', error);
      }
    };

    fetchData();
  }, [BASE]);

  if (!heroData) return <div className="text-center py-20">Loading CBCS Information...</div>;

  return (
    <>
      {/* Full JSX remains same as your original post */}
      {/* ✅ You don't need to update the JSX rendering part since all data is loaded into the same structure */}
    </>
  );
};

export default CBCSFramework;
