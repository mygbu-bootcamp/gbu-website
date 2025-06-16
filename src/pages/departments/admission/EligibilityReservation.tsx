
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  Users, 
  BookOpen, 
  Award,
  AlertCircle,
  FileText,
  Percent
} from 'lucide-react';

const EligibilityReservation = () => {
  const ugEligibility = [
    {
      course: "B.Tech",
      academic: "12th with Physics, Chemistry, Mathematics (PCM)",
      minPercentage: "75% (70% for reserved categories)",
      entrance: "JEE Main qualified",
      ageLimit: "Born on or after October 1, 1999"
    },
    {
      course: "B.Sc",
      academic: "12th with Science stream",
      minPercentage: "60% (55% for reserved categories)",
      entrance: "University entrance exam",
      ageLimit: "No age limit"
    },
    {
      course: "B.Com",
      academic: "12th with Commerce/Science",
      minPercentage: "60% (55% for reserved categories)",
      entrance: "Merit-based admission",
      ageLimit: "No age limit"
    },
    {
      course: "B.A",
      academic: "12th from any stream",
      minPercentage: "50% (45% for reserved categories)",
      entrance: "Merit-based admission",
      ageLimit: "No age limit"
    }
  ];

  const pgEligibility = [
    {
      course: "M.Tech",
      academic: "B.Tech/B.E. in relevant field",
      minPercentage: "60% (55% for reserved categories)",
      entrance: "GATE qualified",
      ageLimit: "No age limit"
    },
    {
      course: "M.Sc",
      academic: "B.Sc in relevant field",
      minPercentage: "55% (50% for reserved categories)",
      entrance: "University entrance exam",
      ageLimit: "No age limit"
    },
    {
      course: "MBA",
      academic: "Bachelor's degree in any field",
      minPercentage: "50% (45% for reserved categories)",
      entrance: "CAT/MAT/CMAT/XAT qualified",
      ageLimit: "No age limit"
    }
  ];

  const reservationPolicy = [
    {
      category: "Scheduled Caste (SC)",
      percentage: "15%",
      description: "As per Government of India norms",
      documents: ["Caste Certificate", "Income Certificate", "Domicile Certificate"]
    },
    {
      category: "Scheduled Tribe (ST)",
      percentage: "7.5%",
      description: "As per Government of India norms",
      documents: ["Tribe Certificate", "Income Certificate", "Domicile Certificate"]
    },
    {
      category: "Other Backward Classes (OBC-NCL)",
      percentage: "27%",
      description: "Non-creamy layer candidates only",
      documents: ["OBC Certificate", "Non-creamy Layer Certificate", "Income Certificate"]
    },
    {
      category: "Economically Weaker Section (EWS)",
      percentage: "10%",
      description: "Annual family income below ₹8 lakhs",
      documents: ["EWS Certificate", "Income Certificate", "Asset Declaration"]
    },
    {
      category: "Persons with Disabilities (PwD)",
      percentage: "5%",
      description: "Horizontal reservation across all categories",
      documents: ["Disability Certificate", "Medical Certificate"]
    }
  ];

  const specialCategories = [
    {
      category: "Sports Quota",
      percentage: "3%",
      criteria: "State/National level sports achievements",
      documents: ["Sports Achievement Certificate", "Participation Certificate"]
    },
    {
      category: "Defence Personnel",
      percentage: "2%",
      criteria: "Children of serving/retired defence personnel",
      documents: ["Service Certificate", "Identity Card"]
    },
    {
      category: "Kashmiri Migrants",
      percentage: "Special Provisions",
      criteria: "As per Government guidelines",
      documents: ["Migration Certificate", "Domicile Certificate"]
    }
  ];

  const EligibilityCard = ({ course }) => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{course.course}</span>
          <Badge variant="outline">{course.minPercentage}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Academic Qualification</p>
              <p className="text-gray-600">{course.academic}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Award className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Entrance Exam</p>
              <p className="text-gray-600">{course.entrance}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="w-5 h-5 text-purple-600 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Age Limit</p>
              <p className="text-gray-600">{course.ageLimit}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ReservationCard = ({ category }) => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{category.category}</span>
          <Badge className="bg-blue-100 text-blue-800">{category.percentage}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-gray-600">{category.description}</p>
          <div>
            <p className="font-medium text-gray-900 mb-2">Required Documents:</p>
            <ul className="space-y-1">
              {category.documents.map((doc, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Eligibility & Reservation</h1>
          <p className="text-xl text-gray-600">Complete information about admission criteria and reservation policy</p>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-l-4 border-l-orange-500 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-orange-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-900 mb-2">Important Notice</h3>
                <p className="text-orange-800">
                  All percentage calculations are based on the best of four subjects. Reserved category candidates 
                  get 5% relaxation in minimum qualifying marks. Age relaxation of 5 years for SC/ST and 3 years 
                  for OBC candidates where applicable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="eligibility" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="eligibility">Eligibility Criteria</TabsTrigger>
            <TabsTrigger value="reservation">Reservation Policy</TabsTrigger>
            <TabsTrigger value="special">Special Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="eligibility" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Undergraduate Programs</h3>
                {ugEligibility.map((course, index) => (
                  <EligibilityCard key={index} course={course} />
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Postgraduate Programs</h3>
                {pgEligibility.map((course, index) => (
                  <EligibilityCard key={index} course={course} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reservation" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reservation Categories</h3>
              <p className="text-gray-600 mb-6">
                Reservation is provided as per Government of India norms and state government guidelines. 
                All certificates must be issued by competent authorities and be valid at the time of admission.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {reservationPolicy.map((category, index) => (
                <ReservationCard key={index} category={category} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="special" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Categories & Quotas</h3>
              <p className="text-gray-600 mb-6">
                Additional reservations and special provisions for specific categories as per university and government policies.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {specialCategories.map((category, index) => (
                <ReservationCard key={index} category={category} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EligibilityReservation;
