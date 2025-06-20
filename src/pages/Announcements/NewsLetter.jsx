import  React from "react";

import { useState } from "react"

import { Button, buttonVariants } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import {
  Search,
  Calendar,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Mail,
  ArrowRight,
  Filter,
  Star,
  Eye,
  Download,
} from "lucide-react"

function NewsLetter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [email, setEmail] = useState("")

  const categories = [
    { id: "all", name: "All", icon: BookOpen },
    { id: "academics", name: "Academics", icon: Award },
    { id: "research", name: "Research", icon: TrendingUp },
    { id: "campus", name: "Campus Life", icon: Users },
    { id: "events", name: "Events", icon: Calendar },
  ]

  const featuredNewsletter = {
    id: 1,
    title: "Innovation in Higher Education: AI and the Future of Learning",
    description:
      "Exploring how artificial intelligence is transforming educational experiences and preparing students for tomorrow's challenges.",
    date: "December 15, 2024",
    category: "Research",
    author: "Dr. Sarah Chen",
    authorImage: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min read",
    views: "2.4k",
    featured: true,
  }

  const newsletters = [
    {
      id: 2,
      title: "Student Success Stories: Celebrating Academic Excellence",
      description:
        "Highlighting outstanding achievements from our student body across various disciplines and programs.",
      date: "December 10, 2024",
      category: "Academics",
      author: "Prof. Michael Rodriguez",
      authorImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 min read",
      views: "1.8k",
    },
    {
      id: 3,
      title: "Campus Sustainability Initiative: Going Green Together",
      description: "Our comprehensive approach to environmental responsibility and sustainable campus operations.",
      date: "December 8, 2024",
      category: "Campus Life",
      author: "Dr. Emily Watson",
      authorImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "6 min read",
      views: "1.2k",
    },
    {
      id: 4,
      title: "Upcoming Research Symposium: Breakthrough Discoveries",
      description: "Join us for presentations on cutting-edge research from our faculty and graduate students.",
      date: "December 5, 2024",
      category: "Events",
      author: "Dr. James Liu",
      authorImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "4 min read",
      views: "956",
    },
    {
      id: 5,
      title: "Digital Library Expansion: New Resources Available",
      description: "Discover the latest additions to our digital collection and enhanced research capabilities.",
      date: "December 3, 2024",
      category: "Academics",
      author: "Lisa Thompson",
      authorImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "3 min read",
      views: "743",
    },
    {
      id: 6,
      title: "International Exchange Program Updates",
      description: "New partnerships and opportunities for global learning experiences.",
      date: "November 28, 2024",
      category: "Campus Life",
      author: "Dr. Anna Kowalski",
      authorImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "7 min read",
      views: "1.5k",
    },
  ]

  const filteredNewsletters = newsletters.filter((newsletter) => {
    const matchesSearch =
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || newsletter.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">University Newsletter</h1>
                <p className="text-sm text-slate-600">Stay informed, stay connected</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section - Featured Newsletter */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    {featuredNewsletter.category}
                  </Badge>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">{featuredNewsletter.title}</h2>
                <p className="text-lg text-blue-100 leading-relaxed">{featuredNewsletter.description}</p>
                <div className="flex items-center space-x-6 text-sm text-blue-100">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={featuredNewsletter.authorImage || "/placeholder.svg"} />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <span>{featuredNewsletter.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredNewsletter.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{featuredNewsletter.views}</span>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block">
                <img
                  src={featuredNewsletter.image || "/placeholder.svg"}
                  alt={featuredNewsletter.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search newsletters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-slate-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
                    >
                      <Icon className="w-3 h-3 mr-1" />
                      {category.name}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Grid */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNewsletters.map((newsletter) => (
              <Card
                key={newsletter.id}
                className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-slate-200 hover:border-blue-200"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={newsletter.image || "/placeholder.svg"}
                    alt={newsletter.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-slate-700">
                      {newsletter.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {newsletter.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 leading-relaxed">
                    {newsletter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Avatar className="w-4 h-4">
                          <AvatarImage src={newsletter.authorImage || "/placeholder.svg"} />
                          <AvatarFallback>
                            {newsletter.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span>{newsletter.author}</span>
                      </div>
                      <span>•</span>
                      <span>{newsletter.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{newsletter.views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{newsletter.readTime}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Read
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h3>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Get the latest news, research updates, and campus events delivered directly to your inbox. Join our
              community of informed students, faculty, and alumni.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
              />
              <Button type="submit" size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                Subscribe Now
              </Button>
            </form>
            <p className="text-sm text-blue-200 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">University Newsletter</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Connecting our university community through timely news, research highlights, and campus updates. Stay
                informed about what matters most.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Archive
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Campus Life
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 University Newsletter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default NewsLetter;