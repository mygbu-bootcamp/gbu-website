import { useState } from 'react';

import { Search, MapPin, Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow border ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const Badge = ({ children, className = "", variant = "default" }) => {
  const base = "px-2 py-1 rounded text-xs font-medium inline-block";
  const styles = {
    outline: "border border-gray-300 text-gray-700 bg-white",
    secondary: "bg-gray-100 text-gray-700",
    default: "bg-blue-600 text-white"
  };
  return <span className={`${base} ${styles[variant]} ${className}`}>{children}</span>;
};

const Button = ({ children, size = "md", variant = "default", className = "", ...props }) => {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-2 text-lg"
  };
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };
  return (
    <button className={`rounded ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

// Mocked Select components for filtering
const Select = ({ value, onValueChange, children }) => {
  return <div>{children({ value, onValueChange })}</div>;
};
const SelectTrigger = ({ children }) => (
  <div className="border px-3 py-2 rounded text-gray-600 bg-white cursor-pointer">{children}</div>
);
const SelectContent = ({ children }) => <div className="mt-2">{children}</div>;
const SelectItem = ({ value, children, onClick }) => (
  <div
    onClick={() => onClick(value)}
    className="cursor-pointer px-3 py-1 hover:bg-blue-100 rounded"
  >
    {children}
  </div>
);
const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;


const alumniData = [
  {
    id: 1,
    name: "Sarah Johnson",
    batch: "2018",
    branch: "Computer Science",
    company: "Google",
    location: "San Francisco",
    jobTitle: "Senior Software Engineer",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    availableFor: ["Referrals", "Mentoring"],
    status: "Active"
  },
  {
    id: 2,
    name: "Michael Chen",
    batch: "2019",
    branch: "Mechanical Engineering",
    company: "Tesla",
    location: "Austin",
    jobTitle: "Product Manager",
    linkedin: "https://linkedin.com/in/michaelchen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    availableFor: ["Resume Review", "Referrals"],
    status: "Active"
  },
  {
    id: 3,
    name: "Priya Sharma",
    batch: "2017",
    branch: "Electrical Engineering",
    company: "Microsoft",
    location: "Seattle",
    jobTitle: "Principal Engineer",
    linkedin: "https://linkedin.com/in/priyasharma",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    availableFor: ["Mentoring", "Resume Review"],
    status: "Active"
  }
];

const AlumniNetwork = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [batchFilter, setBatchFilter] = useState('all');
  const [branchFilter, setBranchFilter] = useState('all');
  const [companyFilter, setCompanyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const displayAlumniData = user
    ? alumniData.map(alumni =>
        alumni.id === user.id
          ? {
              ...alumni,
              name: user.name,
              company: user.company,
              location: user.location,
              jobTitle: user.jobTitle,
              linkedin: user.linkedin,
              availableFor: user.availableFor,
              image: user.image
            }
          : alumni
      )
    : alumniData;

  const filteredAlumni = displayAlumniData.filter(alumni => {
    return (
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (batchFilter === 'all' || alumni.batch === batchFilter) &&
      (branchFilter === 'all' || alumni.branch === branchFilter) &&
      (companyFilter === '' || alumni.company.toLowerCase().includes(companyFilter.toLowerCase())) &&
      (locationFilter === '' || alumni.location.toLowerCase().includes(locationFilter.toLowerCase()))
    );
  });

  const getAvailabilityColor = (service) => {
    switch (service) {
      case 'Referrals':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Mentoring':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Resume Review':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">


      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Alumni Network</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connect with our successful alumni community. Get mentorship, referrals, and career guidance from industry professionals.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 border-[1px] border-solid px-4 py-2 text-lg">
              {displayAlumniData.length}+ Alumni
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 border-[1px] border-solid px-4 py-2 text-lg">
              50+ Companies
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-solid p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search alumni..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={batchFilter} onValueChange={setBatchFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Batch Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Batches</SelectItem>
                <SelectItem value="2017">2017</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
              </SelectContent>
            </Select>

            <Select value={branchFilter} onValueChange={setBranchFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Company"
              value={companyFilter}
              onChange={(e) => setCompanyFilter(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <Input
              placeholder="Location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="max-w-xs"
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAlumni.length} of {displayAlumniData.length} alumni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <Card key={alumni.id} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 border-solid">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900">{alumni.name}</CardTitle>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Class of {alumni.batch} • {alumni.branch}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="font-medium">{alumni.jobTitle}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium text-blue-600">{alumni.company}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{alumni.location}</span>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs font-medium text-gray-700 mb-2">Available for:</p>
                    <div className="flex flex-wrap gap-1">
                      {alumni.availableFor.map((service) => (
                        <Badge
                          key={service}
                          variant="outline"
                          className={`text-xs ${getAvailabilityColor(service)}`}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Connect
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-300 border-[1px] border-solid"
                      onClick={() => window.open(alumni.linkedin, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No alumni found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniNetwork;
