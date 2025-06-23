

import React from 'react';
import { 
  Download, 
  CreditCard, 
  FileText, 
  AlertCircle,
  Award
} from 'lucide-react';

// --- Reusable UI Components ---
const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl overflow-hidden bg-white ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 border-b border-gray-200 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Badge = ({ children, className = '' }) => (
  <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 ${className}`}>
    {children}
  </span>
);

const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition';
  const variants = {
    default: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };
  const sizes = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1 text-xs',
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Tabs = ({ children, defaultValue, className = '' }) => (
  <div className={className}>{children}</div>
);

const TabsList = ({ children, className = '' }) => (
  <div className={`flex space-x-2 ${className}`}>{children}</div>
);

const TabsTrigger = ({ children, value }) => (
  <button
    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
    onClick={() => {
      const content = document.getElementById(`tab-${value}`);
      document.querySelectorAll('[id^=tab-]').forEach(tab => tab.style.display = 'none');
      if (content) content.style.display = 'block';
    }}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, className = '' }) => (
  <div id={`tab-${value}`} className={`${className}`} style={{ display: value === 'fees' ? 'block' : 'none' }}>
    {children}
  </div>
);

// --- Data Constants ---
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

// --- FeeCard Component ---
const FeeCard = ({ course }) => (
  <Card className="border border-gray-200">
    <CardHeader className="flex flex-row justify-between items-center pb-2">
      <CardTitle>{course.course}</CardTitle>
      <Badge className="bg-green-100 text-green-800">{course.totalFee}</Badge>
    </CardHeader>
    <CardContent className="pt-0 space-y-4">
      {/* Yearly & Total */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Yearly Fee</p>
          <p className="font-semibold text-gray-800">{course.yearlyFee}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Program Fee</p>
          <p className="font-semibold text-gray-800">{course.totalFee}</p>
        </div>
      </div>
      {/* Breakdown */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">Fee Breakdown (Yearly):</p>
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex justify-between"><span>Tuition</span><span>{course.breakdown.tuition}</span></div>
          <div className="flex justify-between"><span>Hostel</span><span>{course.breakdown.hostel}</span></div>
          <div className="flex justify-between"><span>Mess</span><span>{course.breakdown.mess}</span></div>
          <div className="flex justify-between"><span>Other</span><span>{course.breakdown.other}</span></div>
        </div>
      </div>
      {/* Scholarship */}
      {course.scholarships && (
        <div className="pt-3 border-t border-gray-200 flex items-center gap-2 text-sm text-blue-600 font-medium">
          <Award className="w-4 h-4" />
          {course.scholarships}
        </div>
      )}
    </CardContent>
  </Card>
);

// --- FeeStructure Page ---
const FeeStructure = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Fee Structure & Prospectus</h1>
        <p className="text-xl text-gray-600 mb-8">Complete fee details, payment options, and downloadable prospectus</p>

        <Card className="mb-8 border-l-4 border-blue-500 bg-blue-50">
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

        <Tabs defaultValue="fees">
          <TabsList className="grid grid-cols-4 gap-2 mb-6">
            <TabsTrigger value="fees">Fee Structure</TabsTrigger>
            <TabsTrigger value="payment">Payment Options</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="prospectus">Prospectus</TabsTrigger>
          </TabsList>

          {/* Fee Structure */}
          <TabsContent value="fees" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Undergraduate Programs</h3>
                {ugFees.map((c, i) => <FeeCard key={i} course={c} />)}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Postgraduate Programs</h3>
                {pgFees.map((c, i) => <FeeCard key={i} course={c} />)}
              </div>
            </div>
          </TabsContent>

          {/* Payment Options */}
          <TabsContent value="payment" className="space-y-6">
            <h3 className="text-xl font-semibold">Payment Methods</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {paymentOptions.map((p, i) => (
                <Card key={i}>
                  <CardContent className="p-6 text-center">
                    <p.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold">{p.method}</h4>
                    <p className="text-sm text-gray-600">{p.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{p.charges}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Scholarships */}
          <TabsContent value="scholarships" className="grid md:grid-cols-2 gap-6">
            {scholarships.map((s, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{s.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"><strong>Eligibility:</strong> {s.eligibility}</p>
                  <p className="text-sm"><strong>Amount:</strong> {s.amount}</p>
                  <p className="text-sm"><strong>Duration:</strong> {s.duration}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Prospectus */}
          <TabsContent value="prospectus" className="grid md:grid-cols-2 gap-6">
            {prospectusLinks.map((d, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-start space-x-4">
                  <FileText className="w-8 h-8 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{d.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{d.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500 space-x-3">
                        <span>{d.size}</span>
                        <span>{d.pages}</span>
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FeeStructure;
