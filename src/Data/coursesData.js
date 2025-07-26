// Course data for all schools and programs
export const coursesData = {
  "engineering": {
    "computer-science": {
      id: "cs101",
      title: "B.Tech Computer Science & Engineering",
      subtitle: "Bachelor of Technology in Computer Science & Engineering",
      description: "Comprehensive undergraduate program designed to provide students with strong foundation in computer science principles, programming, software engineering, and emerging technologies.",
      duration: "4 Years",
      level: "Undergraduate",
      mode: "Full-time",
      intake: "120 Students",
      fee: "₹2,50,000 per year",
      rating: 4.8,
      reviews: 1247,
      accreditation: "AICTE Approved, NBA Accredited",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400"
      ],
      highlights: [
        "Industry-aligned curriculum",
        "100% placement assistance",
        "State-of-the-art labs",
        "Expert faculty",
        "Research opportunities",
        "International exposure"
      ],
      eligibility: [
        "10+2 with Physics, Chemistry, Mathematics",
        "Minimum 75% aggregate marks",
        "Valid JEE Main/Advanced score",
        "Age limit: 17-25 years"
      ],
      career_prospects: [
        "Software Engineer",
        "Data Scientist", 
        "System Analyst",
        "Product Manager",
        "Research Scientist",
        "Entrepreneur"
      ],
      curriculum: [
        {
          semester: "Semester 1",
          subjects: ["Mathematics I", "Physics", "Chemistry", "Engineering Graphics", "Programming Fundamentals"]
        },
        {
          semester: "Semester 2", 
          subjects: ["Mathematics II", "Data Structures", "Digital Logic", "Communication Skills", "Environmental Science"]
        },
        {
          semester: "Semester 3",
          subjects: ["Computer Organization", "Database Systems", "Object-Oriented Programming", "Mathematics III", "Economics"]
        },
        {
          semester: "Semester 4",
          subjects: ["Operating Systems", "Software Engineering", "Computer Networks", "Algorithm Analysis", "Statistics"]
        }
      ],
      faculty: [
        {
          name: "Dr. Rajesh Kumar",
          designation: "Professor & Head",
          specialization: "Machine Learning, AI",
          experience: "15 years",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        },
        {
          name: "Dr. Priya Sharma", 
          designation: "Associate Professor",
          specialization: "Data Science, Analytics",
          experience: "12 years",
          image: "https://images.unsplash.com/photo-1494790108755-2616b332b692?w=150"
        }
      ],
      facilities: [
        "Advanced Computing Labs",
        "AI/ML Research Center", 
        "24/7 Library Access",
        "High-speed Internet",
        "Modern Classrooms",
        "Innovation Hub"
      ],
      testimonials: [
        {
          name: "Amit Patel",
          batch: "2023 Graduate",
          company: "Google",
          review: "The program provided excellent foundation in computer science. The faculty support and industry exposure helped me land my dream job.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
        },
        {
          name: "Sneha Reddy",
          batch: "2022 Graduate", 
          company: "Microsoft",
          review: "Outstanding curriculum and research opportunities. The practical approach to learning made complex concepts easy to understand.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80"
        }
      ]
    },
    "information-technology": {
      id: "it101",
      title: "B.Tech Information Technology",
      subtitle: "Bachelor of Technology in Information Technology",
      description: "Modern IT program focusing on software development, networking, cybersecurity, and emerging technologies to prepare students for the digital future.",
      duration: "4 Years",
      level: "Undergraduate",
      mode: "Full-time",
      intake: "90 Students",
      fee: "₹2,30,000 per year",
      rating: 4.7,
      reviews: 892,
      accreditation: "AICTE Approved, NBA Accredited",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
      ],
      highlights: [
        "Cutting-edge technology stack",
        "Industry partnerships",
        "Internship programs",
        "Cybersecurity focus",
        "Cloud computing labs",
        "Project-based learning"
      ],
      eligibility: [
        "10+2 with Physics, Chemistry, Mathematics",
        "Minimum 70% aggregate marks",
        "Valid JEE Main score",
        "Age limit: 17-25 years"
      ],
      career_prospects: [
        "Software Developer",
        "IT Consultant", 
        "Network Administrator",
        "Cybersecurity Analyst",
        "Cloud Architect",
        "IT Project Manager"
      ],
      curriculum: [
        {
          semester: "Semester 1",
          subjects: ["Mathematics I", "Physics", "Chemistry", "Programming Fundamentals", "Digital Logic"]
        },
        {
          semester: "Semester 2", 
          subjects: ["Mathematics II", "Data Structures", "Computer Organization", "Communication Skills", "Environmental Science"]
        }
      ],
      faculty: [
        {
          name: "Dr. Anita Singh",
          designation: "Professor & Head",
          specialization: "Network Security, Cloud Computing",
          experience: "18 years",
          image: "https://images.unsplash.com/photo-1494790108755-2616b332b692?w=150"
        }
      ],
      facilities: [
        "IT Labs with Latest Software",
        "Networking Lab", 
        "Cybersecurity Center",
        "Cloud Computing Infrastructure",
        "Digital Library",
        "Innovation Center"
      ],
      testimonials: [
        {
          name: "Ravi Kumar",
          batch: "2023 Graduate",
          company: "TCS",
          review: "The IT program gave me hands-on experience with latest technologies. Great faculty and excellent placement support.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
        }
      ]
    },
    "electronics-communication": {
      id: "ece101",
      title: "B.Tech Electronics & Communication Engineering",
      subtitle: "Bachelor of Technology in Electronics & Communication Engineering",
      description: "Comprehensive program covering electronics, communication systems, signal processing, and VLSI design preparing students for telecommunications and electronics industry.",
      duration: "4 Years",
      level: "Undergraduate",
      mode: "Full-time",
      intake: "80 Students",
      fee: "₹2,40,000 per year",
      rating: 4.6,
      reviews: 678,
      accreditation: "AICTE Approved, NBA Accredited",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400"
      ],
      highlights: [
        "VLSI design lab",
        "Telecommunications focus",
        "Signal processing expertise",
        "Industry collaborations",
        "Research projects",
        "Modern equipment"
      ],
      eligibility: [
        "10+2 with Physics, Chemistry, Mathematics",
        "Minimum 75% aggregate marks",
        "Valid JEE Main score",
        "Age limit: 17-25 years"
      ],
      career_prospects: [
        "Electronics Engineer",
        "Communication Engineer", 
        "VLSI Designer",
        "Signal Processing Engineer",
        "Telecommunications Specialist",
        "R&D Engineer"
      ],
      curriculum: [
        {
          semester: "Semester 1",
          subjects: ["Mathematics I", "Physics", "Chemistry", "Basic Electronics", "Engineering Graphics"]
        }
      ],
      faculty: [
        {
          name: "Dr. Suresh Patel",
          designation: "Professor & Head",
          specialization: "VLSI Design, Signal Processing",
          experience: "20 years",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        }
      ],
      facilities: [
        "VLSI Design Lab",
        "Communication Systems Lab", 
        "Signal Processing Lab",
        "Microwave Lab",
        "Electronics Workshop",
        "Research Center"
      ],
      testimonials: [
        {
          name: "Priya Sharma",
          batch: "2022 Graduate",
          company: "Intel",
          review: "Excellent ECE program with strong focus on practical learning. The VLSI lab facilities are outstanding.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80"
        }
      ]
    }
  },
  "management": {
    "mba": {
      id: "mba101",
      title: "Master of Business Administration",
      subtitle: "MBA - Strategic Leadership and Management",
      description: "Comprehensive MBA program designed to develop strategic thinking, leadership skills, and business acumen for modern corporate challenges.",
      duration: "2 Years",
      level: "Postgraduate",
      mode: "Full-time",
      intake: "60 Students",
      fee: "₹3,50,000 per year",
      rating: 4.9,
      reviews: 543,
      accreditation: "AICTE Approved, AACSB Accredited",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
      ],
      highlights: [
        "Industry mentorship",
        "Case study methodology",
        "International exposure",
        "Leadership development",
        "Entrepreneurship focus",
        "Corporate partnerships"
      ],
      eligibility: [
        "Bachelor's degree in any discipline",
        "Minimum 50% aggregate marks",
        "Valid CAT/MAT/XAT score",
        "Work experience preferred"
      ],
      career_prospects: [
        "Business Manager",
        "Management Consultant", 
        "Investment Banker",
        "Product Manager",
        "Strategy Analyst",
        "Entrepreneur"
      ],
      curriculum: [
        {
          semester: "Semester 1",
          subjects: ["Managerial Economics", "Organizational Behavior", "Financial Accounting", "Marketing Management", "Business Statistics"]
        }
      ],
      faculty: [
        {
          name: "Dr. Rajesh Gupta",
          designation: "Professor & Dean",
          specialization: "Strategic Management, Leadership",
          experience: "25 years",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        }
      ],
      facilities: [
        "Executive Education Center",
        "Business Simulation Lab", 
        "Case Study Library",
        "Corporate Meeting Rooms",
        "Leadership Development Center",
        "Alumni Network"
      ],
      testimonials: [
        {
          name: "Vikram Singh",
          batch: "2023 Graduate",
          company: "McKinsey & Company",
          review: "Outstanding MBA program with excellent faculty and industry connections. The case study approach really prepared me for consulting.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
        }
      ]
    },
    "bba": {
      id: "bba101",
      title: "Bachelor of Business Administration",
      subtitle: "BBA - Foundation in Business Management",
      description: "Undergraduate business program providing fundamental knowledge in management principles, business operations, and entrepreneurship.",
      duration: "3 Years",
      level: "Undergraduate",
      mode: "Full-time",
      intake: "80 Students",
      fee: "₹1,50,000 per year",
      rating: 4.5,
      reviews: 234,
      accreditation: "UGC Approved",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400"
      ],
      highlights: [
        "Business fundamentals",
        "Internship programs",
        "Entrepreneurship cell",
        "Industry visits",
        "Soft skills development",
        "Placement assistance"
      ],
      eligibility: [
        "10+2 from any stream",
        "Minimum 50% aggregate marks",
        "Entrance test score"
      ],
      career_prospects: [
        "Business Analyst",
        "Marketing Executive", 
        "HR Assistant",
        "Sales Manager",
        "Operations Coordinator",
        "Business Development Associate"
      ],
      curriculum: [
        {
          semester: "Semester 1",
          subjects: ["Principles of Management", "Business Economics", "Business Mathematics", "Computer Applications", "Communication Skills"]
        }
      ],
      faculty: [
        {
          name: "Dr. Meera Jain",
          designation: "Associate Professor",
          specialization: "Marketing, Consumer Behavior",
          experience: "12 years",
          image: "https://images.unsplash.com/photo-1494790108755-2616b332b692?w=150"
        }
      ],
      facilities: [
        "Business Lab",
        "Computer Center", 
        "Library",
        "Seminar Halls",
        "Training Rooms",
        "Student Activity Center"
      ],
      testimonials: [
        {
          name: "Aisha Khan",
          batch: "2023 Graduate",
          company: "HDFC Bank",
          review: "Great foundation program for business studies. Faculty is supportive and curriculum is well-structured.",
          rating: 4,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80"
        }
      ]
    }
  },
  "biotechnology": {
    "bsc-biotech": {
      id: "biotech101",
      title: "B.Sc Biotechnology",
      subtitle: "Bachelor of Science in Biotechnology",
      description: "Comprehensive biotechnology program covering molecular biology, genetics, bioprocessing, and bioinformatics for modern biotechnology applications.",
      duration: "3 Years",
      level: "Undergraduate",
      mode: "Full-time",
      intake: "50 Students",
      fee: "₹1,80,000 per year",
      rating: 4.4,
      reviews: 156,
      accreditation: "UGC Approved",
      image: "https://images.unsplash.com/photo-1582719371630-dd5b96b5e5e9?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1582719371630-dd5b96b5e5e9?w=400"
      ],
      highlights: [
        "Modern biotechnology labs",
        "Research opportunities",
        "Industry partnerships",
        "Bioinformatics focus",
        "Practical training",
        "Career guidance"
      ],
      eligibility: [
        "10+2 with Physics, Chemistry, Biology",
        "Minimum 60% aggregate marks",
        "Entrance test score"
      ],
      career_prospects: [
        "Biotechnologist",
        "Research Associate", 
        "Quality Control Analyst",
        "Bioinformatics Specialist",
        "Lab Technician",
        "Product Development Executive"
      ],
      curriculum: [
        {
          semester: "Semester 1",
          subjects: ["Cell Biology", "Chemistry", "Mathematics", "Physics", "English"]
        }
      ],
      faculty: [
        {
          name: "Dr. Sunita Verma",
          designation: "Professor & Head",
          specialization: "Molecular Biology, Genetics",
          experience: "16 years",
          image: "https://images.unsplash.com/photo-1494790108755-2616b332b692?w=150"
        }
      ],
      facilities: [
        "Biotechnology Labs",
        "Molecular Biology Lab", 
        "Tissue Culture Lab",
        "Bioinformatics Center",
        "Research Library",
        "Instrumentation Center"
      ],
      testimonials: [
        {
          name: "Rohit Sharma",
          batch: "2022 Graduate",
          company: "Biocon",
          review: "Excellent biotechnology program with hands-on lab experience. Faculty guidance helped me secure a research position.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
        }
      ]
    }
  },
  "law": {
    "llb": {
      id: "law101",
      title: "Bachelor of Laws (LLB)",
      subtitle: "3-Year LLB Program",
      description: "Comprehensive law program covering constitutional law, criminal law, civil law, and legal practice with emphasis on advocacy and judicial processes.",
      duration: "3 Years",
      level: "Undergraduate",
      mode: "Full-time",
      intake: "60 Students",
      fee: "₹1,20,000 per year",
      rating: 4.3,
      reviews: 189,
      accreditation: "BCI Approved",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400"
      ],
      highlights: [
        "Moot court competitions",
        "Legal aid clinic",
        "Internship programs",
        "Experienced faculty",
        "Library with legal databases",
        "Career counseling"
      ],
      eligibility: [
        "10+2 from any stream",
        "Minimum 45% aggregate marks",
        "Entrance test (CLAT/University entrance)"
      ],
      career_prospects: [
        "Advocate",
        "Legal Advisor", 
        "Corporate Lawyer",
        "Judge",
        "Legal Consultant",
        "Public Prosecutor"
      ],
      curriculum: [
        {
          semester: "Semester 1",
          subjects: ["Legal Methods", "Political Science", "Economics", "Sociology", "English"]
        }
      ],
      faculty: [
        {
          name: "Dr. Vinod Kumar",
          designation: "Professor & Dean",
          specialization: "Constitutional Law, Human Rights",
          experience: "22 years",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        }
      ],
      facilities: [
        "Moot Court Hall",
        "Law Library", 
        "Legal Aid Clinic",
        "Seminar Halls",
        "Computer Lab",
        "Research Center"
      ],
      testimonials: [
        {
          name: "Aditi Sharma",
          batch: "2022 Graduate",
          company: "High Court",
          review: "Excellent law program with practical exposure through moot courts and internships. Faculty guidance was exceptional.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80"
        }
      ]
    }
  },
  "humanities": {
    "ba-english": {
      id: "eng101",
      title: "Bachelor of Arts in English",
      subtitle: "BA English Literature & Language",
      description: "Comprehensive program in English literature, language studies, creative writing, and communication skills with focus on critical thinking and analysis.",
      duration: "3 Years",
      level: "Undergraduate",
      mode: "Full-time",
      intake: "40 Students",
      fee: "₹80,000 per year",
      rating: 4.2,
      reviews: 123,
      accreditation: "UGC Approved",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
      ],
      highlights: [
        "Literary criticism focus",
        "Creative writing workshops",
        "Language lab",
        "Cultural events",
        "Research opportunities",
        "Communication skills"
      ],
      eligibility: [
        "10+2 from any stream",
        "Minimum 50% aggregate marks",
        "English proficiency"
      ],
      career_prospects: [
        "Content Writer",
        "Journalist", 
        "Teacher",
        "Editor",
        "Translator",
        "Public Relations Officer"
      ],
      curriculum: [
        {
          semester: "Semester 1",
          subjects: ["English Literature", "Grammar & Composition", "History", "Political Science", "Philosophy"]
        }
      ],
      faculty: [
        {
          name: "Dr. Sarah Johnson",
          designation: "Associate Professor",
          specialization: "Modern Literature, Creative Writing",
          experience: "15 years",
          image: "https://images.unsplash.com/photo-1494790108755-2616b332b692?w=150"
        }
      ],
      facilities: [
        "Language Laboratory",
        "Digital Library", 
        "Seminar Rooms",
        "Creative Writing Studio",
        "Audio-Visual Room",
        "Cultural Center"
      ],
      testimonials: [
        {
          name: "Rahul Gupta",
          batch: "2023 Graduate",
          company: "Times of India",
          review: "Great program for developing writing and communication skills. The faculty encourages creative thinking and critical analysis.",
          rating: 4,
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
        }
      ]
    }
  }
};

// Helper function to get course data by school and course
export const getCourseData = (school, course) => {
  return coursesData[school]?.[course] || null;
};

// Helper function to get all courses for a school
export const getSchoolCourses = (school) => {
  return coursesData[school] || {};
};

// Helper function to get all schools
export const getAllSchools = () => {
  return Object.keys(coursesData);
};

// Helper function to search courses
export const searchCourses = (searchTerm) => {
  const results = [];
  Object.entries(coursesData).forEach(([school, courses]) => {
    Object.entries(courses).forEach(([courseKey, courseData]) => {
      if (courseData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          courseData.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({
          school,
          courseKey,
          ...courseData
        });
      }
    });
  });
  return results;
};
