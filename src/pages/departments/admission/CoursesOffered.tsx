import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '@/components/ui/badg';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Star,
  Award,
  Building,
  Globe,
  Microscope,
  Gavel,
  Briefcase,
  Monitor,
  Heart,
  Brain,
  Cpu
} from 'lucide-react';
import { CardDescription } from '../../components/ui/Card';


 const schoolCategories = {
    'Engineering': {
      icon: Cpu,
      color: 'from-blue-600 to-blue-700',
      image: 'photo-1461749280684-dccba630e2f6',
      programs: {
        'Undergraduate': [
          {
            name: "Bachelor of Technology (B.Tech)",
            specializations: ["Computer Science", "Electronics", "Mechanical", "Civil", "Chemical"],
            duration: "4 years",
            seats: 240,
            eligibility: "12th with PCM, JEE Main",
            highlights: ["Industry partnerships", "Internship guaranteed", "Placement assistance"]
          }
        ],
        'Postgraduate': [
          {
            name: "Master of Technology (M.Tech)",
            specializations: ["Computer Science", "Electronics", "Mechanical", "Civil"],
            duration: "2 years",
            seats: 80,
            eligibility: "B.Tech with GATE score",
            highlights: ["Research projects", "Industry collaboration", "Thesis work"]
          }
        ],
        'Doctoral': [
          {
            name: "Doctor of Philosophy (Ph.D) in Engineering",
            specializations: ["Computer Science", "Electronics", "Mechanical", "Civil", "Chemical"],
            duration: "3-5 years",
            seats: 20,
            eligibility: "M.Tech with valid research proposal",
            highlights: ["Research excellence", "International publications", "Industry collaboration"]
          }
        ]
      }
    },
    'Information & Communication Technology': {
      icon: Monitor,
      color: 'from-green-600 to-green-700',
      image: 'photo-1487058792275-0ad4aaf24ca7',
      programs: {
        'Undergraduate': [
          {
            name: "Bachelor of Computer Applications (BCA)",
            specializations: ["Software Development", "Web Technology", "Mobile Apps", "Data Science"],
            duration: "3 years",
            seats: 120,
            eligibility: "12th with Mathematics",
            highlights: ["Latest technology", "Industry projects", "Skill certification"]
          }
        ],
        'Postgraduate': [
          {
            name: "Master of Computer Applications (MCA)",
            specializations: ["Software Engineering", "AI & ML", "Cybersecurity", "Cloud Computing"],
            duration: "2 years",
            seats: 60,
            eligibility: "Bachelor's with Mathematics",
            highlights: ["Advanced programming", "Research opportunities", "Industry mentorship"]
          }
        ],
        'Doctoral': [
          {
            name: "Doctor of Philosophy (Ph.D) in ICT",
            specializations: ["Computer Science", "Information Systems", "Cybersecurity", "AI & ML"],
            duration: "3-5 years",
            seats: 15,
            eligibility: "MCA/M.Tech with research background",
            highlights: ["Cutting-edge research", "Tech innovation", "Industry partnerships"]
          }
        ]
      }
    },
    'Management': {
      icon: Briefcase,
      color: 'from-purple-600 to-purple-700',
      image: 'photo-1581091226825-a6a2a5aee158',
      programs: {
        'Undergraduate': [
          {
            name: "Bachelor of Business Administration (BBA)",
            specializations: ["General Management", "Finance", "Marketing", "International Business"],
            duration: "3 years",
            seats: 80,
            eligibility: "12th from any stream",
            highlights: ["Business acumen", "Leadership skills", "Industry exposure"]
          }
        ],
        'Postgraduate': [
          {
            name: "Master of Business Administration (MBA)",
            specializations: ["Finance", "Marketing", "HR", "Operations", "International Business"],
            duration: "2 years",
            seats: 120,
            eligibility: "Bachelor's degree with CAT/MAT",
            highlights: ["Industry mentorship", "Global exposure", "Leadership development"]
          }
        ],
        'Doctoral': [
          {
            name: "Doctor of Philosophy (Ph.D) in Management",
            specializations: ["Strategic Management", "Finance", "Marketing", "Operations", "HR"],
            duration: "3-5 years",
            seats: 12,
            eligibility: "MBA with research aptitude",
            highlights: ["Management research", "Policy development", "Consultancy projects"]
          }
        ]
      }
    },
    'Biotechnology': {
      icon: Microscope,
      color: 'from-teal-600 to-teal-700',
      image: 'photo-1485833077593-4278bba3f11f',
      programs: {
        'Undergraduate': [
          {
            name: "Bachelor of Science in Biotechnology",
            specializations: ["Medical Biotech", "Agricultural Biotech", "Industrial Biotech", "Environmental Biotech"],
            duration: "3 years",
            seats: 60,
            eligibility: "12th with PCB/PCM",
            highlights: ["Research labs", "Industry internships", "Innovation projects"]
          }
        ],
        'Postgraduate': [
          {
            name: "Master of Science in Biotechnology",
            specializations: ["Molecular Biology", "Genetic Engineering", "Bioinformatics", "Bioprocessing"],
            duration: "2 years",
            seats: 30,
            eligibility: "B.Sc in relevant field",
            highlights: ["Advanced research", "Publication opportunities", "Industry collaboration"]
          }
        ],
        'Doctoral': [
          {
            name: "Doctor of Philosophy (Ph.D) in Biotechnology",
            specializations: ["Molecular Biology", "Genetic Engineering", "Bioinformatics", "Bioprocessing"],
            duration: "3-5 years",
            seats: 10,
            eligibility: "M.Sc in Biotechnology with research experience",
            highlights: ["Research excellence", "International collaborations", "Patent development"]
          }
        ]
      }
    },
    'Law, Justice and Governance': {
      icon: Gavel,
      color: 'from-red-600 to-red-700',
      image: 'photo-1527576539890-dfa815648363',
      programs: {
        'Undergraduate': [
          {
            name: "Bachelor of Laws (LLB)",
            specializations: ["Constitutional Law", "Criminal Law", "Corporate Law", "International Law"],
            duration: "3 years",
            seats: 80,
            eligibility: "Bachelor's degree in any field",
            highlights: ["Moot court", "Legal clinic", "Practical training"]
          }
        ],
        'Postgraduate': [
          {
            name: "Master of Laws (LLM)",
            specializations: ["Human Rights", "Corporate Law", "International Law", "Constitutional Law"],
            duration: "1 year",
            seats: 40,
            eligibility: "LLB degree",
            highlights: ["Specialized expertise", "Research opportunities", "Professional development"]
          }
        ],
        'Doctoral': [
          {
            name: "Doctor of Philosophy (Ph.D) in Law",
            specializations: ["Constitutional Law", "International Law", "Corporate Law", "Human Rights"],
            duration: "3-5 years",
            seats: 8,
            eligibility: "LLM with research proposal",
            highlights: ["Legal research", "Policy analysis", "International recognition"]
          }
        ]
      }
    },
    'Humanities & Social Sciences': {
      icon: BookOpen,
      color: 'from-orange-600 to-orange-700',
      image: 'photo-1493397212122-2b85dda8106b',
      programs: {
        'Undergraduate': [
          {
            name: "Bachelor of Arts (B.A)",
            specializations: ["English", "History", "Political Science", "Economics", "Psychology"],
            duration: "3 years",
            seats: 100,
            eligibility: "12th from any stream",
            highlights: ["Liberal arts approach", "Critical thinking", "Communication skills"]
          }
        ],
        'Postgraduate': [
          {
            name: "Master of Arts (M.A)",
            specializations: ["English", "History", "Political Science", "Economics"],
            duration: "2 years",
            seats: 40,
            eligibility: "Bachelor's in relevant field",
            highlights: ["Research methodology", "Critical analysis", "Academic writing"]
          }
        ],
        'Doctoral': [
          {
            name: "Doctor of Philosophy (Ph.D) in Humanities",
            specializations: ["Literature", "History", "Political Science", "Economics", "Philosophy"],
            duration: "3-5 years",
            seats: 15,
            eligibility: "M.A with research background",
            highlights: ["Academic research", "Cultural studies", "International publications"]
          }
        ]
      }
    },
    'Buddhist Studies & Civilization': {
      icon: Brain,
      color: 'from-amber-600 to-amber-700',
      image: 'photo-1472396961693-142e6e269027',
      programs: {
        'Undergraduate': [
          {
            name: "Bachelor in Buddhist Studies",
            specializations: ["Buddhist Philosophy", "Buddhist History", "Meditation Studies", "Buddhist Art"],
            duration: "3 years",
            seats: 40,
            eligibility: "12th from any stream",
            highlights: ["Ancient wisdom", "Cultural heritage", "Spiritual development"]
          }
        ],
        'Postgraduate': [
          {
            name: "Master in Buddhist Studies",
            specializations: ["Advanced Philosophy", "Comparative Religion", "Buddhist Psychology", "Manuscript Studies"],
            duration: "2 years",
            seats: 20,
            eligibility: "Bachelor's in relevant field",
            highlights: ["Deep research", "Cultural preservation", "Scholarly publications"]
          }
        ],
        'Doctoral': [
          {
            name: "Doctor of Philosophy (Ph.D) in Buddhist Studies",
            specializations: ["Buddhist Philosophy", "Buddhist History", "Comparative Religion", "Cultural Studies"],
            duration: "3-5 years",
            seats: 5,
            eligibility: "M.A in Buddhist Studies",
            highlights: ["Ancient text research", "Cultural preservation", "International collaboration"]
          }
        ]
      }
    },
    'Vocational Studies & Applied Sciences': {
      icon: Heart,
      color: 'from-indigo-600 to-indigo-700',
      image: 'photo-1498050108023-c5249f4df085',
      programs: {
        'Undergraduate': [
          {
            name: "Diploma in Applied Sciences",
            specializations: ["Food Technology", "Environmental Science", "Laboratory Technology", "Quality Control"],
            duration: "2 years",
            seats: 80,
            eligibility: "12th with Science",
            highlights: ["Practical skills", "Industry ready", "Job oriented"]
          }
        ],
        'Postgraduate': [
          {
            name: "Certificate in Vocational Studies",
            specializations: ["Digital Marketing", "Web Development", "Graphic Design", "Data Entry"],
            duration: "1 year",
            seats: 100,
            eligibility: "12th from any stream",
            highlights: ["Skill based", "Quick employment", "Professional training"]
          }
        ],
        'Doctoral': []
      }
    }
  };

