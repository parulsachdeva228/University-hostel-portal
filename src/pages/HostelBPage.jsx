import React from 'react';
import hostelBimage from "../assets/zakirhall.jpeg";

const HostelBPage = () => {
  const hostelData = {
    name: "Hostel B - Zakir Hall",
    description: "A tranquil environment ideal for focused academic work and personal growth, with a strong emphasis on cultural activities.",
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
    image: hostelBimage
  };

  const activities = [
    {
      title: "Cultural Evenings",
      description: "Weekly gatherings where students showcase talents in music, dance, and poetry.",
      icon: "🎭"
    },
    {
      title: "Literary Club",
      description: "Monthly book discussions and writing workshops led by faculty members.",
      icon: "📚"
    },
    {
      title: "Culinary Exchange",
      description: "Students prepare and share dishes from their home regions, celebrating diversity.",
      icon: "🍲"
    },
    {
      title: "Meditation Sessions",
      description: "Daily morning meditation and yoga for mental wellness and focus.",
      icon: "🧘"
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
      
      {/* Unique Activities Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Signature Activities at Zakir Hall</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-xl flex">
              <div className="text-4xl mr-4">{activity.icon}</div>
              <div>
                <h4 className="font-bold text-blue-800 mb-2">{activity.title}</h4>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">More About Zakir Hall</h3>
        <div className="space-y-5">
          <p className="text-gray-700 leading-relaxed">
            Named after the renowned scholar Zakir Husain, this hall embodies his values of cultural synthesis and intellectual pursuit. Zakir Hall is known for its vibrant multicultural atmosphere and emphasis on artistic expression.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The hall organizes regular cultural events, literary gatherings, and intellectual discussions that foster a sense of community among residents. The serene gardens surrounding the building provide perfect spaces for contemplation and informal gatherings.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each room in Zakir Hall is designed to maximize natural light, with large windows overlooking either the central courtyard or the surrounding campus greenery. The building's architecture intentionally combines traditional elements with modern facilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Throughout the academic year, Zakir Hall residents host intercultural exchanges, poetry slams, and music nights that are popular across campus. Many alumni credit these experiences with broadening their perspectives beyond their academic disciplines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostelBPage; 