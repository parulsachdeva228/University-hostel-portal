import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router';

const Header = ({ currentTab = 'home', onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  // dropdown functionality
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleTabClick = (tab, path) => {
    navigate(path);
    if (onTabChange) {
      onTabChange(tab);
    }
    setIsOpen(false);
  };
  
  const handleHostelClick = (hostelPath) => {
    navigate(hostelPath);
    if (onTabChange) {
      onTabChange('about');
    }
    setIsOpen(false);
  };
  
  return (
    <header className="relative pt-16 pb-7">
      {/* Blue strip */}
      <div className="absolute top-9 left-0 w-full h-[55px] bg-blue-900 z-0">
      <p className="italic text-white font-serif text-xl tracking-wide px-67 py-3 border-l-2 border-r-2 border-blue-900 inline-block">
      "Where creativity meets technology, and knowledge fuels the innovations of tomorrow."
    </p>
      </div>
      
      {/* Logo */}
      <div className="absolute top-1 left-23 z-10">
        <img
          src="images/UNI_logo.png"
          alt="University Logo"
          className="w-[165px] h-[165px] rounded-full border-8 border-gray-100"
        />
      </div>
      
      {/* Navigation */}
      <div className="container mx-auto px-4">
        
        <div className="flex justify-center items-center mt-11">
          <nav className="flex items-center space-x-12 text-[1.375rem]">
            <button 
              className={`transition-colors ${
                currentTab === 'home' 
                  ? 'text-blue-900 font-medium' 
                  : 'text-gray-600 hover:text-blue-900'
              }`}
              onClick={() => handleTabClick('home', '/')}
            >
              Home
            </button>
            
            {/* hostels dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                className={`flex items-center transition-colors ${
                  currentTab === 'about' 
                    ? 'text-blue-900 font-medium' 
                    : 'text-gray-600 hover:text-blue-900'
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                Hostels
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-58 bg-white 
                    text-gray-800 rounded-xl shadow-lg py-1 z-20 transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-[-10px] scale-95 pointer-events-none'
                  }`}
                >
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base" onClick={() => handleHostelClick('/hostel-a')}>Nehru Hall</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base" onClick={() => handleHostelClick('/hostel-b')}>Zakir Hall</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base" onClick={() => handleHostelClick('/hostel-c')}>CV Raman Hall</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base" onClick={() => handleHostelClick('/hostel-d')}>Tagore Hall</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base" onClick={() => handleHostelClick('/mother-teresa')}>Mother Teresa Hall<span className="italic"> (for girls)</span></button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base" onClick={() => handleHostelClick('/kalpana-chawla')}>Kalpana Chawla Hall<span className="italic"> (for girls)</span></button>
              </div>

            </div>
            
            <button 
              className={`transition-colors ${
                currentTab === 'info' 
                  ? 'text-blue-900 font-medium' 
                  : 'text-gray-600 hover:text-blue-900'
              }`}
              onClick={() => handleTabClick('info', '/info')}
            >
              External Housing
            </button>
          </nav>
        </div>
      </div>
      
      {/* Search and Login*/}
      <div className="absolute top-[108px] right-9 flex items-center space-x-4 z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 w-52 bg-gray-100 border border-gray-300 rounded-3xl
            text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        {/* Student Login*/}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-3xl transition-colors">
          Student Login
        </button>
      </div>
    </header>
  );
};

export default Header; 