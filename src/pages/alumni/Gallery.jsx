
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { 
  ArrowLeft, 
  Search, 
  Calendar, 
  MapPin, 
  Users, 
  Download,
  Share2,
  Heart,
  ZoomIn,
  Filter
} from "lucide-react";

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [favorites, setFavorites] = useState([]);

  const galleryItems = [
    {
      id: 1,
      title: "Annual Reunion 2023",
      year: "2023",
      category: "reunion",
      location: "University Campus",
      attendees: 500,
      images: [
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"
      ],
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      description: "A memorable reunion bringing together alumni from different generations"
    },
    {
      id: 2,
      title: "Tech Conference 2023",
      year: "2023",
      category: "conference",
      location: "Downtown Center",
      attendees: 200,
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
      ],
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "Alumni sharing their tech expertise and innovations"
    },
    {
      id: 3,
      title: "Sports Day 2023",
      year: "2023",
      category: "sports",
      location: "University Stadium",
      attendees: 300,
      images: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop"
      ],
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      description: "Annual sports meet with competitive spirit and team building"
    },
    {
      id: 4,
      title: "Graduation Ceremony 2022",
      year: "2022",
      category: "graduation",
      location: "Main Auditorium",
      attendees: 800,
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
      ],
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      description: "Celebrating the achievements of our newest graduates"
    },
    {
      id: 5,
      title: "Cultural Fest 2022",
      year: "2022",
      category: "cultural",
      location: "Campus Grounds",
      attendees: 1000,
      images: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b6cb?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop"
      ],
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b6cb?w=600&h=400&fit=crop",
      description: "A vibrant celebration of arts, culture, and traditions"
    },
    {
      id: 6,
      title: "Networking Mixer 2022",
      year: "2022",
      category: "networking",
      location: "Hotel Grand Ballroom",
      attendees: 150,
      images: [
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop"
      ],
      thumbnail: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
      description: "Professional networking event fostering career connections"
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = selectedFilter === "all" || item.category === selectedFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openLightbox = (item, imageIndex = 0) => {
    setSelectedImage({
      ...item,
      currentImageIndex: imageIndex
    });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.currentImageIndex;
    const totalImages = selectedImage.images.length;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(prev => ({
      ...prev,
      currentImageIndex: newIndex
    }));
  };

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
              <h1 className="text-xl font-bold text-gray-900">Memories Gallery</h1>
            </div>
            <Button className="bg-alumni-500 hover:bg-alumni-600">
              Upload Photos
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-alumni-500 to-alumni-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Memories Gallery
          </h1>
          <p className="text-xl mb-8 text-alumni-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Relive the moments that made our journey special
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold">{galleryItems.length}</div>
              <div className="text-alumni-100">Photo Collections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">
                {galleryItems.reduce((sum, item) => sum + item.images.length, 0)}
              </div>
              <div className="text-alumni-100">Total Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">
                {galleryItems.reduce((sum, item) => sum + item.attendees, 0)}
              </div>
              <div className="text-alumni-100">People Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search memories by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-10 border-alumni-200 focus:border-alumni-500 focus:ring-alumni-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "all", label: "All" },
                { value: "reunion", label: "Reunions" },
                { value: "graduation", label: "Graduations" },
                { value: "conference", label: "Conferences" },
                { value: "cultural", label: "Cultural" },
                { value: "sports", label: "Sports" },
                { value: "networking", label: "Networking" }
              ].map((filter) => (
                <Button
                  key={filter.value}
                  variant={selectedFilter === filter.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.value)}
                  className={selectedFilter === filter.value ? "bg-alumni-500 hover:bg-alumni-600" : ""}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No memories found</h3>
              <p className="text-gray-600">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => openLightbox(item)}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => openLightbox(item)}
                        >
                          <ZoomIn className="w-4 h-4 mr-2" />
                          View Gallery
                        </Button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-alumni-500 text-white capitalize">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-8 h-8 p-0 bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(item.id);
                          }}
                        >
                          <Heart 
                            className={`w-4 h-4 ${
                              favorites.includes(item.id) 
                                ? "text-red-500 fill-red-500" 
                                : "text-gray-600"
                            }`} 
                          />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {item.images.length} photos
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.year}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {item.attendees} people
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => openLightbox(item)}
                        >
                          View All
                        </Button>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                            <Download className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
          {selectedImage && (
            <>
              <DialogHeader className="p-4 border-b">
                <DialogTitle className="flex items-center justify-between">
                  <span>{selectedImage.title}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">
                      {selectedImage.currentImageIndex + 1} of {selectedImage.images.length}
                    </Badge>
                    <Button size="sm" variant="ghost" onClick={closeLightbox}>
                      ×
                    </Button>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 relative">
                <img 
                  src={selectedImage.images[selectedImage.currentImageIndex]} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                {selectedImage.images.length > 1 && (
                  <>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={() => navigateImage('prev')}
                    >
                      ←
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={() => navigateImage('next')}
                    >
                      →
                    </Button>
                  </>
                )}
              </div>
              <div className="p-4 border-t bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{selectedImage.year}</span>
                    <span>{selectedImage.location}</span>
                    <span>{selectedImage.attendees} people</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
