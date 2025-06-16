
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CourseApplications = () => {
  const schoolData = {
    'Engineering': [
      { course: 'B.Tech CSE', applications: 450, approved: 180, pending: 50, rejected: 20 },
      { course: 'B.Tech ECE', applications: 320, approved: 150, pending: 30, rejected: 15 },
      { course: 'M.Tech CSE', applications: 180, approved: 80, pending: 15, rejected: 8 }
    ],
    'ICT': [
      { course: 'BCA', applications: 280, approved: 120, pending: 25, rejected: 10 },
      { course: 'MCA', applications: 200, approved: 90, pending: 20, rejected: 8 }
    ],
    'Management': [
      { course: 'MBA', applications: 280, approved: 120, pending: 25, rejected: 10 },
      { course: 'BBA', applications: 170, approved: 80, pending: 15, rejected: 5 }
    ],
    'Biotechnology': [
      { course: 'B.Sc Biotech', applications: 150, approved: 90, pending: 20, rejected: 5 },
      { course: 'M.Sc Biotech', applications: 120, approved: 70, pending: 10, rejected: 3 }
    ],
    'Law': [
      { course: 'LLB', applications: 200, approved: 100, pending: 15, rejected: 8 },
      { course: 'LLM', applications: 120, approved: 60, pending: 10, rejected: 5 }
    ]
  };

  const [selectedSchool, setSelectedSchool] = React.useState('Engineering');
  const currentData = schoolData[selectedSchool] || schoolData['Engineering'];

  return (
    <div className="space-y-6">
      {/* School Selector */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Course Applications by School</CardTitle>
            <Select value={selectedSchool} onValueChange={setSelectedSchool}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select School" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(schoolData).map((school) => (
                  <SelectItem key={school} value={school}>
                    {school}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="applications" fill="#3b82f6" name="Total Applications" />
                <Bar dataKey="approved" fill="#10b981" name="Approved" />
                <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
                <Bar dataKey="rejected" fill="#ef4444" name="Rejected" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* School Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['photo-1461749280684-dccba630e2f6', 'photo-1487058792275-0ad4aaf24ca7', 'photo-1581091226825-a6a2a5aee158', 'photo-1527576539890-dfa815648363'].map((image, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden h-32">
            <img 
              src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=300&h=200`}
              alt={`School ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Statistics - {selectedSchool}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Course</th>
                  <th className="text-left p-2">Total Applications</th>
                  <th className="text-left p-2">Approved</th>
                  <th className="text-left p-2">Pending</th>
                  <th className="text-left p-2">Rejected</th>
                  <th className="text-left p-2">Approval Rate</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((course, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{course.course}</td>
                    <td className="p-2">{course.applications}</td>
                    <td className="p-2">
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {course.approved}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        {course.pending}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <Badge variant="outline" className="text-red-600 border-red-200">
                        {course.rejected}
                      </Badge>
                    </td>
                    <td className="p-2">
                      {((course.approved / (course.applications - course.pending)) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseApplications;
