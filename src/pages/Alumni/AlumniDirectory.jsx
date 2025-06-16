import { useState } from 'react';

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { toast } from '../../hooks/use-toast';
import {
  Search, MapPin, Briefcase, Calendar,
  ExternalLink, Mail, FileText, Users, Star
} from 'lucide-react';

// Replace with your actual alumni data
const verifiedAlumni = [];

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    batch: 'all',
    branch: 'all',
    company: '',
    availability: 'all'
  });
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [requestType, setRequestType] = useState('');
  const [requestMessage, setRequestMessage] = useState('');

  const filteredAlumni = verifiedAlumni.filter(alumni => {
    return (
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.batch === 'all' || alumni.batch === filters.batch) &&
      (filters.branch === 'all' || alumni.branch === filters.branch) &&
      (filters.company === '' || alumni.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (filters.availability === 'all' || alumni.availableFor.includes(filters.availability))
    );
  });

  const handleRequest = (alumni, type) => {
    setSelectedAlumni(alumni);
    setRequestType(type);
    setRequestMessage('');
  };

  const submitRequest = () => {
    if (!requestMessage.trim()) {
      toast({
        title: "Message required",
        description: "Please provide a message with your request.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Request sent!",
      description: `Your ${requestType.toLowerCase()} request has been sent to ${selectedAlumni.name}. They will contact you soon.`,
    });

    setSelectedAlumni(null);
    setRequestType('');
    setRequestMessage('');
  };

  const getAvailabilityColor = (service) => {
    switch (service) {
      case 'Referrals': return 'bg-green-100 text-green-800 border-green-200';
      case 'Mentoring': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Resume Review': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Directory</h1>
          <p className="text-xl md:text-2xl mb-8">
            Connect with verified alumni for career guidance, referrals, and mentorship opportunities.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              ✓ Verified Profiles
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              Instant Connect
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search verified alumni..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={filters.batch} onValueChange={(value) => setFilters(prev => ({ ...prev, batch: value }))}>
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

            <Select value={filters.branch} onValueChange={(value) => setFilters(prev => ({ ...prev, branch: value }))}>
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

            <Select value={filters.availability} onValueChange={(value) => setFilters(prev => ({ ...prev, availability: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Available For" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="Referrals">Referrals</SelectItem>
                <SelectItem value="Mentoring">Mentoring</SelectItem>
                <SelectItem value="Resume Review">Resume Review</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">Showing {filteredAlumni.length} verified alumni</p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>All profiles are verified and rated by students</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <Card key={alumni.id} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div className="absolute -top-1 -right-1 bg-green-500 w-5 h-5 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900">{alumni.name}</CardTitle>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Class of {alumni.batch} • {alumni.branch}
                    </p>
                    <div className="flex items-center mt-2">
                      <Star className="h-3 w-3 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">{alumni.rating}</span>
                      <span className="text-xs text-gray-500 ml-2">({alumni.helpedStudents} students helped)</span>
                    </div>
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

                  <p className="text-sm text-gray-600 line-clamp-2">{alumni.bio}</p>

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

                  <div className="grid grid-cols-2 gap-2 pt-4">
                    {alumni.availableFor.includes('Referrals') && (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-xs"
                        onClick={() => handleRequest(alumni, 'Referral')}
                      >
                        <Briefcase className="h-3 w-3 mr-1" />
                        Request Referral
                      </Button>
                    )}

                    {alumni.availableFor.includes('Resume Review') && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-300 text-purple-600 hover:bg-purple-50 text-xs"
                        onClick={() => handleRequest(alumni, 'Resume Review')}
                      >
                        <FileText className="h-3 w-3 mr-1" />
                        Resume Review
                      </Button>
                    )}

                    {alumni.availableFor.includes('Mentoring') && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-300 text-blue-600 hover:bg-blue-50 text-xs"
                        onClick={() => handleRequest(alumni, 'Mentoring')}
                      >
                        <Users className="h-3 w-3 mr-1" />
                        Get Mentorship
                      </Button>
                    )}

                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-xs"
                      onClick={() => window.open(alumni.linkedin, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No verified alumni found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedAlumni} onOpenChange={() => setSelectedAlumni(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Request {requestType} from {selectedAlumni?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <img
                src={selectedAlumni?.image}
                alt={selectedAlumni?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{selectedAlumni?.name}</p>
                <p className="text-sm text-gray-600">{selectedAlumni?.jobTitle} at {selectedAlumni?.company}</p>
              </div>
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={requestMessage}
                onChange={(e) => setRequestMessage(e.target.value)}
                placeholder={`Hi ${selectedAlumni?.name}, I hope you're doing well. I'm a current student at Smart Campus and would appreciate your help with...`}
                rows={4}
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Be specific about what you're looking for and include relevant details about your background.
              </p>
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setSelectedAlumni(null)}
              >
                Cancel
              </Button>
              <Button
                onClick={submitRequest}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Mail className="h-4 w-4 mr-1" />
                Send Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlumniDirectory;
