
import React from 'react';
import { Heart, Shield, Phone, Clock } from 'lucide-react';

const HealthWellness = () => {
  const services = [
    {
      name: 'Medical Center',
      icon: Heart,
      description: 'On-campus medical facility with qualified doctors',
      hours: '24/7 Emergency, 9 AM - 6 PM Regular'
    },
    {
      name: 'Mental Health Support',
      icon: Shield,
      description: 'Counseling and psychological support services',
      hours: 'Mon-Fri: 10 AM - 5 PM'
    },
    {
      name: 'Emergency Services',
      icon: Phone,
      description: 'Round-the-clock emergency medical assistance',
      hours: '24/7 Available'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Health & Wellness
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your health and well-being are our top priority. Access comprehensive healthcare services and wellness programs on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{service.name}</h3>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <div className="flex items-center justify-center text-sm text-blue-600">
                <Clock className="w-4 h-4 mr-2" />
                {service.hours}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Phone className="w-6 h-6 text-red-600 mr-3" />
            <h3 className="text-xl font-bold text-red-800">Emergency Contacts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-900">Medical Emergency</p>
              <p className="text-red-600 font-bold text-lg">108 / +91-XXX-XXX-XXXX</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Campus Security</p>
              <p className="text-red-600 font-bold text-lg">+91-XXX-XXX-XXXX</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">General Medicine</p>
                  <p className="text-gray-600 text-sm">Routine check-ups and common illness treatment</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Preventive Care</p>
                  <p className="text-gray-600 text-sm">Vaccinations and health screenings</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Mental Health</p>
                  <p className="text-gray-600 text-sm">Counseling and psychological support</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Health Education</p>
                  <p className="text-gray-600 text-sm">Wellness workshops and health awareness</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Wellness Programs</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Fitness Programs</h4>
                <p className="text-gray-600 text-sm">Gym, yoga, and fitness classes</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Nutrition Counseling</h4>
                <p className="text-gray-600 text-sm">Dietary guidance and meal planning</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Stress Management</h4>
                <p className="text-gray-600 text-sm">Techniques for academic stress relief</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">Health Workshops</h4>
                <p className="text-gray-600 text-sm">Regular sessions on health topics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWellness;
