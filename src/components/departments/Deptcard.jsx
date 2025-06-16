import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom"; // Ensure you use this if you're navigating routes

const DepartmentsSection = () => {
  const departments = [
    {
      name: "Electronics & Communication Engineering",
      code: "ECE",
      description:
        "Focusing on electronic systems, communication networks, and signal processing technologies.",
      courses: ["B.Tech ECE", "M.Tech VLSI", "M.Tech Communication Systems"],
      faculty: 25,
      labs: 8,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      gradient: "from-blue-500 to-blue-700",
      link: "/schools/ict/departments/ece",
    },
    {
      name: "Computer Science & Engineering",
      code: "CSE",
      description:
        "Leading innovations in software development, artificial intelligence, and data science.",
      courses: ["B.Tech CSE", "M.Tech AI & ML", "M.Tech Software Engineering"],
      faculty: 30,
      labs: 12,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      gradient: "from-blue-400 to-blue-600",
      link: "/schools/ict/departments/cse",
    },
    {
      name: "Information Technology",
      code: "IT",
      description:
        "Bridging technology and business solutions through modern IT practices.",
      courses: [
        "B.Tech IT",
        "M.Tech Information Security",
        "M.Tech Data Analytics",
      ],
      faculty: 22,
      labs: 10,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      gradient: "from-blue-600 to-blue-800",
      link: "/schools/ict/departments/it",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Our Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three premier departments offering cutting-edge programs in
            engineering and technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-300 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="flex flex-col min-h-[600px] bg-white/90 backdrop-blur-md border border-gray-200 shadow hover:shadow-xl transition-all group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div
                  className={`absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-bold shadow-md bg-gradient-to-r ${dept.gradient}`}
                >
                  {dept.code}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-blue-900 group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col gap-6 flex-grow">
                <p className="text-gray-700">{dept.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {dept.faculty}
                    </div>
                    <div className="text-sm text-gray-600">Faculty</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {dept.labs}
                    </div>
                    <div className="text-sm text-gray-600">Labs</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Programs Offered:
                  </h4>
                  <ul className="space-y-1">
                    {dept.courses.map((course, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link to={dept.link}>
                    <Button
                      className={`w-full bg-gradient-to-r ${dept.gradient} hover:brightness-110 transition text-white`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
