// import React, { useEffect, useState, lazy, Suspense } from "react";

// const componentsMap = {
//   Landing: lazy(() => import("../../components/departments/Landing")),
//   AboutSection: lazy(() => import("../../components/departments/AboutIct")),
//   SchoolStats: lazy(() => import("../../components/departments/SchoolStats")),
//   LeadershipCard: lazy(() => import("../../components/departments/Dean")),
//   DepartmentsSection: lazy(() => import("../../components/departments/Deptcard")),
//   ProgramsShowcase: lazy(() => import("../../components/departments/Program")),
//   FacultyCarousel: lazy(() => import("../../components/departments/faculty_rotating.jsx")),
//   NoticeEvents: lazy(() => import("../../components/departments/Notice.jsx")),
//   PlacementsSection: lazy(() => import("../../components/departments/Placement.jsx")),
//   RecentPlacements: lazy(() => import("../../components/departments/Recent_Placement.jsx")),
//   RecruitersShowcase: lazy(() => import("../../components/departments/Recuritor_showcase")),
//   ClubsAchievements: lazy(() => import("../../components/departments/Clubs_activevment.jsx")),
//   StudentAchievements: lazy(() => import("../../components/departments/Student_achievements.jsx")),
//   StudentStartup: lazy(() => import("../../components/departments/Startup.jsx")),
// };

// // Fallback loader
// const Loader = () => <div className="text-center py-10 text-blue-500">Loading section...</div>;

// export default function DepartmentDynamicPage() {
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     // TODO: Replace with real backend API call
//     const fetchSections = async () => {
//       // Simulated API response
//       const response = [
//         { componentName: "Landing", enabled: true, position: 1 },
//         { componentName: "AboutSection", enabled: true, position: 2 },
//         { componentName: "SchoolStats", enabled: true, position: 3 },
//         { componentName: "LeadershipCard", enabled: true, position: 4 },
//         { componentName: "DepartmentsSection", enabled: true, position: 5 },
//         { componentName: "ProgramsShowcase", enabled: true, position: 6 },
//         { componentName: "FacultyCarousel", enabled: true, position: 7 },
//         { componentName: "NoticeEvents", enabled: true, position: 8 },
//         { componentName: "ClubsAchievements", enabled: true, position: 9 },
//         { componentName: "PlacementsSection", enabled: true, position: 10 },
//         { componentName: "RecentPlacements", enabled: true, position: 11 },
//         { componentName: "RecruitersShowcase", enabled: true, position: 12 },
//         { componentName: "StudentStartup", enabled: true, position: 13 },
//         { componentName: "StudentAchievements", enabled: true, position: 14 },
//       ];

//       const enabledSorted = response
//         .filter((sec) => sec.enabled)
//         .sort((a, b) => a.position - b.position);
//       setSections(enabledSorted);
//     };

//     fetchSections();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {sections.map((section, idx) => {
//         const Component = componentsMap[section.componentName];
//         if (!Component) return null;
//         return (
//           <Suspense fallback={<Loader />} key={idx}>
//             <Component />
//           </Suspense>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState, lazy, Suspense } from "react";
import { Code, Lightbulb, Rocket, Target, Trophy } from "lucide-react";

const componentsMap = {
  Landing: lazy(() => import("../../components/departments/Landing")),
  AboutSection: lazy(() => import("../../components/departments/AboutIct")),
  SchoolStats: lazy(() => import("../../components/departments/SchoolStats")),
  LeadershipCard: lazy(() => import("../../components/departments/Dean")),
  DepartmentsSection: lazy(() => import("../../components/departments/Deptcard")),
  ProgramsShowcase: lazy(() => import("../../components/departments/Program")),
  FacultyCarousel: lazy(() => import("../../components/departments/faculty_rotating.jsx")),
  NoticeEvents: lazy(() => import("../../components/departments/Notice.jsx")),
  PlacementsSection: lazy(() => import("../../components/departments/Placement.jsx")),
  RecentPlacements: lazy(() => import("../../components/departments/Recent_Placement.jsx")),
  RecruitersShowcase: lazy(() => import("../../components/departments/Recuritor_showcase")),
  ClubsAchievements: lazy(() => import("../../components/departments/Clubs_activevment.jsx")),
  StudentAchievements: lazy(() => import("../../components/departments/Student_achievements.jsx")),
  StudentStartup: lazy(() => import("../../components/departments/Startup.jsx")),
};

