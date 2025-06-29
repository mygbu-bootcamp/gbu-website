import Landing from "../../components/departments/Landing";
import Navbar from "../../components/departments/Navbar";
import AboutSection from "../../components/departments/AboutIct";
import SchoolStats from "../../components/departments/SchoolStats";
import LeadershipCard from "../../components/departments/Dean";
import ProgramsShowcase from "../../components/departments/Program";
import DepartmentsSection from "../../components/departments/Deptcard";
import FacultyCarousel from "../../components/departments/faculty_rotating.jsx";
import NoticeEvents from "../../components/departments/Notice.jsx";
import PlacementsSection from "../../components/departments/Placement.jsx";
import RecentPlacements from "../../components/departments/Recent_Placement.jsx";
import RecruitersShowcase from "../../components/departments/Recuritor_showcase";
import ClubsAchievements from "../../components/departments/Clubs_activevment.jsx";
import StudentAchievements from "../../components/departments/Student_achievements.jsx";
import StudentStartup from "../../components/departments/Startup.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Landing />
      <AboutSection />
      <SchoolStats />
      <LeadershipCard />
      <DepartmentsSection />
      <ProgramsShowcase />
      <FacultyCarousel />
      <NoticeEvents />
      <ClubsAchievements />
      <PlacementsSection />
      <RecentPlacements />
      <RecruitersShowcase />
      <StudentStartup />
      <StudentAchievements />
    </div>
  );
};

export default Index;
