import { useState } from 'react';

const About = () => {
  const [activeHostel, setActiveHostel] = useState('hostelA');

  const hostels = {
    hostelA: {
      name: "Hostel A - Unity Hall",
      description: "Our flagship hostel featuring modern amenities and a vibrant community atmosphere.",
      features: [
        "Single and double occupancy rooms",
        "Air conditioning in all rooms",
        "Attached bathrooms",
        "Common study areas on each floor",
        "Recreation room with pool tables and table tennis",
        "24/7 high-speed Wi-Fi",
        "Gym and fitness center",
        "Dining hall with multiple cuisine options"
      ],
      capacity: "350 students",
      location: "North Campus, adjacent to the Science Complex",
      image: "https://picsum.photos/id/238/800/600"
    },
    hostelB: {
      name: "Hostel B - Harmony House",
      description: "A tranquil environment ideal for focused academic work and personal growth.",
      features: [
        "Single, double, and triple occupancy rooms",
        "Shared bathrooms (2 per 4 rooms)",
        "Dedicated quiet study spaces",
        "Garden and outdoor seating areas",
        "Self-service laundry facilities",
        "Common kitchen on each floor",
        "Reading room with extensive library",
        "Music and arts room"
      ],
      capacity: "250 students",
      location: "East Campus, near the Arts and Humanities buildings",
      image: "https://picsum.photos/id/239/800/600"
    },
    hostelC: {
      name: "Hostel C - Innovation Hub",
      description: "Modern hostel designed to foster creativity and technological innovation.",
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
      image: "https://picsum.photos/id/240/800/600"
    },
    hostelD: {
      name: "Hostel D - Wellness Lodge",
      description: "Focused on student wellbeing, healthy living, and balanced lifestyle.",
      features: [
        "Spacious single and double rooms",
        "Attached bathrooms in all rooms",
        "Organic dining options",
        "Indoor swimming pool",
        "Yoga and meditation rooms",
        "Wellness counseling center",
        "Sports fields and jogging tracks",
        "Green rooftop gardens"
      ],
      capacity: "180 students",
      location: "South Campus, adjacent to the Sports Complex",
      image: "https://picsum.photos/id/241/800/600"
    },
    hostelE: {
      name: "Hostel E - Global Village",
      description: "Multicultural living space designed for international and exchange students.",
      features: [
        "Studio and apartment-style accommodations",
        "Fully equipped kitchens",
        "Private bathrooms",
        "Cultural exchange common areas",
        "Multi-faith prayer and meditation rooms",
        "Language exchange programs",
        "International food court",
        "Cultural celebration spaces"
      ],
      capacity: "150 students",
      location: "West Campus, near the International Studies Department",
      image: "https://picsum.photos/id/242/800/600"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* University Logo Header */}
      <div className="flex justify-center mb-8">
        <img 
          src="/images/UNI_logo.png" 
          alt="University Logo" 
          className="h-24 object-contain"
        />
      </div>
      
      <h2 className="text-3xl font-bold text-indigo-800 mb-10 text-center">Our Residence Halls</h2>
      
      {/* Hostel Selector */}
      <div className="mb-10 overflow-x-auto">
        <div className="flex space-x-3 min-w-max pb-2 justify-center">
          {Object.keys(hostels).map((hostelKey) => (
            <button
              key={hostelKey}
              onClick={() => setActiveHostel(hostelKey)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm ${
                activeHostel === hostelKey
                  ? "bg-indigo-600 text-white shadow-md transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {hostels[hostelKey].name.split('-')[0].trim()}
            </button>
          ))}
        </div>
      </div>
      
      {/* Active Hostel Details */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="h-72 md:h-auto relative">
            <div className="absolute inset-0 bg-indigo-900 opacity-10"></div>
            <img 
              src={hostels[activeHostel].image} 
              alt={hostels[activeHostel].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-indigo-900 to-transparent">
              <h3 className="text-2xl font-bold text-white">{hostels[activeHostel].name}</h3>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="p-8">
            <div className="mb-6">
              <p className="text-gray-700 text-lg mb-5 leading-relaxed">{hostels[activeHostel].description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-indigo-50 p-3 rounded-xl">
                  <span className="font-semibold block text-indigo-700 mb-1">Capacity:</span>
                  <span className="text-gray-700">{hostels[activeHostel].capacity}</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded-xl">
                  <span className="font-semibold block text-indigo-700 mb-1">Location:</span>
                  <span className="text-gray-700">{hostels[activeHostel].location}</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-indigo-800 mb-4">Amenities & Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hostels[activeHostel].features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-600 bg-white p-2 rounded-lg border border-gray-100">
                  <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                Apply for this Hall
              </button>
              <button className="bg-white hover:bg-indigo-50 text-indigo-600 font-medium py-2.5 px-6 border border-indigo-200 rounded-full transition-colors duration-300 hover:border-indigo-300">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">Residence Hall Allocation Policy</h3>
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <div className="space-y-5">
            <p className="text-gray-700 leading-relaxed">
              Hostel allocation is based on several factors including course of study, year level, special needs, and availability.
              Priority is given to first-year students, international students, and those with specific health requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Applications open twice a year - before the Fall and Spring semesters. Summer accommodation is available on a first-come, first-served basis.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Students are required to maintain good conduct and follow hostel rules. Violation of rules may result in disciplinary action including revocation of hostel privileges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 