
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { useToast } from "../../hooks/use-toast";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Users,
  Heart,
  DollarSign,
  Lightbulb,
  Send,
  Check
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
    contribution: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "alumni@university.edu",
      description: "Get in touch via email for any queries",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9 AM - 5 PM EST",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 University Ave, Campus Building",
      description: "Alumni Relations Office, 2nd Floor",
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 5:00 PM",
      description: "Weekend appointments available by request",
      color: "bg-orange-500"
    }
  ];

  const contributionOptions = [
    {
      icon: Heart,
      title: "Mentorship",
      description: "Guide current students and recent graduates",
      color: "bg-red-500"
    },
    {
      icon: DollarSign,
      title: "Financial Support",
      description: "Support scholarships and university programs",
      color: "bg-green-500"
    },
    {
      icon: Lightbulb,
      title: "Guest Speaking",
      description: "Share your expertise through talks and workshops",
      color: "bg-yellow-500"
    },
    {
      icon: Users,
      title: "Networking Events",
      description: "Help organize and participate in alumni events",
      color: "bg-blue-500"
    }
  ];

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-alumni-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center animate-scale-in">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-alumni-500 hover:bg-alumni-600">
                <Link to="/">Back to Home</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/network">Explore Alumni Network</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-alumni-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-alumni-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">Contact & Support</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-alumni-500 to-alumni-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl mb-8 text-alumni-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're here to help you stay connected and make the most of your alumni experience
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our alumni relations team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-alumni-600 font-medium mb-2">{info.content}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Contribution Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="w-5 h-5 mr-2 text-alumni-500" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="events">Events & Reunions</SelectItem>
                            <SelectItem value="networking">Networking</SelectItem>
                            <SelectItem value="mentorship">Mentorship</SelectItem>
                            <SelectItem value="donations">Donations</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Brief subject of your message"
                        className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us how we can help you..."
                        className="transition-all duration-200 focus:ring-2 focus:ring-alumni-500 focus:border-alumni-500 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-alumni-500 hover:bg-alumni-600 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contribution Options */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ways to Contribute</h2>
                <p className="text-gray-600">
                  Join us in making a difference in the lives of current and future students
                </p>
              </div>
              <div className="space-y-6">
                {contributionOptions.map((option, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center flex-shrink-0`}>
                          <option.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                          <p className="text-gray-600 mb-3">{option.description}</p>
                          <Button size="sm" variant="outline" className="text-alumni-600 border-alumni-600 hover:bg-alumni-50">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-gradient-to-r from-alumni-500 to-alumni-600 text-white border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Ready to Make an Impact?</h3>
                  <p className="mb-4 text-alumni-100">
                    Your experience and expertise can help shape the future of our university community
                  </p>
                  <Button variant="outline" className="bg-white text-alumni-600 hover:bg-alumni-50 border-white">
                    Get Involved Today
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How can I update my contact information?",
                answer: "You can update your information through the alumni portal or by contacting our office directly."
              },
              {
                question: "How do I get involved in mentorship programs?",
                answer: "Fill out our mentorship application form or contact us to learn about current opportunities."
              },
              {
                question: "Can I organize an alumni event in my city?",
                answer: "Absolutely! We provide support and resources for alumni who want to organize local events."
              },
              {
                question: "How can I support current students?",
                answer: "There are many ways including scholarships, mentorship, guest lectures, and internship opportunities."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
