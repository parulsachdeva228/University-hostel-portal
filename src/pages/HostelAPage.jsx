import React from 'react';
import hostelAimage from "../assets/nehruhall.png";

const HostelAPage = () => {
  const hostelData = {
    name: "Hostel A - Nehru Hall",
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
    image: hostelAimage
  };

  return (
    <div className="container mx-auto px-6 py-8">
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
        <h3 className="text-2xl font-bold text-blue-900 mb-6">More About Unity Hall</h3>
        <div className="space-y-5">
          <p className="text-gray-700 leading-relaxed">
            Unity Hall is our premier accommodation option, offering a perfect blend of comfort, convenience, and community living. The hall is designed to foster academic excellence while providing a supportive and engaging living environment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each floor features dedicated resident assistants who organize regular community events, academic support programs, and recreational activities. The building includes state-of-the-art security systems, including key card access and 24/7 front desk service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Located in the heart of North Campus, Unity Hall provides easy access to academic buildings, the main library, and recreational facilities. The surrounding area features beautiful green spaces perfect for outdoor studying or relaxation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostelAPage; 