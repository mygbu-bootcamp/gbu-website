import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Eye, Download, Users, Award, Building, Shield, FileText, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

const FundedProjects = () => {
  const [activeAccordion, setActiveAccordion] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const fundedProjects = [
    {
      id: 1,
      title: "AI-Powered Climate Change Modeling for Agricultural Sustainability",
      pi: "Dr. Ramesh Kumar",
      coPi: "Dr. Priya Sharma, Dr. Amit Singh",
      fundingAgency: "Department of Science & Technology (DST)",
      agencyLogo: "/placeholder.svg",
      amount: "₹45.2 Lakhs",
      duration: "3 years (2022-2025)",
      status: "Ongoing",
      category: "Climate Research",
      description: "Development of machine learning models to predict climate change impacts on crop yields and recommend adaptive farming strategies.",
      abstract: "This project aims to develop advanced AI algorithms that can accurately predict climate change impacts on agricultural systems. The research focuses on creating machine learning models that integrate weather data, soil conditions, and crop characteristics to provide actionable insights for farmers and policymakers."
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Drug Discovery",
      pi: "Dr. Neha Verma",
      coPi: "Dr. Sanjay Gupta",
      fundingAgency: "Indian Council of Medical Research (ICMR)",
      agencyLogo: "/placeholder.svg",
      amount: "₹38.7 Lakhs",
      duration: "4 years (2023-2027)",
      status: "Ongoing",
      category: "Biotechnology",
      description: "Leveraging quantum algorithms to accelerate the drug discovery process for treating rare genetic diseases.",
      abstract: "This groundbreaking research explores the potential of quantum computing in pharmaceutical research, specifically targeting the acceleration of drug discovery processes for rare genetic diseases that affect millions worldwide."
    },
    {
      id: 3,
      title: "Smart Grid Integration with Renewable Energy Sources",
      pi: "Dr. Vikash Patel",
      coPi: "Dr. Kavita Jain, Dr. Rohit Agarwal",
      fundingAgency: "Ministry of New and Renewable Energy (MNRE)",
      agencyLogo: "/placeholder.svg",
      amount: "₹52.1 Lakhs",
      duration: "3 years (2023-2026)",
      status: "Ongoing",
      category: "Energy Systems",
      description: "Development of intelligent grid systems for optimal integration of solar and wind energy with traditional power infrastructure.",
      abstract: "This project focuses on creating smart grid technologies that can seamlessly integrate renewable energy sources with existing power infrastructure, ensuring optimal energy distribution and grid stability."
    }
  ];

  const successStories = [
    {
      title: "Smart Water Management System",
      patentNo: "IN 2023/DEL/001234",
      inventor: "Dr. Amit Kumar",
      year: "2023",
      description: "IoT-based water quality monitoring and distribution system for urban areas."
    },
    {
      title: "Biodegradable Polymer Synthesis",
      patentNo: "IN 2022/MUM/005678",
      inventor: "Dr. Priya Singh",
      year: "2022",
      description: "Novel method for creating eco-friendly polymers from agricultural waste."
    },
    {
      title: "AI-Powered Medical Diagnosis",
      patentNo: "IN 2023/CHE/009876",
      inventor: "Dr. Rajesh Sharma",
      year: "2023",
      description: "Machine learning algorithm for early detection of cardiovascular diseases."
    }
  ];

  const fundingStats = {
    totalProjects: 75,
    totalFunding: "₹15.2 Crores",
    activeProjects: 45,
    completedProjects: 30,
    agencies: 12,
    patents: 28
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing': return 'bg-blue-500';
      case 'Recently Started': return 'bg-green-500';
      case 'Final Phase': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <>
       <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
  <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">Funded Projects & IPR Cell</h1>
            <p className="lead text-muted">
              Driving Innovation through Sponsored Research and Intellectual Property Protection
            </p>
          </div>
        </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <Card className="text-center bg-primary text-primary-foreground">
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{fundingStats.totalProjects}</div>
              <div className="text-sm">Total Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-green-600 text-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{fundingStats.totalFunding}</div>
              <div className="text-sm">Total Funding</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-blue-600 text-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{fundingStats.activeProjects}</div>
              <div className="text-sm">Active Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-yellow-600 text-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{fundingStats.completedProjects}</div>
              <div className="text-sm">Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gray-600 text-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{fundingStats.agencies}</div>
              <div className="text-sm">Funding Agencies</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-red-600 text-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{fundingStats.patents}</div>
              <div className="text-sm">Patents Filed</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Accordion type="single" value={activeAccordion} onValueChange={setActiveAccordion} className="space-y-4">
          {/* Funded Projects Section */}
          <AccordionItem value="projects" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-primary" />
                <span className="font-semibold">Funded Research Projects</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="climate">Climate Research</SelectItem>
                    <SelectItem value="biotech">Biotechnology</SelectItem>
                    <SelectItem value="energy">Energy Systems</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Agencies" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Agencies</SelectItem>
                    <SelectItem value="dst">DST</SelectItem>
                    <SelectItem value="icmr">ICMR</SelectItem>
                    <SelectItem value="mnre">MNRE</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Search projects..." />
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {fundedProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-primary mb-2">{project.title}</CardTitle>
                          <CardDescription className="text-sm mb-3">{project.description}</CardDescription>
                          <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                        </div>
                        <img src={project.agencyLogo} alt="Agency logo" className="w-12 h-12 object-contain" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <strong>Principal Investigator:</strong> {project.pi}
                        {project.coPi && (
                          <div className="text-sm text-muted-foreground">
                            Co-PI: {project.coPi}
                          </div>
                        )}
                      </div>
                      <div>
                        <strong>Funding Agency:</strong> {project.fundingAgency}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-green-600 font-bold">{project.amount}</div>
                          <div className="text-sm text-muted-foreground">{project.duration}</div>
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{project.title}</DialogTitle>
                              <DialogDescription>
                                Principal Investigator: {project.pi}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2">Project Abstract</h4>
                                <p className="text-muted-foreground">{project.abstract}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <strong>Funding Agency:</strong> {project.fundingAgency}
                                </div>
                                <div>
                                  <strong>Amount:</strong> {project.amount}
                                </div>
                                <div>
                                  <strong>Duration:</strong> {project.duration}
                                </div>
                                <div>
                                  <strong>Status:</strong> {project.status}
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* IPR Cell Section */}
          <AccordionItem value="ipr" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-semibold">Intellectual Property Rights (IPR) Cell</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              {/* About IPR Cell */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">About IPR Cell</h3>
                  <p className="text-muted-foreground mb-4">
                    The Intellectual Property Rights (IPR) Cell at our institution provides comprehensive 
                    support for protecting intellectual property generated through research and innovation. 
                    Our mission is to foster a culture of innovation and help researchers transform their ideas 
                    into protected intellectual assets that benefit society.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>IP Protection & Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Technology Transfer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Industry Collaboration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* IPR Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Patent Filing Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Complete assistance for patent application preparation, filing, and prosecution.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Prior art search
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Patent drafting
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Filing assistance
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      IP Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Comprehensive IP protection strategies for research innovations.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        IP strategy development
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Portfolio management
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Licensing support
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Technology Transfer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Facilitating transfer of university research to industry applications.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Technology evaluation
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Industry partnerships
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Startup formation
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Training & Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Training programs on intellectual property rights and commercialization.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        IP awareness workshops
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Patent writing training
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        Industry interactions
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* IP Process Flow */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>IP Filing Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div className="space-y-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold">
                        1
                      </div>
                      <h4 className="font-semibold">Innovation Disclosure</h4>
                      <p className="text-sm text-muted-foreground">Submit your invention disclosure form</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold">
                        2
                      </div>
                      <h4 className="font-semibold">IP Evaluation</h4>
                      <p className="text-sm text-muted-foreground">Assessment and patentability analysis</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold">
                        3
                      </div>
                      <h4 className="font-semibold">Filing Application</h4>
                      <p className="text-sm text-muted-foreground">Drafting and filing with patent office</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold">
                        4
                      </div>
                      <h4 className="font-semibold">Commercialization</h4>
                      <p className="text-sm text-muted-foreground">Technology transfer and licensing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Stories Carousel */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Patent Success Stories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {successStories.map((story, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                          <Card className="h-full">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-3">
                                <Award className="h-8 w-8 text-yellow-500 mt-1" />
                                <div>
                                  <h4 className="font-semibold text-primary mb-2">{story.title}</h4>
                                  <p className="text-sm text-muted-foreground mb-3">{story.description}</p>
                                  <div className="text-xs space-y-1">
                                    <div><strong>Patent No:</strong> {story.patentNo}</div>
                                    <div><strong>Inventor:</strong> {story.inventor}</div>
                                    <div><strong>Year:</strong> {story.year}</div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Industry Partnership Section */}
        <Card className="mt-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Industry-Academia Collaboration</h3>
                <p className="text-muted-foreground mb-6">
                  We actively seek partnerships with industry to translate our research into 
                  real-world applications. Our collaboration models include sponsored research, 
                  consultancy services, technology licensing, and joint R&D projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3">Collaboration Models:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Sponsored Research</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Joint R&D Projects</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Technology Licensing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Industry Partners:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span className="text-sm">Leading IT Companies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span className="text-sm">Pharmaceutical Firms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span className="text-sm">Manufacturing Industries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Partner With Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Organization Name" />
                  <Input placeholder="Contact Person" />
                  <Input type="email" placeholder="Email Address" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Collaboration Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research">Sponsored Research</SelectItem>
                      <SelectItem value="licensing">Technology Licensing</SelectItem>
                      <SelectItem value="joint">Joint R&D Project</SelectItem>
                      <SelectItem value="consultancy">Consultancy</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full">Submit Inquiry</Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div> 
    </div>
    </>
  );
};

export default FundedProjects;