const CoursesOffered = () => {
  const CourseCard = ({ course }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg">{course.name}</span>
          <Badge variant="secondary">{course.duration}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Specializations:</h4>
            <div className="flex flex-wrap gap-2">
              {course.specializations.map((spec, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>{course.seats} seats</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-green-600" />
              <span>{course.duration}</span>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Eligibility:</h4>
            <p className="text-sm text-gray-600">{course.eligibility}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
            <ul className="space-y-1">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <Star className="w-3 h-3 text-yellow-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ProgramSection = ({ programs, schoolName, schoolData }) => {
    const IconComponent = schoolData.icon;
    return (
      <div className="space-y-8">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={`https://images.unsplash.com/${schoolData.image}?auto=format&fit=crop&w=1200&h=300`}
            alt={schoolName}
            className="w-full h-48 object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${schoolData.color} opacity-80`} />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <IconComponent className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">{schoolName}</h2>
            </div>
          </div>
        </div>

        <Tabs defaultValue="Undergraduate" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="Undergraduate">Undergraduate</TabsTrigger>
            <TabsTrigger value="Postgraduate">Postgraduate</TabsTrigger>
            <TabsTrigger value="Doctoral">Doctoral</TabsTrigger>
          </TabsList>

          {Object.entries(programs).map(([level, courses]) => (
            <TabsContent key={level} value={level} className="space-y-6">
              {courses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <CardContent>
                    <div className="text-gray-500">
                      <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">No {level} programs available in this school</p>
                      <p className="text-sm mt-2">Please check other program levels or contact admissions</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Courses Offered</h1>
          <p className="text-xl text-gray-600">
            Explore our diverse academic programs across multiple schools and degree levels
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
              <p className="text-gray-600">Schools</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Programs</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Total Seats</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Placement Rate</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="Engineering" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            {Object.keys(schoolCategories).map((school) => (
              <TabsTrigger key={school} value={school} className="text-xs lg:text-sm">
                {school.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(schoolCategories).map(([schoolName, schoolData]) => (
            <TabsContent key={schoolName} value={schoolName} className="space-y-6">
              <ProgramSection programs={schoolData.programs} schoolName={schoolName} schoolData={schoolData} />
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg mb-6">Join thousands of students who have started their journey with us</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesOffered;
