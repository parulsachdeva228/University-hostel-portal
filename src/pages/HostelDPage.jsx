import React from 'react';
import hostelDimage from '../assets/tagorehall.png';

const HostelDPage = () => {
  const hostelData = {
    name: "Hostel D - Tagore Hall",
    description: "A serene and inspiring environment designed for students with interests in literature, arts, and creative expression.",
    features: [
      "Spacious single and double rooms",
      "Attached bathrooms in all rooms",
      "Private balconies in select rooms",
      "Art studios and creative spaces",
      "Performance hall with acoustic design",
      "Literary reading rooms",
      "Music practice rooms",
      "Meditation and wellness areas"
    ],
    capacity: "180 students",
    location: "West Campus, surrounded by gardens and the Arts Complex",
    image: hostelDimage,
  };

  const creativePrograms = [
    {
      title: "Annual Literary Festival",
      description: "A week-long celebration of literature featuring renowned authors, poetry readings, and writing workshops.",
      month: "February"
    },
    {
      title: "Quarterly Art Exhibitions",
      description: "Showcasing resident student artwork across various mediums, with opening night receptions for the campus community.",
      month: "March, June, September, December"
    },
    {
      title: "World Music Series",
      description: "Monthly concerts exploring diverse musical traditions from around the world, often featuring student performers.",
      month: "Year-round"
    },
    {
      title: "Theatre Workshop",
      description: "Semester-long program culminating in original play productions written and performed by residents.",
      month: "Fall & Spring Semesters"
    }
  ];

  const creativeSpaces = [
    {
      name: "Rabindranath Tagore Memorial Garden",
      description: "A tranquil outdoor space with meditation areas, reading nooks, and a small amphitheater for poetry readings and acoustic performances."
    },
    {
      name: "Visual Arts Studio",
      description: "Fully equipped space for painting, drawing, and sculpture with abundant natural light and professional-grade materials available for resident use."
    },
    {
      name: "Literary Salon",
      description: "Intimate gathering space designed in the tradition of historical literary salons, hosting weekly discussions, readings, and creative writing exchanges."
    },
    {
      name: "Digital Media Lab",
      description: "Modern facility supporting digital art creation, film editing, and multimedia projects with the latest software and equipment."
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
      
      {/* Creative Programs Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Annual Creative Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creativePrograms.map((program, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-xl">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-blue-800 text-lg">{program.title}</h4>
                <span className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-700">{program.month}</span>
              </div>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Creative Spaces Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Creative Spaces</h3>
        <div className="space-y-6">
          {creativeSpaces.map((space, index) => (
            <div key={index} className="flex items-start p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
              <div>
                <h4 className="font-bold text-blue-800 text-lg mb-2">{space.name}</h4>
                <p className="text-gray-700">{space.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="bg-blue-900 text-white shadow-lg rounded-2xl p-8 border border-blue-800 mb-8">
        <blockquote className="italic text-xl text-center">
          "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy."
          <footer className="text-blue-200 mt-4 font-medium">— Rabindranath Tagore</footer>
        </blockquote>
      </div>
      
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">About Tagore Hall</h3>
        <div className="space-y-5">
          <p className="text-gray-700 leading-relaxed">
            Tagore Hall is named after Rabindranath Tagore, the renowned poet, writer, composer, and the first non-European Nobel laureate. The residence embodies his philosophy that emphasizes the importance of creativity, cultural exchange, and harmony with nature.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our hall attracts students from diverse fields who share a common interest in the arts and humanities. The unique architecture features spaces that transition seamlessly between indoors and outdoors, creating an environment that stimulates creative thinking and expression.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Residents benefit from mentorship programs with faculty from the Arts and Humanities departments, as well as visiting artists and writers who regularly participate in hall activities. Many graduates cite their time in Tagore Hall as pivotal to their creative development.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The hall maintains a rich tradition of publishing a literary magazine each semester featuring poetry, short stories, essays, and artwork created by residents. Selected works are showcased in the annual Tagore Arts Festival, which has become a highlight of the university's cultural calendar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostelDPage; 