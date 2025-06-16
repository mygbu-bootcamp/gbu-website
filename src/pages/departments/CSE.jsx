import AboutDepartment from "../../components/departments/cse/AboutDepartment";
import Research from "../../components/departments/Research";
import HeroSection from "../../components/departments/cse/Hero";
import HodMessage from "../../components/departments/cse/Hod";
import Programs from "../../components/departments/cse/Program";
import Faculty from "../../components/departments/cse/Faculty";

const Cse = () => {
  return (
    <div className="min-h-screen bg-background">

      <HeroSection />
      <HodMessage />
      <AboutDepartment />
      <Programs />
      <Faculty />
      <Research />

    </div>
  );
};

export default Cse;