const Loader = () => <div className="text-center py-10 text-blue-500">Loading section...</div>;

export default function DepartmentDynamicPage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      const response = [
        { componentName: "Landing", enabled: true, position: 1 },

        {
          componentName: "AboutSection",
          enabled: true,
          position: 2,
          props: {
            data: {
              heading: "About Us",
              subtitle: "School of Information and Communication Technology",
              floatingIcons: [
                { icon: <Code size={40} />, color: "text-blue-400", style: "top-20 left-10" },
                { icon: <Lightbulb size={35} />, color: "text-purple-400", style: "top-32 right-20" },
                { icon: <Rocket size={45} />, color: "text-indigo-400", style: "bottom-20 left-1/4" },
              ],
              cards: [
                {
                  title: "Our Mission",
                  icon: <Target size={28} />,
                  bgGradient: "from-blue-500 to-purple-600",
                  content: (
                    <>
                      The{" "}
                      <span className="font-semibold text-blue-600">
                        School of Information and Communication Technology (SOICT/USICT)
                      </span>{" "}
                      is a premier institution committed to nurturing future-ready technocrats,
                      innovators, and entrepreneurs in the dynamic field of{" "}
                      <span className="font-semibold text-purple-600">
                        ICT (Information and Communication Technology)
                      </span>
                      .
                    </>
                  ),
                  highlight: (
                    <>
                      Guided by our vision of{" "}
                      <span className="font-semibold text-indigo-600">
                        excellence and ethics
                      </span>
                      , we empower students with cutting-edge knowledge, hands-on experience, and a
                      strong value system to thrive in the global digital economy.
                    </>
                  ),
                },
                {
                  title: "Our Commitment",
                  icon: <Trophy size={28} />,
                  bgGradient: "from-purple-500 to-pink-600",
                  content: (
                    <>
                      At SOICT, we don't just teach technology—we inspire{" "}
                      <span className="font-semibold text-purple-600">future pioneers</span>. Through{" "}
                      <span className="font-semibold text-indigo-600">
                        interdisciplinary research, hackathons, and mentorship
                      </span>
                      , we foster a culture of curiosity and excellence.
                    </>
                  ),
                  bullets: [
                    <span className="font-semibold text-gray-800">
                      Skilled, motivated, and ethically grounded professionals
                    </span>,
                    "Ready to tackle global challenges",
                    "Transform the ICT landscape",
                  ],
                },
              ],
            },
          },
        },

        { componentName: "SchoolStats", enabled: true, position: 3 },
        { componentName: "LeadershipCard", enabled: true, position: 4 },
        { componentName: "DepartmentsSection", enabled: true, position: 5 },
        { componentName: "ProgramsShowcase", enabled: true, position: 6 },
        { componentName: "FacultyCarousel", enabled: true, position: 7 },
        { componentName: "NoticeEvents", enabled: true, position: 8 },
        { componentName: "ClubsAchievements", enabled: true, position: 9 },
        { componentName: "PlacementsSection", enabled: true, position: 10 },
        { componentName: "RecentPlacements", enabled: true, position: 11 },
        { componentName: "RecruitersShowcase", enabled: true, position: 12 },
        { componentName: "StudentStartup", enabled: true, position: 13 },
        { componentName: "StudentAchievements", enabled: true, position: 14 },
      ];

      const enabledSorted = response
        .filter((sec) => sec.enabled)
        .sort((a, b) => a.position - b.position);
      setSections(enabledSorted);
    };

    fetchSections();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {sections.map((section, idx) => {
        const Component = componentsMap[section.componentName];
        if (!Component) return null;
        return (
          <Suspense fallback={<Loader />} key={idx}>
            <Component {...(section.props || {})} />
          </Suspense>
        );
      })}
    </div>
  );
}
