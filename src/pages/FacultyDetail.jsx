import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Mail,
  Phone,
  MapPin,
  Award
} from 'lucide-react';

  const facultyData = {
    'rajesh-kumar': {
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head, Computer Science & Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      email: 'rajesh.kumar@gbu.ac.in',
      phone: '+91-120-2344200',
      office: 'Room 301, ICT Building',
      specialization: 'Artificial Intelligence, Machine Learning',
      experience: '15 years',
      education: 'PhD Computer Science, IIT Delhi',
      publications: 45,
      department: 'Computer Science & Engineering',
      bio: 'Dr. Rajesh Kumar is a distinguished professor with over 15 years of experience in computer science research and education. He has made significant contributions to the fields of artificial intelligence and machine learning, with a focus on deep learning algorithms and their applications in real-world problems.',
      qualifications: [
        'PhD in Computer Science, IIT Delhi (2008)',
        'M.Tech in Computer Science, IIT Kanpur (2004)',
        'B.Tech in Computer Engineering, Delhi University (2002)'
      ],
      researchInterests: [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Data Mining'
      ],
      courses: [
        'CS501 - Advanced Algorithms',
        'CS605 - Machine Learning',
        'CS701 - Artificial Intelligence',
        'CS801 - Deep Learning'
      ],
      achievements: [
        'Best Teacher Award 2023',
        'Excellence in Research Award 2022',
        'Young Scientist Award 2018',
        'IEEE Senior Member',
        'ACM Distinguished Scientist'
      ],
      recentPublications: [
        {
          title: 'Deep Learning Approaches for Medical Image Analysis',
          journal: 'IEEE Transactions on Medical Imaging',
          year: 2024
        },
        {
          title: 'Federated Learning in Healthcare: A Comprehensive Survey',
          journal: 'Nature Machine Intelligence',
          year: 2023
        },
        {
          title: 'Transformer Networks for Time Series Forecasting',
          journal: 'ACM Computing Surveys',
          year: 2023
        }
      ],
      projects: [
        'AI-driven Medical Diagnosis System (Funded by DST)',
        'Smart City Traffic Management using ML (Funded by MeitY)',
        'Predictive Analytics for Agriculture (Industry Collaboration)'
      ]
    },
    'priya-sharma': {
      name: 'Dr. Priya Sharma',
      designation: 'Professor & Head, Information Technology',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      email: 'priya.sharma@gbu.ac.in',
      phone: '+91-120-2344201',
      office: 'Room 205, ICT Building',
      specialization: 'Database Systems, Cloud Computing',
      experience: '12 years',
      education: 'PhD Information Technology, IIT Bombay',
      publications: 38,
      department: 'Information Technology',
      bio: 'Dr. Priya Sharma is a renowned expert in database systems and cloud computing with extensive research experience in distributed systems and data management.',
      qualifications: [
        'PhD in Information Technology, IIT Bombay (2011)',
        'M.Tech in Information Technology, NIT Trichy (2007)',
        'B.Tech in Computer Science, Anna University (2005)'
      ],
      researchInterests: [
        'Database Systems',
        'Cloud Computing',
        'Distributed Systems',
        'Big Data Analytics',
        'NoSQL Databases',
        'Data Security'
      ],
      courses: [
        'IT502 - Database Management Systems',
        'IT603 - Cloud Computing',
        'IT704 - Big Data Analytics',
        'IT805 - Distributed Systems'
      ],
      achievements: [
        'Outstanding Faculty Award 2023',
        'Research Excellence Award 2021',
        'Best Paper Award at IEEE Conference 2020',
        'Google Research Grant Recipient',
        'Microsoft Academic Alliance Partner'
      ],
      recentPublications: [
        {
          title: 'Scalable Database Solutions for Cloud Environments',
          journal: 'ACM Transactions on Database Systems',
          year: 2024
        },
        {
          title: 'Security Challenges in Multi-tenant Cloud Databases',
          journal: 'IEEE Cloud Computing',
          year: 2023
        }
      ],
      projects: [
        'Cloud-based Healthcare Data Management System',
        'Secure Multi-tenant Database Architecture',
        'Real-time Analytics for IoT Data'
      ]
    },
    'rahul-verma': {
      name: 'Dr. Rahul Verma',
      designation: 'Professor & Dean, School of Management',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      email: 'rahul.verma@gbu.ac.in',
      phone: '+91-120-2344205',
      office: 'Room 101, Management Block',
      specialization: 'Strategic Management, Leadership',
      experience: '18 years',
      education: 'PhD Management, IIM Ahmedabad',
      publications: 52,
      department: 'Management',
      bio: 'Dr. Rahul Verma is a distinguished management expert with extensive experience in strategic planning and organizational leadership.',
      qualifications: [
        'PhD in Management, IIM Ahmedabad (2006)',
        'MBA in Strategic Management, IIM Calcutta (2002)',
        'B.Com, Delhi University (2000)'
      ],
      researchInterests: [
        'Strategic Management',
        'Leadership Development',
        'Organizational Behavior',
        'Corporate Governance',
        'Innovation Management',
        'Digital Transformation'
      ],
      courses: [
        'MGT501 - Strategic Management',
        'MGT602 - Leadership & Team Building',
        'MGT703 - Corporate Governance',
        'MGT804 - Innovation Management'
      ],
      achievements: [
        'Management Educator of the Year 2023',
        'Excellence in Leadership Award 2022',
        'Best Case Study Award 2021',
        'Fulbright Scholar',
        'Harvard Business School Executive Program'
      ],
      recentPublications: [
        {
          title: 'Digital Transformation in Indian SMEs',
          journal: 'Harvard Business Review India',
          year: 2024
        },
        {
          title: 'Leadership Challenges in Post-Pandemic Era',
          journal: 'MIT Sloan Management Review',
          year: 2023
        }
      ],
      projects: [
        'Digital Leadership Development Program',
        'SME Growth Strategy Initiative',
        'Corporate Innovation Lab'
      ]
    },
    'meera-patel': {
      name: 'Dr. Meera Patel',
      designation: 'Professor & Dean, School of Biotechnology',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face',
      email: 'meera.patel@gbu.ac.in',
      phone: '+91-120-2344200',
      office: 'Room 301, Biotech Block',
      specialization: 'Molecular Biology, Genetics',
      experience: '16 years',
      education: 'PhD Biotechnology, IISc Bangalore',
      publications: 48,
      department: 'Biotechnology',
      bio: 'Dr. Meera Patel is a leading researcher in molecular biology and genetics with groundbreaking contributions to biotechnology research.',
      qualifications: [
        'PhD in Biotechnology, IISc Bangalore (2008)',
        'M.Sc in Biotechnology, Jawaharlal Nehru University (2004)',
        'B.Sc in Life Sciences, University of Delhi (2002)'
      ],
      researchInterests: [
        'Molecular Biology',
        'Genetics',
        'Bioinformatics',
        'Gene Therapy',
        'Synthetic Biology',
        'Biomedical Research'
      ],
      courses: [
        'BT501 - Molecular Biology',
        'BT602 - Genetic Engineering',
        'BT703 - Bioinformatics',
        'BT804 - Gene Therapy'
      ],
      achievements: [
        'National Bioscience Award 2023',
        'Young Scientist Award 2019',
        'Best Research Paper Award 2021',
        'DBT Research Grant',
        'International Collaboration with NIH'
      ],
      recentPublications: [
        {
          title: 'CRISPR-Cas9 Applications in Cancer Therapy',
          journal: 'Nature Biotechnology',
          year: 2024
        },
        {
          title: 'Synthetic Biology Approaches for Drug Discovery',
          journal: 'Cell',
          year: 2023
        }
      ],
      projects: [
        'Gene Therapy for Genetic Disorders',
        'Cancer Biomarker Discovery',
        'Synthetic Biology for Biofuel Production'
      ]
    },
    'amit-singh': {
      name: 'Dr. Amit Singh',
      designation: 'Professor & Head, Electronics & Communication Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      email: 'amit.singh@gbu.ac.in',
      phone: '+91-120-2344202',
      office: 'Room 402, ICT Building',
      specialization: 'VLSI Design, Embedded Systems',
      experience: '14 years',
      education: 'PhD Electronics & Communication, IIT Delhi',
      publications: 42,
      department: 'Electronics & Communication Engineering',
      bio: 'Dr. Amit Singh is a distinguished professor with expertise in VLSI design and embedded systems. He has contributed significantly to the advancement of semiconductor technology and electronic system design.',
      qualifications: [
        'PhD in Electronics & Communication, IIT Delhi (2009)',
        'M.Tech in VLSI Design, IIT Bombay (2005)',
        'B.Tech in Electronics Engineering, Delhi University (2003)'
      ],
      researchInterests: [
        'VLSI Design',
        'Embedded Systems',
        'Digital Signal Processing',
        'Microelectronics',
        'IoT Technologies',
        'Communication Systems'
      ],
      courses: [
        'ECE501 - Digital Electronics',
        'ECE603 - VLSI Design',
        'ECE705 - Embedded Systems',
        'ECE807 - Advanced Communication Systems'
      ],
      achievements: [
        'Best Faculty Award 2023',
        'Research Excellence Award 2022',
        'IEEE Senior Member',
        'VLSI Society of India Award',
        'Outstanding Researcher Award 2020'
      ],
      recentPublications: [
        {
          title: 'Low Power VLSI Design Techniques for IoT Applications',
          journal: 'IEEE Transactions on VLSI Systems',
          year: 2024
        },
        {
          title: 'Advanced Embedded System Design for Smart Cities',
          journal: 'ACM Transactions on Embedded Computing Systems',
          year: 2023
        }
      ],
      projects: [
        'Smart Grid Communication System (Funded by DST)',
        'IoT-based Environmental Monitoring (Industry Collaboration)',
        'Low Power VLSI Design for Wearables'
      ]
    },
    'sneha-gupta': {
      name: 'Dr. Sneha Gupta',
      designation: 'Professor, Department of Civil Engineering',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      email: 'sneha.gupta@gbu.ac.in',
      phone: '+91-120-2344203',
      office: 'Room 201, Engineering Block',
      specialization: 'Structural Engineering, Earthquake Engineering',
      experience: '13 years',
      education: 'PhD Civil Engineering, IIT Roorkee',
      publications: 36,
      department: 'Civil Engineering',
      bio: 'Dr. Sneha Gupta is a renowned structural engineer with extensive research experience in earthquake-resistant design and sustainable construction practices. Her work has contributed significantly to safer building practices in seismic zones.',
      qualifications: [
        'PhD in Civil Engineering, IIT Roorkee (2010)',
        'M.Tech in Structural Engineering, IIT Delhi (2006)',
        'B.Tech in Civil Engineering, NIT Kurukshetra (2004)'
      ],
      researchInterests: [
        'Structural Engineering',
        'Earthquake Engineering',
        'Sustainable Construction',
        'Concrete Technology',
        'Seismic Design',
        'Building Information Modeling'
      ],
      courses: [
        'CE501 - Structural Analysis',
        'CE603 - Earthquake Engineering',
        'CE705 - Advanced Concrete Design',
        'CE807 - Sustainable Construction'
      ],
      achievements: [
        'Best Researcher Award 2023',
        'Women in Engineering Excellence Award 2022',
        'ISTE Best Paper Award 2021',
        'Young Engineer Award 2019',
        'ASCE International Member'
      ],
      recentPublications: [
        {
          title: 'Seismic Performance of Green Building Technologies',
          journal: 'Journal of Structural Engineering',
          year: 2024
        },
        {
          title: 'Sustainable Concrete Mix Design for High-Rise Buildings',
          journal: 'Construction and Building Materials',
          year: 2023
        }
      ],
      projects: [
        'Earthquake-Resistant Design Guidelines (Funded by NDMA)',
        'Sustainable Infrastructure Development (Industry Partnership)',
        'Smart Building Technologies for Seismic Zones'
      ]
    },
    'meera-jain': {
      name: 'Dr. Meera Jain',
      designation: 'Professor & Head, Constitutional Law Department',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      email: 'meera.jain@gbu.ac.in',
      phone: '+91-120-2344204',
      office: 'Room 301, Law Block',
      specialization: 'Constitutional Law, Human Rights',
      experience: '17 years',
      education: 'PhD Law, National Law University Delhi',
      publications: 55,
      department: 'Constitutional Law',
      bio: 'Dr. Meera Jain is a distinguished constitutional law expert with extensive experience in human rights advocacy and legal education. She has been instrumental in several landmark constitutional cases and policy formulations.',
      qualifications: [
        'PhD in Law, National Law University Delhi (2007)',
        'LLM in Constitutional Law, Delhi University (2003)',
        'LLB, Campus Law Centre, Delhi University (2001)',
        'BA Political Science, Miranda House, Delhi University (1999)'
      ],
      researchInterests: [
        'Constitutional Law',
        'Human Rights',
        'Administrative Law',
        'Gender Justice',
        'Public Interest Litigation',
        'Judicial Review'
      ],
      courses: [
        'LAW501 - Constitutional Law I',
        'LAW603 - Human Rights Law',
        'LAW705 - Administrative Law',
        'LAW807 - Public Interest Litigation'
      ],
      achievements: [
        'National Law Teacher Award 2023',
        'Outstanding Contribution to Legal Education 2022',
        'Human Rights Advocacy Award 2021',
        'Constitutional Law Excellence Award 2020',
        'Supreme Court Bar Association Recognition'
      ],
      recentPublications: [
        {
          title: 'Digital Rights and Constitutional Freedoms in India',
          journal: 'Indian Law Review',
          year: 2024
        },
        {
          title: 'Gender Justice and Constitutional Interpretation',
          journal: 'Journal of Constitutional Law',
          year: 2023
        },
        {
          title: 'Public Interest Litigation: A Tool for Social Justice',
          journal: 'Supreme Court Cases',
          year: 2023
        }
      ],
      projects: [
        'Constitutional Rights Awareness Program (Funded by UGC)',
        'Legal Aid and Human Rights Initiative',
        'Women Rights and Constitutional Law Research'
      ]
    }
  };

