import React from 'react';
import hostelMTimage from '../assets/MThall.png';

const MotherTeresaPage = () => {
  const hostelData = {
    name: "Mother Teresa Hall",
    description: "A premier girls' hostel offering a safe, comfortable and enriching living environment with modern amenities.",
    features: [
      "Single and double occupancy rooms",
      "Air conditioning in all rooms",
      "Attached bathrooms",
      "Dedicated study spaces on each floor",
      "Common room with recreational facilities",
      "24/7 high-speed Wi-Fi",
      "Women's fitness center",
      "Dining hall with nutritious meal options",
      "Enhanced security with female guards",
      "Indoor courtyard and garden"
    ],
    capacity: "450 students",
    location: "East Campus, near the Arts and Humanities Complex",
    image: hostelMTimage
  };

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
      
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">More About Mother Teresa Hall</h3>
        <div className="space-y-5">
          <p className="text-gray-700 leading-relaxed">
            Mother Teresa Hall is our flagship accommodation for female students, offering a safe, nurturing environment that promotes academic excellence and personal growth. Named after the Nobel Peace Prize laureate known for her compassion and service, the hall embodies values of empathy, community, and dedication.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The hall features dedicated female resident assistants on each floor who organize regular community events, academic support programs, and women's empowerment activities. The building includes enhanced security systems, including biometric access, 24/7 female security personnel, and CCTV surveillance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Located in the serene East Campus area, Mother Teresa Hall provides a peaceful environment conducive to study while maintaining easy access to academic buildings and campus facilities. The hall is surrounded by beautiful gardens and outdoor seating areas designed for relaxation and social interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotherTeresaPage; 