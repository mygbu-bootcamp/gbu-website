
import React from 'react';

import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Camera, Trophy, Newspaper, Eye, Heart } from 'lucide-react';

const NewsEvents = () => {
  const newsItems = [
    {
      id: 1,
      title: 'GBU Wins National Innovation Challenge',
      summary: 'Students from School of ICT secure first place in national technology innovation competition.',
      date: '2024-03-15',
      category: 'Achievement',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      readTime: '3 min read',
      views: 1250
    },
    {
      id: 2,
      title: 'International Conference on Sustainable Technology',
      summary: 'GBU hosts three-day international conference bringing together global experts in sustainable technology.',
      date: '2024-03-10',
      category: 'Conference',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      readTime: '5 min read',
      views: 890
    },
    {
      id: 3,
      title: 'New Research Center for AI and Machine Learning',
      summary: 'University inaugurates state-of-the-art research center dedicated to artificial intelligence research.',
      date: '2024-03-05',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      readTime: '4 min read',
      views: 2100
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Cultural Festival - Sanskriti 2024',
      date: '2024-04-20',
      time: '10:00 AM',
      venue: 'University Auditorium',
      description: 'Three-day cultural extravaganza featuring performances, competitions, and exhibitions.',
      type: 'Cultural',
      registrationRequired: true
    },
    {
      id: 2,
      title: 'Industry-Academia Interface Summit',
      date: '2024-04-25',
      time: '9:00 AM',
      venue: 'Convention Center',
      description: 'Summit bringing together industry leaders and academic researchers for collaboration.',
      type: 'Academic',
      registrationRequired: true
    },
    {
      id: 3,
      title: 'Sports Week 2024',
      date: '2024-05-01',
      time: '6:00 AM',
      venue: 'Sports Complex',
      description: 'Annual sports week featuring inter-school competitions and athletic events.',
      type: 'Sports',
      registrationRequired: false
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'Convocation Ceremony 2024',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
      category: 'Academic'
    },
    {
      id: 2,
      title: 'Cultural Performance',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      category: 'Cultural'
    },
    {
      id: 3,
      title: 'Research Lab',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
      category: 'Research'
    },
    {
      id: 4,
      title: 'Sports Championship',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      category: 'Sports'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'achievement': return 'bg-green-100 text-green-800';
      case 'conference': return 'bg-blue-100 text-blue-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      case 'cultural': return 'bg-pink-100 text-pink-800';
      case 'academic': return 'bg-indigo-100 text-indigo-800';
      case 'sports': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">News, Events & Gallery</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto animate-fade-in">
            Stay connected with the latest happenings, upcoming events, and memorable moments
            from our vibrant campus community.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">150+</h3>
              <p className="text-gray-600">News Articles</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Annual Events</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">1000+</h3>
              <p className="text-gray-600">Gallery Photos</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Recent updates and achievements from our university</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <article
                key={news.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{new Date(news.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    <span>{news.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.summary}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{news.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>24</span>
                      </div>
                    </div>
                    <Link
                      to={`/news/${news.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting upcoming events</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border border-blue-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.type)}`}>
                    {event.type}
                  </span>
                  {event.registrationRequired && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                      Registration Required
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} at {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <Link
                  to={`/events/${event.id}`}
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <Users className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600">Capturing moments from our vibrant campus life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-bold mb-1">{image.title}</h4>
                    <span className="text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsEvents;
