Landing;
import Navbar from "../../components/departments/Navbar";
import AboutSection from "../../components/departments/AboutIct";
import DeanMessage from "../../components/departments/Dean";
import ProgramsShowcase from "../../components/departments/Program";
import DepartmentsSection from "../../components/departments/Deptcard";
import NoticeEvents from "../../components/departments/Notice.jsx";
import PlacementsSection from "../../components/departments/Placement.jsx";
import RecentPlacements from "../../components/departments/Recent_Placement.jsx";
import RecruitersShowcase from "../../components/departments/Recuritor_showcase";
import ClubsAchievements from "../../components/departments/Clubs_activevment.jsx";
import StudentAchievements from "../../components/departments/Student_achievements.jsx";
import IncubationCenter from "../../components/departments/Incubations.jsx";
import Landing from "../../components/departments/Landing.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Landing />
      <AboutSection />
      <DeanMessage />
      <ProgramsShowcase />
      <DepartmentsSection />
      <NoticeEvents />
      <PlacementsSection />
      <RecentPlacements />
      <RecruitersShowcase />
      <ClubsAchievements />
      <StudentAchievements />
      <IncubationCenter />
    </div>
  );
};

export default Index;
