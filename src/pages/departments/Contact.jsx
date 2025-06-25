
// Custom Card components with modern UI, shadow, and smooth transitions
import React from "react";


import { Phone, Mail, MapPin, Clock, User, Building } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg border ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-foreground ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-muted-foreground text-sm ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);


const Contact = () => {
  const departments = [
    {
      name: "Computer Science & Engineering",
      hod: "Dr. Rajesh Kumar",
      phone: "+91-11-2586-1234",
      email: "cse@usict.ac.in",
      hodEmail: "rajesh.kumar@usict.ac.in",
      office: "Room 301, Block A",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Electronics & Communication Engineering",
      hod: "Dr. Priya Singh",
      phone: "+91-11-2586-1235",
      email: "ece@usict.ac.in",
      hodEmail: "priya.singh@usict.ac.in",
      office: "Room 201, Block B",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Information Technology",
      hod: "Dr. Vikram Gupta",
      phone: "+91-11-2586-1236",
      email: "it@usict.ac.in",
      hodEmail: "vikram.gupta@usict.ac.in",
      office: "Room 401, Block A",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Mechanical Engineering",
      hod: "Dr. Anil Sharma",
      phone: "+91-11-2586-1237",
      email: "mech@usict.ac.in",
      hodEmail: "anil.sharma@usict.ac.in",
      office: "Room 101, Block C",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Civil Engineering",
      hod: "Dr. Sunita Rani",
      phone: "+91-11-2586-1238",
      email: "civil@usict.ac.in",
      hodEmail: "sunita.rani@usict.ac.in",
      office: "Room 102, Block C",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Applied Sciences & Humanities",
      hod: "Dr. Ravi Verma",
      phone: "+91-11-2586-1239",
      email: "ash@usict.ac.in",
      hodEmail: "ravi.verma@usict.ac.in",
      office: "Room 501, Block B",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Master of Computer Applications",
      hod: "Dr. Neeta Awasthi",
      phone: "+91-11-2586-1240",
      email: "mca@usict.ac.in",
      hodEmail: "neeta.awasthi@usict.ac.in",
      office: "Room 302, Block A",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Business Administration",
      hod: "Dr. Rohit Aggarwal",
      phone: "+91-11-2586-1241",
      email: "mba@usict.ac.in",
      hodEmail: "rohit.aggarwal@usict.ac.in",
      office: "Room 601, Block B",
      color: "from-teal-500 to-green-500"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=1920&q=80"
            alt="University Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-blue-900/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Contact
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                USICT
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              University School of Information, Communication & Technology - Get in touch with our departments and faculty.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Info */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              General Information
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    University School of Information,<br />
                    Communication & Technology<br />
                    Guru Gobind Singh Indraprastha University<br />
                    Sector 16C, Dwarka, New Delhi - 110078
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Main Office: +91-11-2586-1000<br />
                    Admissions: +91-11-2586-1001<br />
                    Fax: +91-11-2586-1002
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    General: info@usict.ac.in<br />
                    Admissions: admissions@usict.ac.in<br />
                    Academic: academic@usict.ac.in
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours */}
            <Card className="mb-16">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-foreground">{schedule.day}</div>
                      <div className="text-muted-foreground">{schedule.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Get in touch with specific departments and their heads for academic inquiries.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${dept.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center`}>
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground mb-1">{dept.name}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>HOD: {dept.hod}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{dept.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">HOD: {dept.hodEmail}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{dept.office}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Find Us
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Interactive Map</p>
                  <p className="text-gray-500">USICT Campus, Dwarka, New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
