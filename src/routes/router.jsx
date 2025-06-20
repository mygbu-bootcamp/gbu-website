import Home from "../pages/Aboutus/Home.jsx";
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InternshipProgrammes from "../pages/Placement/InternshipProgrammes.jsx";
import CampusRecruiters from "../pages/Placement/CampusRecruiters.jsx";
import PlacementStatistics from "../pages/Placement/PlacementStatistics.jsx";
import PlacementBrochure from "../pages/Placement/PlacementBrochure.jsx";
import TrainingCareerServices from "../pages/Placement/TrainingCareerServices.jsx";
import AdmissionProcess from "../pages/Admission/AdmissionProcess.jsx";
import CoursesOffered from "../pages/Admission/CoursesOffered.jsx";
import EligibilityReservation from "../pages/Admission/EligibilityReservation.jsx";
import FeeStructure from "../pages/Admission/FeeStructure.jsx";
import InternationalAdmissions from "../pages/Admission/InternationalAdmissions.jsx";
import NewsNotifications from "../pages/Announcements/NewsNotifications.jsx";
import EventsCalendar from "../pages/Announcements/EventsCalendar.jsx";
import NewsLetter from "../pages/Announcements/NewsLetter.jsx";
import MediaGallery from "../pages/Announcements/MediaGallery.jsx"
const MediaCoverage = lazy(() => import('../pages/Announcements/MediaCoverage.jsx'));
const Stat = lazy(() => import('../pages/Announcements/Stat.jsx'));
import AlumniNetwork from "../pages/Alumni/AlumniNetwork.jsx";
import EventsReunions from "../pages/Alumni/EventsReunions.jsx";
import AlumniRegistration from "../pages/Alumni/AlumniRegistration.jsx";

import HostelDining from "../pages/campusLife/HostelDining.jsx";
import SportsCultural from "../pages/campusLife/SportsCultural.jsx";
import ClubsCouncils from "../pages/campusLife/ClubsCouncils.jsx";
import HealthWellness from "../pages/campusLife/HealthWellness.jsx";
import UpcomingEvents from "../pages/campusLife/UpcomingEvents.jsx";
import VirtualTour from "../pages/campusLife/VirtualTour.jsx";
import MeditationCenter from "../pages/campusLife/MeditationCenter.jsx";
import Incubation from "../pages/Reasearch/incubations/Incubation.jsx";

const AcademicCalendar = React.lazy(() => import('../pages/Academic/AcademicCalendar.jsx'));
const CBCSFramework = React.lazy(() => import('../pages/Academic/CBCSFramework.jsx'));
const CentersOfExcellence = React.lazy(() => import('../pages/Academic/CentersOfExcellence.jsx'));
const Faculty = React.lazy(() => import('../pages/Academic/Faculty.jsx'));
const FacultyDetail = React.lazy(() => import('../pages/Academic/FacultyDetail.jsx'));
const InternationalCollaboration = React.lazy(() => import('../pages/Academic/InternationalCollaboration.jsx'));
// const NewsEvents = React.lazy(() => import('../pages/Academic/NewsEvents.jsx'));
const ReportsPublications = React.lazy(() => import('../pages/Academic/ReportsPublications.jsx'));
const Schools = React.lazy(() => import('../pages/Academic/Schools.jsx'));

const Disclosures = lazy(() => import('../pages/Aboutus/Disclosures.jsx'));
const Policies = lazy(() => import('../pages/Aboutus/Policies.jsx'));
const Vision = lazy(() => import('../pages/Aboutus/Vison.jsx'));

const Chancellor = lazy(() => import('../pages/Aboutus/Chancellor.jsx'));
const Governance = lazy(() => import('../pages/Aboutus/Governance.jsx'));
const ViceChancellor = lazy(() => import('../pages/Aboutus/ViceChancellor.jsx'));

const FundedProjects = lazy(() => import('../pages/Reasearch/FundedProjects'));
const StartUp = lazy(() => import('../pages/Reasearch/StartUp.jsx'));
const Index = lazy(() => import('../pages/Reasearch/Index.jsx'));
const Publications = lazy(() => import('../pages/Reasearch/Publications.jsx'));
const Innovations = lazy(() => import('../pages/Reasearch/Innovations.jsx'));
const ResearchCenters = lazy(() => import('../pages/Reasearch/ResearchCenters.jsx'));

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
const BoardOfStudies = lazy(() => import('../pages/departments/BoardOfStudy'));
import ICTLayout from '../components/departments/ICTlayout.jsx';
import Dean from "../components/departments/Dean.jsx";
import Conferences from "../pages/departments/Usict_activities.jsx";
import LaboratoryCards from "../pages/departments/laboratries.jsx";

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
        
        <Route path="/about-us/policies-statutes-rti" element={<Policies />} />
        <Route path="/about-us/mandatory-disclosures" element={<Disclosures />} />
        
        {/* Academics */}
        <Route path="/academics" element={<h1>Academics</h1>} />
        <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/academics/cbcs-framework" element={<CBCSFramework />} />
        <Route path="/academics/centers-of-excellence" element={<CentersOfExcellence />} />
        <Route path="/academics/faculty" element={<Faculty />} />
        <Route path="/academics/faculty/:id" element={<FacultyDetail />} />
        <Route path="/academics/international-collaboration" element={<InternationalCollaboration />} />
        {/* <Route path="/academics/news-events" element={<NewsEvents />} /> */}
        <Route path="/academics/reports-publications" element={<ReportsPublications />} />
        <Route path="/academics/schools" element={<Schools />} />

