
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/use-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    captcha: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded credentials for frontend-only authentication
  const validCredentials = [
    { email: 'admin@university.edu', password: 'Admin@123', role: 'admin' },
    { email: 'student@university.edu', password: 'Student@123', role: 'student' },
    { email: 'APP123456', password: 'Password@123', role: 'applicant' },
    { email: 'test@test.com', password: 'Test@1234', role: 'student' }
  ];

  const validateForm = () => {
    const newErrors  = {};

    if (!formData.email) {
      newErrors.email = 'Email or Application Number is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email) && !/^APP\d{6,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email or application number (APP followed by 6+ digits)';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.captcha) {
      newErrors.captcha = 'Please complete the captcha';
    } else if (formData.captcha.toUpperCase() !== '7X9K2P') {
      newErrors.captcha = 'Invalid captcha code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e ) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      // Check credentials against hardcoded values
      const user = validCredentials.find(
        cred => cred.email === formData.email && cred.password === formData.password
      );

      if (user) {
        // Store user data in localStorage if "Remember Me" is checked
        if (formData.rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify({
            email: user.email,
            role: user.role
          }));
        }

        // Store current session
        sessionStorage.setItem('currentUser', JSON.stringify({
          email: user.email,
          role: user.role,
          loginTime: new Date().toISOString()
        }));

        toast({
          title: "Login Successful! 🎉",
          description: `Welcome back! Redirecting to your ${user.role} dashboard...`,
        });

        // Redirect to dashboard after showing success message
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please check your email and password.",
          variant: "destructive",
        });
      }

      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (field , value ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev ) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 animate-pulse animation-delay-300" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl opacity-25 animate-pulse animation-delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="backdrop-blur-lg bg-white/90 border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-4">
              <Link to="/" className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Student Login Portal
                </CardTitle>
                <p className="text-gray-600 mt-2">Access your admission application</p>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="bg-blue-50 p-3 rounded-lg text-left text-xs">
              <p className="font-semibold text-blue-800 mb-1">Demo Credentials:</p>
              <p className="text-blue-700">Email: student@university.edu</p>
              <p className="text-blue-700">Password: Student@123</p>
              <p className="text-blue-700">Captcha: 7X9K2P</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email/Username Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email or Application Number
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter email or APP123456"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                <p className="text-xs text-gray-500">
                  Minimum 8 characters with uppercase, numbers, and symbols
                </p>
              </div>

              {/* Captcha */}
              <div className="space-y-2">
                <Label htmlFor="captcha" className="text-sm font-medium">
                  Security Verification
                </Label>
                <div className="bg-gray-100 p-4 rounded-lg border-2 border-dashed border-gray-300 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded font-mono text-lg tracking-wider">
                    7X9K2P
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Enter the code above</p>
                </div>
                <Input
                  id="captcha"
                  type="text"
                  placeholder="Enter captcha code"
                  value={formData.captcha}
                  onChange={(e) => handleInputChange('captcha', e.target.value)}
                  className={errors.captcha ? 'border-red-500' : ''}
                  disabled={isLoading}
                />
                {errors.captcha && <p className="text-red-500 text-xs">{errors.captcha}</p>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => handleInputChange('rememberMe', !!checked)}
                    disabled={isLoading}
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging in...' : 'Login to Portal'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50"
                disabled={isLoading}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50"
                disabled={isLoading}
              >
                <svg className="w-4 h-4 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </Button>
            </div>

            {/* Registration Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                New to the portal?{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline">
                  Register Here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