const FacultyDetail = () => {
  const { id } = useParams();
  const faculty = facultyData[id];

  if (!faculty) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl text-gray-600">Faculty member not found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-xl"
              />
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{faculty.name}</h1>
                <p className="text-xl text-blue-100 mb-4">{faculty.designation}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{faculty.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{faculty.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{faculty.office}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{faculty.experience}</div>
                <div className="text-gray-600">Experience</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{faculty.publications}</div>
                <div className="text-gray-600">Publications</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">{faculty.courses.length}</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">{faculty.projects.length}</div>
                <div className="text-gray-600">Active Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biography */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Biography</h2>
                <p className="text-gray-600 leading-relaxed">{faculty.bio}</p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
                <div className="space-y-3">
                  {faculty.qualifications.map((qual, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{qual}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Publications */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Publications</h2>
                <div className="space-y-4">
                  {faculty.recentPublications.map((pub, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-semibold text-gray-800">{pub.title}</h3>
                      <p className="text-sm text-gray-600">{pub.journal}, {pub.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Projects */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Research Projects</h2>
                <div className="space-y-3">
                  {faculty.projects.map((project, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Research Interests */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {faculty.researchInterests.map((interest, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Courses Taught */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Courses Taught</h3>
                <div className="space-y-2">
                  {faculty.courses.map((course, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-gray-700">
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards & Achievements */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Awards & Achievements</h3>
                <div className="space-y-3">
                  {faculty.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-4 h-4 text-yellow-600" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{faculty.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{faculty.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{faculty.office}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyDetail;
