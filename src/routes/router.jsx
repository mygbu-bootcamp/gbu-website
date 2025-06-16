import Home from "../pages/Home.jsx";
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InternshipProgrammes from "../pages/Placement/InternshipProgrammes.jsx";
import CampusRecruiters from "../pages/Placement/CampusRecruiters.jsx";
import PlacementStatistics from "../pages/Placement/PlacementStatistics.jsx";
import PlacementBrochure from "../pages/Placement/PlacementBrochure.jsx";
import TrainingCareerServices from "../pages/Placement/TrainingCareerServices.jsx";

const AcademicCalendar = React.lazy(() => import('../pages/AcademicCalendar'));
const CBCSFramework = React.lazy(() => import('../pages/CBCSFramework'));
const CentersOfExcellence = React.lazy(() => import('../pages/CentersOfExcellence'));
const Faculty = React.lazy(() => import('../pages/Faculty'));
const FacultyDetail = React.lazy(() => import('../pages/FacultyDetail'));
const InternationalCollaboration = React.lazy(() => import('../pages/InternationalCollaboration'));
const NewsEvents = React.lazy(() => import('../pages/NewsEvents'));
const ReportsPublications = React.lazy(() => import('../pages/ReportsPublications'));
const Schools = React.lazy(() => import('../pages/Schools'));

const Disclosures = lazy(() => import('../pages/Disclosures'));
const Policies = lazy(() => import('../pages/Policies'));
const Vision = lazy(() => import('../pages/Vison'));
const MediaCoverage = lazy(() => import('../pages/MediaCoverage'));
const Stat = lazy(() => import('../pages/Stat'));
const Chancellor = lazy(() => import('../pages/Chancellor'));
const Governance = lazy(() => import('../pages/Governance'));
const ViceChancellor = lazy(() => import('../pages/ViceChancellor'));

const FundedProjects = lazy(() => import('../pages/FundedProjects'));
const StartUp = lazy(() => import('../pages/StartUp'));
const Index = lazy(() => import('../pages/Index'));
const Publications = lazy(() => import('../pages/Publications'));
const Innovations = lazy(() => import('../pages/Innovations'));
const ResearchCenters = lazy(() => import('../pages/ResearchCenters'));

// ICT School components (lazy loaded) - Update these paths according to your project structure
const ICTPage = lazy(() => import('../pages/departments/ICTPage'));
const ICTFaculty = lazy(() => import('../pages/departments/Faculty'));
const CSE = lazy(() => import('../pages/departments/CSE'));
const IT = lazy(() => import('../pages/departments/IT'));
const ECE = lazy(() => import('../pages/departments/ECE'));
const ICTContact = lazy(() => import('../pages/departments/Contact'));
const ResearchArea = lazy(() => import('../pages/departments/Research_area'));
const ResearchProjects = lazy(() => import('../pages/departments/Reasearch_project'));
const ResearchScholars = lazy(() => import('../pages/departments/Reasearch_Scholar'));
const TrainingConsultancy = lazy(() => import('../pages/departments/Training'));
const Patents = lazy(() => import('../pages/departments/Patent'));


