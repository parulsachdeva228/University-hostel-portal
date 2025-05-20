import { useState, useEffect } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    gender: '',
    hostelPreference: '',
  });

  const maleHostels = [
    { value: "Hostel A", label: "Hostel A- Nehru Hall" },
    { value: "Hostel B", label: "Hostel B- Zakir Hall" },
    { value: "Hostel C", label: "Hostel C- CV Raman Hall" },
    { value: "Hostel D", label: "Hostel D- Tagore Hall" }
  ];
  
  const femaleHostels = [
    { value: "Mother Teresa Hall", label: "Mother Teresa Hall" },
    { value: "Kalpana Chawla Hall", label: "Kalpana Chawla Hall" }
  ];
  
  const [availableHostels, setAvailableHostels] = useState([]);
  
  // hostels based on gender
  useEffect(() => {
    
    setFormData(prevState => ({
      ...prevState,
      hostelPreference: ''
    }));
    
    // available hostels based on gender
    if (formData.gender === 'Male') {
      setAvailableHostels(maleHostels);
    } else if (formData.gender === 'Female') {
      setAvailableHostels(femaleHostels);
    } else if (formData.gender === 'Other') {
      setAvailableHostels([...maleHostels, ...femaleHostels]);
    } else {
      setAvailableHostels([]);
    }
  }, [formData.gender]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* University Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Welcome to University Hostels</h2>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Home Away From Home</h3>
              <p className="text-gray-600 mb-4">
                Our university hostels provide a safe, comfortable, and enriching living experience for all students.
                Located in the heart of our beautiful campus, our hostels offer easy access to academic buildings,
                sports facilities, and recreational areas.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that university life extends beyond the classroom, and our hostels are designed to foster
                a sense of community, personal growth, and academic success.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Facilities Include:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Modern, well-furnished rooms</li>
                <li>High-speed Wi-Fi throughout all buildings</li>
                <li>24/7 security and access control</li>
                <li>Common rooms with TV and recreational facilities</li>
                <li>Study areas and libraries</li>
                <li>Fully equipped kitchens and dining halls</li>
                <li>Laundry services</li>
                <li>Regular cleaning and maintenance</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Hostels?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Located in the heart of the university campus</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Affordable accommodation options for all budgets</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Vibrant community of students from diverse backgrounds</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Regular events and activities to enhance student experience</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Supportive staff available 24/7 to assist residents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Form */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Hostel Registration</h2>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <p className="text-gray-600 mb-6">
            Fill out the form below to apply for accommodation in one of our university hostels.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">College Email ID</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">Student Roll No.</label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course/Program</label>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year of Study</label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Year</option>
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                      <option value="Fourth Year">Fourth Year</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <div className="space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          checked={formData.gender === "Male"}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Male</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={formData.gender === "Female"}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Female</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Other"
                          checked={formData.gender === "Other"}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Other</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Accommodation Preferences */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Accommodation Preferences</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="hostelPreference" className="block text-sm font-medium text-gray-700 mb-1">Hostel Preference</label>
                    <select
                      id="hostelPreference"
                      name="hostelPreference"
                      value={formData.hostelPreference}
                      onChange={handleChange}
                      required
                      disabled={!formData.gender}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select Hostel</option>
                      {availableHostels.map((hostel) => (
                        <option key={hostel.value} value={hostel.value}>
                          {hostel.label}
                        </option>
                      ))}
                    </select>
                    {!formData.gender && (
                      <p className="mt-1 text-sm text-blue-600">Please select your gender first</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Room Type</option>
                      <option value="Single Room">Single Room</option>
                      <option value="Double-sharing">Double-sharing</option>
                      <option value="Triple-sharing">Triple-sharing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Duration</option>
                      <option value="Full Semester">Full Semester</option>
                      <option value="Full Academic Year">Full Academic Year</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements (Optional)</label>
                    <textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Please mention any special requirements or accommodations you may need..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm
                text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 