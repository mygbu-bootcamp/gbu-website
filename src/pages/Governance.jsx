import React, { useState } from 'react';
import { Crown, Users, Building, GraduationCap, DollarSign, User } from 'lucide-react';

const UniversityGovernance = () => {
  const [activeTab, setActiveTab] = useState('finance');

  const governanceData = {
    finance: {
      title: 'Finance Committee',
      icon: <DollarSign className="w-6 h-6" />,
      members: [
        { id: 'MJ', name: 'Dr. M.K. Jain', role: 'Chief Finance Officer', color: 'bg-purple-500' },
        { id: 'ST', name: 'Mr. S.K. Tiwari', role: 'Accounts Officer', color: 'bg-blue-500' },
        { id: 'RSH', name: 'Ms. R. Sharma', role: 'Audit Officer', color: 'bg-pink-500' },
        { id: 'PY', name: 'Mr. P.L. Yadav', role: 'Budget Officer', color: 'bg-green-500' }
      ]
    },
    executive: {
      title: 'Executive Council',
      icon: <Crown className="w-6 h-6" />,
      members: [
        { id: 'YA', name: 'Yogi Adityanath', role: 'Chancellor', color: 'bg-red-500' },
        { id: 'RS', name: 'Prof. R.K. Singh', role: 'Vice Chancellor', color: 'bg-indigo-500' },
        { id: 'AV', name: 'Mr. A.B. Verma', role: 'Registrar', color: 'bg-teal-500' },
        { id: 'MJ', name: 'Dr. M.K. Jain', role: 'Finance Officer', color: 'bg-purple-500' }
      ]
    },
    academic: {
      title: 'Academic Council',
      icon: <GraduationCap className="w-6 h-6" />,
      members: [
        { id: 'RS', name: 'Prof. R.K. Singh', role: 'Chairman', color: 'bg-indigo-500' },
        { id: 'AS', name: 'Prof. A.K. Sharma', role: 'Dean, Engineering', color: 'bg-emerald-500' },
        { id: 'PG', name: 'Dr. P.K. Gupta', role: 'Dean, Management', color: 'bg-orange-500' },
        { id: 'SM', name: 'Prof. S.N. Mishra', role: 'Dean, Sciences', color: 'bg-cyan-500' }
      ]
    }
  };

  const organizationalStructure = [
    { name: 'Chancellor', person: 'Shri M. Yogi Adityanath', color: 'bg-red-100 border-red-300', icon: <Crown className="w-5 h-5 text-red-600" /> },
    { name: 'Vice Chancellor', person: 'Prof. R.K. Singh', color: 'bg-blue-100 border-blue-300', icon: <User className="w-5 h-5 text-blue-600" /> },
    { name: 'Dean, Engineering', person: 'Prof. A.K. Sharma', color: 'bg-green-100 border-green-300', icon: <Building className="w-5 h-5 text-green-600" /> },
    { name: 'Dean, Management', person: 'Dr. P.K. Gupta', color: 'bg-yellow-100 border-yellow-300', icon: <Building className="w-5 h-5 text-yellow-600" /> },
    { name: 'Dean, Sciences', person: 'Prof. S.N. Mishra', color: 'bg-purple-100 border-purple-300', icon: <Building className="w-5 h-5 text-purple-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Governance & Committees
          </h1>
          <p className="text-xl text-blue-100 font-light">
            Leadership Structure and Academic Governance
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">University Governance</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(governanceData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {data.icon}
                {data.title}
              </button>
            ))}
          </div>

          {/* Active Committee Members */}
          <div className="transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full">
                {governanceData[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{governanceData[activeTab].title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {governanceData[activeTab].members.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 text-center">
                    <div className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg`}>
                      {member.id}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{member.name}</h4>
                    <p className="text-gray-600 text-sm font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Organizational Structure</h2>
          
          <div className="flex flex-col items-center space-y-6">
            {organizationalStructure.map((position, index) => (
              <div key={index} className="w-full max-w-md">
                <div className={`${position.color} border-2 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    {position.icon}
                    <h3 className="font-bold text-lg text-gray-800">{position.name}</h3>
                  </div>
                  <p className="text-gray-700 font-medium">{position.person}</p>
                </div>
                
                {index < organizationalStructure.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default UniversityGovernance;