import React from 'react';

const AccommodationCard = ({ accommodation, onViewMap }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{accommodation.name}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location Information */}
          <div>
            <h5 className="font-semibold text-blue-800 mb-2">Location</h5>
            <p className="text-gray-600 mb-1">{accommodation.address}</p>
            <p className="text-gray-600 mb-1">{accommodation.distance}</p>
            <p className="text-gray-600 font-medium">{accommodation.priceRange}</p>
          </div>
          
          {/* Features */}
          <div>
            <h5 className="font-semibold text-blue-800 mb-2">Features</h5>
            <ul className="text-gray-600 space-y-1">
              {accommodation.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 transform translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h5 className="font-semibold text-blue-800 mb-2">Contact Information</h5>
            <p className="text-gray-600 mb-1">
              <span className="inline-block w-16">Phone:</span> {accommodation.contactInfo.phone}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="inline-block w-16">Email:</span> {accommodation.contactInfo.email}
            </p>
            <div className="mt-4">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded text-sm transition-colors"
                onClick={() => onViewMap(accommodation.mapCoordinates)}
              >
                View on Map
              </button>
              {/* <button 
                className="ml-2 bg-transparent hover:bg-blue-50 text-blue-600 py-1 px-4 border border-blue-600 rounded text-sm transition-colors"
                // onClick={() => onContact(accommodation.contactInfo)}
              >
                Contact
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard; 