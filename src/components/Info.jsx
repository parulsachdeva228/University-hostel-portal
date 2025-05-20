import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import AccommodationCard from "./AccommodationCard";

const Info = () => {
  
  const externalAccommodations = [
    {
      id: 1,
      name: "Tulip Apartments",
      address: "Sector 11D, Pocket E, Faridabad, Haryana",
      distance: "0.5 km from campus",
      priceRange: "Rs.12000 - 15000 per month",
      features: [
        "3-bedroom apartments",
        "All utilities included",
        "High-speed internet",
        "Security system",
        "Laundry facilities"
      ],
      contactInfo: {
        phone: "+91 8529899466",
        email: "xyz@gmail.com"
      },
      mapCoordinates: { lat: 28.36943, lng: 77.31720 }
    },
    {
      id: 2,
      name: "Shree ji Girls PG",
      address: "E162, Sector 11, Pocket E, Faridabad, Haryana",
      distance: "0.8 km from campus",
      priceRange: "Rs.7000 - 9000 per month",
      features: [
        "Double, Triple, Quad-sharing bedrooms",
        "Communal kitchen and living areas",
        "Fitness center",
        "Outdoor recreational areas",
        "24/7 maintenance"
      ],
      contactInfo: {
        phone: "+91 8529899466",
        email: "xyz@gmail.com"
      },
      mapCoordinates: { lat: 28.36933, lng: 77.31720 } 
    },
    {
      id: 3,
      name: "Luv bharat pg for Boys",
      address: "House no 21/11, near catholic church, sector 11A, Faridabad, Haryana",
      distance: "1.8 km from campus",
      priceRange: "Rs.9000 - 12000 per month",
      features: [
        "Double, Triple, Quad-sharing bedrooms",
        "Modern furnishings",
        "Smart home technology",
        "Study lounges on each floor",
        "Coffee shop on premises",
        "Bike storage and rental"
      ],
      contactInfo: {
        phone: "+91 8529899466",
        email: "xyz@gmail.com"
      },
      mapCoordinates: { lat: 28.37754, lng: 77.31543 } 
    },
    {
      id: 4,
      name: "Arya pg for Girls",
      address: "E- 33, Sector 11, Pocket E, Sector 11, Faridabad, Haryana",
      distance: "0.8 km from campus",
      priceRange: "Rs.6000 - 9000 per month",
      features: [
        "Double, Triple, Quad-sharing bedrooms",
        "Rooftop terrace",
        "Pet-friendly units available",
        "On-site grocery store",
        "Entertainment lounge"
      ],
      contactInfo: {
        phone: "+91 8529899466",
        email: "xyz@gmail.com"
      },
      mapCoordinates: { lat: 28.37022, lng: 77.31595 }
    },
    {
      id: 5,
      name: "Deluxe Boys PG",
      address: "96A, Sector 11, Block D, Faridabad, Haryana",
      distance: "1.0 km from campus",
      priceRange: "Rs.8000 - 10000 per month",
      features: [
        "Double, Triple, Quad-sharing bedrooms",
        "All-inclusive pricing",
        "Weekly cleaning service",
        "Community events",
        "Public transportation nearby",
        "Meal plan options"
      ],
      contactInfo: {
        phone: "+91 8529899466",
        email: "xyz@gmail.com"
      },
      mapCoordinates: { lat: 28.36977, lng: 77.31934 }
    }
  ];

  const [mapCenter, setMapCenter] = useState([28.36768, 77.31589]);
  const [mapZoom, setMapZoom] = useState(13);
  const mapRef = useRef(null);
  const mapSectionRef = useRef(null);
  
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);
  
  const handleViewOnMap = (coordinates) => {
    if (mapRef.current) {
      mapRef.current.flyTo(
        [coordinates.lat, coordinates.lng],
        16,
        { duration: 1.5 }
      );
    }
    if (mapSectionRef.current) {
      mapSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Off-Campus Accommodation Options</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <p className="text-gray-700 mb-6">
          We understand that on-campus housing may not be available for all students or may not suit everyone's preferences.
          Below are some recommended off-campus housing options near the university that have been vetted for quality,
          safety, and affordability. These accommodations offer various amenities and are located within reasonable
          distance from the campus.
        </p>
        
        <div className="mb-6 p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Important Information
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>The university is not affiliated with these accommodations and does not endorse them officially.</li>
            <li>Students are advised to visit the properties before signing any agreements.</li>
            <li>Our Student Housing Office can provide guidance on tenant rights and reviewing rental agreements.</li>
            <li>Report any concerns or issues with these accommodations to our Student Support Services.</li>
          </ul>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="bg-white w-[85%] mx-auto shadow-lg rounded-lg overflow-hidden mb-10" ref={mapSectionRef}>
        <div className="p-6 bg-blue-800 text-white">
          <h3 className="text-xl font-bold">Accommodation Locations</h3>
        </div>
        
        <div className="h-[400px] bg-gray-200 relative">
        <MapContainer 
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* University marker */}
          <Marker position={[28.36768, 77.31589]}>
            <Popup>
              <strong>University Campus</strong>
            </Popup>
          </Marker>
          
          {/* Accommodation markers */}
          {externalAccommodations.map((accommodation) => (
            <Marker 
              key={accommodation.id} 
              position={[accommodation.mapCoordinates.lat, accommodation.mapCoordinates.lng]}
            >
              <Popup>
                <div>
                  <strong>{accommodation.name}</strong>
                  <p>{accommodation.address}</p>
                  <p>{accommodation.distance}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        </div>
      </div>
      
      {/* Accommodation Listings */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Available Accommodations</h3>
        
        {externalAccommodations.map((accommodation) => (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
            onViewMap={handleViewOnMap}
          />
        ))}
      </div>
      
      {/* Transportation Information */}
      <div className="mt-12 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Transportation Options</h3>
        <p className="text-gray-700 mb-4">
          Living off-campus means you'll need reliable transportation to and from the university. Here are some options:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-blue-700 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">University Bus</h4>
            <p className="text-gray-600">
              Free Bus service runs between major off-campus housing areas and the university campus every 30 minutes from 7am to 10pm.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-blue-700 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Public Transport</h4>
            <p className="text-gray-600">
            <ul className="list-disc list-inside">
              <li>
                Bus routes 10, 25, and 42 serve the university area. Students get a 50% discount<br />
                <span className="ml-5 text-gray-600 block">
                on monthly transit passes.
                </span>
              </li>
              <li>Metro Service (6am - 11pm, Violet line), Nearest Station - Escort Mujesar</li>
            </ul>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info; 