export default function AppRouter() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <Routes>
        {/* About Us Routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/about-us/vision-mission" element={<Vision />} />
        <Route path="/about-us/chancellor-message" element={<Chancellor />} />
        <Route path="/about-us/vice-chancellor-message" element={<ViceChancellor />} />
        <Route path="/about-us/governance-committees" element={<Governance />} />
        <Route path="/about-us/strategic-perspective" element={<Stat />} />
        <Route path="/about-us/policies-statutes-rti" element={<Policies />} />
        <Route path="/about-us/mandatory-disclosures" element={<Disclosures />} />
        <Route path="/about-us/media-coverage" element={<MediaCoverage />} />

        {/* Academics */}
        <Route path="/academics" element={<h1>Academics</h1>} />
        <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/academics/cbcs-framework" element={<CBCSFramework />} />
        <Route path="/academics/centers-of-excellence" element={<CentersOfExcellence />} />
        <Route path="/academics/faculty" element={<Faculty />} />
        <Route path="/academics/faculty/:id" element={<FacultyDetail />} />
        <Route path="/academics/international-collaboration" element={<InternationalCollaboration />} />
        <Route path="/academics/news-events" element={<NewsEvents />} />
        <Route path="/academics/reports-publications" element={<ReportsPublications />} />
        <Route path="/academics/schools" element={<Schools />} />

        {/* Schools Routes - ICT School Integration */}
        <Route path="/schools/ict" element={<ICTPage />} />
        <Route path="/schools/ict/faculty" element={<ICTFaculty />} />
        
        {/* ICT School - About Section */}
        <Route path="/schools/ict/about/coeidrone" element={<h1>COE Drone - Coming Soon</h1>} />
        <Route path="/schools/ict/about/coeiraem" element={<h1>COE IRAEM - Coming Soon</h1>} />
        <Route path="/schools/ict/about/board" element={<h1>Advisory Board - Coming Soon</h1>} />
        <Route path="/schools/ict/about/staff" element={<h1>Staff - Coming Soon</h1>} />
        <Route path="/schools/ict/about/labs" element={<h1>Labs - Coming Soon</h1>} />
        <Route path="/schools/ict/about/activities" element={<h1>Activities - Coming Soon</h1>} />
        
        {/* ICT School - Departments */}
        <Route path="/schools/ict/departments/cse" element={<CSE />} />
        <Route path="/schools/ict/departments/it" element={<IT />} />
        <Route path="/schools/ict/departments/ece" element={<ECE />} />
        
        {/* ICT School - Research */}
        <Route path="/schools/ict/research/profile" element={<ResearchArea />} />
        <Route path="/schools/ict/research/consultancy" element={<TrainingConsultancy />} />
        <Route path="/schools/ict/research/scholars" element={<ResearchScholars />} />
        <Route path="/schools/ict/research/projects" element={<ResearchProjects />} />
        <Route path="/schools/ict/research/patents" element={<Patents />} />
        
        {/* ICT School - Contact */}
        <Route path="/schools/ict/contact" element={<ICTContact />} />

        {/* Admissions Routes */}
        <Route path="/admissions/admission-process" element={<h1>Admission Process</h1>} />
        <Route path="/admissions/courses-offered" element={<h1>Courses Offered (UG | PG | PhD)</h1>} />
        <Route path="/admissions/eligibility-reservation" element={<h1>Eligibility & Reservation</h1>} />
        <Route path="/admissions/fee-structure-prospectus" element={<h1>Fee Structure & Prospectus</h1>} />
        <Route path="/admissions/international-admissions" element={<h1>International Admissions</h1>} />

        {/* Research Routes */}
        {/* <Route path="/research/research-centers" element={<h1>Research Centers and Labs</h1>} />

        WHOSOEVER COMMENTED THIS CODE, DELETE THE EXTRA, USELESS CODE AFTER TESTING FOR BETTER CODE QUALITY

        <Route path="/research/publications-patents" element={<h1>Publications and Patents</h1>} />
        <Route path="/research/incubation-innovation" element={<h1>Incubation and Innovation</h1>} />
        <Route path="/research/startups" element={<h1>Startups</h1>} />
        <Route path="/research/funded-projects" element={<h1>Funded Projects</h1>} />
        <Route path="/research/irp-cell" element={<h1>IRP Cell</h1>} />
        <Route path="/research/research-highlights" element={<h1>Research Highlights</h1>} /> */}

        <Route path="/research/research-centers" element={<ResearchCenters />} />
        <Route path="/research/publications-patents" element={<Publications />} />
        <Route path="/research/incubation-innovation" element={<Innovations />} />
        <Route path="/research/startups" element={<StartUp />} />
        <Route path="/research/funded-projects" element={<FundedProjects />} />
        <Route path="/research/irp-cell" element={<Index />} />
        <Route path="/research/research-highlights" element={<Index />} />

        {/* Campus Life Routes */}
        <Route path="/campus-life/hostel-facilities" element={<h1>Hostel Facilities</h1>} />
        <Route path="/campus-life/sports-fitness" element={<h1>Sports & Fitness</h1>} />
        <Route path="/campus-life/cultural-activities" element={<h1>Cultural Activities</h1>} />
        <Route path="/campus-life/clubs-societies" element={<h1>Clubs & Societies</h1>} />
        <Route path="/campus-life/health-wellness" element={<h1>Health & Wellness</h1>} />
        <Route path="/campus-life/student-support-services" element={<h1>Student Support Services</h1>} />
        <Route path="/campus-life/campus-events" element={<h1>Campus Events</h1>} />

        {/* Announcements Routes */}
        <Route path="/announcements/news-updates" element={<h1>News & Updates</h1>} />
        <Route path="/announcements/event-calendar" element={<h1>Event Calendar</h1>} />
        <Route path="/announcements/notices" element={<h1>Notices</h1>} />
        <Route path="/announcements/press-releases" element={<h1>Press Releases</h1>} />
        <Route path="/announcements/media-gallery" element={<h1>Media Gallery</h1>} />
        <Route path="/announcements/newsletter" element={<h1>Newsletter</h1>} />

        {/* Placements Routes */}
        <Route path="/placements/placement-process" element={<PlacementBrochure/>} />
        <Route path="/placements/top-recruiters" element={<CampusRecruiters/>} />
        <Route path="/placements/internship-opportunities" element={<InternshipProgrammes/>} />
        <Route path="/placements/career-counseling" element={<TrainingCareerServices/>} />
        <Route path="/placements/placement-statistics" element={<PlacementStatistics/>} />

        {/* Alumni Routes */}
        <Route path="/alumni/alumni-network" element={<h1>Alumni Network</h1>} />
        <Route path="/alumni/alumni-events" element={<h1>Alumni Events</h1>} />
        <Route path="/alumni/alumni-achievements" element={<h1>Alumni Achievements</h1>} />
        <Route path="/alumni/become-mentor" element={<h1>Become a Mentor</h1>} />
      </Routes>
    </Suspense>
  );
}
