
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Users } from 'lucide-react';

const LoginBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            📢 Admissions are now open! Apply before the deadline.
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/student-login" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Student Login</span>
              </Link>
            </Button>
            <Button size="sm" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/admin-login" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Admin Login</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;
