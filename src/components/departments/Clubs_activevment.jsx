import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const ClubsAchievements = () => {
  const clubs = [
    {
      name: "Robotics Club",
      description:
        "Building autonomous systems and competing in national robotics competitions",
      members: 45,
      category: "Technical",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
    },
    {
      name: "Coding Club",
      description:
        "Programming contests, hackathons, and software development projects",
      members: 120,
      category: "Technical",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
    },
    {
      name: "Innovation Cell",
      description: "Fostering entrepreneurship and supporting startup ideas",
      members: 35,
      category: "Entrepreneurship",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=200&fit=crop",
    },
    {
      name: "Cultural Society",
      description: "Music, dance, drama, and organizing cultural events",
      members: 80,
      category: "Cultural",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop",
    },
    {
      name: "IEEE Student Branch",
      description: "Professional development and technical paper presentations",
      members: 60,
      category: "Professional",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop",
    },
    {
      name: "Sports Committee",
      description:
        "Organizing sports events and representing college in tournaments",
      members: 90,
      category: "Sports",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-college-navy mb-4">
            Student Life
          </h2>
          <p className="text-xl text-gray-600">Excellence beyond academics</p>
        </div>

        {/* Student Clubs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-college-navy mb-8 text-center">
            Student Clubs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white">
                      {club.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-college-navy text-lg">
                    {club.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Members:</span>
                    <span className="font-semibold text-college-blue">
                      {club.members}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubsAchievements;
