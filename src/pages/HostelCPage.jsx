import React from 'react';
import hostelCimage from "../assets/cvramanhall.png";

const HostelCPage = () => {
  const hostelData = {
    name: "Hostel C - CV Raman Hall",
    description: "Modern hostel designed to foster creativity and technological innovation among science and engineering students.",
    features: [
      "Single and double occupancy rooms",
      "Attached bathrooms in single rooms",
      "Smart room controls (lighting, temperature)",
      "Innovation labs and maker spaces",
      "Coding and project rooms",
      "High-capacity internet infrastructure",
      "Conference rooms for group projects",
      "Tech support center"
    ],
    capacity: "200 students",
    location: "Central Campus, connected to the Engineering and Technology blocks",
    image: hostelCimage
  };

  const techInitiatives = [
    {
      title: "Weekend Hackathons",
      description: "Monthly 48-hour coding challenges where students build innovative applications and hardware prototypes.",
      tech: "Software Development, Hardware Design"
    },
    {
      title: "Robotics Club",
      description: "Weekly sessions focused on building and programming robots for various competitions and practical applications.",
      tech: "Robotics, AI, Mechanical Engineering"
    },
    {
      title: "Tech Talks Series",
      description: "Bi-weekly presentations from industry experts and faculty on emerging technologies and research areas.",
      tech: "Various fields of technology"
    },
    {
      title: "Smart Campus Initiatives",
      description: "Ongoing projects to develop IoT solutions for campus infrastructure improvements and sustainability.",
      tech: "IoT, Data Science, Renewable Energy"
    }
  ];

  const labFacilities = [
    {
      name: "Prototype Lab",
      equipment: ["3D printers", "Laser cutters", "CNC machines", "Electronics workbenches"],
      availability: "24/7 access with safety certification"
    },
    {
      name: "AR/VR Studio",
      equipment: ["VR headsets", "Motion capture equipment", "Rendering workstations", "Green screen area"],
      availability: "Bookable in 4-hour slots"
    },
    {
      name: "Quantum Computing Research Area",
      equipment: ["Quantum simulators", "Advanced computing clusters", "Specialized research tools"],
      availability: "Available to qualified residents with faculty recommendation"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{hostelData.name}</h2>
      
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="h-72 md:h-auto relative">
            <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
            <img 
              src={hostelData.image} 
              alt={hostelData.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-blue-900 to-transparent">
              <h3 className="text-2xl font-bold text-white">{hostelData.name}</h3>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="p-8">
            <div className="mb-6">
              <p className="text-gray-700 text-lg mb-5 leading-relaxed">{hostelData.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <span className="font-semibold block text-blue-700 mb-1">Capacity:</span>
                  <span className="text-gray-700">{hostelData.capacity}</span>
                </div>
                <div className="bg-blue-50 p-3 rounded-xl">
                  <span className="font-semibold block text-blue-700 mb-1">Location:</span>
                  <span className="text-gray-700">{hostelData.location}</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-blue-800 mb-4">Amenities & Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hostelData.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-600 bg-white p-2 rounded-lg border border-gray-100">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                Apply for this Hall
              </button>
              <button className="bg-white hover:bg-blue-50 text-blue-600 font-medium py-2.5 px-6 border border-blue-200 rounded-full transition-colors duration-300 hover:border-blue-300">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech Initiatives Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Innovation Initiatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techInitiatives.map((initiative, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-xl">
              <h4 className="font-bold text-blue-800 text-lg mb-2">{initiative.title}</h4>
              <p className="text-gray-700 mb-3">{initiative.description}</p>
              <div className="bg-blue-100 inline-block px-3 py-1 rounded-full text-sm text-blue-700">
                {initiative.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lab Facilities Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Specialized Lab Facilities</h3>
        <div className="space-y-6">
          {labFacilities.map((lab, index) => (
            <div key={index} className="border border-blue-100 rounded-xl p-5">
              <h4 className="font-bold text-blue-800 text-lg mb-3">{lab.name}</h4>
              <div className="mb-3">
                <p className="font-medium text-blue-700 mb-2">Equipment:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {lab.equipment.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">{lab.availability}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">About CV Raman Hall</h3>
        <div className="space-y-5">
          <p className="text-gray-700 leading-relaxed">
            Named after the Nobel Prize-winning physicist Sir CV Raman, our technology-focused residence hall celebrates his spirit of inquiry and innovation. The hall was established with a vision to create a living-learning environment where technology enthusiasts could collaborate beyond classroom hours.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The building incorporates smart technology throughout, from energy-efficient systems to interactive learning spaces. Common areas are designed specifically to encourage spontaneous collaboration, with modular furniture and built-in digital whiteboards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            CV Raman Hall maintains strong connections with the university's research departments and industry partners, creating opportunities for residents to engage in real-world technological challenges and internships. Many successful startups trace their origins to late-night brainstorming sessions in these halls.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our alumni network includes founders of tech companies, research scientists, and innovators across various fields who remain engaged with current residents through mentorship programs and the annual Innovation Showcase event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostelCPage; 