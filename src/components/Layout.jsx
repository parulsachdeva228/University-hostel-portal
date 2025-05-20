import { Outlet, useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  
  const getCurrentTab = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/info') return 'info';
    if (path.includes('hostel')) return 'about';
    return '';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header currentTab={getCurrentTab()} />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout; 