
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Quote, ArrowLeft, Star, Award, TrendingUp, Users, Calendar, ExternalLink } from "lucide-react";

const SuccessStories = () => {
  const [selectedCategory, setSelectedCategory] =
useState("all");

  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      batch: "2018",
      branch: "Computer Science",
      currentRole: "Senior Software Engineer at Google",
      category: "technology",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      story: "From a small town dreamer to working at one of the world's biggest tech companies, Sarah's journey is truly inspiring. She started coding in her first year and never looked back.",
      fullStory: "Sarah Johnson's journey from a small-town student to a Senior Software Engineer at Google is a testament to dedication and continuous learning. During her time at university, she participated in numerous hackathons, contributed to open-source projects, and maintained a strong academic record. Her breakthrough came during her final year when she developed an AI-powered application that caught the attention of tech recruiters. Today, she leads a team of 15 engineers working on Google's core search algorithms.",
      achievements: [
        "Led development of Google's new search algorithm",
        "Published 5 research papers in top-tier conferences",
        "Mentored 50+ junior engineers",
        "Keynote speaker at Google I/O 2023"
      ],
      quote: "The university gave me not just knowledge, but the confidence to dream big and the skills to make those dreams reality.",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      featured: true,
      readTime: "5 min read"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      batch: "2016",
      branch: "Biomedical Engineering",
      currentRole: "Chief Medical Officer at MedTech Innovations",
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      story: "Michael revolutionized patient care through his innovative medical devices. His startup has now saved thousands of lives and is valued at over $100 million.",
      fullStory: "Dr. Michael Chen combined his engineering background with medical expertise to create life-saving medical devices. His company, MedTech Innovations, developed a revolutionary heart monitoring system that can predict cardiac events 24 hours in advance. The company went from a garage startup to a $100M valuation in just 4 years, with their devices now used in over 500 hospitals worldwide.",
      achievements: [
        "Developed AI-powered cardiac monitoring system",
        "Raised $50M in Series B funding",
        "FDA approval for 3 medical devices",
        "Featured in Time Magazine's 'Top Innovators Under 40'"
      ],
      quote: "Engineering principles applied to healthcare can literally save lives. That's what drives me every day.",
      linkedin: "https://linkedin.com/in/michaelchen",
      featured: true,
      readTime: "6 min read"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      batch: "2019",
      branch: "Data Science",
      currentRole: "VP of Data Science at Netflix",
      category: "technology",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      story: "Emily's data science expertise helped Netflix personalize content for millions of users. Her algorithms have increased user engagement by 40%.",
      fullStory: "Emily Rodriguez joined Netflix as a junior data scientist and rapidly climbed the ranks due to her innovative approach to recommendation algorithms. Her work on personalization engines has been instrumental in Netflix's global expansion strategy. She now leads a team of 30+ data scientists and her algorithms serve over 200 million subscribers worldwide.",
      achievements: [
        "Improved Netflix recommendation accuracy by 40%",
        "Led data science team expansion across 5 countries",
        "Published breakthrough research on ML personalization",
        "Speaker at 20+ international data science conferences"
      ],
      quote: "Data science is about understanding human behavior at scale. Every algorithm we build impacts millions of lives.",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      featured: false,
      readTime: "4 min read"
    },
    {
      id: 4,
      name: "Alex Thompson",
      batch: "2015",
      branch: "Business Administration",
      currentRole: "CEO & Founder of EcoTech Solutions",
      category: "entrepreneurship",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      story: "Alex built a sustainable technology company from scratch, now employing 200+ people and reducing carbon emissions by millions of tons annually.",
      fullStory: "Alex Thompson founded EcoTech Solutions with a mission to combat climate change through innovative technology. Starting with solar panel optimization software, the company has expanded to comprehensive renewable energy solutions. Under Alex's leadership, EcoTech has helped reduce global carbon emissions by over 2 million tons and has been recognized as one of the fastest-growing clean tech companies.",
      achievements: [
        "Grew company from 2 to 200+ employees in 5 years",
        "Secured $75M in Series C funding",
        "Winner of 'Green Tech Entrepreneur of the Year'",
        "Company valued at $500M in latest funding round"
      ],
      quote: "Business should be a force for good. We're proving that profitability and sustainability go hand in hand.",
      linkedin: "https://linkedin.com/in/alexthompson",
      featured: true,
      readTime: "7 min read"
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      batch: "2017",
      branch: "Chemical Engineering",
      currentRole: "Research Director at Pharmaceutical Giants Inc.",
      category: "research",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6cb?w=400&h=400&fit=crop&crop=face",
      story: "Priya's groundbreaking research in drug development has led to 3 FDA-approved medications that treat rare diseases affecting children.",
      fullStory: "Dr. Priya Patel dedicated her career to developing treatments for rare pediatric diseases. Her research team has successfully brought three life-saving drugs to market, providing hope to thousands of families worldwide. Her work combines cutting-edge chemical engineering with compassionate healthcare, earning her recognition as one of the top researchers in pharmaceutical sciences.",
      achievements: [
        "3 FDA-approved drugs for rare pediatric diseases",
        "Published 40+ peer-reviewed research papers",
        "Recipient of the 'Humanitarian Researcher Award'",
        "Leading a $100M research initiative"
      ],
      quote: "Every child deserves a fighting chance. That's what drives our research every single day.",
      linkedin: "https://linkedin.com/in/priyapatel",
      featured: false,
      readTime: "5 min read"
    },
    {
      id: 6,
      name: "James Williams",
      batch: "2014",
      branch: "Finance",
      currentRole: "Managing Director at Goldman Sachs",
      category: "finance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      story: "James rose through the ranks of Wall Street to become one of the youngest Managing Directors at Goldman Sachs, managing a $2B portfolio.",
      fullStory: "James Williams started his career as an analyst and demonstrated exceptional talent in financial modeling and client relationships. His innovative approach to sustainable investing has attracted major institutional clients and generated over $2B in assets under management. He's now leading Goldman Sachs' ESG investment initiative.",
      achievements: [
        "Youngest MD in Goldman Sachs' history",
        "Manages $2B+ in assets under management",
        "Pioneer in sustainable finance strategies",
        "Keynote speaker at World Economic Forum"
      ],
      quote: "Finance has the power to drive positive change. We're investing in a better future.",
      linkedin: "https://linkedin.com/in/jameswilliams",
      featured: false,
      readTime: "4 min read"
    }
  ];

  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const categories = [
    { value: "all", label: "All Stories", count: successStories.length },
    { value: "technology", label: "Technology", count: successStories.filter(s => s.category === "technology").length },
    { value: "healthcare", label: "Healthcare", count: successStories.filter(s => s.category === "healthcare").length },
    { value: "entrepreneurship", label: "Entrepreneurship", count: successStories.filter(s => s.category === "entrepreneurship").length },
    { value: "research", label: "Research", count: successStories.filter(s => s.category === "research").length },
    { value: "finance", label: "Finance", count: successStories.filter(s => s.category === "finance").length }
  ];

  const filteredStories = selectedCategory === "all" 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory);

  const featuredStories = successStories.filter(story => story.featured);

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
              <h1 className="text-xl font-bold text-gray-900">Success Stories</h1>
            </div>
            <Button className="bg-alumni-500 hover:bg-alumni-600">
              Share Your Story
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-alumni-500 to-alumni-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Success Stories
          </h1>
          <p className="text-xl mb-8 text-alumni-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Celebrating the remarkable achievements of our alumni who are making a difference in the world
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold">{successStories.length}</div>
              <div className="text-alumni-100">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{featuredStories.length}</div>
              <div className="text-alumni-100">Featured Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">6</div>
              <div className="text-alumni-100">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? "bg-alumni-500 hover:bg-alumni-600" : ""}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      {selectedCategory === "all" && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
              <p className="text-gray-600">Spotlight on our most inspiring alumni achievements</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStories.map((story, index) => (
                <Card 
                  key={story.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 relative">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className="capitalize">
                            {story.category}
                          </Badge>
                          <Badge variant="outline" className="text-alumni-600">
                            {story.batch}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{story.currentRole}</p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4 relative">
                          <Quote className="absolute top-2 left-2 w-6 h-6 text-alumni-500 opacity-50" />
                          <p className="text-gray-700 italic pl-8 text-sm leading-relaxed">
                            "{story.quote}"
                          </p>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">{story.story}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{story.readTime}</span>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                            >
                              {expandedStory === story.id ? "Show Less" : "Read More"}
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => window.open(story.linkedin, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        {expandedStory === story.id && (
                          <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                            <p className="text-gray-700 mb-4">{story.fullStory}</p>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {story.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-center text-sm text-gray-600">
                                    <Award className="w-4 h-4 mr-2 text-alumni-500 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Stories Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card 
                key={story.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge variant="secondary" className="capitalize bg-white/90 text-gray-800">
                        {story.category}
                      </Badge>
                      {story.featured && (
                        <Badge className="bg-yellow-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-alumni-600 border-alumni-600">
                        {story.batch}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{story.currentRole}</p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{story.story}</p>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mb-4 relative">
                      <Quote className="absolute top-1 left-1 w-4 h-4 text-alumni-500 opacity-50" />
                      <p className="text-sm text-gray-700 italic pl-6 line-clamp-2">
                        "{story.quote}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{story.readTime}</span>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                        >
                          {expandedStory === story.id ? "Less" : "More"}
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => window.open(story.linkedin, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {expandedStory === story.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                        <p className="text-sm text-gray-700 mb-3">{story.fullStory}</p>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {story.achievements.slice(0, 3).map((achievement, index) => (
                              <li key={index} className="flex items-center text-xs text-gray-600">
                                <Award className="w-3 h-3 mr-2 text-alumni-500 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Share Your Success Story
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Inspire the next generation of alumni by sharing your journey and achievements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-alumni-500 hover:bg-alumni-600">
              <TrendingUp className="w-5 h-5 mr-2" />
              Submit Your Story
            </Button>
            <Button size="lg" variant="outline">
              Story Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
