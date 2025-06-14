
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { ArrowLeft, User, Mail, Phone, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    nationality: '',
    program: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Valid 10-digit mobile number is required';
    }
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.program) newErrors.program = 'Program selection is required';
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registration attempt:', formData);
      // Handle registration logic here
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-lg">
        <Card className="backdrop-blur-lg bg-white/90 border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-4">
              <Link to="/login" className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Create Account
                </CardTitle>
                <p className="text-gray-600 mt-2">Register for admission portal</p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`pl-10 ${errors.fullName ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="mobile"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className={`pl-10 ${errors.mobile ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
              </div>

              {/* Nationality */}
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="nationality"
                    placeholder="Enter your nationality"
                    value={formData.nationality}
                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                    className={`pl-10 ${errors.nationality ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.nationality && <p className="text-red-500 text-xs">{errors.nationality}</p>}
              </div>

              {/* Program */}
              <div className="space-y-2">
                <Label htmlFor="program">Program Applied For</Label>
                <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)}>
                  <SelectTrigger className={errors.program ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ug">Undergraduate (UG)</SelectItem>
                    <SelectItem value="pg">Postgraduate (PG)</SelectItem>
                    <SelectItem value="phd">Doctorate (PhD)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.program && <p className="text-red-500 text-xs">{errors.program}</p>}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`pl-10 ${errors.password ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`pl-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg mt-6"
              >
                Create Account
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline">
                  Login Here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
