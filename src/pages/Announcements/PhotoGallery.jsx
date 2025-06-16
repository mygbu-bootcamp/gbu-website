'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, MapPin, Archive, Undo } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const PhotoGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [archivedEvents, setArchivedEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('gallery');
  const [yearFilter, setYearFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  const archiveEvent = (id) => {
    setArchivedEvents((prev) => [...prev, id]);
  };

  const unarchiveEvent = (id) => {
    setArchivedEvents((prev) => prev.filter((eventId) => eventId !== id));
  };

  const events = [
    {
      id: 1,
      title: 'Tech Symposium',
      description: 'An annual gathering of tech enthusiasts.',
      date: '2023-09-15',
      attendees: 120,
      location: 'Auditorium',
      image: 'https://source.unsplash.com/400x200/?tech,symposium',
    },
    {
      id: 2,
      title: 'Art Expo',
      description: 'Exhibition showcasing student artworks.',
      date: '2023-06-20',
      attendees: 85,
      location: 'Art Gallery',
      image: 'https://source.unsplash.com/400x200/?art,expo',
    },
    {
      id: 3,
      title: 'Cultural Fest',
      description: 'A celebration of diverse cultures.',
      date: '2023-11-10',
      attendees: 300,
      location: 'Open Grounds',
      image: 'https://source.unsplash.com/400x200/?culture,fest',
    },
  ];

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const matchesYear = yearFilter ? eventDate.getFullYear().toString() === yearFilter : true;
    const matchesMonth = monthFilter
      ? (eventDate.getMonth() + 1).toString().padStart(2, '0') === monthFilter
      : true;
    const matchesType = typeFilter ? event.title.toLowerCase().includes(typeFilter.toLowerCase()) : true;
    const matchesSearch = searchQuery
      ? event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesYear && matchesMonth && matchesType && matchesSearch;
  });

  const displayedEvents =
    activeTab === 'gallery'
      ? filteredEvents.filter((event) => !archivedEvents.includes(event.id))
      : filteredEvents.filter((event) => archivedEvents.includes(event.id));

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>

      <div className="flex space-x-4 mb-4">
        <Button onClick={() => setActiveTab('gallery')} variant={activeTab === 'gallery' ? 'default' : 'outline'}>
          Gallery
        </Button>
        <Button onClick={() => setActiveTab('archived')} variant={activeTab === 'archived' ? 'default' : 'outline'}>
          Archived
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedEvents.map((event) => (
          <Card
            key={event.id}
            onClick={() => openModal(event)}
            className="cursor-pointer hover:shadow-lg transition-shadow"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-md" />
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">{event.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{event.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  <Calendar className="w-4 h-4 mr-1" /> {event.date}
                </Badge>
                <Badge variant="secondary">
                  <Users className="w-4 h-4 mr-1" /> {event.attendees}
                </Badge>
                <Badge variant="secondary">
                  <MapPin className="w-4 h-4 mr-1" /> {event.location}
                </Badge>
              </div>
              <div className="mt-4">
                {activeTab === 'gallery' ? (
                  <Button onClick={(e) => { e.stopPropagation(); archiveEvent(event.id); }} variant="destructive" size="sm">
                    <Archive className="w-4 h-4 mr-1" /> Archive
                  </Button>
                ) : (
                  <Button onClick={(e) => { e.stopPropagation(); unarchiveEvent(event.id); }} size="sm">
                    <Undo className="w-4 h-4 mr-1" /> Unarchive
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <Button onClick={closeModal} className="absolute top-2 left-2" variant="ghost" size="sm">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{selectedEvent.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Calendar className="w-4 h-4 mr-1" /> {selectedEvent.date}
              </Badge>
              <Badge variant="secondary">
                <Users className="w-4 h-4 mr-1" /> {selectedEvent.attendees}
              </Badge>
              <Badge variant="secondary">
                <MapPin className="w-4 h-4 mr-1" /> {selectedEvent.location}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
