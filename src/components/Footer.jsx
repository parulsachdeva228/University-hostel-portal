const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* University Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/images/UNI_logo.png" alt="University Logo" className="h-16 w-auto mr-2" />
            </div>
            <p className="text-gray-300 mb-2 text-sm">123 University Avenue</p>
            <p className="text-gray-300 mb-2 text-sm">Campus Area, Education City</p>
            <p className="text-gray-300 mb-4 text-sm">contact@university.edu</p>
            <p className="text-gray-300 text-sm">+91-8529899466</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Hostels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">External Housing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Hostels */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Hostels</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Hostel A</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Hostel B</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Hostel C</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Hostel D</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Mother Teresa Hall</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Kalpana Chawla Hall</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Connect With Us</h3>
            <div className="flex space-x-5 mb-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.017 10.017 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-300 mb-2 text-sm">Subscribe to our newsletter:</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-blue-800 px-4 py-3 text-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-r-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm">&copy; {currentYear} University Hostels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 