
import React from 'react';

import { Link } from 'react-router-dom';
import { Shield, Brain, Zap, ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const CentersOfExcellence = () => {
  const centers = [
    {
      id: 'cybersecurity',
      name: 'Center for Cyber Security',
      description: 'Leading research and training in cybersecurity, protecting digital infrastructure and data.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      focus: ['Network Security', 'Cryptography', 'Digital Forensics', 'Ethical Hacking'],
      director: 'Dr. Amit Kumar Singh',
      faculty: 15,
      students: 120,
      projects: 25
    },
    {
      id: 'artificial-intelligence',
      name: 'Center for Artificial Intelligence',
      description: 'Advancing AI research and applications across various domains for societal benefit.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      focus: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
      director: 'Dr. Priya Sharma',
      faculty: 18,
      students: 150,
      projects: 32
    },
    {
      id: 'drone-technology',
      name: 'Center for Drone Technology',
      description: 'Pioneering unmanned aerial vehicle research and applications in various industries.',
      icon: Zap,
      color: 'from-green-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      focus: ['UAV Design', 'Autonomous Navigation', 'Aerial Surveillance', 'Agricultural Applications'],
      director: 'Dr. Rajesh Kumar',
      faculty: 12,
      students: 90,
      projects: 18
    }

    
  ];

  const galleryImages = [
  {
    alt: 'AI Research session',
    src: ' https://imgs.search.brave.com/fqUrZI4pAtLoj9S6Sa90nooRrhS2liwBtbqzFjJvCP4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE0/ODE3ODQ3Mi9waG90/by9oaXNwYW5pYy1w/cm9ncmFtbWVycy1j/b2xsYWJvcmF0aW5n/LW9uLXNvZnR3YXJl/LWRldmVsb3BtZW50/LWluLWEtbW9kZXJu/LW9mZmljZS1zZXR0/aW5nLmpwZz9iPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UnhJ/c0RKOGI3MF9JajJX/MnBBNUZLU0pFdnE3/aGFvbzNTdmNMRDF6/OW5EZz0',
    caption: 'AI Research Lab: Student-driven NLP workshop',
  },
  {
    src: 'https://imgs.search.brave.com/hQZqwev1cNeiQRHI1AiBp4WgWWpFoLUuT29wV8o4dy0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cm91cC15b3VuZy1w/ZW9wbGUtZG9pbmct/ZXhwZXJpbWVudHMt/cm9ib3RpY3MtbGFi/b3JhdG9yeS1yb2Jv/dC10b29scy10YWJs/ZV8xMjY4LTIzMzkw/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA',
    alt: 'Robotics Demo',
    caption: 'Live robotics demo at TechFest 2024',
  },
  {
    src: 'https://imgs.search.brave.com/rQK3_85XxiN7Hb9jqwreJT32VMJx4IBAlWzPge7bKHc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kaXZlcnNlLXRl/YW0tY29kaW5nLWhh/Y2thdGhvbl81Mzg3/Ni0xMDY5MTI0Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA',
    alt: 'Cybersecurity Hackathon',
    caption: 'Inter-university Cybersecurity Hackathon highlights',
  },
  {
    src: 'https://imgs.search.brave.com/npH_hJmq_-1LNIhWvEHEj6vX6m4HvQR9Kj9ECnm5Ptg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jaXJj/dWl0ZGlnZXN0LmNv/bS9zaXRlcy9kZWZh/dWx0L2ZpbGVzL3N0/eWxlcy9tZWRpdW1f/c2NfMzUweDIwMF8v/cHVibGljL3Byb2pl/Y3RpbWFnZV9taWMv/QnVpbGQtYW4tSW9U/LWJhc2VkLVdlYXRo/ZXItTW9uaXRvcmlu/Zy1TeXN0ZW0tVXNp/bmctQXJkdWluby5q/cGc_aXRvaz1jS2xD/V0wtNQ',
    alt: 'IoT Lab',
    caption: 'IoT Lab featuring smart device prototypes',
  },
  {
    src: 'https://imgs.search.brave.com/Mnp2YgiI80AbWBIU221U5TA_XPfiKXDTx6L-DY2BsXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYXN5/LXBlYXN5LmFpL19u/ZXh0L2ltYWdlP3Vy/bD1odHRwczovL21l/ZGlhLmVhc3ktcGVh/c3kuYWkvMjdmZWIy/YmItYWViNC00YTgz/LTlmYjYtOGYzZjJh/MTU4ODVlL2EzOWRi/YzcyLTBmNzEtNGYx/ZS1hYjQ4LTVjNGM4/OTFhN2JmMi5wbmcm/dz02NDAmcT03NQ',
    alt: 'Guest Speaker Seminar',
    caption: 'Expert talk on Sustainable AI Innovations',
  },
  {
    src: 'https://imgs.search.brave.com/r7HrzCqCbtGjzgYISBkwKAORA0skkSR-VQjzdxu4ypo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tbGNv/bmZlcmVuY2UuYWkv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MTEvSW1nMS5qcGc',
    alt: 'ML Workshop',
    caption: 'Hands-on workshop on ML model tuning',
  }
];

  return (
<>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Centers of Excellence</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in">
            Driving innovation and research across cutting-edge technologies to address
            global challenges and create solutions for tomorrow.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
              <p className="text-gray-600">Centers of Excellence</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">360+</h3>
              <p className="text-gray-600">Researchers & Students</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">75+</h3>
              <p className="text-gray-600">Research Projects</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">45</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
          </div>
        </div>
      </section>
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Centers of Excellence</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our centers drive excellence in research, technology, and societal impact through interdisciplinary collaboration and innovation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {centers.map((center, index) => {
        const IconComponent = center.icon;
        return (
          <div
            key={center.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`h-52 relative bg-gradient-to-br ${center.color} overflow-hidden`}
              style={{
                backgroundImage: `url(${center.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${center.color} opacity-80 group-hover:opacity-70 transition-opacity`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <IconComponent className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{center.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {center.description}<br />
                <span className="block mt-2">
                  This center actively collaborates with global institutions and industries to drive cutting-edge research.
                  Equipped with state-of-the-art labs, it provides mentorship and hands-on experience to both students and scholars.
                  Focus areas range from core technology development to real-world implementation across various domains.
                </span>
              </p>

              {/* Focus Areas */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {center.focus.map((area, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <div className="text-lg font-bold text-blue-600">{center.faculty}</div>
                  <div className="text-xs text-gray-500">Faculty</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">{center.students}</div>
                  <div className="text-xs text-gray-500">Students</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600">{center.projects}</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                <span className="font-semibold">Director:</span> {center.director}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery of Excellence</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Explore moments of innovation, collaboration, and brilliance captured from across our Centers of Excellence.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryImages.map((img, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-sm backdrop-blur-sm">
            {img.caption}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Research Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of groundbreaking research that shapes the future. Explore collaboration
            opportunities and contribute to cutting-edge innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/research/collaboration"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105"
            >
              Research Collaboration
            </Link>
            <Link
              to="/admissions/research"
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Apply for Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CentersOfExcellence;
