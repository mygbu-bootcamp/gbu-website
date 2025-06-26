import React, { useState } from 'react';
// Minimal UI components defined in this file for demonstration and responsive design

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md p-4 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${className}`}
    {...props}
  />
);

const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
    {children}
  </label>
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${className}`}
    {...props}
  />
);

const Select = ({ value, onValueChange, children, className = "" }) => (
  <div className={`relative w-full ${className}`}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { value, onValueChange })
    )}
  </div>
);

const SelectTrigger = ({ children, ...props }) => (
  <button
    type="button"
    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-400 flex justify-between items-center"
    {...props}
  >
    {children}
    <svg className="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
);

const SelectValue = ({ placeholder, value, children }) => (
  <span className="truncate text-gray-700">{value ? children : placeholder}</span>
);

const SelectContent = ({ children, value, onValueChange }) => {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef();

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (triggerRef.current && !triggerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={triggerRef}>
      <div onClick={() => setOpen(o => !o)}>
        <SelectTrigger>
          <SelectValue placeholder={children.props.placeholder} value={value}>
            {children.props.children?.find(child => child.props.value === value)?.props.children}
          </SelectValue>
        </SelectTrigger>
      </div>
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {React.Children.map(children.props.children, child =>
            React.cloneElement(child, {
              onClick: () => {
                onValueChange(child.props.value);
                setOpen(false);
              },
              selected: value === child.props.value,
            })
          )}
        </div>
      )}
    </div>
  );
};

const SelectItem = ({ children, value, onClick, selected }) => (
  <div
    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${selected ? "bg-blue-50 font-semibold" : ""}`}
    onClick={onClick}
    role="option"
    aria-selected={selected}
    tabIndex={0}
  >
    {children}
  </div>
);
import { Upload, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NSSRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    rollNo: '',
    program: '',
    year: '',
    email: '',
    phone: '',
    motivation: '',
    profilePhoto: null,
    studentId: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Successful!",
        description: "Your NSS volunteer application has been submitted. You will receive a confirmation email shortly.",
        duration: 5000,
      });

      setFormData({
        fullName: '',
        rollNo: '',
        program: '',
        year: '',
        email: '',
        phone: '',
        motivation: '',
        profilePhoto: null,
        studentId: null
      });
    }, 2000);
  };

  const benefits = [
    'Certificate of completion after 240 hours of service',
    'Leadership development opportunities',
    'Community service experience',
    'Networking with like-minded individuals',
    'Recognition and awards for outstanding service',
    'Professional development workshops'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join NSS as a Volunteer</h2>
        <p className="text-lg text-gray-600">
          Be part of the change you want to see in society
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserPlus className="h-6 w-6 text-blue-600" />
                <span>Volunteer Registration Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rollNo">Roll Number *</Label>
                    <Input
                      id="rollNo"
                      type="text"
                      placeholder="Enter your roll number"
                      value={formData.rollNo}
                      onChange={(e) => handleInputChange('rollNo', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="program">Program *</Label>
                    <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="mtech">M.Tech</SelectItem>
                        <SelectItem value="ba">B.A.</SelectItem>
                        <SelectItem value="ma">M.A.</SelectItem>
                        <SelectItem value="bcom">B.Com</SelectItem>
                        <SelectItem value="mcom">M.Com</SelectItem>
                        <SelectItem value="bsc">B.Sc</SelectItem>
                        <SelectItem value="msc">M.Sc</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year *</Label>
                    <Select value={formData.year} onValueChange={(value) => handleInputChange('year', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first">First Year</SelectItem>
                        <SelectItem value="second">Second Year</SelectItem>
                        <SelectItem value="third">Third Year</SelectItem>
                        <SelectItem value="fourth">Fourth Year</SelectItem>
                        <SelectItem value="final">Final Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@student.edu"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91-9876543210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join NSS? *</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Share your motivation for joining NSS and how you plan to contribute to community service..."
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="profilePhoto">Profile Photo *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id="profilePhoto"
                        accept="image/*"
                        onChange={(e) => handleFileUpload('profilePhoto', e.target.files[0])}
                        className="hidden"
                        required
                      />
                      <label htmlFor="profilePhoto" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {formData.profilePhoto ? formData.profilePhoto.name : 'Click to upload photo'}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentId">Student ID (PDF/JPG) *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id="studentId"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload('studentId', e.target.files[0])}
                        className="hidden"
                        required
                      />
                      <label htmlFor="studentId" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {formData.studentId ? formData.studentId.name : 'Click to upload ID'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Why Join NSS?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Active Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm text-gray-600">Service Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Events Organized</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NSSRegistration;
