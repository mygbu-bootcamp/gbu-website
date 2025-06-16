
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  CreditCard, 
  FileText, 
  AlertCircle,
  CheckCircle,
  Clock,
  Percent,
  Award
} from 'lucide-react';

const FeeStructure = () => {
  const ugFees = [
    {
      course: "B.Tech",
      totalFee: "₹4,80,000",
      yearlyFee: "₹1,20,000",
      breakdown: {
        tuition: "₹80,000",
        hostel: "₹24,000",
        mess: "₹12,000",
        other: "₹4,000"
      },
      scholarships: "Merit-based scholarships available"
    },
    {
      course: "B.Sc",
      totalFee: "₹1,80,000",
      yearlyFee: "₹60,000",
      breakdown: {
        tuition: "₹45,000",
        hostel: "₹24,000",
        mess: "₹12,000",
        other: "₹4,000"
      },
      scholarships: "Need-based scholarships available"
    },
    {
      course: "B.Com",
      totalFee: "₹1,50,000",
      yearlyFee: "₹50,000",
      breakdown: {
        tuition: "₹35,000",
        hostel: "₹24,000",
        mess: "₹12,000",
        other: "₹4,000"
      },
      scholarships: "Merit & need-based scholarships"
    },
    {
      course: "B.A",
      totalFee: "₹1,20,000",
      yearlyFee: "₹40,000",
      breakdown: {
        tuition: "₹25,000",
        hostel: "₹24,000",
        mess: "₹12,000",
        other: "₹4,000"
      },
      scholarships: "Government scholarships available"
    }
  ];

  const pgFees = [
    {
      course: "M.Tech",
      totalFee: "₹3,20,000",
      yearlyFee: "₹1,60,000",
      breakdown: {
        tuition: "₹1,20,000",
        hostel: "₹24,000",
        mess: "₹12,000",
        other: "₹4,000"
      },
      scholarships: "Research assistantships available"
    },
    {
      course: "M.Sc",
      totalFee: "₹2,00,000",
      yearlyFee: "₹1,00,000",
      breakdown: {
        tuition: "₹60,000",
        hostel: "₹24,000",
        mess: "₹12,000",
        other: "₹4,000"
      },
      scholarships: "Merit-based scholarships"
    },
    {
      course: "MBA",
      totalFee: "₹6,00,000",
      yearlyFee: "₹3,00,000",
      breakdown: {
        tuition: "₹2,50,000",
        hostel: "₹30,000",
        mess: "₹15,000",
        other: "₹5,000"
      },
      scholarships: "Industry-sponsored scholarships"
    }
  ];

  const paymentOptions = [
    {
      method: "Online Payment",
      description: "Credit/Debit Cards, Net Banking, UPI",
      charges: "Convenience charges may apply",
      icon: CreditCard
    },
    {
      method: "Demand Draft",
      description: "Drawn in favor of 'University Name'",
      charges: "Bank charges applicable",
      icon: FileText
    },
    {
      method: "Bank Transfer",
      description: "Direct bank transfer to university account",
      charges: "No additional charges",
      icon: CreditCard
    }
  ];

  const scholarships = [
    {
      name: "Merit Scholarship",
      eligibility: "Top 10% students in each program",
      amount: "₹50,000 - ₹1,00,000",
      duration: "Throughout the program"
    },
    {
      name: "Need-based Scholarship",
      eligibility: "Family income < ₹2 lakhs per annum",
      amount: "Up to 50% fee waiver",
      duration: "Renewable annually"
    },
    {
      name: "Sports Scholarship",
      eligibility: "State/National level sports achievements",
      amount: "₹25,000 - ₹75,000",
      duration: "Based on performance"
    },
    {
      name: "Research Assistantship",
      eligibility: "PG/PhD students engaged in research",
      amount: "₹15,000 - ₹25,000 per month",
      duration: "Project duration"
    }
  ];

  const prospectusLinks = [
    {
      title: "Complete Prospectus 2024-25",
      description: "Comprehensive guide with all course details, fees, and admission process",
      size: "2.5 MB",
      pages: "48 pages"
    },
    {
      title: "Fee Structure Document",
      description: "Detailed breakdown of all fees and payment schedules",
      size: "1.2 MB",
      pages: "12 pages"
    },
    {
      title: "Scholarship Guidelines",
      description: "Complete information about available scholarships and application process",
      size: "800 KB",
      pages: "8 pages"
    },
    {
      title: "Hostel Information",
      description: "Accommodation facilities, rules, and fee structure",
      size: "1.5 MB",
      pages: "16 pages"
    }
  ];

  const FeeCard = ({ course }) => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{course.course}</span>
          <Badge className="bg-green-100 text-green-800">{course.totalFee}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Yearly Fee</p>
              <p className="text-lg font-semibold text-gray-900">{course.yearlyFee}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Program Fee</p>
              <p className="text-lg font-semibold text-gray-900">{course.totalFee}</p>
            </div>
          </div>
          
          <div>
            <p className="font-medium text-gray-900 mb-2">Fee Breakdown (Yearly):</p>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Tuition Fee</span>
                <span>{course.breakdown.tuition}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Hostel Fee</span>
                <span>{course.breakdown.hostel}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Mess Fee</span>
                <span>{course.breakdown.mess}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Other Charges</span>
                <span>{course.breakdown.other}</span>
              </div>
            </div>
          </div>
          
          <div className="pt-2 border-t">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-600" />
              <p className="text-sm text-blue-600">{course.scholarships}</p>
            </div>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure & Prospectus</h1>
          <p className="text-xl text-gray-600">Complete fee details, payment options, and downloadable prospectus</p>
        </div>

        {/* Fee Policy Notice */}
        <Card className="mb-8 border-l-4 border-l-blue-500 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Fee Policy</h3>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• Fee structure is subject to revision by the university</li>
                  <li>• Fees once paid are non-refundable except in exceptional cases</li>
                  <li>• Late payment attracts a penalty of ₹100 per day</li>
                  <li>• Fees can be paid in installments as per university guidelines</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="fees" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="fees">Fee Structure</TabsTrigger>
            <TabsTrigger value="payment">Payment Options</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="prospectus">Prospectus</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fees" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Undergraduate Programs</h3>
                {ugFees.map((course, index) => (
                  <FeeCard key={index} course={course} />
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Postgraduate Programs</h3>
                {pgFees.map((course, index) => (
                  <FeeCard key={index} course={course} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="payment" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Methods</h3>
              <p className="text-gray-600 mb-6">
                Multiple payment options are available for your convenience. Choose the method that works best for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentOptions.map((option, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <option.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">{option.method}</h4>
                    <p className="text-gray-600 text-sm mb-2">{option.description}</p>
                    <p className="text-xs text-gray-500">{option.charges}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Payment Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="font-medium">At the time of Admission</span>
                    <span className="text-green-600">50% of Annual Fee</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="font-medium">Before Mid-term Exams</span>
                    <span className="text-green-600">Remaining 50%</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">Late Payment Penalty</span>
                    <span className="text-red-600">₹100 per day</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scholarships" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Scholarships</h3>
              <p className="text-gray-600 mb-6">
                We offer various scholarships to support deserving students. Apply early to increase your chances.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-900">Eligibility</p>
                        <p className="text-gray-600 text-sm">{scholarship.eligibility}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Amount</p>
                        <p className="text-green-600 font-semibold">{scholarship.amount}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Duration</p>
                        <p className="text-gray-600 text-sm">{scholarship.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="prospectus" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download Prospectus</h3>
              <p className="text-gray-600 mb-6">
                Download our comprehensive prospectus and related documents for detailed information about our programs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prospectusLinks.map((doc, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <FileText className="w-8 h-8 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{doc.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-4 text-xs text-gray-500">
                            <span>{doc.size}</span>
                            <span>{doc.pages}</span>
                          </div>
                          <Button size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FeeStructure;
