import React from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Shakti Sahi',
    position: 'Chief Technology Officer',
    linkedin: 'https://www.linkedin.com/in/shakti-sahi-32255a9/',
    image: 'https://www.gburif.org/mentors/shakti_sahi_edit.jpg'
  },
  {
    name: 'Dr. Satish K Mittal',
    position: 'Chief Operations Officer',
    linkedin: 'https://www.linkedin.com/in/drsatishkmittal/',
    image: 'https://www.gburif.org/mentors/satish_mittal.jpg'
  },
  {
    name: 'Dr. Vinay Kumar Litoria',
    position: 'Nodal Officer',
    linkedin: 'https://www.linkedin.com/in/dr-vinay-kumar-litoria',
    image: 'https://via.placeholder.com/150?text=Vinay+Litoria'
  },
  {
    name: 'Mr. Raj Kumar',
    position: 'Manager',
    linkedin: 'https://www.linkedin.com/in/raj-kumar-manager',
    image: 'https://via.placeholder.com/150?text=Raj+Kumar'
  },
  {
    name: 'Mr. Manish Bhardwaj',
    position: 'Office Assistant',
    linkedin: 'https://www.linkedin.com/in/manish-bhardwaj-office',
    image: 'https://via.placeholder.com/150?text=Manish+Bhardwaj'
  },
  {
    name: 'Mr. Shekhar Chandra',
    position: 'Office Attendant',
    linkedin: 'https://www.linkedin.com/in/shekhar-chandra-attendant',
    image: 'https://via.placeholder.com/150?text=Shekhar+Chandra'
  }
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">MEET OUR TEAM</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">{member.position}</p>
              <div className="flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
