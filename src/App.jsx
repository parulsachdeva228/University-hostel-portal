import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Info from './components/Info'
import Carousel from './components/Carousel'
import HostelAPage from './pages/HostelAPage'
import HostelBPage from './pages/HostelBPage'
import HostelCPage from './pages/HostelCPage'
import HostelDPage from './pages/HostelDPage'
import MotherTeresaPage from './pages/MotherTeresaPage'
import KalpanaChawlaPage from './pages/KalpanaChawlaPage'
// import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [currentPage, setCurrentPage] = useState(null)

  // Handle navigation
  const renderContent = () => {
    // If a specific page is set, render that first
    if (currentPage) {
      switch (currentPage) {
        case 'hostel-a':
          return <HostelAPage />
        case 'hostel-b':
          return <HostelBPage />
        case 'hostel-c':
          return <HostelCPage />
        case 'hostel-d':
          return <HostelDPage />
        case 'mother-teresa':
          return <MotherTeresaPage />
        case 'kalpana-chawla':
          return <KalpanaChawlaPage />
        default:
          setCurrentPage(null)
          break
      }
    }
    
    // If no specific page, show tab content
    switch (currentTab) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'info':
        return <Info />
      default:
        return <Home />
    }
  }

  // Custom navigation handler to support both tabs and specific pages
  const handleNavigation = (tab, page = null) => {
    setCurrentTab(tab)
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <div className="z-50">
        <Header onTabChange={handleNavigation} currentTab={currentTab} />
      </div>
      
    
      <main className="flex-grow">
        {/* Carousel on home page */}
        {currentTab === 'home' && !currentPage && (
          <div className="overflow-hidden">
            <Carousel />
          </div>
        )}
        
        {/* Content based on selected tab or page */}
        <div className={`${currentTab === 'home' && !currentPage ? 'mt-0' : 'mt-0'} bg-gray-100`}>
          {renderContent()}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
