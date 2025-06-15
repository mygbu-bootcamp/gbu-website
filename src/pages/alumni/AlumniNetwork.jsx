import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  Calendar,
  Users,
  ArrowLeft,
  Linkedin,
  Mail,
  Phone
} from "lucide-react";

const schoolCategories = [
  "Biotechnology",
  "Buddhist Studies & Civilization",
  "Engineering",
  "Humanities & Social Sciences",
  "Information & Communication Technology",
  "Law, Justice and Governance",
  "Management",
  "Vocational Studies & Applied Sciences"
];

// Map branches to schools (expand as needed)
const branchToSchool = {
  "Computer Science": "Engineering",
  "Electrical Engineering": "Engineering",
  "Mechanical Engineering": "Engineering",
  "Data Science": "Information & Communication Technology",
  "Business Administration": "Management",
  // Add more mappings as needed
};

const AlumniNetwork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSchool, setSelectedSchool] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(false);

  const alumniData = [
    {
      id: 1,
      name: "Sarah Johnson",
      batch: "2018",
      branch: "Computer Science",
      designation: "Senior Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah.johnson@email.com",
      phone: "+1-555-0123",
      skills: ["React", "Python", "Machine Learning"]
    },
    {
      id: 2,
      name: "Michael Chen",
      batch: "2016",
      branch: "Electrical Engineering",
      designation: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael.chen@email.com",
      phone: "+1-555-0124",
      skills: ["Product Strategy", "AI", "Cloud Computing"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      batch: "2019",
      branch: "Data Science",
      designation: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      email: "emily.rodriguez@email.com",
      phone: "+1-555-0125",
      skills: ["Python", "SQL", "Data Visualization"]
    },
    {
      id: 4,
      name: "David Park",
      batch: "2017",
      branch: "Mechanical Engineering",
      designation: "Engineering Manager",
      company: "Tesla",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/davidpark",
      email: "david.park@email.com",
      phone: "+1-555-0126",
      skills: ["AutoCAD", "Project Management", "Renewable Energy"]
    },
    {
      id: 5,
      name: "Jessica Kim",
      batch: "2020",
      branch: "Business Administration",
      designation: "Marketing Director",
      company: "Spotify",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6cb?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/jessicakim",
      email: "jessica.kim@email.com",
      phone: "+1-555-0127",
      skills: ["Digital Marketing", "Brand Strategy", "Analytics"]
    },
    {
      id: 6,
      name: "Alex Thompson",
      batch: "2015",
      branch: "Computer Science",
      designation: "CTO",
      company: "Startup Inc.",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/alexthompson",
      email: "alex.thompson@email.com",
      phone: "+1-555-0128",
      skills: ["JavaScript", "Leadership", "Blockchain"]
    }
  ];

  console.log("Alumni Network - Component rendered");
  console.log("Alumni Network - Total alumni data:", alumniData.length);
  console.log("Alumni Network - Search term:", searchTerm);
  console.log("Alumni Network - Filters:", { selectedYear, selectedBranch, selectedLocation, selectedSchool });

  const filteredAlumni = (() => {
    try {
      const filtered = alumniData.filter(alumni => {
        if (!alumni) {
          console.warn("Alumni Network - Found null/undefined alumni entry");
          return false;
        }

        const matchesSearch = alumni.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             alumni.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             alumni.designation?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesYear = selectedYear === "all" || alumni.batch === selectedYear;
        const matchesBranch = selectedBranch === "all" || alumni.branch === selectedBranch;
        const matchesLocation = selectedLocation === "all" || alumni.location?.includes(selectedLocation);
        const alumniSchool = branchToSchool[alumni.branch] || "Other";
        const matchesSchool = selectedSchool === "all" || alumniSchool === selectedSchool;

        return matchesSearch && matchesYear && matchesBranch && matchesLocation && matchesSchool;
      });
      
      console.log("Alumni Network - Filtered results:", filtered.length);
      return filtered;
    } catch (error) {
      console.error("Alumni Network - Error filtering alumni:", error);
      return alumniData; // Fallback to original data
    }
  })();

  const years = [...new Set(alumniData.map(alumni => alumni.batch))].sort();
  const branches = [...new Set(alumniData.map(alumni => alumni.branch))];
  const locations = [...new Set(alumniData.map(alumni => alumni.location.split(', ')[1] || alumni.location))];

  useEffect(() => {
    console.log("Alumni Network - useEffect triggered, filtered alumni count:", filteredAlumni.length);
    
    try {
      // Animate cards on mount
      const cards = document.querySelectorAll('.alumni-card');
      console.log("Alumni Network - Found cards for animation:", cards.length);
      
      cards.forEach((card, index) => {
        setTimeout(() => {
          if (card) {
            card.classList.add('animate-fade-in');
          }
        }, index * 100);
      });
    } catch (error) {
      console.error("Alumni Network - Error in card animation:", error);
    }
  }, [filteredAlumni]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    console.log("Alumni Network - Search changed to:", value);
    setSearchTerm(value);
  };

  const handleYearChange = (value) => {
    console.log("Alumni Network - Year filter changed to:", value);
    setSelectedYear(value);
  };

  const handleBranchChange = (value) => {
    console.log("Alumni Network - Branch filter changed to:", value);
    setSelectedBranch(value);
  };

  const handleLocationChange = (value) => {
    console.log("Alumni Network - Location filter changed to:", value);
    setSelectedLocation(value);
  };

  const handleSchoolChange = (value) => {
    console.log("Alumni Network - School filter changed to:", value);
    setSelectedSchool(value);
  };

  const handleViewModeChange = () => {
    const newMode = viewMode === 'grid' ? 'list' : 'grid';
    console.log("Alumni Network - View mode changed to:", newMode);
    setViewMode(newMode);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-alumni-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-alumni-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading alumni data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-alumni-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-alumni-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">Alumni Network</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-alumni-100 text-alumni-700">
                {filteredAlumni.length} Alumni
              </Badge>
              <Button variant="outline" size="sm" onClick={handleViewModeChange}>
                {viewMode === 'grid' ? 'List View' : 'Grid View'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by name, company, or role..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10 h-10 border-alumni-200 focus:border-alumni-500 focus:ring-alumni-500"
                />
              </div>
            </div>
            <Select value={selectedYear} onValueChange={handleYearChange}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Graduation Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedBranch} onValueChange={handleBranchChange}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                {branches.map(branch => (
                  <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={handleLocationChange}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSchool} onValueChange={handleSchoolChange}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="School" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Schools</SelectItem>
                {schoolCategories.map(school => (
                  <SelectItem key={school} value={school}>{school}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredAlumni.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No alumni found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  console.log("Alumni Network - Clearing all filters");
                  setSearchTerm("");
                  setSelectedYear("all");
                  setSelectedBranch("all");
                  setSelectedLocation("all");
                  setSelectedSchool("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredAlumni.map((alumni, index) => {
                if (!alumni) {
                  console.warn("Alumni Network - Skipping null alumni at index:", index);
                  return null;
                }

                return (
                  <Card 
                    key={`alumni-${alumni.id}-${index}`}
                    className={`group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-md overflow-hidden ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''} alumni-card`}
                  >
                    <CardContent className={`p-0 ${viewMode === 'list' ? 'flex w-full' : ''}`}>
                      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-full md:w-48 flex-shrink-0' : ''}`}>
                        <img 
                          src={alumni.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"} 
                          alt={alumni.name || "Alumni"}
                          className={`object-cover group-hover:scale-110 transition-transform duration-500 ${viewMode === 'list' ? 'w-full h-48 md:h-full' : 'w-full h-48'}`}
                          onError={(e) => {
                            console.warn("Alumni Network - Image failed to load for:", alumni.name);
                            const target = e.target;
                            target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
                          }}
                        />
                        <div className="absolute top-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                          <Badge className="bg-alumni-500 text-white shadow-lg">{alumni.batch || "N/A"}</Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-alumni-600 transition-colors duration-300">{alumni.name || "Unknown"}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span className="text-sm">{alumni.designation || "N/A"}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="text-sm">{alumni.company || "N/A"}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{alumni.branch || "N/A"}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Badge className="bg-gray-100 text-gray-700 mr-2">
                            {branchToSchool[alumni.branch] || "Other"}
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{alumni.location || "N/A"}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(alumni.skills || []).map((skill, skillIndex) => (
                            <Badge key={`skill-${skillIndex}-${skill}`} variant="secondary" className="text-xs hover:bg-alumni-100 transition-colors duration-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-alumni-500 hover:bg-alumni-600 hover:scale-105 transition-all duration-200"
                            onClick={() => {
                              console.log("Alumni Network - LinkedIn clicked for:", alumni.name);
                              if (alumni.linkedin) {
                                window.open(alumni.linkedin, '_blank');
                              }
                            }}
                          >
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="hover:scale-105 hover:shadow-md transition-all duration-200"
                            onClick={() => {
                              console.log("Alumni Network - Email clicked for:", alumni.name);
                              if (alumni.email) {
                                window.location.href = `mailto:${alumni.email}`;
                              }
                            }}
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="hover:scale-105 hover:shadow-md transition-all duration-200"
                            onClick={() => {
                              console.log("Alumni Network - Phone clicked for:", alumni.name);
                              if (alumni.phone) {
                                window.location.href = `tel:${alumni.phone}`;
                              }
                            }}
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AlumniNetwork;
