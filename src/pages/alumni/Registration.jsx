
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { useToast } from "../../hooks/use-toast";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Calendar,
  Linkedin,
  Check,
  Star
} from "lucide-react";

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    batch: "",
    branch: "",
    currentLocation: "",
    designation: "",
    company: "",
    linkedinUrl: "",
    bio: "",
    skills: "",
    interests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Registration Successful!",
      description: "Welcome to the Alumni Network. Your profile is now active.",
    });
  };

  const branches = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Data Science",
    "Business Administration",
    "Chemical Engineering",
    "Biotechnology"
  ];

  const graduationYears = Array.from({ length: 30 }, (_, i) => 2024 - i);

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-alumni-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center animate-scale-in">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Alumni Network!</h2>
            <p className="text-gray-600 mb-6">
              Your registration has been successful. You're now part of our vibrant alumni community.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-alumni-500 hover:bg-alumni-600">
                <Link to="/network">Explore Alumni Network</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
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
              <h1 className="text-xl font-bold text-gray-900">Join Alumni Network</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Registration Form */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Register as Alumni</h2>
            <p className="text-gray-600">
              Join our vibrant community of graduates and stay connected with your alma mater
            </p>
          </div>

          <Card className="shadow-lg border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2 text-alumni-500" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="batch" className="text-sm font-medium text-gray-700">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Graduation Year *
                    </Label>
                    <Select value={formData.batch} onValueChange={(value) => handleInputChange('batch', value)}>
                      <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {graduationYears.map(year => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branch" className="text-sm font-medium text-gray-700">
                      Branch/Department *
                    </Label>
                    <Select value={formData.branch} onValueChange={(value) => handleInputChange('branch', value)}>
                      <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500">
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        {branches.map(branch => (
                          <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentLocation" className="text-sm font-medium text-gray-700">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Current Location *
                  </Label>
                  <Input
                    id="currentLocation"
                    type="text"
                    value={formData.currentLocation}
                    onChange={(e) => handleInputChange('currentLocation', e.target.value)}
                    placeholder="City, State/Country"
                    className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="designation" className="text-sm font-medium text-gray-700">
                      <Briefcase className="w-4 h-4 inline mr-1" />
                      Current Designation *
                    </Label>
                    <Input
                      id="designation"
                      type="text"
                      value={formData.designation}
                      onChange={(e) => handleInputChange('designation', e.target.value)}
                      placeholder="e.g., Software Engineer"
                      className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company/Organization *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="e.g., Google, Microsoft"
                      className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl" className="text-sm font-medium text-gray-700">
                    <Linkedin className="w-4 h-4 inline mr-1" />
                    LinkedIn Profile URL
                  </Label>
                  <Input
                    id="linkedinUrl"
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-sm font-medium text-gray-700">
                    Professional Bio
                  </Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    placeholder="Tell us about your professional journey and achievements..."
                    className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500 min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="skills" className="text-sm font-medium text-gray-700">
                      <Star className="w-4 h-4 inline mr-1" />
                      Skills & Expertise
                    </Label>
                    <Input
                      id="skills"
                      type="text"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      placeholder="e.g., React, Python, Project Management"
                      className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interests" className="text-sm font-medium text-gray-700">
                      Interests & Hobbies
                    </Label>
                    <Input
                      id="interests"
                      type="text"
                      value={formData.interests}
                      onChange={(e) => handleInputChange('interests', e.target.value)}
                      placeholder="e.g., Photography, Hiking, Reading"
                      className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-alumni-500 hover:bg-alumni-600 text-white py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Registering...
                      </div>
                    ) : (
                      "Join Alumni Network"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;