<Route path="/schools/ict" element={<ICTLayout />}>
  {/* ICT Home Page */}
  <Route index element={<ICTPage />} />

  {/* Faculty */}
  <Route path="faculty" element={<ICTFaculty />} />

  {/* About Section */}
  <Route path="about/coeidrone" element={<h1>COE Drone - Coming Soon</h1>} />
  <Route path="about/dean" element={<Dean/>} />
  <Route path="about/coeiraem" element={<h1>COE IRAEM - Coming Soon</h1>} />
  <Route path="about/board" element={<BoardOfStudies />} />
  <Route path="about/staff" element={<h1>Staff - Coming Soon</h1>} />
  <Route path="about/labs" element={<LaboratoryCards/>} />
  <Route path="about/activities" element={<Conferences/>} />

  {/* Departments */}
  <Route path="departments/cse" element={<CSE />} />
  <Route path="departments/it" element={<IT />} />
  <Route path="departments/ece" element={<ECE />} />

  {/* Research Section */}
  <Route path="research/profile" element={<ResearchArea />} />
  <Route path="research/consultancy" element={<TrainingConsultancy />} />
  <Route path="research/scholars" element={<ResearchScholars />} />
  <Route path="research/projects" element={<ResearchProjects />} />
  <Route path="research/patents" element={<Patents />} />

  {/* Contact Page */}
  <Route path="contact" element={<ICTContact />} />
</Route>


        {/* Admissions Routes */}
        <Route path="/admissions/admission-process" element={<AdmissionProcess/>} />
        <Route path="/admissions/courses-offered" element={<CoursesOffered/>} />
        <Route path="/admissions/eligibility-reservation" element={<EligibilityReservation/>} />
        <Route path="/admissions/fee-structure-prospectus" element={<FeeStructure/>} />
        <Route path="/admissions/international-admissions" element={<InternationalAdmissions/>} />

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
        <Route path="/research/incubation-innovation" element={<Incubation/>} />
        <Route path="/research/startups" element={<StartUp />} />
        <Route path="/research/funded-projects" element={<FundedProjects />} />
        <Route path="/research/irp-cell" element={<Index />} />
        <Route path="/research/research-highlights" element={<Index />} />

        {/* Campus Life Routes */}
  <Route path="/campus-life/hostel-facilities" element={<HostelDining />} />
      <Route path="/campus-life/sports-fitness" element={<SportsCultural />} />
      <Route path="/campus-life/clubs-societies" element={<ClubsCouncils />}/>
      <Route path="/campus-life/health-wellness" element={<HealthWellness/>}/>
      <Route path="/campus-life/campus-events"element={<UpcomingEvents/>}/>
      <Route path="/campus-life/meditation-center"element={<MeditationCenter/>}/>
      <Route path="/campus-life/virtual-tour"element={<VirtualTour/>}/>

        {/* Announcements Routes */}
        <Route path="/announcements/news-notifications" element={<NewsNotifications/>} />
        <Route path="/announcements/event-calendar" element={<EventsCalendar/>} />
        <Route path="/announcements/notices" element={<h1>iskaa bhi</h1>} />
        {/* <Route path="/announcements/press-releases" element={<MediaCoverage/>} /> */}
        <Route path="/announcements/media-gallery" element={<MediaGallery/>} />
        <Route path="/announcements/media-coverage" element={<MediaCoverage />} />

        <Route path="/announcements/newsletter" element={<NewsLetter/>} />
        <Route path="/announcements/strategic-perspective" element={<Stat />} />

        {/* Placements Routes */}
        <Route path="/placements/placement-process" element={<PlacementBrochure/>} />
        <Route path="/placements/top-recruiters" element={<CampusRecruiters/>} />
        <Route path="/placements/internship-opportunities" element={<InternshipProgrammes/>} />
        <Route path="/placements/career-counseling" element={<TrainingCareerServices/>} />
        <Route path="/placements/placement-statistics" element={<PlacementStatistics/>} />

        {/* Alumni Routes */}
        <Route path="/alumni/alumni-network" element={<AlumniNetwork/>} />
        <Route path="/alumni/alumni-events" element={<EventsReunions/>} />
        <Route path="/alumni/alumni-achievements" element={<h1>Alumni Achievements</h1>} />
        <Route path="/alumni/become-mentor" element={<AlumniRegistration/>} />
      </Routes>
    </Suspense>
  );
}